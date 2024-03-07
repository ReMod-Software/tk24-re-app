import { Blog } from "~/server/types"
import { getDatabase, ref, get, onValue, child } from "firebase/database"


export default defineEventHandler(async (event) => {
	const { key } = getQuery(event)

	if (!key) {
		return new Response("Blog key is required", {
			status: 400,
		})
	}

	const db = getDatabase()

    const refBlog = ref(db, 'blogs/' + key);

	return new Promise((resolve, reject) => {
		onValue(refBlog, (snapshot) => {			
			resolve(new Response(JSON.stringify(snapshot.val()), {
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
