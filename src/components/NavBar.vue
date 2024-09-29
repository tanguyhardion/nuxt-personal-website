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
const isMenuOpen = ref(false);

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

onMounted(() => {
  window.addEventListener('resize', handleResize);
});

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize);
});

function getTitle(route: string) {
  return route === 'index'
    ? 'Tanguy Hardion'
    : `Tanguy Hardion - ${route.charAt(0).toUpperCase() + route.slice(1)}`;
}

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}

function handleResize() {
  if (window.innerWidth > 768 && isMenuOpen.value) {
    isMenuOpen.value = false;
  }
}
</script>

<template>
  <div class="app-bar">
    <div
      class="menu-toggle"
      @click="toggleMenu"
    >
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
      <span :class="{ open: isMenuOpen }"></span>
    </div>
    <nav :class="{ 'menu-open': isMenuOpen }">
      <NuxtLink
        v-for="link in links"
        :key="link.path"
        :to="link.path"
        :style="{ '--link-color': link.color }"
        class="nav-link"
        @click="isMenuOpen = false"
      >
        {{ link.name }}
        <span class="underline"></span>
      </NuxtLink>
    </nav>
    <div class="socials">
      <a
        href="mailto:tanguy.hardion@etu.utc.fr"
        target="_blank"
        rel="noopener noreferrer"
        v-tooltip.bottom="'Email me'"
      >
        <NuxtImg
          class="social email"
          src="/icons/email.png"
        />
      </a>
      <a
        href="https://linkedin.com/in/tanguy-hardion"
        target="_blank"
        rel="noopener noreferrer"
        v-tooltip.bottom="'Add me on LinkedIn'"
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
        v-tooltip.bottom="'Check out my GitHub'"
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
  padding: 16px;
  width: 100%;

  .menu-toggle {
    display: none;
    position: relative;
    flex-direction: column;
    justify-content: space-around;
    cursor: pointer;
    width: 20px;
    height: 20px;

    span {
      display: block;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      transition: 0.5s;
      border-radius: 5px;
      background: white;
      width: 100%;
      height: 3px;

      &:nth-child(1) {
        transform: translate(-50%, -7px);

        &.open {
          transform: translate(-50%, -50%) rotate(-45deg);
        }
      }

      &:nth-child(2) {
        transform: translate(-50%, 0);

        &.open {
          width: 0;
        }
      }

      &:nth-child(3) {
        transform: translate(-50%, 7px);

        &.open {
          transform: translate(-50%, -50%) rotate(45deg);
        }
      }
    }
  }

  nav {
    display: flex;
    justify-content: space-around;
    width: 500px;

    .nav-link {
      display: inline-block;
      font-weight: 600;
      text-decoration: none;

      .underline {
        display: block;
        transition: width 0.4s ease-out;
        margin: 0 auto;
        background: var(--foreground-default);
        width: 0;
        height: 2px;
      }

      &.router-link-active,
      &:hover {
        color: var(--link-color);

        .underline {
          background: var(--link-color);
          width: 100%;
        }
      }
    }

    &.menu-open {
      display: flex;
      flex-direction: column;
      gap: 16px;
    }
  }

  .socials {
    display: flex;
    gap: 16px;

    .social {
      transition: filter 0.4s;
      width: 32px;
      height: 32px;

      &.email:hover {
        filter: brightness(0) invert(1);
      }

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

@media (max-width: 768px) {
  .menu-toggle {
    display: flex !important;
  }

  nav {
    display: none !important;

    &.menu-open {
      display: flex !important;
      position: absolute;
      left: 50px;
      flex-direction: column;
      gap: 8px;
      z-index: 1;
      box-shadow: 0 0 10px rgba(255, 255, 255, 0.1);
      border-radius: 24px;
      background: var(--background-default);
      padding: 16px;
      width: 50vw;
    }
  }
}
</style>
