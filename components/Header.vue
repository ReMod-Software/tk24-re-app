<template>
	<header
		class="p-4 flex justify-between bg-transparent backdrop-blur-sm sticky top-0 z-10 md:px-16 dark:bg-[#201c1c]"
	>
		<div class="flex items-center gap-4 p-1">
                <img class="h-10 md:h-14 md:w-14"
                    src="/branding/beacon_logo_base.png"
                    alt="Logo" />
                <NuxtLink to="/"
                    class="scroll-m-20 text-2xl md:text-3xl font-medium text-gray-700 dark:text-gray-100 hover:underline">Beacon
				</NuxtLink>
            </div>
		<nav class="hidden md:flex gap-6 justify-center items-center">
			<NuxtLink
				v-for="item in HEADER_NAV"
				:to='"../" + item.content'
				class="text-2xl font-semibold text-center text-black dark:text-gray-100  no-underline hover:underline underline-offset-4 font-serif"
			>
				{{ item.content }}
			</NuxtLink>

			<button
				class="text-2xl font-semibold text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] px-4 py-2 rounded-lg"
				v-if="isLoggedIn"
				@click="logout"
			>
				Logout
			</button>

			<NuxtLink
			    v-else
				to="/login"
				class="text-2xl font-semibold text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] dark:from-[#de74d1] dark:to-[#3183ff] px-3 py-1 rounded-lg"
			>
				Login
			</NuxtLink>
            <NuxtImg
                class="h-8 w-8 cursor-pointer dark:invert"
                src="/svg/dark.svg"
                alt="Toggle Dark Mode"
                @click="changeColor" />

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

							<NuxtLink class="flex items-center gap-2 text-left rounded-3xl text-xl font-medium hover:underline p-3 pl-6 bg-slate-200" to="/login">
                                Login
							</NuxtLink>

							<NuxtLink v-if="isLoggedIn" class="flex items-center gap-2 text-left rounded-3xl text-xl font-medium pl-6 hover:underline p-3 bg-slate-200" @click="logout">
                                Logout
							</NuxtLink>
                        </div>
                </SheetContent>
            </Sheet>
        </nav>
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
import { firebaseConfig } from "~/server/firebase";
import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged, signOut, type Auth, } from "firebase/auth";
import { ref } from "vue";

const colorMode = useColorMode()
const changeColor = () => (colorMode.preference = (colorMode.value === 'light' ? 'dark' : 'light'))

initializeApp(firebaseConfig)

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