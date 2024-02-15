<template>
  <header class="p-4 flex justify-between bg-transparent backdrop-blur-lg sticky top-0">
    <img src="/branding/beacon_logo_base.png" class="h-16 w-16" />
    <nav class="flex gap-6 justify-center items-center">
      <a v-for="item in HEADER_NAV" href="{{ item.content }}" class="uppercase text-2xl text-center text-black no-underline hover:underline">
        {{ item.content }}
      </a>
  
    </nav>
  </header>

  <main class="p-4 rounded-lg flex flex-col justify-center items-center aspect-[21/9] text-white">

    <div class="rounded-lg flex gap-16 flex-col justify-center items-center h-full w-full" id="main-hero">

      <h1 class="text-3xl font-extralight">Looking for a <span class="font-serif text-5xl px-2 italic font-semibold">space?</span> We have one <span class="font-serif text-5xl px-2 border-0 border-b-1 italic font-semibold">for you!</span></h1>

      <div class="flex w-[65%]">
        <input type="search" placeholder="Search for Properties!" class="border-box flex-grow p-2 px-4 rounded-none">
        <img src="/svg/search.svg" class="aspect-square bg-white invert p-2 h-full" />
      </div>
    </div>
  </main>

  <footer class="flex flex-col p-12 bg-[#262626] gap-4">
    <div class="flex justify-between">
      <img src="/branding/beacon_logo_base.png" class="w-16 h-16" />
    </div>

    <div class="flex justify-center items-center gap-4 ">
      <img class="invert opacity-60 h-8 w-8" v-for="social in SOCIALS" :src="'/svg/logo--' + social.toLowerCase() + '.svg' " />
    </div>
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
</script>

<style>

#main-hero {
  background-image: url("/photos/search_bg.webp");
  background-size: cover;

}



</style>