<script setup lang="ts">
import { useChat } from "ai/vue"
import { getAuth } from "firebase/auth"

const { messages, input, handleSubmit } = useChat()

getAuth().onAuthStateChanged(function(user) {
	// if (!user) {
	//   alert("You need to be logged in to access the AI chat")
	//   window.location.href = "/login"
	// }
})
const pfp = getAuth().currentUser?.photoURL
</script>

<template>
  <main class="dark:bg-[#201c1c] min-h-[100vh]">
    <Header />

    <div class="flex flex-col py-2 w-full px-4 items-center pb-40">
      <h1 class="text-4xl font-semibold dark:text-gray-300 mb-16">AI Chat</h1>

      <div class="flex flex-col items-center align-bottom rounded-3xl border border-gray-300 dark:border-gray-600 p-8 gap-4">
        <div v-for="m in messages" class="whitespace-pre-wrap w-[60vw]">
          <div v-if="m.role === 'user'" class="flex gap-4">
            <NuxtImg :src="pfp" class="h-10 w-10 bg-white rounded-lg invert p-2" />
            <h1 class="text-3xl font-semibold text-gray-600 dark:text-gray-200">{{ m.content }}</h1>
          </div>
          <div v-else class="flex gap-4">
            <NuxtImg src="/svg/mistral.svg" class="h-10 w-10 bg-white rounded-lg invert p-2" />

            <p class="text-xl ml-2 text-gray-800 dark:text-gray-200 mx-8 mb-8">{{ m.content }}</p>
          </div>
        </div>
        <div v-if="messages.length === 0" class="text-gray-700 dark:text-gray-400 text-2xl">
          <h1 class="text-2xl text-gray-800 dark:text-gray-200 font-semibold">Here are some questions you can ask:</h1>
          <p class="text-xl mt-4">How to list a property on Beacon?</p>
          <p class="text-xl mt-4">Tell me more about beacon.</p>
          <p class="text-xl mt-4">What are the motives of this platform?</p>
          <p class="text-xl mt-4">What is the best deal in X state?</p>
        </div>
      </div>
      <div class="flex flex-col fixed bottom-0 w-full items-center gap-2">
        <form @submit="handleSubmit" class="flex gap-4 mb-6 rounded-xl w-[60%]">
          <input class="p-4 w-full dark:bg-gray-700 rounded-xl shadow-xl" v-model="input" placeholder="Say something..." />
          <button class="bg-blue-700 text-blue-100 p-4 rounded-xl shadow-xl" type="submit">Send</button>
        </form>
        <p class="text-gray-400 text-base mb-4">
          Please note the AI might not be able to answer all the questions correctly.
        </p>
      </div>
    </div>
  </main>
</template>

<style>
#chat-btn {
	display: none;
}
</style>
