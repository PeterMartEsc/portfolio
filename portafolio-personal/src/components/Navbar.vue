<template>
    <header class="sticky top-0 bg-black/80 backdrop-blur border-b border-white/10">
        <div class="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
            <span class="font-semibold text-white/70">
                <router-link to="/">Pedro Martin Escuela</router-link>
            </span>
            <nav class="flex gap-6 text-sm text-white/70">
                <router-link to="/">Home</router-link>
                <router-link to="/about-me">About</router-link>
                <router-link to="/proyectos">Proyectos</router-link>
            </nav>

            <!-- Boton (Móvil) -->
            <button class="hidden">

            </button>

            <!-- Menu Desplegable (Móvil) -->
            <div class="hidden">

            </div>
        </div>
    </header>
</template>

<script setup lang="ts">

</script>

<style scoped>

</style>