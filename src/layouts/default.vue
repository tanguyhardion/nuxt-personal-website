<script setup lang="ts">
useSeoMeta({
  description: `I'm looking for a 6-month end-of-studies internship abroad starting in February 2025.
  I'm a computer engineering student, majoring in AI and Data Science at UTC.`,
  ogDescription: `I'm looking for a 6-month end-of-studies internship abroad starting in February 2025.
  I'm a computer engineering student, majoring in AI and Data Science at UTC.`,
  ogImage: 'https://i.imgur.com/ne4z3Jr.png'
});

const route = useRoute();
const homePage = computed(() => route.name === 'index');
</script>

<template>
  <div :class="{ 'home-page': homePage }">
    <NuxtRouteAnnouncer />

    <NavBar />

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
div {
  &.home-page {
    overflow: hidden;
    max-height: 100vh;
  }
}

main {
  margin: 40px 20px 20px 20px;
}
</style>
