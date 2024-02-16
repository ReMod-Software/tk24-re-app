<template>
<footer class="flex flex-col p-12 bg-[#262626] gap-12">
    <div class="flex flex-col md:flex-row justify-between gap-4">
      <img src="/branding/beacon_logo_base.png" class="w-16 h-16 mb-8 md:mb-0" />
      <div class="flex flex-col md:flex-row gap-8">
        <div v-for="[k, v] in Object.entries(FOOTER_ITEMS)" class="flex flex-col md:px-6 gap-2">
          <p class="font-normal text-white">{{ k }}</p>
          <a v-for="item in v" class="text-white opacity-60 hover:underline underline-offset-4" :href="item.replaceAll(' ', '_').toLocaleLowerCase()">
            {{ item }}
          </a>
        </div>
      </div>
    </div>

    <div class="flex justify-center gap-4">
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
import { SOCIALS, FOOTER_ITEMS } from '../pages/constants'
</script>

<style>
</style>
