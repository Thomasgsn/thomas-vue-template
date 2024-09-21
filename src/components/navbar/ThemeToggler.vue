<script setup lang="ts">
import { Icon } from '@iconify/vue';
import { useDark, useToggle } from '@vueuse/core'

const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
    <button @click="toggleDark()">
        <Icon :icon="isDark ? `ph-moon` : `ph-sun`" height="20" />
    </button>
</template>