import type { Academic } from '@/model/interfaces/academic';

export const academicList: Academic[] = [
  {
    school: {
      name: 'Université de Technologie de Compiègne (UTC)',
      logo: 'utc.svg',
      location: 'Compiègne, France',
      link: 'https://utc.fr/',
      gpa: 'In progress'
    },
    degree: 'UTT Mobility Semester',
    field: 'Specialization in Artificial Intelligence and Data Science',
    dates: {
      start: new Date('2024-09-01'),
      end: new Date('2025-02-01')
    }
  },
  {
    school: {
      name: 'Université de Technologie de Troyes (UTT)',
      logo: 'utt.svg',
      location: 'Troyes, France',
      link: 'https://utt.fr/',
      gpa: '3.67/4.0'
    },
    degree: "Engineer's degree",
    field: 'Computer Science and Information Systems',
    dates: {
      start: new Date('2022-09-01'),
      end: new Date('2025-08-01')
    }
  },
  {
    school: {
      name: 'IUT Dion',
      logo: 'iut-dijon.png',
      location: 'Dijon, France',
      link: 'https://iutdijon.u-bourgogne.fr/',
      gpa: 'Top 10 out of 100'
    },
    degree: 'DUT (2-year technical degree)',
    field: 'Computer Science',
    dates: {
      start: new Date('2020-09-01'),
      end: new Date('2022-07-01')
    }
  }
];
