<script setup lang="ts">
import { defineProps } from 'vue';

import type { Project } from '@/model/interfaces/project';
import { ProjectContext } from '@/model/enums/project-context';
import { getImageUrl } from '@/utils/image-url';

const props = defineProps<{
  project: Project;
}>();

const project = props.project;
</script>

<template>
  <div class="project">
    <div class="image">
      <img
        :src="getImageUrl(`projects/${project.image}`)"
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
          <div class="context chip">
            <span
              class="material-icons"
              v-if="project.context === ProjectContext.Personal"
              >person</span
            >
            <span
              class="material-icons"
              v-else-if="project.context === ProjectContext.School"
              >school</span
            >
            <span
              class="material-icons"
              v-else-if="project.context === ProjectContext.Work"
              >work</span
            >
            <span>{{ project.context }}</span>
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
      <div class="footer">
        <div
          class="link"
          v-if="project.link"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            v-if="project.link.includes('github.com')"
          />
          <a
            :href="project.link"
            target="_blank"
            >{{ project.link.replace('https://', '') }}</a
          >
        </div>
        <div
          class="context-logo"
          v-if="project.contextLogo"
        >
          <img
            :src="getImageUrl(`contexts/${project.contextLogo}`)"
            alt="Context logo"
          />
        </div>
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
  height: 200px;

  .image {
    width: 200px;
    height: 200px;
    border-radius: 24px;
    overflow: hidden;
    flex: 0 0 200px;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 100%;
    height: 100%;

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;

      h2 {
        font-size: 1.5rem;
        font-weight: 700;
      }

      .chips {
        display: flex;
        gap: 10px;

        .chip {
          display: flex;
          align-items: center;
          gap: 5px;
          padding: 4px 8px;
          border-radius: 8px;
          background-color: #121212;
          font-size: 0.8rem;

          .material-icons {
            font-size: 20px;
            margin-right: 2px;
          }
        }
      }
    }

    .description {
      font-size: 1rem;
      text-align: justify;
    }

    .footer {
      display: flex;
      align-items: center;

      .context-logo {
        width: 150px;
        margin-left: auto;

        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }

      .link {
        font-style: italic;
        display: flex;
        align-items: center;
        gap: 5px;

        img {
          width: 20px;
          margin-right: 5px;
          filter: invert(1);
        }
      }
    }
  }
}
</style>
