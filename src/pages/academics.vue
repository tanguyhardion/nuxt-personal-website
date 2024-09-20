<script setup lang="ts">
import { academicList } from '~/data/academic-list';
</script>

<template>
  <div class="academics">
    <AcademicCard
      v-for="academic in academicList"
      :key="academic.school.name"
      :academic="academic"
    >
    </AcademicCard>
  </div>
</template>

<style lang="scss" scoped>
.academics {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  gap: 20px;
}
</style>
