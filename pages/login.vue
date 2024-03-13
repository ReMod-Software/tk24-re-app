<template>
	<Header />

	<main class="md:mx-20 grid grid-cols-1 md:grid-cols-2 m-4 my-12 md:my-4">
		<img
			src="/photos/login_img.png"
			class="h-full w-full object-cover rounded-3xl aspect-ratio-[3/4] rounded-r-none hidden md:block"
		/>

		<div class="flex flex-col gap-4 justify-center md:px-20">
			<h1 class="text-4xl font-semibold">Great to see you again!</h1>
			<p class="text-justify">
				Sign in to your account to access your saved properties,
				preferences, and more.
			</p>

			<form class="flex flex-col gap-4">
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
				>Login</button>
			</form>

			<p class="text-right text-sm">
				Don't have an account? <a
					href="/signup"
					class="underline grad-text underline-offset-2"
				>Sign up</a>
			</p>
		</div>
	</main>
	<Footer />
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

async function register() {
	const email = document.getElementById("email") as HTMLInputElement
	const password = document.getElementById("password") as HTMLInputElement

	const res = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email.value,
			password: password.value,
		}),
	})

	if (res.status !== 200) {
		alert(await res.text())
		return
	}

	const data = await res.json()
	console.log(data)
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
