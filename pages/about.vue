<template>
    <header class="p-4 flex justify-between bg-transparent backdrop-blur-lg sticky top-0">
        <img src="/branding/beacon_logo_base.png" class="h-12 w-12" />
        <nav class="hidden md:flex gap-6 justify-center items-center">
            <a v-for="item in HEADER_NAV" :href="item.content"
                class="uppercase text-2xl text-center text-black no-underline hover:underline">
                {{ item.content }}
            </a>
        </nav>
        <img src="/svg/menu.svg" class="h-12 w-12 p-2 block md:hidden" />
    </header>

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

            <span class="italic">Beacon</span> is powered by ReMod Limited, a forward-thinking company dedicated to driving
            innovation and positive
            change in the real estate sector. Behind our platform are three passionate individuals who bring a wealth of
            experience and expertise to the table:

            Together, we are committed to building a trusted and transparent real estate platform that empowers
            consumers, fosters community, and drives positive change in the industry. Welcome to <span
                class="italic">Beacon</span>, where your
            property journey begins with trust and ends with satisfaction.

        </p>

    </main>

    <footer class="flex flex-col p-12 bg-[#262626] gap-12">
        <div class="flex flex-col md:flex-row justify-between gap-4">
            <img src="/branding/beacon_logo_base.png" class="w-16 h-16 mb-8 md:mb-0" />
            <div class="flex flex-col md:flex-row gap-8">
                <div v-for="[k, v] in Object.entries(FOOTER_ITEMS)" class="flex flex-col gap-2">
                    <p class="font-normal text-white">{{ k }}</p>
                    <p v-for="item in v" class="text-white opacity-60">
                        {{ item }}
                    </p>
                </div>
            </div>
        </div>

        <div class="flex justify-center items-center gap-4">
            <a class="invert opacity-60 h-8 w-8" v-for="[k, v] in Object.entries(SOCIALS)" :href="v.url">
                <img :src="'/svg/logo--' + v.name.toLowerCase() + '.svg'" :alt="v.name" />
            </a>
        </div>

        <p class="text-center text-white">
            © 2024 The Beacon Inc. - All Rights Reserved
        </p>
    </footer>
</template>
  
<script setup lang="ts">
import { HEADER_NAV, SOCIALS, FOOTER_ITEMS } from './constants'
import type { Author } from './constants'

const AUTHORS: Array<Author> = [
    {
        "name": "LePichu",
        "pfp": "",
        "description": "dev"
    },
    {
        "name": "joe",
        "pfp": "",
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
}</style>