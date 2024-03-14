import { createUserWithEmailAndPassword, getAuth, updateProfile } from "firebase/auth"

export default defineEventHandler(async (event) => {
	const { email, password, fullname } = await readBody(event)

	if (!email || !password) {
		return new Response("Both email and password are required", {
			status: 400,
		})
	}

	try {
		await createUserWithEmailAndPassword(
			getAuth(),
			email.toString().toLowerCase(),
			password.toString(),
		).then((userCredential) => {
			updateProfile(userCredential.user, {
				displayName: fullname.toString(),
			})
		})
	} catch (error: unknown) {
		if (error instanceof Error) {
			return new Response(error.message, {
				status: 400,
			})
		}
	}

	return new Response("Success", {
		headers: {
			"content-type": "application/json",
			// "Access-Control-Allow-Origin": "https://tk24-beacon.deno.dev" // Replace with your website's domain
		},
		status: 200,
	})
})
