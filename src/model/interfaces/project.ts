import type { ProjectContext } from "../enums/project-context";

export interface Project {
  title: string;
  description: string;
  technologies: string[];
  duration: string;
  team: number;
  context: ProjectContext;
  image: string;
  link?: string;
}
