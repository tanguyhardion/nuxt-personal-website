<script setup lang="ts">
import type { Academic } from '~/model/interfaces/academic';

const props = defineProps<{
  academic: Academic;
}>();
const academic = props.academic;

const backgroundColor = ref('#000');
const isVisible = ref(false);

onMounted(async () => {
  backgroundColor.value = (await getImageColor(`image-${academic.school.logo}`)) || '#000';
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
        :href="academic.school.link"
        target="_blank"
        rel="noopener noreferrer"
      >
        <NuxtImg
          class="image"
          :id="`image-${academic.school.logo}`"
          :src="`/logos/${academic.school.logo}`"
          alt="school_logo"
        />
      </a>
    </div>
    <div class="content">
      <div class="header">
        <h2>{{ academic.degree }}</h2>
        <div class="chips">
          <div class="dates chip">
            <span class="material-icons">event</span>
            <span
              >{{ formatDate(academic.dates.start) }} - {{ formatDate(academic.dates.end) }}</span
            >
          </div>
          <div
            class="gpa chip"
            v-if="academic.gpa"
          >
            <span class="material-icons">grade</span>
            <span>{{ academic.gpa }}</span>
          </div>
          <a
            :href="`https://www.google.com/maps/place/${academic.school.location}`"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div class="location chip">
              <span class="material-icons">location_on</span>
              <span>{{ academic.school.location }}</span>
            </div>
          </a>
        </div>
      </div>
      <div class="description">
        {{ academic.field }}
      </div>
      <div class="footer">
        <p class="name">{{ academic.school.name }}</p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.academic {
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

    .description {
      font-weight: 600;
      font-size: 1.1rem;
      text-align: justify;
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
  .academic {
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
      }

      .description {
        font-size: 0.9rem;
      }
    }
  }
}

@media (max-width: 480px) {
  .academic {
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
        gap: 4px !important;

        .chip {
          font-size: 0.6rem;
        }
      }

      .description {
        font-size: 1rem;
      }
    }
  }
}
</style>
