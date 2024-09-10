<script setup lang="ts">
import { ref } from 'vue';
import { RouterView } from 'vue-router';
import NavBar from '@/components/NavBar.vue';

const links = ref([
  { name: 'Home', path: '/', color: '#dc143c', active: true },
  { name: 'Experience', path: '/experience', color: '#f16529', active: false },
  { name: 'Projects', path: '/projects', color: '#5ec9f8', active: false },
  { name: 'Skills', path: '/skills', color: '#9148ff', active: false },
  { name: 'Academics', path: '/academics', color: '#ffdd48', active: false },
  { name: 'More', path: '/more', color: '#757678', active: false }
]);

function randomDegree(): string {
  return Math.floor(Math.random() * 360) + 'deg';
}
</script>

<template>
  <div class="gradient" :style="{
    '--active-color': links.find((l) => l.active)?.color + 'B3',
    '--orientation': `${randomDegree()}`
  }"></div>

  <header>
    <NavBar :links="links" />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
.gradient {
  position: fixed;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(var(--orientation), var(--active-color), #000000, #000000);
  background-size: 300% 300%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

header {
  width: 600px;
  padding: 16px;
  margin-left: auto;
}

main {
  margin: 60px 20px 0 20px;
}
</style>
