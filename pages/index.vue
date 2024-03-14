<template>
	<Header />

	<main class="p-4 flex flex-col gap-8 md:gap-24 dark:bg-[#201c1c]">
		<div
			class="rounded-xl flex gap-8 md:gap-16 flex-col justify-center items-center h-full w-full aspect-[4/3] md:aspect-[21/9] p-6 md:p-0 text-white"
			id="main-hero"
		>
			<h1 class="text-center text-2xl md:text-4xl font-extralight dark:text-gray-200">
				Looking for a <span
					class="font-serif text-3xl md:px-2 italic font-semibold md:text-5xl dark:text-gray-100"
				>space?</span>
				We have one <span
					class="font-serif text-3xl md:px-2 italic font-semibold md:text-5xl dark:text-gray-100"
				>for you!</span>
			</h1>
			<div class="flex w-full md:w-[65%] rounded-3xl justify-center">
				<input
					type="search"
					placeholder="Search for Properties!"
					class="border-box flex-grow p-4 rounded-l-3xl dark:bg-gray-200"
				>
				<NuxtImg
					src="/svg/search.svg"
					class="bg-white invert h-full rounded-r-3xl p-2 md:p-3"
				/>
			</div>
		</div>
		<div class="content xl:mx-20 xxl:mx-40 flex flex-col gap-8">
			<h1 class="text-2xl text-center dark:text-gray-300">
				We care about our <span
					class="font-serif italic font-semibold"
				>consumers</span>, and their quality of place...
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
				<div
					v-for="ft in CONSUMER_FEATURES"
					class="border border-solid border-gray-300 dark:border-gray-600 flex flex-col gap-4 p-6 rounded-xl grad-box"
				>
					<div class="flex justify-between gap-4 flex-row-reverse">
						<img
							:src='"/svg/" + ft.icon + ".svg"'
							class="h-10 w-10 md:h-16 md:w-16 dark:invert"
						>
						<h2 class="text-xl md:text-2xl font-semibold text-right dark:text-gray-200">
							{{ ft.name }}
						</h2>
					</div>
					<hr class="border-gray-400 dark:border-gray-500">
					<p class="dark:text-gray-400 tracking-wide">{{ ft.description }}</p>
				</div>
			</div>
		</div>

		<div class="content xl:mx-20 xxl:mx-40 flex flex-col gap-8">
			<h1 class="text-2xl text-center dark:text-gray-300">
				...but, we also care about our <span
					class="font-serif italic font-semibold"
				>agents!</span>
			</h1>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-4 xl:grid-cols-4">
				<div
					v-for="ft in PROVIDER_FEATURES"
					class="border border-solid border-gray-300 dark:border-gray-600 flex flex-col gap-4 p-6 rounded-xl grad-box"
				>
					<div class="flex justify-between items-center gap-4">
						<img
							:src='"/svg/" + ft.icon + ".svg"'
							class="h-10 md:h-16 w-10 md:w-16 dark:invert"
						>
						<h2 class="text-xl md:text-2xl font-semibold text-right dark:text-gray-200">
							{{ ft.name }}
						</h2>
					</div>
					<hr class="border-gray-400 dark:border-gray-500">
					<p class="dark:text-gray-400 tracking-wide">{{ ft.description }}</p>
				</div>
			</div>
		</div>

		<div class="content md:mx-40 flex flex-col gap-8 items-center">
			<h1 class="text-center text-2xl dark:text-gray-300">
				We have <span
					class="font-serif content italic font-semibold"
				>properties</span>
				in...
			</h1>

			<div class="grid grid-cols-1 md:grid-cols-2 gap-8 xl:grid-cols-4">
				<div
					class="flex flex-col grid-item w-full text-xl font-semibold uppercase gap-4"
				>
					<NuxtImg
						src="/places/haryana.png"
						class="flex h-full w-full items-center text-center justify-center hover:text-white hover:bg-[#0000007c] hover:backdrop-blur transition-all rounded-3xl"
					/>
					<h1 class="text-center text-2xl font-semibold dark:text-gray-300">Haryana</h1>
				</div>

				<div
					class="flex flex-col grid-item w-full text-xl font-semibold uppercase gap-4"
				>
					<NuxtImg
						loading="lazy"
						src="/places/punjab.png"
						class="flex h-full w-full items-center text-center justify-center hover:text-white hover:bg-[#0000007c] hover:backdrop-blur transition-all rounded-3xl"
					/>
					<h1 class="text-center text-2xl font-semibold dark:text-gray-300">Punjab</h1>
				</div>
			</div>
			<NuxtLink
				to="/properties"
				class="text-white rounded-xl uppercase font-semibold bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] p-4 max-w-fit"
			>See All properties</NuxtLink>

			<h1 class="text-center text-2xl mt-8 dark:text-gray-300">
				...of these various <span
					class="font-serif content italic font-semibold"
				>kinds!</span>
			</h1>

			<div
				class="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-4 gap-4 mb-4"
			>
				<div
					class="flex flex-col grid-item w-full text-xl font-semibold uppercase gap-4"
				>
					<NuxtImg
						loading="lazy"
						src="/landing_grid/villa.png"
						class="flex h-full w-full items-center text-center justify-center hover:text-white hover:bg-[#0000007c] hover:backdrop-blur transition-all rounded-3xl"
					/>
					<h1 class="text-center text-2xl font-semibold dark:text-gray-300">Villa</h1>
				</div>

				<div
					class="flex flex-col grid-item w-full text-xl font-semibold uppercase gap-4"
				>
					<NuxtImg
						loading="lazy"
						src="/landing_grid/flat.png"
						class="flex h-full w-full items-center text-center justify-center hover:text-white hover:bg-[#0000007c] hover:backdrop-blur transition-all rounded-3xl"
					/>
					<h1 class="text-center text-2xl font-semibold dark:text-gray-300">Flat</h1>
				</div>

				<div
					class="flex flex-col grid-item w-full text-xl font-semibold uppercase gap-4"
				>
					<NuxtImg
						loading="lazy"
						src="/landing_grid/apartment.png"
						class="flex h-full w-full items-center text-center justify-center hover:text-white hover:bg-[#0000007c] hover:backdrop-blur transition-all rounded-3xl"
					/>
					<h1 class="text-center text-2xl font-semibold dark:text-gray-300">
						Apartment
					</h1>
				</div>

				<div
					class="flex flex-col grid-item w-full text-xl font-semibold uppercase gap-4"
				>
					<NuxtImg
						loading="lazy"
						src="/landing_grid/urban.png"
						class="flex h-full w-full items-center text-center justify-center hover:text-white hover:bg-[#0000007c] hover:backdrop-blur transition-all rounded-3xl"
					/>
					<h1 class="text-center text-2xl font-semibold dark:text-gray-300">
						Urban
					</h1>
				</div>
			</div>
		</div>

		<div class="content md:mx-40 flex flex-col gap-8 items-center"></div>
	</main>

	<Footer />
</template>

<script setup lang="ts">
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

interface Feature {
	icon: string
	name: string
	description: string
}

const CONSUMER_FEATURES: Feature[] = [
	{
		"name": "Personalized Property Matches",
		"description":
			"We care about our consumers, and their quality of stay. Our advanced algorithms ensure you find the perfect property tailored to your preferences, saving you time and effort.",
		"icon": "catalog",
	},
	{
		"name": "Transparent Pricing",
		"description":
			"Your peace of mind matters to us. We provide transparent pricing and detailed property information, empowering you to make informed decisions without any hidden surprises.",
		"icon": "tag",
	},
	{
		"name": "Exceptional Helpdesk",
		"description":
			"Your satisfaction is our priority. Our dedicated support team is available round-the-clock to address your queries, guide you through the process, and ensure a seamless experience from search to purchase.",
		"icon": "user--service-desk",
	},
	{
		"name": "Verified Listings",
		"description":
			"Trust and reliability are non-negotiable. Rest assured, all our listings undergo rigorous verification processes, so you can browse with confidence knowing that every property meets our high standards.",
		"icon": "checkmark--filled",
	},
]

const PROVIDER_FEATURES: Feature[] = [
	{
		"name": "Maximized Exposure",
		"description":
			"We value our providers just as much. By listing with us, you gain access to a vast network of potential buyers and renters, ensuring maximum exposure for your property and increasing your chances of a successful transaction.",
		"icon": "ibm-watson--discovery",
	},
	{
		"name": "Marketing Strategies",
		"description":
			"Your property deserves the spotlight. Our tailored marketing strategies highlight the unique features of your property, attracting qualified leads and optimizing your chances of a quick sale or rental.",
		"icon": "store",
	},
	{
		"name": "Effortless Management",
		"description":
			"Simplify your property management journey. Our user-friendly platform allows you to effortlessly manage listings, track inquiries, and communicate with potential clients, saving you time and hassle.",
		"icon": "gui--management",
	},
	{
		"name": "Professional Support",
		"description":
			"Your success is our mission. Our experienced team of real estate professionals is here to support you at every step, providing expert advice, valuable insights, and personalized assistance to help you achieve your goals.",
		"icon": "help-desk",
	},
]
</script>

<style>
#main-hero {
	background-image: url("/photos/search_bg.webp");
	background-size: cover;
}

textarea:focus, input:focus {
	outline: none;
	color: gray;
}

/* turn font serif into gradient */
main .content .font-serif {
	background: linear-gradient(135deg, #e49ddc, #86b5fc);
	background-clip: text;
	-webkit-background-clip: text;
	-webkit-text-fill-color: transparent;
}

.grid-item {
	background-size: cover;
}
</style>
