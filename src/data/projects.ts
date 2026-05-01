import type { Project } from "../types/project";

export const projects: Project[] = [
  {
    id: "mz-food",
    title: "MZ 맛집 플랫폼",
    subtitle: "해외 관광객 특화 맛집 검색·리뷰 서비스",
    role: "Legacy Web / AWS Deployment",
    techStack: ["Java 8", "Spring MVC", "Oracle DB", "AWS EC2", "AWS RDS", "AWS S3"],
    features: [
      "검색 / 필터 / 리뷰",
      "이미지 업로드와 북마크",
      "지도 API와 랭킹",
    ],
    achievements: [
      "AWS 기반 운영 환경 구축",
      "DB 모델링과 이미지 테이블 분리",
    ],
    links: [
      { label: "포트폴리오 보기", href: "#" },
      { label: "GitHub", href: "https://github.com/HyunJaeGit" },
    ],
  },
  {
    id: "aura3d",
    title: "Aura3D",
    subtitle: "Java 21 Virtual Threads와 Gemini AI를 활용한 On-Demand 서버 관제 솔루션",
    role: "Modern Backend / 3D Visualization",
    techStack: ["Java 21", "Spring Boot", "Virtual Threads", "Gemini API", "React", "Three.js"],
    features: [
      "On-Demand 서버 스캔",
      "상태 변화 기반 AI 호출",
      "장애 상태 3D 시각화",
    ],
    achievements: [
      "AI API 비용 약 90% 절감",
      "텍스트 로그 중심 관제를 3D UX로 개선",
    ],
    links: [
      { label: "포트폴리오 보기", href: "#" },
      { label: "GitHub", href: "https://github.com/HyunJaeGit" },
    ],
  },
  {
    id: "pixel-art-editor",
    title: "Pixel Art Editor",
    subtitle: "팬게임 개발에 직접 사용한 픽셀 아트 제작 툴",
    role: "Creative Tooling / Frontend",
    techStack: ["React", "Canvas", "TypeScript", "Editor UX"],
    features: ["픽셀 단위 편집", "스프라이트 제작", "게임 리소스 제작 흐름 지원"],
    achievements: ["필요한 제작 툴을 직접 구현", "팬게임 리소스 제작에 실제 활용"],
    links: [
      { label: "바로가기", href: "https://hyunjaegit.github.io/pixelcraft16/" },
      { label: "GitHub", href: "https://github.com/HyunJaeGit" },
    ],
  },
  {
    id: "exam-maker",
    title: "examMaker",
    subtitle: "기사시험 학습에 실제 사용한 문제 관리 툴",
    role: "Learning Productivity / Web App",
    techStack: ["React", "TypeScript", "Local Data", "Study Tool"],
    features: ["문제 제작", "학습 데이터 관리", "반복 풀이 흐름 지원"],
    achievements: ["실제 기사시험 학습 과정에 사용", "개인 학습 루틴을 문제 관리 툴로 구조화"],
    links: [
      { label: "바로가기", href: "https://hyunjaegit.github.io/ExamMaker/" },
      { label: "GitHub", href: "https://github.com/HyunJaeGit" },
    ],
  },
];
