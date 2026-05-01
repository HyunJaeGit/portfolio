import type { HeroContent } from "../types/hero";

export const heroContent: HeroContent = {
  eyebrow: "Backend-Oriented Problem Solver",
  headline: "경험을 확장해온 Java/Spring 백엔드 개발자",
  headlineLines: ["경험을 확장해온", "Java/Spring", "백엔드 개발자"],
  name: "권현재",
  description:
    "Java 8 기반 팀 프로젝트와 AWS 배포 경험에서 출발해, Java 21 기반 Aura3D와 제작 툴까지 개발 경험을 발전시켜 왔습니다.",
  primaryAction: {
    label: "프로젝트 빠르게 보기",
    targetId: "projects",
  },
  secondaryAction: {
    label: "GitHub",
    href: "https://github.com/HyunJaeGit",
  },
  thirdAction: {
    label: "3D 커리어 전시관 입장",
  },
  techTags: ["Java 8 → 21", "Spring", "AWS", "3D Visualization", "Tooling"],
  metrics: [
    { value: "Java 8→21", label: "레거시부터 최신 백엔드까지" },
    { value: "Aura3D", label: "3D 관제 UX와 AI 최적화" },
    { value: "Tools", label: "Pixel Art Editor / examMaker" },
    { value: "AWS", label: "EC2 / RDS / S3 배포 경험" },
  ],
  highlights: ["유지보수와 신규 개발 모두 경험", "필요한 툴을 직접 제작", "운영 흐름까지 고려한 구현"],
};
