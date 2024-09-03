<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

const links = ref([
  { name: 'Home', path: '/', color: '#1462ac', active: true },
  { name: 'Portfolio', path: '/portfolio', color: '#f7b801', active: false },
  { name: 'Experience', path: '/experience', color: '#02ab24', active: false },
  { name: 'Academics', path: '/academics', color: '#e03a3e', active: false },
  { name: 'More', path: '/more', color: '#616366', active: false }
]);

watch(
  () => route.name,
  async (newRoute) => {
    links.value.forEach((link) => {
      link.active = link.name.toLowerCase() === newRoute;
    });
  }
);
</script>

<template>
  <div class="gradient"></div>
  <header>
    <nav>
      <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        class="nav-link"
      >
        {{ link.name }}
      </RouterLink>
    </nav>
  </header>
  <RouterView />
</template>

<style lang="scss" scoped>
.gradient {
  position: fixed;
  top: 0;
  left: 0;
  width: 45vw;
  height: 45vw;
  pointer-events: none;
  z-index: -1;
  background: radial-gradient(ellipse at top left, v-bind('links.find(l => l.active)?.color'), #000, #000);
}

header {
  width: 600px;
  padding: 10px;
  position: fixed;
  top: 0;
  right: 0;
}

nav {
  display: flex;
  justify-content: space-around;

  .nav-link {
    color: white;
    font-weight: 600;
    text-decoration: none;

    &.router-link-active,
    &:hover {
      color: v-bind('links.find(l => l.active)?.color');
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
}
</style>
