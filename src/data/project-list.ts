import { ProjectContext } from '@/model/enums/project-context';
import { ProjectContextLogo } from '@/model/enums/project-context-logo';
import type { Project } from '@/model/interfaces/project';

export const projects: Project[] = [
  {
    title: 'CPage Map',
    description: `A web application displaying an interactive map of CPage's customers, public health institutions in France.
    It shows relevant data and lets CPage collaborators log satisfaction levels after interactions (calls, emails, visits).
    Institutions are marked with a weather code indicating their satisfaction, offering a quick visual of which need more attention.`,
    duration: '2 months',
    team: 1,
    technologies: ['ETL', 'Angular', 'SpringBoot', 'PostgreSQL', 'Leaflet'],
    context: ProjectContext.Work,
    contextLogo: ProjectContextLogo.CPage,
    image: 'map.jpeg',
  },  
  {
    title: 'Visualizer',
    description: 'Description 2',
    duration: '2 months',
    team: 1,
    context: ProjectContext.Work,
    contextLogo: ProjectContextLogo.CPage,
    technologies: ['ETL', 'Angular', 'PostgreSQL', 'Leaflet'],
    image: 'https://via.placeholder.com/150',
  },
  {
    title: 'TensorFlow CNN on CIFAR-100',
    description: `Training of a convolutional neural network (CNN) from scratch to classify images of the CIFAR-100 dataset.
    This project was part of a course on machine learning and deep learning using Python.`,
    duration: '2 months',
    team: 1,
    context: ProjectContext.School,
    contextLogo: ProjectContextLogo.UTT,
    technologies: ['Python', 'TensorFlow', 'Keras', 'HuggingFace'],
    image: 'cnn.png',
    link: 'https://github.com/tanguyhardion/cifar100-cnn'
  }
];
