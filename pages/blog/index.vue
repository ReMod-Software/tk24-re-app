<template>
	<Header />

	<main class="m-4 mb-16 md:mx-40 rounded-lg flex flex-col gap-4">
		<h1 class="text-2xl font-semibold text-black">
			Welcome to our Real Estate Insights!
		</h1>
		<p>
			Embark on a journey of discovery with our engaging blog, where we
			delve into the dynamic world of real estate, offering valuable
			insights, expert advice, and inspiring stories to guide you through
			your property journey. Whether you're a first-time buyer, a seasoned
			investor, or a curious observer, our blog is your go-to destination
			for all things real estate. Let's explore together and unlock the
			possibilities that await!
		</p>

		<div class="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
			<div
				v-for="([k, v]) in Object.entries(BLOG_POSTS)"
				class="border-solid border border-gray-600 flex flex-col rounded-xl"
			>
				<a class="flex flex-col w-full" :href="`/blog/${v.key}`">
					<img
						class="flex w-full p-4 aspect-[16/9] rounded-3xl"
						:src="v.imageUrl"
					/>
					<div class="px-4 mb-4">
						<div class="flex justify-between opacity-50 mb-2">
							<p>{{ v.date }}</p>
							<p>by {{ v.author }}</p>
						</div>

						<h1 class="text-lg font-semibold">{{ v.name }}</h1>
						<hr class="h-[1px] my-2">

						<p>
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
	key: string
}

const BLOG_POSTS: Array<BlogPost> = [
	{
		"name": "Navigating the Buyer's Market",
		"description":
			"In this post, we demystify the complexities of the current real estate market, providing actionable tips and strategies to help buyers navigate confidently and make informed decisions in a competitive landscape.",
		"imageUrl": "/blog/navigating_the_buyers_market.png",
		"author": "Ishat Gupta",
		"date": "15/02/24",
		"key": "navigating_the_buyers_market",
	},
	{
		"name": "Opportunities in Emerging Neighborhoods",
		"description":
			"Discover the untapped potential of emerging neighborhoods and uncover lucrative investment opportunities that promise high returns and long-term growth prospects.",
		"imageUrl":
			"/blog/investment_opportunities_in_emerging_neighborhoods.png",
		"author": "Ishat Gupta",
		"date": "12/09/23",
		"key": "investment_opportunities_in_emerging_neighborhoods",
	},
	{
		"name": "The Future of Sustainable Living",
		"description":
			"Explore the evolving landscape of sustainable living and eco-friendly housing solutions, as we discuss innovative trends, technologies, and practices shaping the future of real estate.",
		"imageUrl": "/blog/the_future_of_sustainable_living.png",
		"author": "Ishat Gupta",
		"date": "8/01/24",
		"key": "the_future_of_sustainable_living",
	},
	{
		"name": "Transform Spaces Style",
		"description":
			"Get inspired to unleash your creativity and elevate your living spaces with our showcase of stunning renovation projects, expert design tips, and budget-friendly hacks for a home that truly reflects your unique style and personality.",
		"imageUrl": "/blog/transforming_spaces_with_style.png",
		"author": "Ishat Gupta",
		"date": "2/5/23",
		"key": "transforming_spaces_with_style",
	},
]
</script>

<style>
#main-hero {
	background-image: url("/photos/search_bg.webp");
	background-size: cover;
}
</style>
