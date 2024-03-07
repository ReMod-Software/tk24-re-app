import { get, getDatabase, ref } from "firebase/database"
import { Property } from "~/server/types"

export default defineEventHandler(async (event) => {
	const db = getDatabase()
	const properties = ref(db, "properties/")
	const propertySnapshot = await get(properties)
	const propertiesList: Property[] = []
	propertySnapshot.forEach((child) => {
		const propertyData = child.val()
		const property: Property = {
			title: propertyData.title,
			author: propertyData.author,
			description: propertyData.description,
			image: propertyData.image,
			date: propertyData.date,
			price: propertyData.price, // Can be more specific like `number` if price is always numerical
			location: propertyData.location,
			id: propertyData.id,
			contact: propertyData.contact,
			email: propertyData.email,
		}
		propertiesList.push(property)
	})

	return new Response(JSON.stringify(propertiesList), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
