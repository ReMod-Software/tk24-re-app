import { Ratelimit } from "@upstash/ratelimit"
import { Redis } from "@upstash/redis"
import { OpenAIStream } from "ai"
import OpenAI from "openai"
import { ChatCompletionMessageParam } from "openai/resources/chat/index"
export default defineLazyEventHandler(async () => {
	const openai = new OpenAI({
		apiKey: process.env.OPENAI_API_KEY,
	})
	return defineEventHandler(async event => {
		const ip = getHeader(event, "x-forwarded-for")
		const ratelimit = new Ratelimit({
			redis: Redis.fromEnv(),
			limiter: Ratelimit.slidingWindow(5, "10s"),
		})
		const { success, limit, reset, remaining } = await ratelimit.limit(
			`ratelimit_${ip}`,
		)
		// Extract the `prompt` from the body of the request
		const { messages } = (await readBody(event)) as {
			messages: ChatCompletionMessageParam[]
		}
		if (!success) {
			return new Response(
				"You have reached your request limit for the day.",
				{
					status: 429,
					headers: {
						"X-RateLimit-Limit": limit.toString(),
						"X-RateLimit-Remaining": remaining.toString(),
						"X-RateLimit-Reset": reset.toString(),
					},
				},
			)
		} else {
			const response = await openai.chat.completions.create({
				// custom model trained on beacon
				model: "ft:gpt-3.5-turbo-0125:personal::92X6FVe6",
				stream: true,
				messages: messages.map(message => ({
					content: message.content,
					role: message.role,
				})),
			})

			// Convert the response into a friendly text-stream
			return OpenAIStream(response)
		}
	})
})
