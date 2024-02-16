<template>
    <Header />

    <main class="mb-16 md:mx-40 rounded-lg flex flex-col gap-4">
        <div class="flex flex-col">
            <div class="grid grid-cols-2">
                <div class="aspect-[4/3] flex items-end justify-end p-4">
<!--desc amenities specs -->
                </div>
            </div>
        </div>
    </main>

    <Footer />
</template>

<script setup lang="ts">
import Header from '../components/Header.vue'
import Footer from '../components/Footer.vue'
import Carousel from '../components/Carousel.vue'
</script>

<style>
img {
    object-fit: cover;
}

#half {
    height: 42%;
    width: 100%;
}
</style>
