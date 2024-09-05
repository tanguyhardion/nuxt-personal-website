<script setup lang="ts">
import { ref } from 'vue';
import dayjs from 'dayjs';

let age = ref('');

setInterval(() => {
  const result = dayjs().diff(dayjs(1044801960000), 'year', true);
  age.value = result.toString().substring(0, 12);
}, 50);
</script>

<template>
  <div class="profile">
    <h1 class="name">Tanguy Hardion</h1>
    <p class="info">
      I'm a
      <b> {{ age }} </b>
      year-old computer engineering student, majoring in
      <b> AI </b>
      and
      <b> Data Science </b>
      at
      <b> UTC</b>.
    </p>
  </div>
  <div></div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;

  .name {
    font-size: 4.75rem;
    font-weight: 900;
    text-align: center;
  }

  .info {
    font-size: 1.5rem;

    b {
      font-weight: 700;
    }
  }
}
</style>
