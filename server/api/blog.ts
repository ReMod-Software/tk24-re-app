import { BlogSchema } from "~/server/validate"
import { getDatabase, ref, get, onValue, child } from "firebase/database"


export default defineEventHandler(async (event) => {
	const { id } = BlogSchema.parse(getQuery(event));

	if (!id) {
		return new Response("Blog key is required", {
			status: 400,
		})
	}

	const db = getDatabase()

    const refBlog = ref(db, 'blogs/' + id);
	return new Promise((resolve, reject) => {
		onValue(refBlog, (snapshot) => {			
			resolve(new Response(JSON.stringify(BlogSchema.parse(snapshot.val())), {
				headers: {
					"content-type": "application/json",
					// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
				},
				status: 200,
			}))
		}
		, {
			onlyOnce: true
		})
	})
});
