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
  return route === 'index'
    ? 'Tanguy Hardion'
    : `Tanguy Hardion - ${route.charAt(0).toUpperCase() + route.slice(1)}`;
}
</script>

<template>
  <div class="app-bar">
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
    <div class="socials">
      <a
        href="https://linkedin.com/in/tanguy-hardion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NuxtImg
          class="social linkedin"
          src="/icons/linkedin.png"
        />
      </a>
      <a
        href="https://github.com/tanguyhardion"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NuxtImg
          class="social github"
          src="/icons/github.png"
        />
      </a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.app-bar {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 16px;

  nav {
    display: flex;
    justify-content: space-around;
    width: 500px;

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

  .socials {
    display: flex;
    gap: 16px;

    .social {
      width: 32px;
      height: 32px;
      transition: filter 0.4s;

      &.linkedin {
        filter: saturate(0);

        &:hover {
          filter: saturate(1);
        }
      }

      &.github:hover {
        filter: brightness(0) invert(1);
      }
    }
  }
}
</style>
