import { JobType } from '~/model/enums/job-type';
import type { Experience } from '~/model/interfaces/experience';

export const experienceList: Experience[] = [
  {
    company: {
      name: 'CPage',
      logo: 'cpage.png',
      location: 'Dijon, France',
      link: 'https://www.cpage.fr/'
    },
    position: 'Lead Software Engineer',
    jobType: JobType.FixedTerm,
    description: 'Summer job that followed my previous internship.',
    projects: ['CPage Map'],
    dates: {
      start: new Date('2024-09-01'),
      end: new Date('2025-02-01')
    }
  },
  {
    company: {
      name: 'CPage',
      logo: 'cpage.png',
      location: 'Dijon, France',
      link: 'https://www.cpage.fr/'
    },
    position: 'Software Engineer Intern',
    jobType: JobType.Internship,
    description: `Mid-engineering studies internship at CPage, a company that develops software for public health institutions.`,
    projects: ['Visualizer', 'Llama 2 fine-tuning'],
    dates: {
      start: new Date('2024-02-01'),
      end: new Date('2024-07-01')
    }
  },
  {
    company: {
      name: 'Autoroutes Paris-Rhin-Rhône (APRR)',
      logo: 'aprr.png',
      location: 'Saint-Apollinaire, France',
      link: 'https://aprr.fr/'
    },
    position: 'Software Engineer Intern',
    jobType: JobType.Internship,
    description: `Final year DUT (associate's degree) internship in the department that manages
    the installation and support of the systems used by the company.`,
    projects: ['Connect All Devices', 'SQLite Encrypter'],
    dates: {
      start: new Date('2024-02-01'),
      end: new Date('2024-07-01')
    }
  }
];
