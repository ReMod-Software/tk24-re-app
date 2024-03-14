<template>
	<header
		class="p-4 flex justify-between bg-transparent backdrop-blur-sm sticky top-0 z-10 md:px-16"
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
				class="text-2xl font-semibold text-center no-underline hover:underline font-serif text-white bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] px-3 py-1 rounded-lg"
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
			<NuxtImg
				class="h-8 w-8 cursor-pointer dark:invert"
				src="/svg/dark.svg"
				alt="Toggle Dark Mode"
				@click="changeColor"
			/>
		</nav>

		<Sheet>
			<SheetTrigger class="lg:hidden">
				<NuxtImg class="h-8 w-8" src="/svg/menu.svg" alt="Menu" />
			</SheetTrigger>

			<SheetContent
				class="p-4 flex flex-col rounded-s-3xl border border-l-2 border-slate-200 bg-slate-100"
			>
				<SheetHeader class="text-gray-200">
					<SheetTitle
						class="text-2xl font-semibold text-gray-800"
					>Menu</SheetTitle>
				</SheetHeader>

				<div class="flex flex-col gap-4 py-8">
					<NuxtLink
						v-for="header in HEADER_NAV"
						class="flex items-center gap-2 text-left rounded-3xl text-xl font-medium hover:underline p-3 bg-slate-200"
						:to="`/${header.content}`"
					>
						<img
							class="h-12 w-12 p-1"
							:src="header.image"
							:alt="header.content"
						/>
						{{ header.content }}
					</NuxtLink>

					<NuxtLink
						class="flex items-center gap-2 text-left rounded-3xl text-xl font-medium hover:underline p-3 pl-6 bg-slate-200"
						to="/login"
					>
						Login
					</NuxtLink>

					<NuxtLink
						v-if="isLoggedIn"
						class="flex items-center gap-2 text-left rounded-3xl text-xl font-medium pl-6 hover:underline p-3 bg-slate-200"
						@click="logout"
					>
						Logout
					</NuxtLink>
				</div>
			</SheetContent>
		</Sheet>
	</header>
	<div
		class="fixed p-16 top-0 left-0 flex w-full h-full items-end justify-end hover:shadow-xl hover:shadow-gray-400"
		id="chat-btn"
	>
		<NuxtLink
			class="flex aspect-square p-2 rounded-lg bg-gradient-to-br from-[#E49DDC] to-[#86B5FC]"
			href="/chat/"
		>
			<img src="/svg/chat-bot.svg" class="h-full w-full invert" />
		</NuxtLink>
	</div>
</template>

<script setup lang="ts">
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTrigger,
} from "@/components/ui/sheet"
import { type Auth, getAuth, onAuthStateChanged, signOut } from "firebase/auth"
import { HEADER_NAV } from "~/pages/constants"
import { database } from "~/server/firebase"

const colorMode = useColorMode()
const changeColor = () => (colorMode.preference = colorMode.value === "light"
	? "dark"
	: "light")

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
