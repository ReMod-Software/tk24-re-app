<template>
	<Header />

	<main class="py-8 p-4 pb-16 md:px-40 z-50  dark:bg-[#201c1c]">
		<div
			class="hidden absolute top-0 left-0 flex h-full w-full flex-col p-24 bg-black backdrop-blur-xl bg-opacity-65"
			id="xr-modal"
		>
			<div
				class="rounded-lg flex flex-col justify-between items-end p-4 w-full h-full bg-white z-50"
				:style='"background-image: url(" + property.image
				+ "); background-size: cover;"'
			>
				<div
					class="flex justify-end bg-black bg-opacity-25 backdrop-blur-lg rounded-lg p-2"
					@click="previewModal"
				>
					<img
						src="/svg/close--filled.svg"
						class="h-12 w-12 invert"
					/>
				</div>
				<div class="flex w-full">
					<div
						class="flex gap-4 justify-center items-center bg-black bg-opacity-25 backdrop-blur-lg rounded-lg p-2"
					>
						<img src="/svg/move.svg" class="h-12 w-12 invert" />
						<h1 class="text-2xl text-white">Drag to Move Around</h1>
					</div>
				</div>
			</div>
		</div>
		<div class="flex flex-col gap-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div
					class="aspect-[4/3] flex items-end justify-between md:justify-end p-4 gap-2 rounded-xl"
					id="image"
					:style='"background-image: url(" + property.image
					+ "); background-size: cover;"'
				>
					<!--desc amenities specs -->

					<button
						class="img-btn flex gap-1 rounded-lg bg-gradient-to-br backdrop-blur from-[#86B5FC] to-[#E49DDC] p-2 text-white"
						@click="previewModal"
					>
						<NuxtImg
							src="/svg/view--filled.svg"
							class="h-6 w-6 mr-1 invert"
						/>
						View in 3D
					</button>
					<button
						class="img-btn flex gap-1 bg-black text-white p-2 bg-opacity-25 backdrop-blur rounded-lg"
					>
						<NuxtImg
							src="/svg/catalog.svg"
							class="h-6 w-6 mr-1 invert"
						/>
						View Images
					</button>
				</div>
				<div class="flex flex-col justify-between">
					<div class="flex flex-col gap-4 dark:text-gray-300">
						<h1
							class="text-3xl font-semibold mb-2 dark:text-gray-50"
						>
							{{ property.title }}
							<span
								class="font-light block text-lg dark:text-gray-200"
							>By <span class="italic font-sans font-semibold">{{
									property.author
								}}</span></span>
						</h1>

						<div class="flex items-center gap-2">
							<img
								src="/svg/location--filled.svg"
								class="h-8 w-8 dark:invert p-1 rounded-lg"
							/>

							<p class="text-lg">
								{{ property.location }}
							</p>
						</div>
						<div class="flex items-center gap-2">
							<img
								src="/svg/currency--rupee.svg"
								class="h-8 w-8 dark:invert p-1 rounded-lg"
							/>

							<p class="text-lg">
								Starting from <span class="italic">
									{{ formatter.format(property.price) }}</span
								>
							</p>
						</div>
						<div class="flex items-center gap-2">
							<img
								src="/svg/information--filled.svg"
								class="h-8 w-8 dark:invert p-1 rounded-lg"
							/>

							<p>
								Ready to
								<span class="text-lg italic">Move In</span>
							</p>
						</div>
					</div>
					<div class="flex items-end justify-end gap-4 mt-8 md:mt-0">
						<img
							src="/svg/share.svg"
							class="h-8 w-8 p-1 rounded-lg dark:invert"
						/>
						<img
							src="/svg/favorite.svg"
							class="h-8 w-8 p-1 rounded-lg dark:invert"
						/>
					</div>
				</div>
			</div>

			<div
				class="flex flex-col-reverse md:flex-row justify-between gap-8"
			>
				<div class="md:w-[70%] flex flex-col gap-8 dark:text-gray-300">
					<h1
						class="font-semibold text-2xl -mb-4 dark:text-gray-50 tracking-wide"
					>
						About the Property
					</h1>
					<p class="text-lg">
						{{ property.description }}
					</p>

					<h1 class="font-semibold text-2xl -mb-4 dark:text-gray-100">
						Amenities
					</h1>
					<div
						class="grid grid-cols-2 md:grid-cols-3 text-center gap-8"
					>
						<div
							v-for="(value, key) in AMENITIES"
							:key="key"
							class="flex flex-col items-center gap-2"
						>
							<img :src="value" class="h-12 w-12 dark:invert dark:opacity-80" />
							<p class="text-lg dark:text-gray-100">{{ key }}</p>
						</div>
					</div>

					<h1 class="font-semibold text-2xl -mb-4 dark:text-gray-100">
						Property Specifications
					</h1>
					<table class="mx-2">
						<tr v-for="(value, key) in SPECS" :key="key">
							<td class="text-lg font-semibold">{{ key }}</td>
							<td class="text-lg pl-4">{{ value }}</td>
						</tr>
					</table>
				</div>
				<div class="md:w-[20%] flex flex-col gap-4 dark:text-gray-200">
					<h1 class="font-semibold text-2xl">Contact</h1>

					<a
						class="flex flex-row items-center border border-black dark:border-gray-600 rounded-lg"
						:href='"tel:" + property.contact'
					>
						<img
							src="/svg/phone.svg"
							class="h-10 w-10 bg-white rounded-l-lg invert p-2"
						/>
						<h1 class="text-lg font-semibold text-center flex-grow">
							Call Now
						</h1>
					</a>

					<a
						class="flex flex-row items-center border border-black dark:border-gray-600 rounded-lg"
						:href='"mailto:" + property.email'
					>
						<img
							src="/svg/email.svg"
							class="h-10 w-10 bg-white rounded-l-lg invert p-2"
						/>
						<h1 class="text-lg font-semibold text-center flex-grow">
							Email Now
						</h1>
					</a>

					<a
						class="flex flex-col items-center border border-black dark:border-gray-600 rounded-lg"
						:href="property.mapsLink"
					>
						<div
							class="flex w-full h-64 rounded-t-lg border border-b-black"
							style="
							background-image: url('/places/screenie.png');
							background-size: cover;
							background-position: 50% 50%;
						"
						>
						</div>
						<div class="flex w-full justify-center items-center rounded-b-lg">
							<img
								src="/svg/location--filled.svg"
								class="h-10 w-10 bg-white rounded-bl-md invert p-2"
							/>
							<h1
								class="text-lg font-semibold text-center flex-grow"
							>
								Open in Google Maps
							</h1>
						</div>
					</a>
				</div>
			</div>
		</div>
	</main>
	<Footer />
</template>

<script setup lang="ts">
import { useRoute } from "vue-router"
import type { Property } from "~/server/validate"

const previewModal = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	})

	document.querySelectorAll(
		"header, .w-8.h-8.invert.p-1, .img-btn, .w-10.h-10.invert",
	).forEach(el => el.classList.toggle("hidden"))
	document.querySelector("#xr-modal")?.classList.toggle("hidden")

	document.body.classList.toggle("overflow-hidden")
}

const AMENITIES = {
	"Swimming Pool": "/svg/swim.svg",
	"Safety Equipments": "/svg/lifesaver.svg",
	"24x7 Security": "/svg/security.svg",
	"Power Backup": "/svg/battery--charging.svg",
	"CCTV Surveillance": "/svg/video--filled.svg",
	"Cafeteria": "/svg/cafe.svg",
	"24x7 Water Supply": "/svg/humidity.svg",
	"Property Staff": "/svg/help-desk.svg",
}

const SPECS = {
	"Property Type": "Villa",
	"Built-up Area": "3000 sq. ft.",
	"Carpet Area": "2500 sq. ft.",
	"Bedrooms": "4",
	"Bathrooms": "4",
	"Balconies": "2",
	"Floor": "Ground",
	"Total Floors": "1",
	"Facing": "North",
	"Overlooking": "Sea",
	"Car Parking": "1",
	"Status": "Ready to Move",
	"Transaction Type": "Resale",
	"Age of Construction": "5-10 years",
	"Furnishing": "Furnished",
	"Ownership": "Freehold",
	"Flooring": "Vitrified",
	"Water Source": "Borewell/Tank",
	"Electricity Status": "24x7",
	"Property on Floor": "Ground",
	"Address": "Port Blair, Andaman and Nicobar",
}

const route = useRoute()
const id = route.params.id

const property: Property = await $fetch(`/api/property?id=${id}`)

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

#half {
	height: 42%;
	width: 100%;
}
</style>
