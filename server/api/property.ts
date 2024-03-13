import { getDatabase, ref, onValue } from "firebase/database"
import { PropertySchema } from "~/server/validate";


export default defineEventHandler(async (event) => {
	const { id } = getQuery(event);

	if (!id) {
		return new Response("Property id is required", {
			status: 400,
		})
	}

	const db = getDatabase()

    const refProp = ref(db, 'properties/' + id);

	return new Promise((resolve, reject) => {
		onValue(refProp, (snapshot) => {			
			resolve(new Response(JSON.stringify(PropertySchema.parse(snapshot.val())), {
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
