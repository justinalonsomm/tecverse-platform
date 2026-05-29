export interface Project {
  id: string;
  name: string;
  category: string;
  description: string;

  years: number;
  hours: number;
  team: number;

  status: 'active' | 'paused';

  technologies: string[];

  accent: 'blue' | 'purple' | 'green';
}