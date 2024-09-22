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
  position: relative;
  display: flex;
  gap: 20px;
  width: 100%;
  height: 200px;
  padding: 0 16px 0 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, black, v-bind(backgroundColor));
    z-index: -1;
    border-radius: 24px;
    opacity: 0;
    transition: opacity 1.5s;
  }

  &.visible::before {
    opacity: 0.7;
  }

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
    padding: 8px 0;
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
          background: rgba(255, 255, 255, 0.1);
          font-size: 0.8rem;

          .material-icons {
            font-size: 20px;
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
