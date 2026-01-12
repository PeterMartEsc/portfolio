<template>
    <Navbar/>
    <div id="top" class="min-h-screen bg-black text-white">
        <div class="max-w-4xl mx-auto px-6 py-10">

            <section id="proyectos" class="mb-16">
                <h2 class="text-2xl font-semibold">Proyectos</h2>

                <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <ProjectCard
                        v-for="project in projects"
                        :key="project.title"
                        :title="project.title"
                        :description="project.description"
                    />
                </div>
            </section>
        </div>
    </div>
</template>

<script setup lang="ts">
    import Navbar from '../components/Navbar.vue';
    import ProjectCard from '@/components/ProjectCard.vue';

    const projects = [
        {
            title: "Formulario Arcane",
            description: "Descripción breve del proyecto",
            tags: ['Vue', 'Tailwind', 'Vite'],
            demoUrl:'https://petermartesc.github.io/arcane-form/',
            codeUrl:'https://github.com/PeterMartEsc/arcane-form'
        },
        {
            title: "Proyecto 2",
            description: "Descripción breve del proyecto",
            tags: ['Spring-boot', 'Bootstrap', 'Java'],
            demoUrl:'https://petermartesc.github.io/arcane-form/',
            codeUrl:'https://github.com/PeterMartEsc/arcane-form'
        },
        {
            title: "Proyecto 3",
            description: "Descripción breve del proyecto",
            tags: ['React', 'Bootstrap', 'Typescript'],
            demoUrl:'https://petermartesc.github.io/arcane-form/',
            codeUrl:'https://github.com/PeterMartEsc/arcane-form'
        },
        {
            title: "Proyecto 4",
            description: "Descripción breve del proyecto",
            tags: ['React', 'Bootstrap', 'JavaScript'],
            demoUrl:'https://petermartesc.github.io/arcane-form/',
            codeUrl:'https://github.com/PeterMartEsc/arcane-form'
        },
    ]
</script>

<style scoped>

</style>