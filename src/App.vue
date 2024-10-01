<script setup lang="ts">
import { ref } from 'vue'

import Cards from './components/Cards.vue'
import Navbar from './components/navbar/Navbar.vue'

const data = ref([
    { id: 1, img: '/vue.svg', alt: 'Vue', desc: 'Vue', color: '#41b883', },
    { id: 2, img: '/vueuse.svg', alt: 'Vueuse', desc: 'Vueuse', color: '#41b883', },
    { id: 3, img: '/vite.svg', alt: 'Vite', desc: 'Vite', color: '#9d5cfe', },
    { id: 4, img: '/tailwindcss.svg', alt: 'Tailwind CSS', desc: 'Tailwind CSS', color: '#38bdf8', },
    { id: 5, img: '/sun-moon.svg', img2: '/sun-moon-white.svg', alt: 'Sun and Moon', desc: 'Dark Mode with Tailwind CSS', color: '#1f2937', color2: '#f3f4f6' },
    { id: 6, img: '/iconify-no-text.svg', alt: 'Iconify', desc: 'Iconify', color: '#03a7f1', },
])
</script>

<template>
    <nav class="w-screen h-10 justify-items mt-2">
        <Navbar />
    </nav>
    <div class="justify-items gap-6">
        <div v-for="d in data" :key="d.id">
            <Cards :img='d.img' :img2="d.img2" :alt="d.alt" :desc='d.desc' :color="d.color" :color2="d.color2" />
        </div>
    </div>
</template>