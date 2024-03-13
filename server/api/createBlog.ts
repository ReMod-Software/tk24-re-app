import { getDatabase, ref, set } from "firebase/database"
import { BlogSchema } from "../validate"

export default defineEventHandler(async (event) => {
	const { id, content, name, description, imageUrl, author, date } =
		BlogSchema.parse(await readBody(event))

	if (!id) {
		return new Response("Blog key is required", {
			status: 400,
		})
	}

	const db = getDatabase()

	set(ref(db, "blogs/" + id), {
		content: content,
		name: name,
		description: description,
		imageUrl: imageUrl,
		author: author,
		date: date,
		id: id,
	})

	return new Response(JSON.stringify("Success publishing blog"), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
