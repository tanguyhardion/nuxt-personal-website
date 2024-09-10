<script setup lang="ts">
import AcademicCard from '@/components/AcademicCard.vue';
import { academicList } from '@/data/academic-list';
</script>

<template>
  <div class="academics">
    <AcademicCard v-for="academic in academicList" :key="academic.school.name" :academic="academic">
    </AcademicCard>
  </div>
</template>

<style lang="scss" scoped>
.academics {
  width: 90%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
}
</style>
