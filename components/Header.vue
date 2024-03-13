<template>
	<header class="p-4 flex justify-between bg-transparent backdrop-blur-md sticky top-0 z-10 md:px-16">
		<a href="/">
			<img src="/branding/beacon_logo_base.png" class="h-12 w-12" />
		</a>
		<nav class="hidden md:flex gap-6 justify-center items-center">
			<NuxtLink v-for="item in HEADER_NAV" :to='"../" + item.content'
				class="text-2xl font-semibold text-center text-black no-underline hover:underline underline-offset-4 font-serif">
				{{ item.content }}
		</NuxtLink>

			<NuxtLink to="/login"
				class="text-2xl font-semibold text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] px-4 py-2 rounded-lg">
				Login
			</NuxtLink>
		</nav>
		<img src="/svg/menu.svg" class="h-12 w-12 p-2 block md:hidden" />
	</header>
</template>

<script setup lang="ts">
import { HEADER_NAV } from "../pages/constants"
import { auth } from "~/server/firebase";

const logout = async () => {
	await auth.signOut();
	window.location.href = "/";
};

</script>

<style></style>
