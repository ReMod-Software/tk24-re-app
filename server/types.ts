interface Property {
	title: string
	author: string
	description: string
	image: string
	date: string
	price: number // Can be more specific like `number` if price is always numerical
	location: string
	id: number
	contact: number
	email: string
	ready: boolean
	mapsLink: string
	city: string
	state: string
}

interface Blog {
	name: string
	description: string
	imageUrl: string
	author: string
	date: string
	id: string
	content: string
}

export type { Blog, Property }
