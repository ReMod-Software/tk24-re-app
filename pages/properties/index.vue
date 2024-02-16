<template>
    <header class="p-4 flex justify-between bg-transparent backdrop-blur-lg sticky top-0">
        <img src="/branding/beacon_logo_base.png" class="h-12 w-12" />
        <div class="flex w-auto md:w-[65%] rounded-[24px] items-center px-4">
            <input type="search" placeholder="Search for Properties!"
                class="border-box flex-grow rounded-[16px] border border-solid border-gray-500 mx-4 p-3">
            <img src="/svg/search.svg" class="aspect-square bg-white invert h-full rounded-[30%] p-2" />
        </div>
        <nav class="hidden md:flex gap-6 justify-center items-center">
            <a v-for="item in HEADER_NAV" :href="'../' + item.content"
                class="uppercase text-xl text-center text-black no-underline hover:underline font-serif">
                {{ item.content }}
            </a>

            <a href="/login"
                class="uppercase text-2xl text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] px-4 py-2 rounded-lg">
                Login
            </a>
        </nav>
        <img src="/svg/menu.svg" class="h-12 w-12 p-2 block md:hidden" />
    </header>


    <main class="m-4 mb-16 md:mx-20 rounded-lg flex flex-col gap-4">
        <div class="grid-template-[25%_75%] flex gap-2 mb-24">
            <div class="hidden md:flex ms-4 p-4 w-1/4 border-solid border-gray-500">
                <div class="flex-col w-full flex">
                    <div class="flex justify-between items-center">
                        <h1 class="text-xl font-semibold text-gray-600 uppercase">Filters</h1>
                        <img class="h-8 ms-2 w-8 rounded-lg bg-white invert p-1" src="/svg/filter.svg" alt="Filter icon" />
                    </div>

                    <div class="flex-col">
                        <div class="py-2" id="box">
                            <p class="uppercase font-semibold text-xs">Type</p>
                            <input type="checkbox" id="apartment" value="Apartment">
                            <label for="vehicle1">Apartment</label><br>
                            <input type="checkbox" id="bungalow" value="Bungalow">
                            <label for="vehicle1">Bungalow</label><br>
                            <input type="checkbox" id="flat" value="Flat">
                            <label for="vehicle1">Mansion</label><br>
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
                            <p class="uppercase">Price Range</p>
                            <div class="flex grid-template-[45%_5%_45%]">
                            <input type="number" id="min" name="min" min="0" max="1000000000" class="bg-gray-100" step="0.01" value="0">
                            <p>-</p>
                            <input type="number" id="max" name="max" min="0" max="1000000000" class="bg-gray-100" step="0.01" value="10000000">
                        </div>
                            </div>

                    </div>
                </div>
            </div>
            <div
                class="rounded-lg flex-col gap-8 justify-between items-center h-full w-full aspect-[4/3] md:aspect-[21/9] p-8 md:p-0 text-gray-800">

                <p class="text-left text-2xl py-4">Showing results for "<span class="italic">Latest Listings</span>"</p>

                <div class="grid grid-cols-2 md:grid-cols-3 gap-2 mt-4">
                    <div v-for="[k, v] in Object.entries(PROPERTIES)"
                        class="border-solid border border-gray-300 rounded-[32px] p-4">
                        <a :href="`/property/${v.id}`">
                            <img class="w-full rounded-t-3xl rounded-b-[34px] mb-4" :src="v.image" />
                            <div class="px-4 mb-4">
                                <div class="flex justify-between opacity-50 mb-2">
                                    <p class="text-md text-gray-800">{{ v.location }}</p>
                                </div>
                                <h1 class="text-xl font-bold">{{ v.title }}</h1>
                                <hr class="h-[1px] my-4">

                                <div class="flex flex-col justify-between flex-grow">
                                    <p>{{ v.description }}</p>
                                    <p class="text-right text-gray-500 pt-4">{{ v.price }}</p>
                                </div>
                            </div>
                        </a>

                    </div>
                </div>
            </div>
        </div>


    </main>

    <Footer />
</template>

<script setup lang="ts">

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import type { PropertyDetail } from '../constants'
import { HEADER_NAV } from '../constants'

const PROPERTIES: PropertyDetail[] = [
    {
        "title": "3 BHK Apartment",
        "description": "A beautiful 3 BHK apartment in the heart of the city, with stunning views and modern amenities.",
        "image": "/photos/d1.jpg",
        "date": "15 February 2024",
        "price": "₹ 1,50,00,000",
        "location": "Nariman Point, Mumbai",
        "id": 1
    },
    {
        "title": "Luxury Villa",
        "description": "A luxurious villa nestled in the serene countryside, offering a perfect blend of comfort and tranquility.",
        "image": "/photos/d2.jpg",
        "price": "₹ 3,00,00,000",
        "date": "15 February 2024",
        "location": "Port Blair",
        "id": 2
    },
    {
        "title": "1 BHK Mansion",
        "description": "A 1 BHK mansion with sprawling gardens and opulent interiors, perfect for lavish living.",
        "image": "/photos/d3.jpg",
        "price": "₹ 5,00,00,000",
        "date": "15 February 2024",
        "location": "Lutyens' Delhi",
        "id": 3
    }
]
</script>

<style>
#main-hero {
    background-image: url("/photos/search_bg.webp");
    background-size: cover;
    background-position: center;
}

#box>* {
    margin-bottom: 0.75rem !important;
    margin-right: 0.5rem !important;
}

/* Chrome, Safari, Edge, Opera */
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
input[type=number] {
  -moz-appearance: textfield;
}
</style>