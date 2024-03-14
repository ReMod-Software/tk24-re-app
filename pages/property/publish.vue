<template>
	<Header />

	<main class="my-8 m-4 mb-16 md:mx-40 rounded-lg">
		<div class="flex flex-col gap-8">
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				<div
					class="aspect-[4/3] flex items-end justify-between md:justify-center p-4 gap-2 rounded-xl"
					id="image"
					:style='"background-image: url(/photos/property/1"
					+ "/main.jpg); background-size: cover;"'
				>
					<!--desc amenities specs -->

					<button
						class="flex gap-1 rounded-lg bg-gradient-to-br backdrop-blur from-[#86B5FC] to-[#E49DDC] p-2 text-white"
					>
						<img
							src="/svg/view--filled.svg"
							class="h-6 w-6 mr-1 invert"
						/>
						Upload 3D Panaroma
					</button>
					<button
						class="flex gap-1 bg-black text-white p-2 bg-opacity-25 backdrop-blur rounded-lg"
					>
						<img
							src="/svg/catalog.svg"
							class="h-6 w-6 mr-1 invert"
						/>
						Upload Images
					</button>
				</div>
				<div class="flex flex-col justify-between">
					<div class="flex flex-col gap-4">
						<h1 class="text-3xl font-semibold mb-2">
							<input
								type="text"
								class="w-full p-2 border border-gray-400 rounded-lg"
								placeholder="Enter Property Name"
								id="title"
							/>
							<span class="flex mt-4 gap-5 items-center justify-center font-light text-lg">By <input
								type="text"
								class="w-full p-1 border border-gray-400 rounded-lg inline-block font-normal px-2"
								placeholder="Your Name"
								id="title"
							/></span>
						</h1>

						<div class="flex items-center gap-2">
							<img
								src="/svg/location--filled.svg"
								class="h-8 w-8 bg-white invert p-1 rounded-lg"
							/>

							<input
								class="text-lg w-full p-2 border border-gray-400 rounded-lg"
								type="text"
								placeholder="Enter Property Location"
								id="location"
							/>
						</div>
						<div class="flex items-center gap-2">
							<img
								src="/svg/currency--rupee.svg"
								class="h-8 w-8 bg-white invert p-1 rounded-lg"
							/>

							<input
								class="w-full p-2 border border-gray-400 rounded-lg text-lg"
								placeholder="Property Price"
								id="price"
							/>
						</div>
						<div class="flex items-center gap-2">
							<img
								src="/svg/information--filled.svg"
								class="h-8 w-8 bg-white invert p-1 rounded-lg"
							/>

							<input type="checkbox" id="ready" class="w-8 h-8">
							<p>
								Ready to
								<span class="text-lg italic font-semibold">Move-In</span>
							</p>
						</div>
					</div>
					<div class="flex items-end justify-end gap-4 mt-8 md:mt-0">
						<img
							src="/svg/share.svg"
							class="h-8 w-8 p-1 rounded-lg"
						/>
						<img
							src="/svg/favorite.svg"
							class="h-8 w-8 p-1 rounded-lg"
						/>
					</div>
				</div>
			</div>

			<div
				class="flex flex-col-reverse md:flex-row justify-between gap-8"
			>
				<div class="md:w-[70%] flex flex-col gap-8">
					<h1 class="font-semibold text-2xl -mb-4">
						About the Property
					</h1>
					<textarea
						class="text-lg border border-gray-400 rounded-lg p-2 min-h-[20vh]"
						placeholder="Description about the property"
						id="description"
					/>

					<h1 class="font-semibold text-2xl -mb-4">Amenities</h1>
					<div
						class="flex flex-col gap-2 justify-center items-center p-16 rounded-lg bg-gray-100"
					>
						<img src="/svg/add--filled.svg" class="h-20 w-20" />
						<h1 class="text-gray-700 uppercase font-bold">List Ameneties</h1>
					</div>

					<h1 class="font-semibold text-2xl -mb-4">
						Property Specifications
					</h1>
					<table class="flex flex-col gap-4 w-full">
						<tr
							v-for="(value, key) in SPECS"
							:key="key"
							class="flex gap-4 justify-between w-full"
						>
							<td class="text-lg font-semibold w-[25%]">
								{{ key }}
							</td>
							<input
								class="text-lg border border-1 rounded-lg p-2 min-w-[40%]"
							/>
						</tr>
					</table>
					<div class="flex justify-end">
				<button
					class="bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] text-white font-semibold text-lg px-4 py-3 rounded-lg w-[40%]"
					@click="publish"
				>
					Verify & Publish
				</button>
			</div>
				</div>
				<div class="md:w-[20%] flex flex-col gap-4">
					<h1 class="font-semibold text-2xl">Contact</h1>

					<a
						class="flex flex-row items-center border border-black rounded-lg"
					>
						<img
							src="/svg/phone.svg"
							class="h-10 w-10 bg-white rounded-l-md invert p-2"
						/>
						<input
							class="text-lg font-semibold text-center flex-grow h-full w-full rounded-r-lg"
							placeholder="Enter Phone Number"
							id="number"
						/>
					</a>

					<a
						class="flex flex-row items-center border border-black rounded-lg"
					>
						<img
							src="/svg/email.svg"
							class="h-10 w-10 bg-white rounded-l-md invert p-2"
						/>
						<input
							class="text-lg font-semibold text-center flex-grow h-full w-full rounded-r-lg"
							placeholder="Enter Email Address"
							id="email"
						/>
					</a>

					<a
						class="flex flex-row items-center border border-black rounded-lg"
					>
						<img
							src="/svg/location--filled.svg"
							class="h-10 w-10 bg-white rounded-l-md invert p-2"
						/>
						<input
							class="text-lg font-semibold text-center flex-grow h-full w-full rounded-r-lg"
							placeholder="Enter Map Link"
							id="maps"
						/>
					</a>
				</div>
			</div>
		</div>
	</main>
	<Footer />
</template>

<script setup lang="ts">
import { auth } from "~/server/firebase"

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

const username = auth.currentUser?.displayName

const photo = ref("")

onMounted(() => {
	const chooseFile = document.getElementById("choose-file")
	const imgPreview = document.getElementById("image")

	function getImgData() {
		const files = chooseFile!.files[0]
		if (files) {
			const fileReader = new FileReader()
			fileReader.readAsDataURL(files)
			fileReader.addEventListener("load", function() {
				photo.value = fileReader.result
				imgPreview!.style.backgroundImage = `url(${this.result})`
			})
		}
	}
})

function publish() {
	const data = {
		title: document.getElementById("title")!.value,
		author: username || "Anonymous",
		description: document.getElementById("description")!.value,
		image: photo.value,
		date: new Date().toISOString(),
		price: document.getElementById("price")!.value,
		location: document.getElementById("location")!.value,
		contact: document.getElementById("number")!.value,
		email: document.getElementById("email")!.value,
		ready: document.getElementById("ready")!.checked,
		mapsLink: document.getElementById("maps")!.value,
	}

	console.log(data)

	// send data to server
	const response = $fetch("/api/publishProperty", {
		method: "POST",
		body: JSON.stringify(data),
	})

	alert("Property Published")
}
</script>

<style>
img {
	object-fit: cover;
}

image {
	display: none;
	object-fit: cover;
}

#half {
	height: 42%;
	width: 100%;
}

textarea {
	min-height: 60px;
	overflow-y: auto;
	word-wrap: break-word;
}

[type="file"] {
	height: 0;
	width: 0;
	overflow: hidden;
}
[type="file"] + label {
	cursor: pointer;
}

[type="file"] + label:hover {
	color: #3639f4;
}
</style>
