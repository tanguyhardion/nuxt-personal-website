<script setup lang="ts">
import { projectList } from '~/data/project-list';
</script>

<template>
  <div>
    <div class="projects">
      <ProjectCard
        v-for="project in projectList"
        :key="project.title"
        :project="project"
      >
      </ProjectCard>
    </div>

    <em class="disclaimer">
      This is just a showcase. For more projects, check out my&nbsp;
      <a
        href="https://github.com/tanguyhardion"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >
      .
    </em>
  </div>
</template>

<style lang="scss" scoped>
.disclaimer {
  display: flex;
  justify-content: center;
  margin: 30px 0;
  color: #757678;
}

.projects {
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: auto;
}
</style>
