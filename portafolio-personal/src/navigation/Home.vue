<template>
  <div class="w-full min-h-screen bg-white bg-[radial-gradient(#BBBFBA_1px,transparent_1px)] [background-size:24px_24px] font-sans text-negro selection:bg-salmon selection:text-white">

    <Navbar />

    <main class="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between py-16 md:py-32 px-6 md:px-12 gap-12 md:gap-16">

      <div class="flex-1 md:flex-[1.2] flex flex-col items-center md:items-start text-center md:text-left">

        <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gris/10 border border-gris/30 text-xs font-semibold tracking-wider uppercase text-negro/80 mb-5">
          <span class="w-2 h-2 rounded-full bg-naranja-1 animate-pulse"></span>
          Disponible para proyectos
        </div>

        <p class="text-sm md:text-base font-bold tracking-wide text-gris uppercase mb-2">
          ¡Hola! Soy Pedro Martín Escuela
        </p>

        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
          Desarrollador Web<br class="hidden md:block" />
          <span class="bg-gradient-to-r from-naranja-2 via-naranja-1 to-salmon bg-clip-text text-transparent">
            y Multiplataforma
          </span>
        </h1>

        <p class="text-[0.9rem] md:text-base text-negro/70 leading-relaxed mb-10 max-w-[520px] text-justify md:text-left font-normal">
          Técnico en Desarrollo de Aplicaciones Multiplataformas y Desarrollo de Aplicaciones Web 🧑‍💻. Disfruto creando y aprendiendo cada día.
          Mi pasión son los videojuegos 2D 🎮, la música 🎵, el cine 🎥 y los libros 📚.
        </p>

        <button
          class="group relative bg-naranja-1 hover:bg-naranja-2 active:scale-[0.98] text-white rounded-full px-8 py-4 text-sm font-bold inline-flex items-center gap-3 transition-all duration-300 cursor-pointer shadow-lg shadow-naranja-1/20 hover:shadow-xl hover:shadow-naranja-2/30"
          @click="descargarPDF"
        >
          Descargar Curriculum
          <span class="text-lg transition-transform duration-300 group-hover:translate-x-1">→</span>
        </button>
      </div>

      <div class="flex-1 md:flex-[0.8] flex justify-center md:justify-end w-full">
        <div class="relative group">
          <div class="absolute -inset-2 rounded-2xl bg-gradient-to-tr from-salmon to-naranja-1 opacity-25 blur-lg transition duration-500 group-hover:opacity-40"></div>

          <div class="relative bg-white p-3 rounded-2xl border border-gris/20 shadow-xl transition-transform duration-500 group-hover:scale-[1.02]">
            <img
              src="@/assets/foto-carnet_PedroMartinEscuela.jpg"
              alt="Pedro Martín Escuela"
              class="w-full max-w-[260px] md:max-w-[310px] h-auto object-cover rounded-xl hover:grayscale-0 transition-all duration-500"
            />
          </div>
        </div>
      </div>

    </main>
  </div>
</template>

<script setup>
import Navbar from '@/components/Navbar.vue';
import MiCV from '@/assets/CV_PedroMartinEscuela_15122025.pdf';

function descargarPDF() {
  const link = document.createElement('a');
  link.href = MiCV;
  link.download = 'cv_PedroMartinEscuela.pdf';
  link.click();
}
</script>
