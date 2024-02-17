<template>
    <Header />

    <main class="my-8 mb-16 md:mx-40 rounded-lg flex flex-col gap-4">
        <div class="flex flex-col">
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div class="aspect-[4/3] flex items-end justify-end p-4 gap-2 rounded-3xl"
                    style="background-image: url('/photos/d1.jpg'); background-size: cover;">
                    <!--desc amenities specs -->

                    <button
                        class="flex gap-1 rounded-lg bg-gradient-to-br backdrop-blur from-[#86B5FC] to-[#E49DDC] p-2 text-white">
                        <img src="/svg/view--filled.svg" class="h-6 w-6 mr-1 invert" />
                        View in 3D
                    </button>
                    <button class="flex gap-1 bg-black text-white p-2 bg-opacity-25 backdrop-blur rounded-lg">
                        <img src="/svg/catalog.svg" class="h-6 w-6 mr-1 invert" />
                        View Images
                    </button>
                </div>
                <div class="flex flex-col justify-between">

                    <div class="flex flex-col gap-2">
                        <h1 class="text-3xl font-semibold mb-2 ">
                            Luxury Villa
                            <span class="font-light block text-lg">By "The Ocean Group"</span>
                        </h1>

                        <div class="flex items-center gap-2">
                            <img src="/svg/location--filled.svg" class="h-8 w-8 bg-white invert p-1 rounded-lg" />

                            <p class="text-lg">Port Blair, Andaman and Nicobar Islands</p>
                        </div>
                        <div class="flex items-center gap-2">
                            <img src="/svg/currency--rupee.svg" class="h-8 w-8 bg-white invert p-1 rounded-lg" />

                            <p class="text-lg">Starting from <span class="italic">₹ 3,00,00,000</span></p>
                        </div>
                        <div class="flex items-center gap-2">

                            <img src="/svg/information--filled.svg" class="h-8 w-8 bg-white invert p-1 rounded-lg" />

                            <span class="text-lg italic">Ready to move in</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </main>
    <Footer />
</template>

<script setup lang="ts">
import Carousel from "../components/Carousel.vue"
import Footer from "../components/Footer.vue"
import Header from "../components/Header.vue"
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
