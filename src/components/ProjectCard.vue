<script setup lang="ts">
import type { Project } from '~/model/interfaces/project';
import { ProjectContext } from '~/model/enums/project-context';

const props = defineProps<{
  project: Project;
}>();
const project = props.project;
</script>

<template>
  <div class="project">
    <div class="image-container">
      <NuxtImg
        class="image"
        :src="`/illustrations/${project.image}`"
      />
    </div>
    <div class="content">
      <div class="header">
        <h2>{{ project.title }}</h2>
        <div class="chips">
          <div class="duration chip">
            <MdiIcon
              icon="mdiClock"
              size="20"
            />
            <span>{{ project.duration }}</span>
          </div>
          <div class="team chip">
            <MdiIcon
              icon="mdiAccountGroup"
              size="20"
              v-if="project.team > 1"
            />
            <MdiIcon
              icon="mdiAccount"
              size="20"
              v-else
            />
            <span>{{ project.team }}</span>
          </div>
          <div class="context chip">
            <MdiIcon
              icon="mdiHome"
              size="20"
              v-if="project.context === ProjectContext.Personal"
            />
            <MdiIcon
              icon="mdiSchool"
              size="20"
              v-else-if="project.context === ProjectContext.School"
            />
            <MdiIcon
              icon="mdiBriefcase"
              size="20"
              v-else-if="project.context === ProjectContext.Work"
            />
            <span>{{ project.context }}</span>
          </div>
          <div class="technologies chip">
            <MdiIcon
              icon="mdiCodeTags"
              size="20"
            />
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
          <NuxtImg
            class="image"
            src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png"
            v-if="project.link.includes('github.com')"
          />
          <a
            :href="project.link"
            target="_blank"
            v-if="project.link.includes('github.com')"
            >github repo</a
          >
          <a
            :href="project.link"
            target="_blank"
            v-else
            >{{ project.link.replace('https://', '') }}</a
          >
        </div>
        <div
          class="context-logo"
          v-if="project.contextLogo"
        >
          <NuxtImg
            class="image"
            :src="`/logos/${project.contextLogo}`"
            alt="context_logo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.project {
  display: flex;
  gap: 20px;
  width: 100%;
  height: 200px;

  .image-container {
    width: 200px;
    height: 200px;
    border-radius: 24px;
    overflow: hidden;
    flex: 0 0 200px;

    .image {
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

        .image {
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

        .image {
          width: 20px;
          margin-right: 5px;
          filter: invert(1);
        }
      }
    }
  }
}
</style>
