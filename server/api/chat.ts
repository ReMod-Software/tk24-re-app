import OpenAI from 'openai';
import { OpenAIStream } from 'ai';
import { ChatCompletionMessageParam } from 'openai/resources/chat/index';
 
export default defineLazyEventHandler(async () => {
 
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY
  });
 
  return defineEventHandler(async event => {
    // Extract the `prompt` from the body of the request
    const { messages } = (await readBody(event)) as {
      messages: ChatCompletionMessageParam[];
    };
 
    // Ask OpenAI for a streaming chat completion given the prompt
    const response = await openai.chat.completions.create({
      //custom model trained on beacon
      model: 'ft:gpt-3.5-turbo-0125:personal::92X6FVe6',
      stream: true,
      messages: messages.map(message => ({
        content: message.content,
        role: message.role,
      })),
    });
 
    // Convert the response into a friendly text-stream
    return OpenAIStream(response);
  });
});