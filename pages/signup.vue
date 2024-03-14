<template>
	<Header />

	<main
		class="md:px-20 grid grid-cols-1 md:grid-cols-2 p-4 py-12 md:py-4 dark:bg-[#201c1c]"
	>
		<img
			src="/photos/login_img.png"
			class="h-full w-full object-cover rounded-3xl aspect-ratio-[3/4] rounded-r-none hidden md:block"
		/>

		<div class="flex flex-col gap-4 justify-center md:px-20">
			<h1 class="text-4xl font-semibold dark:text-gray-200">
				Hey! Welcome to Beacon!
			</h1>
			<p class="dark:text-gray-300 tracking-wide">
				Sign up to get view our collection of properties
			</p>

			<form class="flex flex-col gap-4">
				<input
					placeholder="Full Name"
					id="name"
					class="p-4 rounded-xl border-solid border border-gray-300"
				/>
				<input
					type="email"
					placeholder="Email"
					id="email"
					class="p-4 rounded-xl border-solid border border-gray-300"
				/>
				<input
					type="password"
					placeholder="Password"
					id="password"
					class="p-4 rounded-xl border-solid border border-gray-300"
				/>
				<button
					class="text-white rounded-lg uppercase font-semibold bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] p-4"
					@click="register"
				>Register</button>
			</form>

			<p class="text-right text-sm dark:text-gray-300">
				Already have an account? <a
					href="/login"
					class="underline grad-text underline-offset-2"
				>Login</a>
			</p>
		</div>
	</main>
	<Footer />
</template>

<script setup lang="ts">
import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile,
} from "firebase/auth"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

async function register() {
	const email = document.getElementById("email") as HTMLInputElement
	const password = document.getElementById("password") as HTMLInputElement
	const name = document.getElementById("name") as HTMLInputElement

	const auth = getAuth()
	await createUserWithEmailAndPassword(auth, email.value, password.value)
		.then((userCredential) => {
			console.log(auth.currentUser)

			updateProfile(auth.currentUser!, {
				displayName: name.value,
			}).then(() => {
				console.log("Profile updated")
			}).catch((error) => {
				console.log(error)
			})
		}).catch((error) => {
			alert(error.message)
		})
}
</script>

<style>
.grad-text {
	background: linear-gradient(135deg, #e49ddc, #86b5fc);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}
</style>
