import { getDatabase, ref, set } from "firebase/database"

export default defineEventHandler(async (event) => {
	const { key, content, name, description, imageUrl, author, date } =
		await readBody(event)

	if (!key) {
		return new Response("Blog key is required", {
			status: 400,
		})
	}

	const db = getDatabase()

	set(ref(db, "blogs/" + key), {
		content: content,
		name: name,
		description: description,
		imageUrl: imageUrl,
		author: author,
		date: date,
		key: key,
	})

	return new Response(JSON.stringify("Success publishing blog"), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
