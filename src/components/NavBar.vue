<script setup lang="ts">
import { watch } from 'vue';

const links = [
  { name: 'Home', path: '/', color: '#dc143c', active: true },
  { name: 'Experience', path: '/experience', color: '#f16529', active: false },
  { name: 'Projects', path: '/projects', color: '#5ec9f8', active: false },
  { name: 'Skills', path: '/skills', color: '#9148ff', active: false },
  { name: 'Academics', path: '/academics', color: '#ffdd48', active: false },
  { name: 'More', path: '/more', color: '#757678', active: false }
];

const route = useRoute();

watch(
  () => route.name,
  async (newRoute) => {
    links.forEach((link) => {
      link.active = link.name.toLowerCase() === newRoute;
    });

    if (newRoute) {
      const routeString = newRoute.toString();

      document.title = getTitle(routeString);
    }
  }
);

function getTitle(route: string) {
  return route === 'home'
    ? 'Tanguy Hardion'
    : `Tanguy Hardion - ${route.charAt(0).toUpperCase() + route.slice(1)}`;
}
</script>

<template>
  <nav>
    <NuxtLink
      v-for="link in links"
      :key="link.path"
      :to="link.path"
      :style="{ '--link-color': link.color }"
      class="nav-link"
    >
      {{ link.name }}
      <span class="underline"></span>
    </NuxtLink>
  </nav>
</template>

<style lang="scss" scoped>
nav {
  display: flex;
  justify-content: space-around;

  .nav-link {
    font-weight: 600;
    text-decoration: none;
    display: inline-block;

    .underline {
      display: block;
      height: 2px;
      margin: 0 auto;
      width: 0;
      transition: width 0.4s ease-out;
      background: var(--foreground-default);
    }

    &.router-link-active,
    &:hover {
      color: var(--link-color);

      .underline {
        width: 100%;
        background: var(--link-color);
      }
    }
  }
}
</style>
