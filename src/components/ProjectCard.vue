<script setup lang="ts">
import { defineProps } from 'vue';
import type { Project } from '@/model/interfaces/project';

const props = defineProps<{
  project: Project;
}>();

const project = props.project;
</script>

<template>
  <div class="project">
    <div class="image">
      <img
        :src="project.image"
        alt="Project image"
      />
    </div>
    <div class="content">
      <div class="header">
        <h2>{{ project.title }}</h2>
        <div class="chips">
          <div class="duration chip">
            <span class="material-icons">schedule</span>
            <span>{{ project.duration }}</span>
          </div>
          <div class="team chip">
            <span class="material-icons">groups</span>
            <span>{{ project.team }}</span>
          </div>
          <div class="technologies chip">
            <span class="material-icons">code</span>
            <span>{{ project.technologies.join(', ') }}</span>
          </div>
        </div>
      </div>
      <div class="description">
        <p>{{ project.description }}</p>
      </div>
      <div
        class="link"
        v-if="project.link"
      >
        <a :href="project.link">{{ project.link }}</a>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  align-items: center;
  gap: 20px;
  width: 100%;

  .image {
    width: 150px;
    height: 150px;
    border-radius: 24px;
    overflow: hidden;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      h2 {
        font-size: 1.5rem;
      }

      .chips {
        display: flex;
        gap: 10px;

        .chip {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 2px 8px;
          border-radius: 8px;
          background-color: #121212;
          font-size: 0.8rem;
        }
      }
    }

    .description {
      font-size: 1rem;
    }
  }
}
</style>
