<script setup lang="ts"></script>

<template>
  <div>
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
  font-size: 1.2rem;
  font-weight: bold;
  color: #757678;
  background: #151515;
  padding: 8px 16px;
}

header {
  width: 600px;
  padding: 16px;
  margin-left: auto;
}

main {
  margin: 60px 20px 0 20px;
}
</style>
