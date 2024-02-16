<template>
  <Header />
  <main class="p-24">

    <!-- Create a form asking user for their name, phone number and email, their feedback/complaint and a submit button -->
    <form class="flex flex-col gap-4">
      <input type="text" placeholder="Name" class="p-4 rounded-xl border-solid border border-gray-300" />
      <input type="tel" placeholder="Phone Number" class="p-4 rounded-xl border-solid border border-gray-300" />
      <input type="email" placeholder="Email" class="p-4 rounded-xl border-solid border border-gray-300" />
      <textarea placeholder="Feedback/Complaint" class="p-4 rounded-xl border-solid border border-gray-300"></textarea>
      <button
        class="text-white rounded-lg uppercase font-semibold bg-gradient-to-br from-[#E49DDC] to-[#86B5FC] p-4">Submit</button>
    </form>
  </main>

  <Footer />
</template>


<script setup lang="ts">

import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'

</script>
