<template>
  <header class="p-4 flex justify-between bg-transparent backdrop-blur-lg sticky top-0">
    <a href="/">
      <img src="/branding/beacon_logo_base.png" class="h-12 w-12" />
    </a>
    <nav class="hidden md:flex gap-6 justify-center items-center">
      <a v-for="item in HEADER_NAV" :href="'../' + item.content"
        class="text-2xl font-semibold text-center text-black no-underline hover:underline underline-offset-4 font-serif">
        {{ item.content }}
      </a>

      <a href="/login"
        class="text-2xl font-semibold text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] px-4 py-2 rounded-lg">
        Login
      </a>
    </nav>
    <img src="/svg/menu.svg" class="h-12 w-12 p-2 block md:hidden" />
  </header>
</template>

<script setup lang="ts">
import { HEADER_NAV } from '../pages/constants'
</script>

<style></style>
