import type { SkillCategory } from "../types/skill";

export const skillCategories: SkillCategory[] = [
  {
    category: "Backend",
    levelLabel: "Core",
    items: ["Java", "Spring Boot", "Spring MVC", "JWT", "REST API"],
  },
  {
    category: "Database & Deploy",
    levelLabel: "Infra",
    items: ["MySQL", "Oracle DB", "AWS EC2", "AWS RDS", "AWS S3", "Docker"],
  },
  {
    category: "Frontend",
    levelLabel: "UI",
    items: ["React", "TypeScript", "Vite", "Canvas API"],
  },
  {
    category: "Visualization & AI",
    levelLabel: "3D / AI",
    items: ["Three.js", "Blender", "Gemini API"],
  },
  {
    category: "Collaboration",
    levelLabel: "Team",
    items: ["Git", "Documentation", "Issue Tracking", "QA Checklist"],
  },
];
