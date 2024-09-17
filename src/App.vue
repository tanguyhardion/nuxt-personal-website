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
</script>

<template>

  <header>
    <NavBar :links="links" />
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style lang="scss" scoped>
header {
  width: 600px;
  padding: 16px;
  margin-left: auto;
}

main {
  margin: 60px 20px 0 20px;
}
</style>
