<template>
    <Header />

    <main class="m-4 mb-16 md:mx-40 rounded-lg flex flex-col gap-4">
        <h1 class="text-2xl text-black hover:underline gap-4 font-semibold pt-8">About <span class="italic">Beacon</span>
        </h1>

        <p class="text-gray-600 font-serif">
            At <span class="italic">Beacon</span>, we are driven by a simple yet powerful mission: to revolutionize the real
            estate experience for
            consumers like you. We exist because we were not satisfied with the status quo. In a landscape dominated by
            opaque processes and profit-driven motives, we saw an opportunity to redefine the industry and put the needs
            of consumers first.

            With a relentless spirit and unwavering determination, we set out to challenge the norms and bring about a
            consumer-friendly change in an ecosystem often plagued by greedy brokers and landlords. We believe that
            transparency, honesty, and integrity should be the cornerstones of every real estate transaction, and we are
            committed to delivering a platform that embodies these values.

            <span class="italic">Beacon</span> is powered by <b>ReMod Limited</b>, a forward-thinking company dedicated to driving
            innovation and positive
            change in the real estate sector. Behind our platform are three passionate individuals who bring a wealth of
            experience and expertise to the table:

            Together, we are committed to building a trusted and transparent real estate platform that empowers
            consumers, fosters community, and drives positive change in the industry. Welcome to <span
                class="italic">Beacon</span>, where your
            property journey begins with trust and ends with satisfaction.
        </p>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 px-20 justify-center items-center">
            <div v-for="[k, v] in Object.entries(AUTHORS)" class="flex flex-col gap-2 border-gray-500 border-solid border p-4 justify-center items-center">
                <img :src="v.pfp" class="h-24 w-24 rounded-full" />
                    <p class="text-center font-semibold">{{ v.name }}</p>
                    <hr class="w-full h-[1px] my-2 border-gray-400">
                    {{ v.description }}
                </div>
        </div>

    </main>

    <Footer />
</template>
  
<script setup lang="ts">
import type { Author } from './constants'

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

const AUTHORS: Array<Author> = [
    {
        "name": "LePichu",
        "pfp": "https://avatars.githubusercontent.com/u/62379502",
        "description": "dev"
    },
    {
        "name": "Pranav",
        "pfp": "https://avatars.githubusercontent.com/u/75154889",
        "description": "dev"
    }
]



</script>
  
<style>

#main-hero {
    background-image: url("/photos/search_bg.webp");
    background-size: cover;
}

p {
    line-height: 1.5;
    font-size: 1.25rem;
}

a {
    font-family: sans-serif;
}

</style>
