<template>
	<Header />

	<main
		class="pb-16 md:px-20 flex flex-col gap-4 min-h-[40rem] dark:bg-[#201c1c]"
	>
		<div
			class="flex flex-row gap-2 mb-128 h-full"
			style="grid-template-columns: 25% 75%;"
		>
			<div class="hidden md:flex p-4 w-1/4 border-solid border-gray-500">
				<div class="flex-col w-full flex">
					<div class="flex justify-between items-center">
						<h1
							class="text-xl font-semibold text-gray-600 dark:text-gray-200 uppercase"
						>
							Filters
						</h1>
						<NuxtImg
							class="h-8 ms-2 w-8 rounded-lg bg-white invert p-1 opacity-35"
							src="/svg/filter.svg"
							alt="Filter icon"
						/>
					</div>

					<div class="flex-col">
						<div class="py-2 dark:text-gray-300" id="box">
							<p
								class="uppercase font-semibold text-sm dark:text-gray-300"
							>
								Type
							</p>
							<input
								type="checkbox"
								id="apartment"
								value="Apartment"
							>
							<label>Apartment</label><br>
							<input
								type="checkbox"
								id="bungalow"
								value="Bungalow"
							>
							<label>Bungalow</label><br>
							<input type="checkbox" id="flat" value="Flat">
							<label>Mansion</label><br>
						</div>
						<div class="py-2 dark:text-gray-300" id="box">
							<p
								class="uppercase font-semibold text-sm dark:text-gray-300"
							>
								Size
							</p>
							<input type="checkbox" id="1bhk" value="1 BHK">
							<label for="vehicle1">1 BHK</label><br>
							<input type="checkbox" id="2bhk" value="2 BHK">
							<label for="vehicle1">2 BHK</label><br>
							<input type="checkbox" id="3bhk" value="3 BHK">
							<label for="vehicle1">3 BHK</label><br>
						</div>
						<div class="py-2 dark:text-gray-300" id="box">
							<p class="uppercase font-semibold text-xs">
								Price Range
							</p>
							<div class="flex flex-row justify-between">
								<input
									type="number"
									id="min"
									name="min"
									min="0"
									max="1000000000"
									class="bg-gray-100 dark:bg-gray-700 font-serif w-[40%] p-1"
									step="0.01"
									value="0"
								>
								<p>-</p>
								<input
									type="number"
									id="max"
									name="max"
									min="0"
									max="1000000000"
									class="bg-gray-100 dark:bg-gray-700 font-serif w-[40%] p-1"
									step="0.01"
									value="10000000"
								>
							</div>
						</div>

						<div class="flex justify-center">
							<button
								class="bg-gray-100 font-semibold text-lg p-2 rounded-lg w-full"
							>
								APPLY
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				class="rounded-lg flex-col gap-8 justify-between items-center h-full w-full aspect-[4/3] md:aspect-[21/9] p-6 md:p-0 text-gray-800"
			>
				<div
					class="flex md:hidden w-auto md:w-[65%] h-12 rounded-xl items-center mb-4"
				>
					<input
						type="search"
						placeholder="Search for Properties!"
						class="border-box flex-grow rounded-l-xl border-gray-500 p-3 bg-gray-100"
					>
					<NuxtImg
						src="/svg/search.svg"
						class="aspect-square bg-white invert h-full rounded-r-xl p-2"
					/>
					<NuxtImg
						class="h-12 ms-2 w-12 rounded-lg bg-white invert p-2"
						src="/svg/filter.svg"
						alt="Filter icon"
						@click="toggleFilters"
					/>
				</div>

				<div
					v-if="showFilters"
					class="md:hidden flex flex-col gap-4 pt-4"
				>
					<div id="box">
						<p class="uppercase font-semibold text-xs">
							Type
						</p>
						<input type="checkbox" id="apartment" value="Apartment">
						<label for="vehicle1">Apartment</label><br>
						<input type="checkbox" id="bungalow" value="Bungalow">
						<label for="vehicle1">Bungalow</label><br>
						<input type="checkbox" id="flat" value="Flat">
						<label for="vehicle1">Mansion</label><br>
					</div>
					<div class="" id="box">
						<p class="uppercase font-semibold text-xs">
							Size
						</p>
						<div class="flex flex-row justify-between">
							<input type="checkbox" id="1bhk" value="1 BHK">
							<label for="vehicle1">1 BHK</label><br>
							<input type="checkbox" id="2bhk" value="2 BHK">
							<label for="vehicle1">2 BHK</label><br>
							<input type="checkbox" id="3bhk" value="3 BHK">
							<label for="vehicle1">3 BHK</label><br>
						</div>
					</div>
					<div id="box">
						<p class="uppercase font-semibold text-xs">
							Price Range
						</p>
						<div class="flex flex-row justify-between">
							<input
								type="number"
								id="min"
								name="min"
								min="0"
								max="1000000000"
								class="bg-gray-100 font-serif w-[40%] p-1"
								step="0.01"
								value="0"
							>
							<p>-</p>
							<input
								type="number"
								id="max"
								name="max"
								min="0"
								max="1000000000"
								class="bg-gray-100 font-serif w-[40%] p-1"
								step="0.01"
								value="10000000"
							>
						</div>
					</div>

					<div class="flex justify-center">
						<button
							class="bg-gray-100 font-semibold text-lg p-2 rounded-lg w-full"
						>
							APPLY
						</button>
					</div>
				</div>

				<div class="flex justify-between items-center">
					<p
						class="text-left text-lg md:text-2xl py-4 dark:text-gray-300"
					>
						Showing results for "<span
							class="italic font-semibold text-white"
						>Latest Listings</span>"
					</p>

					<NuxtLink
						to="/property/publish"
						class="flex justify-center items-center gap-2 text-center text-black text-xl font-medium no-underline border rounded-lg border-solid border-black pr-2"
					>
						<img
							src="/svg/arrow--up-right.svg"
							class="h-8 w-8 p-1 rounded-lg"
						/>
						Post a Property
					</NuxtLink>
				</div>

				<div
					class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4"
				>
					<div
						v-for="([k, v]) in Object.entries(PROPERTIES)"
						class="p-4 rounded-lg bg-gray-100 hover:shadow-xl hover:shadow-gray-400 transition-all"
					>
						<NuxtLink :to="`/property/` + v.id">
							<NuxtImg
								class="w-full rounded-t-3xl rounded-b-[34px] h-[22vh] mb-4"
								:src="v.image"
							/>

							<div class="px-1">
								<div
									class="flex justify-between opacity-50 mb-2"
								>
									<p
										class="text-md text-gray-800 dark:text-gray-100 tracking-tight font-medium leading-1"
									>
										{{ v.location }}
									</p>
								</div>
								<h1
									class="text-xl font-bold dark:text-gray-100"
								>
									{{ v.title }}
								</h1>
								<hr class="h-[1px] my-4 dark:border-gray-600">

								<div
									class="flex flex-col justify-between flex-grow dark:text-gray-400"
								>
									<p>{{ v.description }}</p>
									<p
										class="text-right text-gray-500 dark:text-gray-200 pt-4"
									>
										{{ formatter.format(v.price) }}
									</p>
								</div>
							</div>
						</NuxtLink>
					</div>
				</div>
			</div>
		</div>
	</main>

	<Footer />
</template>

<script setup lang="ts">
import { type Auth, getAuth, onAuthStateChanged } from "firebase/auth"
import { ref } from "vue"
import type { Property } from "~/server/validate"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

const showFilters = ref(false)

function toggleFilters() {
	showFilters.value = !showFilters.value
}

const isLoggedIn = ref(false)

let auth: Auth
onMounted(() => {
	auth = getAuth()
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true
		} else {
			isLoggedIn.value = false
		}
	})
})

const PROPERTIES: Property[] = await $fetch("/api/properties")

const formatter = new Intl.NumberFormat("en-IN", {
	style: "currency",
	currency: "INR",
	maximumFractionDigits: 0,
})
</script>

<style>
img {
	object-fit: cover;
}

#box > * {
	margin-bottom: 0.75rem !important;
	margin-right: 0.5rem !important;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button, input::-webkit-inner-spin-button {
	-webkit-appearance: none;
	margin: 0;
}

/* Firefox */
input[type=number] {
	appearance: textfield;
	-moz-appearance: textfield;
}
</style>
