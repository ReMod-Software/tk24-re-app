<template>
  <Header />

  <main class="p-4 rounded-lg flex flex-col gap-12 md:gap-20">
    <div
      class="rounded-lg flex gap-8 md:gap-16 flex-col justify-center items-center h-full w-full aspect-[4/3] md:aspect-[21/9] p-8 md:p-0 text-white"
      id="main-hero">
      <h1 class="text-center text-xl md:text-4xl font-extralight">Looking for a <span
          class="font-serif text-2xl md:px-2 italic font-semibold md:text-6xl">space?</span> We have one <span
          class="font-serif text-2xl md:px-2 italic font-semibold md:text-6xl">for you!</span></h1>
      <div class="flex w-auto md:w-[65%] rounded-3xl">
        <input type="search" placeholder="Search for Properties!" class="border-box flex-grow p-2 px-4 rounded-none">
        <img src="/svg/search.svg" class="aspect-square bg-white invert p-2 h-full" />
      </div>
    </div>
    <div class="content md:mx-40 flex flex-col gap-8">
      <h1 class="text-2xl text-center">
        We care about our <span class="font-serif italic font-semibold">consumers</span>, and their quality of place...
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="ft in CONSUMER_FEATURES" class="border border-solid border-gray-500 flex flex-col gap-4 p-4 bg-gray-50 rounded-lg grad-box">
          <div class="flex justify-between items-center>">
            <img :src="'/svg/' + ft.icon + '.svg'" class="h-16 w-16">
            <h2 class="text-2xl font-semibold text-right">{{ ft.name }}</h2>
          </div>
          <hr class="border-gray-400">
            <p class="text-justify">{{ ft.description }}</p>
        </div>
      </div>
    </div>

    <div class="content md:mx-40 flex flex-col gap-8">
      <h1 class="text-2xl text-center">
        ...but we also care about our <span class="font-serif italic font-semibold">agents</span>!
      </h1>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div v-for="ft in PROVIDER_FEATURES" class="border border-solid border-gray-500 flex flex-col gap-4 p-4 bg-gray-50 rounded-lg grad-box">
          <div class="flex justify-between items-center>">
            <img :src="'/svg/' + ft.icon + '.svg'" class="h-16 w-16">
            <h2 class="text-2xl font-semibold text-right">{{ ft.name }}</h2>
          </div>
          <hr class="border-gray-400">
            <p class="text-justify">{{ ft.description }}</p>
        </div>
      </div>
    </div>
  </main>

  <Footer />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

interface Feature {
  icon: string
  name: string
  description: string
}

const CONSUMER_FEATURES: Feature[] = [
  {
    "name": "Personalized Property Matches",
    "description": "We care about our consumers, and their quality of stay. Our advanced algorithms ensure you find the perfect property tailored to your preferences, saving you time and effort.",
    "icon": "catalog"
  },
  {
    "name": "Transparent Pricing",
    "description": "Your peace of mind matters to us. We provide transparent pricing and detailed property information, empowering you to make informed decisions without any hidden surprises.",
    "icon": "tag"
  },
  {
    "name": "Exceptional Customer Support",
    "description": "Your satisfaction is our priority. Our dedicated support team is available round-the-clock to address your queries, guide you through the process, and ensure a seamless experience from search to purchase.",
    "icon": "user--service-desk"
  },
  {
    "name": "Verified Listings",
    "description": "Trust and reliability are non-negotiable. Rest assured, all our listings undergo rigorous verification processes, so you can browse with confidence knowing that every property meets our high standards.",
    "icon": "checkmark--filled"
  }
]

const PROVIDER_FEATURES: Feature[] = [
  {
    "name": "Maximized Exposure",
    "description": "We value our providers just as much. By listing with us, you gain access to a vast network of potential buyers and renters, ensuring maximum exposure for your property and increasing your chances of a successful transaction.",
    "icon": "ibm-watson--discovery"
  },
  {
    "name": "Customized Marketing Strategies",
    "description": ": Your property deserves the spotlight. Our tailored marketing strategies highlight the unique features of your property, attracting qualified leads and optimizing your chances of a quick sale or rental.",
    "icon": "store"
  },
  {
    "name": "Effortless Management",
    "description": "Simplify your property management journey. Our user-friendly platform allows you to effortlessly manage listings, track inquiries, and communicate with potential clients, saving you time and hassle.",
    "icon": "gui--management"
  },
  {
    "name": "Professional Support",
    "description": "Your success is our mission. Our experienced team of real estate professionals is here to support you at every step, providing expert advice, valuable insights, and personalized assistance to help you achieve your goals.",
    "icon": "help-desk"
  },
]


</script>

<style>
#main-hero {
  background-image: url("/photos/search_bg.webp");
  background-size: cover;
}
</style>