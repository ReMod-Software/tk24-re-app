<template>
	<Header />

	<main class="p-4 pb-16 md:px-40 flex flex-col gap-4 dark:bg-[#201c1c]">
		<h1 class="text-2xl font-semibold text-black dark:text-gray-100">
			Welcome to our Real Estate Insights!
		</h1>
		<p class="hidden md:block dark:text-gray-400">
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
				class="flex flex-col rounded-lg bg-gray-100 hover:shadow-xl hover:shadow-gray-400 transition-all"
			>
				<NuxtLink class="flex flex-col w-full" :to="`/blog/${v.id}`">
					<NuxtImg
						class="flex w-full p-4 aspect-[16/9] rounded-[20px]"
						:src="v.imageUrl"
						loading="lazy"
					/>
					<div class="px-4 mb-4 dark:text-gray-300">
						<div class="flex justify-between opacity-50 mb-2">
							<p class="text-sm md:text-lg">{{ v.date }}</p>
							<div class="flex"><p class="font-semibold">{{ v.author }}</p></div>
						</div>

						<h1 class="text-xl font-semibold dark:text-gray-200">{{ v.name }}</h1>
						<hr class="h-[1px] my-2 dark:border-gray-600">

						<p class="md:text-lg text-md">
							{{ v.description }}
						</p>
					</div>
				</NuxtLink>
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
