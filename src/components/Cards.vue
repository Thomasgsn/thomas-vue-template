<script setup lang="ts">
import { ref } from 'vue'
import { useMouse } from '@vueuse/core'

const { x, y } = useMouse();
const el = ref<HTMLElement | null>(null)

withDefaults(
    defineProps<{
        img: string,
        img2: string | undefined,
        alt: string,
        desc: string,
        color: string,
        color2: string | undefined,
    }>(),
    {
        color: 'green'
    }
)

import { useDark } from '@vueuse/core'
const isDark = useDark();
</script>

<template>
    <div class="justify-items mt-12">
        <div class="card" :style="{
            '--x': `${x - (el?.offsetLeft ?? 0)}px`,
            '--y': `${y - (el?.offsetTop ?? 0)}px`,
            '--color': `${isDark && color2 ? color2 : color}`
        }" ref="el">
            <div class="justify-items gap-6 bg-gray-200 dark:bg-gray-900 relative p-4 rounded-lg">
                <img class="w-12 h-12" :src="isDark && img2 ? img2 : img" :alt="alt">
                <p>{{ desc }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.card {
    @apply p-[2px] bg-gray-200 dark:bg-gray-900 relative rounded-lg overflow-hidden;

    &::before {
        content: '';
        background: radial-gradient(200px circle at var(--x) var(--y), var(--color), transparent);
        @apply absolute inset-0
    }
}
</style>