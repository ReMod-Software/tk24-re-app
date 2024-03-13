<template>
	<Header />

	<main class="mb-16 md:mx-20 rounded-lg flex flex-col gap-4 min-h-[40rem]">
		<div
			class="flex flex-row gap-2 mb-128 h-full"
			style="grid-template-columns: 25% 75%;"
		>
			<div class="hidden md:flex p-4 w-1/4 border-solid border-gray-500">
				<div class="flex-col w-full flex">
					<div class="flex justify-between items-center">
						<h1
							class="text-xl font-semibold text-gray-600 uppercase"
						>
							Filters
						</h1>
						<NuxtImg
							class="h-8 ms-2 w-8 rounded-lg bg-white invert p-1"
							src="/svg/filter.svg"
							alt="Filter icon"
						/>
					</div>

					<div class="flex-col">
						<div class="py-2" id="box">
							<p class="uppercase font-semibold text-xs">Type</p>
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
						<div class="py-2" id="box">
							<p class="uppercase font-semibold text-xs">Size</p>
							<input type="checkbox" id="1bhk" value="1 BHK">
							<label for="vehicle1">1 BHK</label><br>
							<input type="checkbox" id="2bhk" value="2 BHK">
							<label for="vehicle1">2 BHK</label><br>
							<input type="checkbox" id="3bhk" value="3 BHK">
							<label for="vehicle1">3 BHK</label><br>
						</div>
						<div class="py-2" id="box">
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
								class="border-solid border-2 b-[#E49DDC] bg-gray-50 font-semibold text-lg p-2 rounded-lg w-full"
							>
								APPLY
							</button>
						</div>
					</div>
				</div>
			</div>

			<div
				class="rounded-lg flex-col gap-8 justify-between items-center h-full w-full aspect-[4/3] md:aspect-[21/9] p-8 md:p-0 text-gray-800"
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
				</div>

				<div class="flex md:hidden">
					<div class="flex border-solid border-gray-500">
						<div class="flex-col w-full flex">
							<div class="flex justify-between items-center">
								<h1
									class="text-xl font-semibold text-gray-600 uppercase"
								>
									Filters
								</h1>
								<NuxtImg
									class="h-12 ms-2 w-12 rounded-lg bg-white invert p-2"
									src="/svg/filter.svg"
									alt="Filter icon"
								/>
							</div>

							<div class="flex flex-col gap-4 pt-4">
								<div id="box">
									<p class="uppercase font-semibold text-xs">
										Type
									</p>
									<input
										type="checkbox"
										id="apartment"
										value="Apartment"
									>
									<label for="vehicle1">Apartment</label><br>
									<input
										type="checkbox"
										id="bungalow"
										value="Bungalow"
									>
									<label for="vehicle1">Bungalow</label><br>
									<input
										type="checkbox"
										id="flat"
										value="Flat"
									>
									<label for="vehicle1">Mansion</label><br>
								</div>
								<div class="" id="box">
									<p class="uppercase font-semibold text-xs">
										Size
									</p>
									<div class="flex flex-row justify-between">
										<input
											type="checkbox"
											id="1bhk"
											value="1 BHK"
										>
										<label for="vehicle1">1 BHK</label><br>
										<input
											type="checkbox"
											id="2bhk"
											value="2 BHK"
										>
										<label for="vehicle1">2 BHK</label><br>
										<input
											type="checkbox"
											id="3bhk"
											value="3 BHK"
										>
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
							</div>
						</div>
					</div>
				</div>

				<div class="flex justify-between items-center">
					<p class="text-left text-2xl py-4">
						Showing results for "<span class="italic">Latest
							Listings</span>"
					</p>

					<NuxtLink
						to="/property/publish"
						class="text-center text-blue-500 text-xl font-bold hover:underline"
					>
						Post a Property
					</NuxtLink>
				</div>

				<div
					class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-4"
				>
					<div
						v-for="([k, v]) in Object.entries(PROPERTIES)"
						class="border-solid border border-gray-300 rounded-[32px] p-4"
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
									<p class="text-md text-gray-800">
										{{ v.location }}
									</p>
								</div>
								<h1 class="text-xl font-bold">{{ v.title }}</h1>
								<hr class="h-[1px] my-4">

								<div
									class="flex flex-col justify-between flex-grow"
								>
									<p>{{ v.description }}</p>
									<p class="text-right text-gray-500 pt-4">
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
import type { Property } from "~/server/validate"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"

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
