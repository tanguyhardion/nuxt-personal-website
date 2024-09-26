<script setup lang="ts">
import { Vue3Lottie } from 'vue3-lottie';
import animation from '~/assets/images/lottie/animation.json';
import dayjs from 'dayjs';

const age = ref('');

onMounted(() => {
  setInterval(() => {
    const result = dayjs().diff(dayjs(1047423600000), 'year', true);
    age.value = result.toString().substring(0, 12);
  }, 50);
});
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
    <p class="info">
      Currently, I'm looking for an
      <b> end-of-studies 6-month internship abroad </b>
      starting in
      <b>February 2025</b>.
    </p>
  </div>
  <div>
    <client-only>
      <Vue3Lottie
        :animationData="animation"
        class="lottie"
      />
    </client-only>
  </div>
</template>

<style lang="scss" scoped>
.profile {
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-bottom: 20px;
  gap: 30px;

  .name {
    font-size: 4.75rem;
    font-weight: 900;
  }

  .info {
    font-size: 1.5rem;
  }
}

.lottie {
  overflow: hidden;
  width: 100%;
  max-width: 600px;
  height: fit-content;
  animation: fadeIn 1s;
}

@media (max-width: 768px) {
  .profile {
    .name {
      font-size: 3.75rem;
    }

    .info {
      font-size: 1.25rem;
    }
  }
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
