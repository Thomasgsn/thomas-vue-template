<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core'
import { MoonIcon, SunIcon } from '@heroicons/vue/24/outline';
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <button @click="toggleDark()" class="hover:scale-110 transition-transform w-6">
        <p v-if="isDark">
            <MoonIcon class="icon" />
        </p>
        <p v-if="!isDark">
            <SunIcon class="icon" />
        </p>
    </button>
</template>