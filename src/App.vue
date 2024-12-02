<script setup lang="ts">
import ThemeToggler from './components/ThemeToggler.vue'

// ↓ Delete this ↓
import Del from './Delete/Del.vue'
// ↑ Delete this ↑
</script>

<template>
    <div className="body">
        <div className="margin">
            <h1 className="text-lg">
                Vue TypeScript Thomas's Template<span className="animate-pulse">.</span>
            </h1>
            <ThemeToggler />
        </div>

        <!-- ↓ Delete this ↓ -->
        <Del />
        <!-- ↑ Delete this ↑ -->
    </div>
</template>

<style scoped>
.body {
    @apply h-screen bg-light-background dark:bg-dark-background transition-colors;

    .margin {
        @apply mx-[5vw] sm:mx-[10vw] md:mx-[20vw] py-16 justify-between flex items-center;
    }
}
</style>