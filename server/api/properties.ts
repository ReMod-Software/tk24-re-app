import type { Property } from "~/server/types"

export default defineEventHandler((event) => {
	const properties: Property[] = [
		{
			title: "3 BHK Apartment",
			author: "John Doe",
			description:
				"A beautiful 3 BHK apartment in the heart of the city, with stunning views and modern amenities.",
			image: "/photos/d1.jpg",
			date: "15 February 2024",
			price: 15000000,
			location: "Nariman Point, Mumbai",
			id: 1,
			contact: 919872131743,
			email: "contact@beacon.dev",
		},
		{
			title: "Luxury Villa",
			author: "Dwayne Johnson",
			description:
				"A luxurious villa nestled in the serene countryside, offering a perfect blend of comfort and tranquility.",
			image: "/photos/property.jpg",
			price: 30000000,
			date: "15 February 2024",
			location: "Port Blair, Andaman and Nicobar Islands",
			id: 2,
			contact: 919872131743,
			email: "contact@beacon.dev",
		},
		{
			title: "3 BHK Mansion",
			author: "James Smith",
			description:
				"A 3 BHK mansion with sprawling gardens and opulent interiors, perfect for lavish living.",
			image: "/photos/d3.jpg",
			price: 50000000,
			date: "15 February 2024",
			location: "Lutyens' Delhi",
			id: 3,
			contact: 919872131743,
			email: "contact@beacon.dev",
		},
	]

	const response = new Response(JSON.stringify(properties), {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})

	return response
})
