export type HeroAction = {
  label: string;
  targetId?: string;
  href?: string;
};

export type HeroMetric = {
  value: string;
  label: string;
};

export type HeroContent = {
  eyebrow: string;
  headline: string;
  headlineLines: string[];
  name: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  thirdAction: HeroAction;
  techTags: string[];
  metrics: HeroMetric[];
  highlights: string[];
};
