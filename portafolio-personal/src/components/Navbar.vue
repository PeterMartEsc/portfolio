<template>
  <header class="sticky top-0 z-50 bg-[#ededed] border-b border-black/5 font-sans">
    <div class="max-w-6xl mx-auto px-6 py-5 flex items-center justify-end sm:justify-center">

      <nav class="hidden sm:flex gap-8 lg:gap-10 text-xs md:text-sm font-bold items-center">
        <router-link
          to="/"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] transition-colors tracking-wider uppercase pb-1"
          exact-active-class="!text-black border-b-2 border-naranja-1"
        >
          About Me
        </router-link>
        <router-link
          to="/proyectos"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] transition-colors tracking-wider uppercase pb-1"
          exact-active-class="!text-black border-b-2 border-[#ed643b]"
        >
          Proyectos
        </router-link>
        <router-link
          to="/habilidades"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] transition-colors tracking-wider uppercase pb-1"
          exact-active-class="!text-black border-b-2 border-[#ed643b]"
        >
          Habilidades
        </router-link>
        <router-link
          to="/experiencia"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] transition-colors tracking-wider uppercase pb-1"
          exact-active-class="!text-black border-b-2 border-[#ed643b]"
        >
          Experiencia
        </router-link>
        <router-link
          to="/contacto"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] transition-colors tracking-wider uppercase pb-1"
          exact-active-class="!text-black border-b-2 border-[#ed643b]"
        >
          Contacto
        </router-link>
      </nav>

      <button
        class="sm:hidden rounded-lg border border-black/10 px-3 py-2 text-sm text-[#1a1a1a] hover:bg-black/5 transition-colors"
        @click="isOpen = !isOpen"
        :aria-expanded="isOpen ? 'true' : 'false'"
        aria-label="Abrir menú"
      >
        ☰
      </button>
    </div>

    <div v-if="isOpen" class="sm:hidden border-t border-black/5 bg-[#ededed]">
      <nav class="px-6 py-4 flex flex-col gap-4 text-xs font-bold">
        <router-link
          to="/"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] uppercase tracking-wider pb-1"
          exact-active-class="!text-black border-l-2 border-[#ed643b] pl-2"
          @click="closeMenu"
        >
          About Me
        </router-link>
        <router-link
          to="/proyectos"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] uppercase tracking-wider pb-1"
          exact-active-class="!text-black border-l-2 border-[#ed643b] pl-2"
          @click="closeMenu"
        >
          Proyectos
        </router-link>
        <router-link
          to="/habilidades"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] uppercase tracking-wider pb-1"
          exact-active-class="!text-black border-l-2 border-[#ed643b] pl-2"
          @click="closeMenu"
        >
          Habilidades
        </router-link>
        <router-link
          to="/experiencia"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] uppercase tracking-wider pb-1"
          exact-active-class="!text-black border-l-2 border-[#ed643b] pl-2"
          @click="closeMenu"
        >
          Experiencia
        </router-link>
        <router-link
          to="/contacto"
          class="text-[#1a1a1a]/70 hover:text-[#ed643b] uppercase tracking-wider pb-1"
          exact-active-class="!text-black border-l-2 border-[#ed643b] pl-2"
          @click="closeMenu"
        >
          Contacto
        </router-link>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
  import { ref } from 'vue'

  const isOpen = ref(false)

  function closeMenu() {
    isOpen.value = false
  }
</script>
