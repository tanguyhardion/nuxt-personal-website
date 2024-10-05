<script setup lang="ts">
import type { GithubFile } from '~/model/types/github-file';

const files: Ref<GithubFile[]> = ref([
  {
    name: 'EU format, in French',
    path: '/pdf/hardion_cv.pdf',
    lastCommitDate: '',
    image: 'france.png'
  },
  {
    name: 'EU format, in English',
    path: '/pdf/hardion_resume.pdf',
    lastCommitDate: '',
    image: 'europe.png'
  },
  {
    name: 'US format',
    path: '/pdf/hardion_resume_us.pdf',
    lastCommitDate: '',
    image: 'us.png'
  }
]);

onMounted(() => {
  files.value.forEach(async (file) => {
    const storedData = localStorage.getItem(file.path);

    if (storedData) {
      const parsedData = JSON.parse(storedData);

      if (!isStale(parsedData.timestamp)) {
        // if data is fresh, use it
        file.lastCommitDate = parsedData.lastCommitDate;
      } else {
        // if data is stale, fetch the commit date and store it
        await fetchAndStoreData(file, file.path);
      }
    } else {
      // no data, fetch and store it
      await fetchAndStoreData(file, file.path);
    }
  });
});

async function fetchAndStoreData(file: GithubFile, path: string) {
  const lastCommitDate = await getLastCommitDate(path);
  if (lastCommitDate) {
    file.lastCommitDate = lastCommitDate;
    localStorage.setItem(path, JSON.stringify({ lastCommitDate, timestamp: Date.now() }));
  }
}
</script>

<template>
  <div class="wrapper">
    <h1>Resumes</h1>
    <div class="file-container">
      <div
        v-for="file in files"
        :key="file.path"
        class="file"
      >
        <a
          :href="file.path"
          :style="{ '--link-image': `url(/images/flags/${file.image})` }"
          target="_blank"
          class="link"
        >
          {{ file.name }}
          <span class="material-icons">open_in_new</span>
        </a>
        <span
          v-if="file.lastCommitDate"
          class="date"
          >Last updated {{ file.lastCommitDate }}</span
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    margin-bottom: 28px;
  }

  .file-container {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 36px;

    .file {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 8px;

      .link {
        position: relative;
        padding: 16px;
        border-radius: 24px;
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        text-decoration: none;
        font-size: 1.2rem;

        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: var(--link-image), var(--foreground-default);
          background-size: cover;
          background-position: center;
          opacity: 0.2;
          z-index: -1;
          border-radius: 24px;
        }
      }

      .date {
        font-size: 0.8em;
        color: #666;
        font-style: italic;
      }
    }
  }
}

@media (max-width: 600px) {
  .file-container {
    flex-direction: column;
  }
}
</style>
