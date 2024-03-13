import { get, getDatabase, ref } from "firebase/database"
import { Blog } from "~/server/validate"

export default defineEventHandler(async (event) => {
	const db = getDatabase()
	const blogs = ref(db, "blogs/")
	const blogSnapshot = await get(blogs)
	const blogList: Blog[] = []
	blogSnapshot.forEach((child) => {
		const blog: Blog = child.val()
		blogList.push(blog)
	})

	return new Response(JSON.stringify(blogList), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
