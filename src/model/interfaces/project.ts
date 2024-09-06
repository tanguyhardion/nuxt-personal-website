import type { ProjectContext } from "@/model/enums/project-context";
import type { ProjectContextLogo } from "@/model/enums/project-context-logo";

export interface Project {
  title: string;
  description: string;
  duration: string;
  team: number;
  technologies: string[];
  context: ProjectContext;
  contextLogo?: ProjectContextLogo;
  image: string;
  link?: string;
}
