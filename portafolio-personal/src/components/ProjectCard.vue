<template>
    <div class="border border-white/10 rounded-lg p-4">
        <h3 class="front-medium">
            {{ title }}
        </h3>
        <p class="mt-2 text-sm text-white/70">
            {{ description }}
        </p>
    </div>
</template>

<script setup lang="ts">

    defineProps({
        title: String,
        description: String,
    })

</script>

<style scoped>

</style>