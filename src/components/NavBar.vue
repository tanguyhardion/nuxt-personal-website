<script setup lang="ts">
import { watch } from 'vue';
import { RouterLink, useRoute } from 'vue-router';

const props = defineProps<{
  links: { name: string; path: string; color: string; active: boolean }[];
}>();
const links = props.links;

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
}</script>

<template>
  <nav>
    <RouterLink v-for="link in links" :key="link.path" :to="link.path" :style="{ '--link-color': link.color }"
      class="nav-link">
      {{ link.name }}
      <span class="underline"></span>
    </RouterLink>
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