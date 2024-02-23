import { Property } from "~/server/types"

export default defineEventHandler(async (event) => {
	const { id } = getQuery(event)

	if (!id) {
		return new Response("Property ID is required", {
			status: 400,
		})
	}

	const props: Property[] = await $fetch("/api/properties")

	const property = props.find((p) => p.id == parseInt(id.toString()))

	return new Response(JSON.stringify(property), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
