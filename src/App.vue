<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

const links = ref([
  { name: 'Home', path: '/', color: '#5ec9f8', active: true },
  { name: 'Portfolio', path: '/portfolio', color: '#dc143c', active: false },
  { name: 'Experience', path: '/experience', color: '#f16529', active: false },
  { name: 'Skills', path: '/skills', color: '#9148ff', active: false },
  { name: 'Academics', path: '/academics', color: '#ffdd48', active: false },
  { name: 'More', path: '/more', color: '#757678', active: false }
]);

watch(
  () => route.name,
  async (newRoute) => {
    links.value.forEach((link) => {
      link.active = link.name.toLowerCase() === newRoute;
    });

    if (newRoute) {
      const routeString = newRoute.toString();

      document.title = getTitle(routeString);
    }
  }
);

function getTitle(route: string) {
  return route === 'Home'
    ? 'Tanguy Hardion'
    : `Tanguy Hardion - ${route.charAt(0).toUpperCase() + route.slice(1)}`;
}
</script>

<template>
  <div
    class="gradient"
    :style="{
      '--active-color': links.find((l) => l.active)?.color + 'B3'
    }"
  ></div>

  <header>
    <nav>
      <RouterLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        :style="{ '--link-color': link.color }"
        class="nav-link"
      >
        {{ link.name }}
        <span class="underline"></span>
      </RouterLink>
    </nav>
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
  background: linear-gradient(150deg, var(--active-color), #000000, #000000);
  background-size: 300% 300%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
}

header {
  width: 600px;
  padding: 16px;
  position: fixed;
  top: 0;
  right: 0;
}

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

main {
  margin: 80px 20px 0 20px;
}
</style>
