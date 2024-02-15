<template>
  <header class="p-4 flex justify-between bg-transparent backdrop-blur-lg sticky top-0">
    <img src="/branding/beacon_logo_base.png" class="h-12 w-12" />
    <nav class="hidden md:flex gap-6 justify-center items-center">
      <a v-for="item in HEADER_NAV" href="{{ item.content }}" class="uppercase text-2xl text-center text-black no-underline hover:underline">
        {{ item.content }}
      </a>
    </nav>
    <img src="/svg/menu.svg" class="h-12 w-12 p-2 block md:hidden" />
  </header>

  <main class="p-4 rounded-lg flex flex-col justify-center items-center text-white">
    <div class="rounded-lg flex gap-8 md:gap-16 flex-col justify-center items-center h-full w-full aspect-[4/3] md:aspect-[21/9] p-8 md:p-0" id="main-hero">
      <h1 class="text-center text-xl md:text-3xl font-extralight">Looking for a <span class="font-serif text-2xl px-2 italic font-semibold">space?</span> We have one <span class="font-serif text-2xl px-2 italic font-semibold">for you!</span></h1>
      <div class="flex w-auto md:w-[65%]">
        <input type="search" placeholder="Search for Properties!" class="border-box flex-grow p-2 px-4 rounded-none">
        <img src="/svg/search.svg" class="aspect-square bg-white invert p-2 h-full" />
      </div>
    </div>
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
      <img class="invert opacity-60 h-8 w-8" v-for="social in SOCIALS" :src="'/svg/logo--' + social.toLowerCase() + '.svg' " />
    </div>

    <p class="text-center text-white">
      © 2024 The Beacon Inc. - All Rights Reserved
    </p>
  </footer>
</template>

<script setup lang="ts">
const HEADER_NAV = [{
  "type": "text",
  "content": "properties"
},
{
  "type": "text",
  "content": "blog"
},
{
  "type": "text",
  "content": "about"
},
]

const SOCIALS = [
  "Discord",
  "Facebook",
  "Github",
  "Twitter",
  "YouTube"
]

const FOOTER_ITEMS = {
  "Services": [
    "Buy or Rent",
    "List a Property",
    "Newsletter"
  ],
  "Legal": [
    "Terms and Conditions",
    "Privacy Policy"
  ],
  "Careers": [
    "Internships",
    "Jobs",
    "Partners"
  ]
}
</script>

<style>
#main-hero {
  background-image: url("/photos/search_bg.webp");
  background-size: cover;
}
</style>