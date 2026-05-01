import type { Experience } from "../types/experience";
import type { Language } from "../types/language";

export const experiences: Experience[] = [
  {
    organization: "한국지질자원연구원",
    role: "연구실 보조 / Research Support",
    period: "2021.06 ~ 2021.08",
    descriptions: ["실험 시료 및 연구 자료 정리", "기관 업무 프로세스에 따른 연구 지원", "자료 기록, 문서 정리, 데이터 관리 경험"],
  },
  {
    organization: "삼성생명보험",
    role: "SFP 종합자산관리사",
    period: "2019.02 ~ 2019.09",
    descriptions: ["고객 응대 및 상담", "계약 관련 서류 관리", "고객 데이터 정리"],
  },
  {
    organization: "동아대학교 총학생회",
    role: "51대 총감사위원장",
    period: "2018.04 ~ 2018.12",
    descriptions: ["학생회 예산 및 운영 감사", "감사 결과 보고 문서 작성", "위원회 소집 및 운영"],
  },
  {
    organization: "부산농구가좋아 커뮤니티",
    role: "1,200명 규모 지역 커뮤니티 운영",
    descriptions: ["Facebook 커뮤니티 개설 및 운영", "콘텐츠 및 일정 관리", "외부 협업 경험"],
  },
];

export const experiencesByLanguage: Record<Language, Experience[]> = {
  KR: experiences,
  EN: [
    {
      organization: "Korea Institute of Geoscience and Mineral Resources",
      role: "Research Support",
      period: "2021.06 ~ 2021.08",
      descriptions: ["Organized lab samples and research materials", "Supported internal research workflows", "Handled records, documents, and data management"],
    },
    {
      organization: "Samsung Life Insurance",
      role: "SFP Financial Consultant",
      period: "2019.02 ~ 2019.09",
      descriptions: ["Customer consultation", "Contract document management", "Customer data organization"],
    },
    {
      organization: "Dong-A University Student Council",
      role: "Chief Audit Committee Chair",
      period: "2018.04 ~ 2018.12",
      descriptions: ["Reviewed student council budgets", "Prepared audit reports", "Coordinated committee operations"],
    },
    {
      organization: "Busan Basketball Community",
      role: "Community Operator, 1,200 members",
      descriptions: ["Launched and operated a Facebook community", "Managed content and schedules", "Worked with external partners"],
    },
  ],
};
