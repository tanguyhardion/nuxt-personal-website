<script setup lang="ts">
import { ref, watch } from 'vue';
import { RouterLink, RouterView, useRoute } from 'vue-router';

const route = useRoute();

const links = ref([
  { name: 'Home', path: '/', color: '#5ec9f8', active: true },
  { name: 'Portfolio', path: '/portfolio', color: '#5ab836', active: false },
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
  }
);
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
  background-size: 200% 200%;
  -webkit-animation: gradient 30s ease infinite;
  -moz-animation: gradient 30s ease infinite;
  animation: gradient 30s ease infinite;
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

    &.router-link-active,
    &:hover {
      color: var(--link-color);
      text-decoration: underline;
      text-underline-offset: 2px;
    }
  }
}

main {
  margin: 80px 20px 0 20px;
}

@-webkit-keyframes gradient {
  0% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}

@-moz-keyframes gradient {
  0% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}

@keyframes gradient {
  0% {
    background-position: 50% 100%;
  }
  50% {
    background-position: 50% 0%;
  }
  100% {
    background-position: 50% 100%;
  }
}
</style>
