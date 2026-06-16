import { createRouter, createWebHistory } from 'vue-router'
import Proyectos from '@/navigation/Proyectos.vue'
import Habilidades from '@/navigation/Habilidades.vue'
import Experiencia from '@/navigation/Experiencia.vue'
import Contacto from '@/navigation/Contacto.vue'
import Home from '@/navigation/Home.vue'

const routes = [
  { path: '/', component: Home },
  { path: '/proyectos', component: Proyectos },
  { path: '/habilidades', component: Habilidades },
  { path: '/experiencia', component: Experiencia },
  { path: '/contacto', component: Contacto },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
