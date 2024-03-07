import { getDatabase, ref, set } from "firebase/database"

export default defineEventHandler(async (event) => {
	const {
		title,
		author,
		description,
		image,
		date,
		price,
		location,
		id,
		contact,
		email,
	} = await readBody(event)

	if (!id) {
		return new Response("Property id is required", {
			status: 400,
		})
	}

	const db = getDatabase()

	set(ref(db, "properties/" + id), {
		title: title,
		author: author,
		description: description,
		image: image,
		date: date,
		price: price,
		location: location,
		id: id,
		contact: contact,
		email: email,
	})

	return new Response(JSON.stringify("Successfully published property"), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
