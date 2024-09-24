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
    class="academic"
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
        <p>{{ experience.description }}</p>
        <p>
          <span v-if="experience.projects.length > 1">Projects </span>
          <span v-else>Project </span>
          that I worked on: <b>{{ experience.projects.join(', ') }}</b>
        </p>
      </div>
      <div class="footer">
        <p class="company-name">{{ experience.company.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.academic {
  position: relative;
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  padding: 0 16px;
  height: 150px;
  border-radius: 24px;

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
    justify-content: space-evenly;
    width: 100%;
    height: 100%;

    .company-name {
      text-transform: uppercase;
      letter-spacing: 1px;
    }

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
          width: max-content;

          .icon {
            font-size: 20px;
            margin-right: 2px;
          }
        }

        a {
          text-decoration: none;
        }
      }
    }

    .description {
      .field {
        font-size: 1.1rem;
        font-weight: 600;
      }
    }

    .footer {
      display: flex;
      align-items: center;
    }
  }
}
</style>
