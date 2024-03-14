<template>
	<main>
		<Header />

		<div
			class="blog-post flex flex-col items-center w-full px-4 md:px-32 py-8 md:py-16 dark:bg-[#201c1c]"
		>
			<div
				class="bg-cover w-full h-96 aspect-ratio-16/9 overflow-hidden rounded-3xl mb-8"
				:style="{ backgroundImage: `url(${post.imageUrl})` }"
				style="object-fit: cover;"
			/>

			<h1
				class="text-2xl md:text-6xl text-gray-600 dark:text-gray-300 font-bold uppercase text-left w-full"
				style="position: relative; "
			>
				{{ post.name }}
			</h1>

			<div
				class="text-gray-800 dark:text-gray-300 font-sans px-2 md:px-4 py-2 md:py-6"
				id="content"
			>
			</div>
		</div>
		<Footer />
	</main>
</template>

<script setup lang="ts">
import DOMPurify from "dompurify"
import { marked } from "marked"
import type { Blog } from "~/server/validate"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

const route = useRoute()
const id = route.params.id

const post: Blog = await $fetch(`/api/blog?id=${id}`)

marked.use({
	renderer: {
		link: (
			href: string,
			title: string | null | undefined,
			text: string,
		) => {
			return `<a class="text-blue-600 underline" href="${href}" target="_blank" rel="noopener noreferrer">${text}</a>`
		},
		strong: (text: string) => {
			return `<span class="font-semibold dark:text-gray-100 text-xl md:text-2xl">${text}</span>`
		},
		text: (text: string) => {
			return `<span class="text-gray-800 dark:text-gray-300 text-md md:text-xl">${text}</span>`
		},
		heading(text: string, level: number, raw: string) {
			return `<h1 class="text-xl md:text-${
				5 - level
			}xl font-bold text-gray-800 dark:text-gray-200 mb-2 mt-4">${raw}</h1>`
		},
	},
})

onMounted(async () => {
	const content = document.getElementById("content")
	if (content) {
		content.innerHTML = DOMPurify.sanitize(
			marked.parse(post.content.replace(/\\n/g, "\n")),
		)
	}
})
</script>

<style>

</style>
