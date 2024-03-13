import { get, getDatabase, ref, set } from "firebase/database"
import { randomUUID } from 'crypto'
import { getStorage, uploadString, ref as storageRef, getDownloadURL } from "firebase/storage";
import { PropertySchema } from "../validate";


export default defineEventHandler(async (event) => {
	const {
		title,
		author,
		description,
		image,
		date,
		price,
		location,
		contact,
		email,
		ready,
		mapsLink,
		city,
		state
	} = PropertySchema.parse(await readBody(event));

	const db = getDatabase()		

	const propsRef = ref(db, "properties/")
	
	var id = randomUUID()

	const checkExistingProperty = await get(propsRef)
	if (checkExistingProperty.exists()) {
		id = randomUUID()
	}

		
	const storage = getStorage()

	const imageRef = storageRef(storage, "properties/" + id + "/cover")
		
	uploadString(imageRef, image, 'data_url').then((snapshot) => {
		console.log('Uploaded cover image!');
		
		getDownloadURL(snapshot.ref).then((imageURL) => {

		set(ref(db, "properties/" + id), {
			title: title,
			author: author,
			description: description,
			image: imageURL, // don't ask me why I'm saving the image as base64 :kappa:
			date: date,
			price: price,
			location: location,
			id: id,
			contact: contact,
			email: email,
			ready: ready,
			mapsLink: mapsLink,
			state: state,
			city: city
		})
	
		return new Response(JSON.stringify("Successfully published property"), {
			headers: {
				"content-type": "application/json",
				// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
			},
			status: 200,
		});
	});
});
});

