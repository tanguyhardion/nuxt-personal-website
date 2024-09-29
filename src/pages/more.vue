<script setup lang="ts">
const files = [
  {
    name: 'Resume (EU format, in French)',
    path: '/pdf/hardion_cv.pdf'
  },
  {
    name: 'Resume (EU format, in English)',
    path: '/pdf/hardion_resume.pdf'
  },
  {
    name: 'Resume (US format)',
    path: '/pdf/hardion_resume_us.pdf'
  }
];
</script>

<template>
  <div>
    <h1>More</h1>
    <ul>
      <li
        v-for="file in files"
        :key="file.path"
      >
        <a
          :href="file.path"
          target="_blank"
          >{{ file.name }}</a
        >
        <span>{{ getLastCommitDate(file.path) }}</span>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped></style>
