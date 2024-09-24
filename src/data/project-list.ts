import { ProjectContext } from '@/model/enums/project-context';
import type { Project } from '@/model/interfaces/project';

export const projectList: Project[] = [
  {
    title: 'Personal Website',
    description: `You're looking at it! I like to think of it as a digital resume, more personal and interactive
    than a traditional one or a LinkedIn profile (although you can find me there too). It's also more fun to make!`,
    duration: '3 weeks',
    team: 1,
    technologies: ['Vue.js (Nuxt)', 'GitHub Pages'],
    context: ProjectContext.Personal,
    image: 'website.png',
    link: 'https://github.com/tanguyhardion/tanguyhardion.github.io'
  },
  {
    title: 'CPage Map',
    description: `A web application displaying an interactive map of CPage's customers: public health institutions in France.
    It shows relevant data loaded with ETL processes and lets CPage collaborators log satisfaction levels after interactions (calls, emails, visits).
    Institutions are marked with a weather code indicating their satisfaction, offering a quick visual of which need more attention.
    It also provides data analysis tools, such as graphs and word clouds of the satisfaction logs using an NLP model from HuggingFace.`,
    duration: '2 months',
    team: 1,
    technologies: ['Angular', 'SpringBoot', 'Flask', 'PostgreSQL', 'HuggingFace'],
    context: ProjectContext.Work,
    contextLogo: 'cpage.png',
    image: 'map.png'
  },
  {
    title: 'CNN on CIFAR-100',
    description: `Training of a convolutional neural network (CNN) from scratch to classify images of the CIFAR-100 dataset.
    This project was part of a course on machine learning and deep learning using Python.`,
    duration: '2 weeks',
    team: 1,
    context: ProjectContext.School,
    contextLogo: 'utt.png',
    technologies: ['TensorFlow', 'Keras', 'HuggingFace'],
    image: 'cnn.png',
    link: 'https://github.com/tanguyhardion/cifar100-cnn'
  },
  {
    title: 'Llama 2 fine-tuning',
    description: `Fine-tuning and quantification of the 7B-parameter Llama2 large language model (LLM), for a proof of concept.`,
    duration: '1 month',
    team: 1,
    context: ProjectContext.Work,
    contextLogo: 'cpage.png',
    technologies: ['PyTorch', 'HuggingFace'],
    image: 'llama2.jpg'
  },
  {
    title: 'Visualizer',
    description: `A web application featuring a dependencies graph to map software solutions and their respective versions,
    for better compatibility tracking. Each node represents a software version, and each edge a dependency between two versions.`,
    duration: '4 months',
    team: 1,
    context: ProjectContext.Work,
    contextLogo: 'cpage.png',
    technologies: ['Angular', 'SpringBoot', 'Oracle'],
    image: 'graph.png'
  }
];
