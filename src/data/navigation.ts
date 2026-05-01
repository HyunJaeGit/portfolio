import type { NavigationItem } from "../types/navigation";
import type { Language } from "../types/language";

export const navigationItemsByLanguage: Record<Language, NavigationItem[]> = {
  KR: [
  { label: "소개", targetId: "intro" },
  { label: "프로젝트", targetId: "projects" },
  { label: "문제 해결", targetId: "problem-solving" },
  { label: "기술", targetId: "skills" },
  { label: "이력", targetId: "background" },
  { label: "연락처", targetId: "contact" },
  ],
  EN: [
    { label: "About", targetId: "intro" },
    { label: "Projects", targetId: "projects" },
    { label: "Case Studies", targetId: "problem-solving" },
    { label: "Skills", targetId: "skills" },
    { label: "Resume", targetId: "background" },
    { label: "Contact", targetId: "contact" },
  ],
};

export const navigationItems = navigationItemsByLanguage.KR;
