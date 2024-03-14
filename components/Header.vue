<template>
	<header
		class="p-4 flex justify-between bg-transparent backdrop-blur-md sticky top-0 z-10 md:px-16"
	>
		<NuxtLink to="/">
			<NuxtImg src="/branding/beacon_logo_base.png" class="h-12 w-12" />
		</NuxtLink>
		<nav class="hidden md:flex gap-6 justify-center items-center">
			<NuxtLink
				v-for="item in HEADER_NAV"
				:to='"../" + item.content'
				class="text-2xl font-semibold text-center text-black no-underline hover:underline underline-offset-4 font-serif"
			>
				{{ item.content }}
			</NuxtLink>

			<NuxtLink
				to="/login"
				class="text-2xl font-semibold text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] px-4 py-2 rounded-lg"
			>
				Login
			</NuxtLink>
			<button
				class="text-2xl font-semibold text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] px-4 py-2 rounded-lg"
				v-if="isLoggedIn"
				@click="logout"
			>
				Logout
			</button>
		</nav>
		<NuxtImg src="/svg/menu.svg" class="h-12 w-12 p-2 block md:hidden" />
	</header>
    <header class="p-2 md:p-4 backdrop-blur-xl sticky top-0">

        <div class="flex items-center justify-between gap-4 pr-4">
            <div class="flex items-center gap-4 p-1">
                <img class="h-10 md:h-16 md:w-16"
                    src="/branding/beacon_logo_base.png"
                    alt="Logo" />
                <NuxtLink to="/"
                    class="scroll-m-20 text-2xl md:text-3xl font-medium text-gray-700 hover:underline">Beacon
				</NuxtLink>
            </div>
            <nav class="hidden lg:flex gap-4 text-gray-600 justify-center items-center ">
                <NuxtLink v-for="header in HEADER_NAV" :key="header.content" :to='`/${header.content}`'
                    class="text-2xl font-semibold text-center  no-underline hover:underline underline-offset-4 font-serif">{{ header.content }}</NuxtLink>
            </nav>

            <Sheet>
                <SheetTrigger class="lg:hidden">
                    <NuxtImg class="h-8 w-8" src="/svg/menu.svg" alt="Menu" />
                </SheetTrigger>

                <SheetContent class="p-4 flex flex-col rounded-s-3xl border border-l-2 border-slate-200 bg-slate-100">

                <SheetHeader class="text-gray-200">
                    <SheetTitle class="text-2xl font-semibold text-gray-800">Menu</SheetTitle>
                </SheetHeader>

                        <div class="flex flex-col gap-4 py-8">
                            <NuxtLink v-for="header in HEADER_NAV" class="flex items-center gap-2 text-left rounded-3xl text-xl font-medium hover:underline p-3 bg-slate-200" :to='`/${header.content}`'>
                                <img class="h-12 w-12 p-1" :src="header.image" :alt="header.content"  />
                                {{ header.content }}
							</NuxtLink>
                        </div>
                </SheetContent>
            </Sheet>
        </div>

    </header>
</template>
  
<script setup lang="ts">

import { HEADER_NAV } from "~/pages/constants";
import {
    Sheet,
    SheetContent,
    SheetTrigger,
	SheetHeader
} from '@/components/ui/sheet'
import { getAuth, onAuthStateChanged, signOut, type Auth, } from "firebase/auth";

const isLoggedIn = ref(false)

let auth: Auth
onMounted(() => {
	auth = getAuth()
	onAuthStateChanged(auth, (user) => {
		if (user) {
			isLoggedIn.value = true
		} else {
			isLoggedIn.value = false
		}
	})
})

const logout = async () => {
	signOut(auth).then(() => {
		console.log("Logged out")
	}).catch((error) => {
		console.log(error)
	})
}
</script>
  
<style scoped>
/* Add any necessary styles here */
</style>