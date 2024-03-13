import { z } from "zod"
const PropertySchema = z.object({
	title: z.string(),
	author: z.string(),
	description: z.string(),
	image: z.string(),
	date: z.string(),
	price: z.preprocess((val) => Number(val), z.number()),
	location: z.string(),
	id: z.string().uuid(),
	contact: z.preprocess((val) => Number(val), z.number()),
	email: z.string().email(),
	ready: z.boolean(),
	mapsLink: z.string().url().optional(),
	city: z.string(),
	state: z.string(),
})

const BlogSchema = z.object({
	name: z.string(),
	description: z.string(),
	imageUrl: z.string(),
	author: z.string(),
	date: z.string(),
	id: z.string(),
	content: z.string(),
})
type Blog = z.infer<typeof BlogSchema>
type Property = z.infer<typeof PropertySchema>
export { Blog, BlogSchema, Property, PropertySchema }
