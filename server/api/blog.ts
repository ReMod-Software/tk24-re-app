import { Blog } from "~/server/types"

export default defineEventHandler(async (event) => {
	const { key } = getQuery(event)

	if (!key) {
		return new Response("Blog key is required", {
			status: 400,
		})
	}

	const blogs: Blog[] = await $fetch(`/api/blogs`)

	const blog = blogs.find((p) => p.key == key)

	return new Response(JSON.stringify(blog), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
