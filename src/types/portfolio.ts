export interface SkillGroup {
  name: string;
  items: string[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
}

export interface Project {
  title: string;
  description: string;
  tags: string[];
  link: string;
}

export interface UserData {
  name: string;
  role: string;
  location: string;
  email: string;
  summary: string;
  skills: SkillGroup[];
  experience: Experience[];
  projects: Project[];
  certifications: string[];
}
