import type {
  AboutContent,
  ContactContent,
  ExhibitionCtaContent,
  ProblemSolvingItem,
  ResumeSnapshotItem,
  SummaryCard,
  TimelineItem,
} from "../types/home";

export const quickSummaryCards: SummaryCard[] = [
  {
    title: "Backend",
    subtitle: "Java / Spring",
    description: "Java와 Spring 기반으로 서버 기능을 구현하고 인증, 데이터 흐름, API 구조를 설계합니다.",
  },
  {
    title: "Infrastructure",
    subtitle: "AWS Deployment",
    description: "AWS EC2, RDS, S3를 활용해 프로젝트를 실제 서비스 환경에 배포한 경험이 있습니다.",
  },
  {
    title: "Optimization",
    subtitle: "AI API Cost",
    description: "상태 변화 기반 호출 구조로 AI API 운영 비용을 약 90% 절감한 경험이 있습니다.",
  },
  {
    title: "Operations",
    subtitle: "Documentation",
    description: "문서 관리, 일정 조율, 커뮤니케이션 경험을 개발 이후 운영 흐름과 연결합니다.",
  },
];

export const aboutContent: AboutContent = {
  eyebrow: "About",
  title: "문제 정의와 운영 흐름까지 고려하는 개발자",
  description: "기능 구현을 넘어 서비스가 실제로 운영되는 과정을 함께 생각합니다.",
  paragraphs: [
    "저는 단순히 기능을 구현하는 것보다, 사용자가 어떤 문제를 겪는지 정의하고 그 문제를 서버 구조와 운영 흐름 안에서 해결하는 개발자를 지향합니다.",
    "비개발 분야의 운영 경험을 통해 문서화, 일정 조율, 고객 응대, 커뮤니케이션을 경험했고, 이후 Java/Spring 기반 백엔드 개발과 AWS 배포 경험을 쌓으며 서비스를 구현하고 운영하는 흐름을 이해하게 되었습니다.",
  ],
  tags: ["Problem Definition", "Backend Development", "Infrastructure", "Documentation", "Collaboration", "Operation Mindset"],
};

export const educationItems: TimelineItem[] = [
  {
    title: "에너지자원공학과 학사",
    organization: "동아대학교",
    period: "2013.03 ~ 2021.02",
  },
  {
    title: "경남고등학교",
    period: "2010.03 ~ 2013.01",
  },
];

export const trainingItems: TimelineItem[] = [
  {
    title: "AWS 클라우드 활용 웹 융합 SW 개발자 양성과정",
    organization: "KG ITBANK",
    period: "2023.07 ~ 2024.01 / 720시간",
    description: "Java, Spring, AWS, Web Development 기반 교육 이수",
  },
  {
    title: "IT 통합 개발 기초 과정",
    organization: "KG ITBANK",
    period: "2023.03 ~ 2023.06 / 360시간",
    description: "프로그래밍 기초, 웹 개발 기초, 데이터베이스 학습",
  },
];

export const problemSolvingItems: ProblemSolvingItem[] = [
  {
    title: "AI API 비용 증가",
    problem: "매 스캔 AI 호출로 비용 증가",
    solution: "상태 변화가 있을 때만 Gemini 호출",
    result: "API 비용 약 90% 절감",
  },
  {
    title: "레거시 구조 개선",
    problem: "리뷰 이미지 확장 한계",
    solution: "IMG 테이블 분리와 관계 구조 설계",
    result: "다중 이미지 업로드 기반 확보",
  },
  {
    title: "필요한 툴 직접 제작",
    problem: "게임 리소스와 시험 학습 관리의 반복 작업",
    solution: "Pixel Art Editor와 examMaker를 제작 툴로 구현",
    result: "반복 작업 흐름을 실제 사용 가능한 툴로 전환",
  },
];

export const certificationItems = [
  "컴퓨터활용능력 2급 / 대한상공회의소",
  "워드프로세서 1급 / 대한상공회의소",
  "ITQ 정보기술자격 / 한국생산성본부",
  "자동차운전면허 2종 보통 / 경찰청",
];

export const contactContent: ContactContent = {
  eyebrow: "Contact",
  title: "프로젝트 기록과 연락처",
  description: "GitHub · Email · Resume",
  email: "guswo1118@gmail.com",
  location: "Seoul, Korea",
  githubLabel: "HyunJaeGit",
  githubHref: "https://github.com/HyunJaeGit",
  resumeAction: {
    label: "Resume PDF 다운로드",
    href: "#",
  },
};

export const exhibitionCtaContent: ExhibitionCtaContent = {
  eyebrow: "Interactive Portfolio",
  title: "권현재의 커리어 전시관",
  description: "정석 포트폴리오를 확인한 뒤, 프로젝트와 경험을 더 몰입감 있게 둘러볼 수 있는 선택형 경험입니다.",
  paragraphs: [
    "이력서처럼 읽는 대신, 프로젝트와 경험을 하나의 전시 공간에서 둘러볼 수 있습니다.",
    "Aura3D, MZ 프로젝트, 문제 해결 경험, 운영 경험을 공간별 전시로 연결합니다.",
  ],
  primaryAction: {
    label: "전시관 입장하기",
    href: "#",
  },
  secondaryAction: {
    label: "계속 스크롤하기",
    targetId: "contact",
  },
};

export const resumeSnapshotItems: ResumeSnapshotItem[] = [
  {
    title: "Education",
    value: "동아대학교",
    description: "에너지자원공학과 학사",
  },
  {
    title: "Training",
    value: "1,080h",
    description: "KG ITBANK 개발 교육 이수",
  },
  {
    title: "Work",
    value: "Research",
    description: "한국지질자원연구원 연구실 보조",
  },
];
