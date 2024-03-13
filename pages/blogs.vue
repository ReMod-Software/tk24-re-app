<template>
	<Header />

	<main class="m-4 mb-16 md:mx-40 rounded-lg flex flex-col gap-4">
		<h1 class="text-2xl font-semibold text-black">
			Welcome to our Real Estate Insights!
		</h1>
		<p class="hidden md:block">
			Embark on a journey of discovery with our engaging blog, where we
			delve into the dynamic world of real estate, offering valuable
			insights, expert advice, and inspiring stories to guide you through
			your property journey. Whether you're a first-time buyer, a seasoned
			investor, or a curious observer, our blog is your go-to destination
			for all things real estate. Let's explore together and unlock the
			possibilities that await!
		</p>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
			<div
				v-for="([k, v]) in Object.entries(BLOG_POSTS)"
				class="border-solid border border-gray-300 flex flex-col rounded-3xl"
			>
				<a class="flex flex-col w-full" :href="`/blog/${v.id}`">
					<NuxtImg
						class="flex w-full p-4 aspect-[16/9] rounded-3xl"
						:src="v.imageUrl"
						loading="lazy"
					/>
					<div class="px-4 mb-4">
						<div class="flex justify-between opacity-50 mb-2">
							<p>{{ v.date }}</p>
							<p>by {{ v.author }}</p>
						</div>

						<h1 class="text-xl font-semibold">{{ v.name }}</h1>
						<hr class="h-[1px] my-2">

						<p class="text-lg">
							{{ v.description }}
						</p>
					</div>
				</a>
			</div>
		</div>
	</main>

	<Footer />
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

interface BlogPost {
	name: string
	description: string
	imageUrl: string
	author: string
	date: string
	id: string
}

const BLOG_POSTS: Array<BlogPost> = await $fetch("/api/blogs")
</script>

<style>
#main-hero {
	background-image: url("/photos/search_bg.webp");
	background-size: cover;
}

</style>
