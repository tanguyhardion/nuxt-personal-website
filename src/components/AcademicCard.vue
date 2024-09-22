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

function formatDate(date: Date): string {
  const [year, month] = date.toISOString().split('-');

  return `${month}/${year}`;
}
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
          <div class="gpa chip">
            <span class="material-icons">grade</span>
            <span>{{ academic.gpa }}</span>
          </div>
          <a
            :href="`https://www.google.com/maps/place/${academic.school.location}`"
            target="_blank"
          >
            <div class="location chip">
              <span class="material-icons">location_on</span>
              <span>{{ academic.school.location }}</span>
            </div>
          </a>
        </div>
      </div>
      <div class="description">
        <p class="field">{{ academic.field }}</p>
      </div>
      <div class="footer">
        <p class="school-name">{{ academic.school.name }}</p>
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
    opacity: 0.7;
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

    .school-name {
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
