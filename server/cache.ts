import { Redis } from "@upstash/redis"
import { Blog, Property } from "./validate"
export const redis = Redis.fromEnv()
export async function cache(data: Blog | Property, id: string) {
	try {
		const cachedData = await redis.get<typeof data>(id)
		if (cachedData) {
			if (typeof cachedData === "string") {
				try {
					return JSON.parse(cachedData)
				} catch (parseError) {
					console.error("Error parsing cached data:", parseError)
					return cachedData
				}
			} else {
				return cachedData
			}
		} else {
			await redis.setex(id, 3600, JSON.stringify(data))
			return data
		}
	} catch (error) {
		console.error("Error caching or retrieving data from Redis:", error)
		throw error
	}
}
