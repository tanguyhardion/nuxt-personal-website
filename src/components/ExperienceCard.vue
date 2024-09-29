<script setup lang="ts">
import type { Experience } from '~/model/interfaces/experience';

const props = defineProps<{
  experience: Experience;
}>();
const experience = props.experience;

const backgroundColor = ref('#000');
const isVisible = ref(false);

onMounted(async () => {
  backgroundColor.value = (await getImageColor(`image-${experience.company.logo}`)) || '#000';
  isVisible.value = true;
});
</script>

<template>
  <div
    class="experience"
    :class="{ visible: isVisible }"
  >
    <div class="image-container">
      <a
        :href="experience.company.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NuxtImg
          class="image"
          :id="`image-${experience.company.logo}`"
          :src="`/logos/${experience.company.logo}`"
          alt="company_logo"
        />
      </a>
    </div>
    <div class="content">
      <div class="header">
        <h2>{{ experience.position }}</h2>
        <div class="chips">
          <div class="dates chip">
            <span class="material-icons">event</span>
            <span
              >{{ formatDate(experience.dates.start) }} -
              {{ formatDate(experience.dates.end) }}</span
            >
          </div>
          <div class="job-type chip">
            <span class="material-icons">description</span>
            <span>{{ experience.jobType }}</span>
          </div>
          <a
            :href="`https://www.google.com/maps/place/${experience.company.location}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="location chip">
              <span class="material-icons">location_on</span>
              <span>{{ experience.company.location }}</span>
            </div>
          </a>
        </div>
      </div>
      <div class="description">
        {{ experience.description }}
        <p v-if="experience.projects.length">
          <span v-if="experience.projects.length > 1">Projects </span>
          <span v-else>Project </span>
          that I worked on: <b>{{ experience.projects.join(', ') }}</b>
        </p>
      </div>
      <div class="footer">
        <p class="name">{{ experience.company.name }}</p>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.experience {
  display: flex;
  position: relative;
  align-items: center;
  gap: 30px;
  border-radius: 24px;
  padding: 24px;
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
    width: 300px;

    .image {
      width: 100%;
      height: 100%;
    }
  }

  .content {
    display: flex;
    flex-direction: column;
    gap: 16px;
    width: 100%;
    height: 100%;

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

        a {
          text-decoration: none;
        }
      }
    }

    .footer {
      .name {
        letter-spacing: 1px;
        text-transform: uppercase;
      }
    }
  }
}

@media (max-width: 1024px) {
  .experience {
    flex-direction: column;
    gap: 20px;
    padding: 20px;

    .image-container {
      width: 100%;
      max-width: 200px;
    }

    .content {
      gap: 16px;

      .header {
        flex-direction: column;
        gap: 24px;

        .chips {
          gap: 5px;
        }
      }

      .description {
        font-size: 0.9rem;
        text-align: justify;
      }
    }
  }
}

@media (max-width: 480px) {
  .experience {
    gap: 10px;
    padding: 10px;

    .image-container {
      width: 100%;
      max-width: 150px;
    }

    .content {
      .header h2 {
        font-size: 1.3rem;
      }

      .chips {
        gap: 5px;

        .chip {
          font-size: 0.6rem;
        }
      }

      .description {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
