import { signInWithEmailAndPassword } from "firebase/auth"
import auth from '~/server/firebase'

export default defineEventHandler(async (event) => {
	const { email, password } = await readBody(event)

	if (!email || !password) {
		return new Response("Both email and password are required", {
			status: 400,
		})
	}

    if (auth.currentUser) {
        return new Response("You are already signed in", {
            status: 400,
        })
    }

	try {
		await signInWithEmailAndPassword(
			auth,
			email.toString().toLowerCase(),
			password.toString(),
		)
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
