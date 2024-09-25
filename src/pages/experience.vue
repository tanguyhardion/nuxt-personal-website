<script setup lang="ts">
import { experienceList } from '~/data/experience-list';
</script>

<template>
  <div class="experiences">
    <ExperienceCard
      v-for="experience in experienceList"
      :key="experience.company.name"
      :experience="experience"
    >
    </ExperienceCard>
  </div>
</template>

<style lang="scss" scoped>
.experiences {
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 32px;
}
</style>
