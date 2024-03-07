<template>
	<Header />

	<main class="md:mx-20 grid grid-cols-1 md:grid-cols-2 m-4 my-12 md:my-4">
		<img
			src="/photos/login_img.png"
			class="h-full w-full object-cover rounded-3xl aspect-ratio-[3/4] rounded-r-none hidden md:block"
		/>

		<div class="flex flex-col gap-4 justify-center md:px-20">
			<h1 class="text-4xl font-semibold">
		        Hey! Welcome to Beacon!
			</h1>
			<p class="text-justify">
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

			<p class="text-right text-sm">
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
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

async function register() {
	const email = document.getElementById("email") as HTMLInputElement
	const password = document.getElementById("password") as HTMLInputElement
	const name = document.getElementById("name") as HTMLInputElement

	const res = await fetch("/api/auth/register", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email.value,
			password: password.value,
			name: name.value
		}),
	})

	alert(await res.text())

	if (res.status !== 200) {
		return
	}

	const login = await fetch("/api/auth/login", {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify({
			email: email.value,
			password: password.value,
		}),
	})

	if (login.status !== 200) {
		alert(await login.text())
		return
	}

	document.location.href = "/"
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
