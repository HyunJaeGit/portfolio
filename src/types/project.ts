import type { LinkItem } from "./common";

export type Project = {
  id: string;
  title: string;
  subtitle: string;
  role: string;
  techStack: string[];
  features: string[];
  achievements: string[];
  links: LinkItem[];
};
