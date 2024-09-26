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

    <div class="banner">Work in progress.</div>

    <NavBar />

    <main :class="{ 'home-page': homePage }">
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

.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: #505050;
  background: #101010;
  padding: 8px 16px;
}

main {
  margin: 0 20px 20px 20px;

  &:not(.home-page) {
    margin-top: 40px;
  }
}
</style>
