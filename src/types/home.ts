import type { LinkItem, SectionIntro } from "./common";

export type SummaryCard = {
  title: string;
  subtitle: string;
  description: string;
};

export type AboutContent = SectionIntro & {
  paragraphs: string[];
  tags: string[];
};

export type TimelineItem = {
  title: string;
  organization?: string;
  period: string;
  description?: string;
};

export type ProblemSolvingItem = {
  title: string;
  problem: string;
  solution: string;
  result: string;
};

export type ContactContent = SectionIntro & {
  email: string;
  location: string;
  githubLabel: string;
  githubHref: string;
  resumeAction: LinkItem;
};

export type ExhibitionCtaContent = SectionIntro & {
  paragraphs: string[];
  primaryAction: LinkItem;
  secondaryAction: LinkItem;
};

export type ResumeSnapshotItem = {
  title: string;
  value: string;
  description: string;
};
