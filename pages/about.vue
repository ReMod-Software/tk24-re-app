<template>
	<Header />
	<main class="m-4 mb-16 md:mx-40 rounded-lg flex flex-col gap-8">
		<h1
			class="text-2xl text-black hover:underline gap-4 font-semibold pt-8"
		>
			About <span class="italic">Beacon</span>
		</h1>

		<p class="text-gray-600 text-lg md:text-xl font-serif px-2 md:px-0">
			At <span class="italic">Beacon</span>
			, we are driven by a simple yet powerful mission: to revolutionize
			the real estate experience for consumers like you. We exist because
			we were not satisfied with the status quo. In a landscape dominated
			by opaque processes and profit-driven motives, we saw an opportunity
			to redefine the industry and put the needs of consumers first. With
			a relentless spirit and unwavering determination, we set out to
			challenge the norms and bring about a consumer-friendly change in an
			ecosystem often plagued by greedy brokers and landlords. We believe
			that transparency, honesty, and integrity should be the cornerstones
			of every real estate transaction, and we are committed to delivering
			a platform that embodies these values.

			<span class="italic">Beacon</span>
			is powered by <b>ReMod Limited</b>
			, a forward-thinking company dedicated to driving innovation and
			positive change in the real estate sector. Behind our platform are
			four passionate individuals who bring a wealth of experience and
			expertise to the table: Together, we are committed to building a
			trusted and transparent real estate platform that empowers
			consumers, fosters community, and drives positive change in the
			industry. Welcome to <span class="italic">Beacon</span>
			, where your property journey begins with trust and ends with
			satisfaction.
		</p>

		<div
			class="grid grid-cols-1 md:grid-cols-3 gap-4 md:px-20 py-8 rounded-xl"
		>
			<div
				v-for="([k, v]) in Object.entries(AUTHORS)"
				class="flex flex-col gap-2 border-gray-400 border-solid border p-4 justify-center text-center items-center rounded-xl"
			>
				<img :src="v.pfp" class="h-32 w-32 rounded-full" />
				<p class="text-center font-semibold">{{ v.name }}</p>
				<hr class="w-full h-[1px] my-2 border-gray-200">
				{{ v.description }}
			</div>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
			<div class="flex flex-col gap-4">
				<h1 class="font-semibold text-2xl">Wanna reach out?</h1>
				<p class="text-lg md:text-xl">
					Please fill the form and we'll try to reach out to you as
					soon as possible.
				</p>
				<div class="flex flex-col gap-2">
					<div class="flex items-center gap-2">
						<img src="/svg/email.svg" class="h-8 w-8" />
						<p>contact@beacon.dev</p>
					</div>

					<div class="flex items-center gap-2">
						<img src="/svg/phone.svg" class="h-8 w-8" />
						<p>+91 98721 31743</p>
					</div>
				</div>
			</div>

			<form class="flex flex-col gap-4 md:pl-12">
				<input
					type="text"
					placeholder="Name"
					class="p-4 rounded-xl border-solid border border-gray-300"
				/>
				<input
					type="tel"
					placeholder="Phone Number"
					class="p-4 rounded-xl border-solid border border-gray-300"
				/>
				<input
					type="email"
					placeholder="Email"
					class="p-4 rounded-xl border-solid border border-gray-300"
				/>
				<input
					placeholder="Feedback/Complaint"
					class="p-4 rounded-xl border-solid border border-gray-300"
				/>
				<button
					class="text-white rounded-lg uppercase font-semibold bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] p-4"
				>Submit</button>
			</form>
		</div>
	</main>

	<Footer />
</template>

<script setup lang="ts">
import type { Author } from "./constants"

import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

const AUTHORS: Array<Author> = [
	{
		"name": "Ishat Gupta",
		"pfp": "https://avatars.githubusercontent.com/u/62379502",
		"description": "Hello! I'm a 17-year-old weaving digital tapestries. Dive into my world and discover the magic I create! ",
	},
	{
		"name": "Ishan Jaiswal",
		"pfp": "https://avatars.githubusercontent.com/u/71317082",
		"description": "Hello! I'm a 18-year-old developer and tech entusiast and I love learning and exploring things beyond my own domain! "
			
	},
	{
		"name": "Pranav Purwar",
		"pfp": "https://avatars.githubusercontent.com/u/75154889",
		"description":
			"Hello! I'm a 16-year-old developer, always curious, always exploring!",
	},
	{
		"name": "Sambhav Arora",
		"pfp":
			"https://media.discordapp.net/attachments/1208100360925741076/1208100712333185146/image.png?ex=65e20e77&is=65cf9977&hm=cb0c9c78767fbdf2d0d602f3f189186126a03c14a7470187d38c3ba37254d2f7&=&format=webp&quality=lossless&width=1052&height=1052",
		"description":
			"Hello! I'm a 17-year-old tech enthusiast, always curious, always exploring.",
	},
]
</script>

<style>
#main-hero {
	background-image: url("/photos/search_bg.webp");
	background-size: cover;
}

p {
	line-height: 1.5;
	font-size: 1.25rem;
}

a {
	font-family: sans-serif;
}
</style>
