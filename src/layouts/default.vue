<script setup lang="ts">
useSeoMeta({
  description: `I'm looking for a 6-month end-of-studies internship abroad starting in February 2025.
  I'm a computer engineering student, majoring in AI and Data Science at UTC.`,
  ogDescription: `I'm looking for a 6-month end-of-studies internship abroad starting in February 2025.
  I'm a computer engineering student, majoring in AI and Data Science at UTC.`,
  ogImage: 'https://i.imgur.com/ne4z3Jr.png'
});
</script>

<template>
  <div>
    <NuxtRouteAnnouncer />

    <div class="banner">Work in progress.</div>

    <header>
      <NavBar />
    </header>

    <main>
      <NuxtPage />
    </main>
  </div>
</template>

<style lang="scss" scoped>
.banner {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 0.9rem;
  font-weight: bold;
  color: #757678;
  background: #151515;
  padding: 8px 16px;
}

header {
  width: 100%;
}

main {
  margin: 60px 20px 20px 20px;
}
</style>
