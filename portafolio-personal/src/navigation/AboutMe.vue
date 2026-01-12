<template>
    <Navbar/>
    <div id="top" class="min-h-screen bg-black text-white">
        <div class="max-w-4xl mx-auto px-6 py-10">
            <header class="mb-16">
                <h1 class="text-4xl font-bold">Pedro Martín Escuela</h1>
                <p class="mt-2 text-white/70">Frontend & Backend Developer · Vue · Tailwind</p>

                <div class="text-sm text white">
                    petermartesc@gmail.com
                </div>
            </header>
            
            <section id="sobre-mi" class="mb-16">
                <h2 class="text-2xl font-semibold">Sobre mí</h2>
                <p class="mt-4 text-white/70">
                    Aquí escribirás una breve presentación personal.
                </p>
            </section>

            <footer class="bottom-0 text-sm text-white/50">© 2026 — Pedro Martín Escuela</footer>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Navbar from '../components/Navbar.vue';
</script>

<style scoped>

</style>