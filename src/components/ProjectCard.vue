<script setup lang="ts">
import type { Project } from '~/model/interfaces/project';
import { ProjectContext } from '~/model/enums/project-context';

const props = defineProps<{
  project: Project;
}>();
const project = props.project;

const backgroundColor = ref('#000');
const isVisible = ref(false);

onMounted(async () => {
  backgroundColor.value = (await getImageColor(`image-${project.image}`)) || '#000';
  isVisible.value = true;
});
</script>

<template>
  <div
    class="project"
    :class="{ visible: isVisible }"
  >
    <div class="image-container">
      <NuxtImg
        loading="lazy"
        class="image"
        :id="`image-${project.image}`"
        :src="`/illustrations/${project.image}`"
      />
    </div>
    <div class="content">
      <div class="header">
        <h2>{{ project.title }}</h2>
        <div class="chips">
          <div class="duration chip">
            <span class="material-icons">timelapse</span>
            <span>{{ project.duration }}</span>
          </div>
          <div class="team chip">
            <span
              class="material-icons"
              v-if="project.team > 1"
            >
              groups
            </span>
            <span
              class="material-icons"
              v-else
            >
              person
            </span>
            <span>{{ project.team === 1 ? 'Solo' : `Team of ${project.team}` }}</span>
          </div>
          <div class="context chip">
            <span
              class="material-icons"
              v-if="project.context === ProjectContext.Personal"
            >
              home
            </span>
            <span
              class="material-icons"
              v-else-if="project.context === ProjectContext.School"
            >
              school
            </span>
            <span
              class="material-icons"
              v-else-if="project.context === ProjectContext.Work"
            >
              work
            </span>
            <span>{{ project.context }}</span>
          </div>
          <div class="technologies chip">
            <span class="material-icons">code</span>
            <span>{{ project.technologies.join(', ') }}</span>
          </div>
        </div>
      </div>
      <div class="description">
        {{ project.description }}
      </div>
      <div class="footer">
        <div
          class="link"
          v-if="project.link"
        >
          <NuxtImg
            loading="lazy"
            class="image"
            src="/icons/github.png"
            v-if="project.link.includes('github.com')"
          />
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            v-if="project.link.includes('github.com')"
            >github repo</a
          >
          <a
            :href="project.link"
            target="_blank"
            rel="noopener noreferrer"
            v-else
            >{{ project.link.replace('https://', '') }}</a
          >
        </div>
        <div
          class="context-logo"
          v-if="project.contextLogo"
        >
          <NuxtImg
            loading="lazy"
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
  position: relative;
  align-items: center;
  gap: 6px;
  border-radius: 24px;
  width: 100%;
  min-height: 150px;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    opacity: 0;
    z-index: -1;
    transition: opacity 1.5s;
    border-radius: 24px;
    background: linear-gradient(45deg, black, v-bind(backgroundColor));
    width: 100%;
    height: 100%;
    content: '';
  }

  &.visible::before {
    opacity: 0.5;
  }

  .image-container {
    display: flex;
    width: 250px;
    height: 250px;
    flex: 0 0 250px;

    .image {
      width: 100%;
      height: 100%;
      border-radius: 24px;
      object-fit: cover;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    height: 100%;
    padding: 24px;

    .header {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      gap: 10px;
      width: 100%;

      h2 {
        font-weight: 700;
        font-size: 1.5rem;
      }

      .chips {
        display: flex;
        gap: 10px;
        flex-wrap: wrap;

        .chip {
          display: flex;
          align-items: center;
          gap: 5px;
          border-radius: 8px;
          background: rgba(255, 255, 255, 0.1);
          padding: 4px 8px;
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
          filter: brightness(100);
        }
      }
    }
  }
}

@media (max-width: 1024px) {
  .project {
    flex-direction: column;
    gap: 20px;

    .image-container {
      width: 100%;
      max-width: 400px;
    }

    .content {
      gap: 16px;

      .header {
        flex-direction: column;
        gap: 24px;
      }

      .description {
        font-size: 0.9rem;
        text-align: unset;
      }
    }
  }
}

@media (max-width: 480px) {
  .project {
    gap: 10px;

    .image-container {
      width: 100%;
    }

    .content {
      .header h2 {
        font-size: 1.3rem;
      }

      .chips {
        gap: 4px !important;

        .chip {
          font-size: 0.6rem;
        }
      }

      .description {
        font-size: 1rem;
        text-align: unset;
      }
    }
  }
}
</style>
