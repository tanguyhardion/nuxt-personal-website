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

    <p class="disclaimer">
      This is just a showcase. For more projects, check out my
      <a
        href="https://github.com/tanguyhardion?tab=repositories"
        target="_blank"
        rel="noopener noreferrer"
        >GitHub</a
      >.
    </p>
  </div>
</template>

<style lang="scss" scoped>
.projects {
  width: 80vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  margin: auto;
}

.disclaimer {
  text-align: center;
  margin: 30px 0;
  color: var(--foreground-darker);
}
</style>
