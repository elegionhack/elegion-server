import { ProjectContent } from './project-content.interface';

export interface Project {
  content: () => ProjectContent;
}
