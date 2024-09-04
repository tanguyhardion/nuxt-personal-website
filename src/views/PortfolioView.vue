<script setup lang="ts">
import ProjectCard from '@/components/ProjectCard.vue';
import { ProjectContext } from '@/model/enums/project-context';
import type { Project } from '@/model/interfaces/project';

const projects: Project[] = [
  {
    title: 'CPage Map',
    description: 'Description 1',
    technologies: ['ETL', 'Angular', 'SpringBoot', 'PostgreSQL', 'Leaflet'],
    duration: '2 months',
    team: 1,
    context: ProjectContext.Personal,
    image: 'https://via.placeholder.com/150',
    link: 'https://www.google.com'
  },
  {
    title: 'Project 2',
    description: 'Description 2',
    technologies: ['Angular', 'SpringBoot', 'PostgreSQL'],
    duration: '2 months',
    team: 3,
    context: ProjectContext.School,
    image: 'https://via.placeholder.com/150'
  },
  {
    title: 'Project 3',
    description: 'Description 3',
    technologies: ['React', 'Node.js', 'MongoDB'],
    duration: '3 months',
    team: 5,
    context: ProjectContext.Work,
    image: 'https://via.placeholder.com/150'
  }
];
</script>

<template>
  <div class="projects">
    <ProjectCard
      v-for="project in projects"
      :key="project.title"
    >
      <template #image>
        <img
          :src="project.image"
          alt="Project image"
        />
      </template>
      <template #header>
        <h2>{{ project.title }}</h2>
      </template>
      <template #duration>
        <span class="material-icons">schedule</span>
        <span>{{ project.duration }}</span>
      </template>
      <template #team>
        <span class="material-icons">groups</span>
        <span>{{ project.team }}</span>
      </template>
      <template #technologies>
        <span class="material-icons">code</span>
        <span>{{ project.technologies.join(', ') }}</span>
      </template>
      <template #description>
        <p>{{ project.description }}</p>
      </template>
      <template
        #link
        v-if="project.link"
      >
        <a :href="project.link">{{ project.link }}</a>
      </template>
    </ProjectCard>
  </div>

  <em class="disclaimer">
    This is just a showcase. For more projects, check out my&nbsp;
    <a
      href="https://github.com/tanguyhardion"
      target="_blank"
      >GitHub</a
    >
    .
  </em>
</template>

<style lang="scss" scoped>
.disclaimer {
  display: flex;
  justify-content: center;
  margin-bottom: 30px;
  color: #757678;
}

.projects {
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  margin: auto;
}
</style>
