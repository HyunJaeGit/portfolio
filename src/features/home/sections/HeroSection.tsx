import { Badge } from "../../../components/common/Badge";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { heroContentByLanguage } from "../../../data/hero";
import { profile } from "../../../data/profile";
import { useLanguage } from "../../../hooks/useLanguage";
import { scrollToSection } from "../../../utils/scrollToSection";

export function HeroSection() {
  const { language } = useLanguage();
  const heroContent = heroContentByLanguage[language];
  const handleCareerViewClick = () => {
    window.alert(
      language === "EN"
        ? "The 3D Career Showcase will be added in the next phase."
        : "3D 커리어 전시관은 다음 단계에서 구현될 예정입니다.",
    );
  };

  return (
    <section className="section hero-section" id="intro">
      <div className="container hero-grid">
        <div className="hero-copy">
          <p className="hero-eyebrow">{heroContent.eyebrow}</p>
          <h1 className="hero-title" aria-label={heroContent.headline}>
            {heroContent.headlineLines.map((line, index) => (
              <span className={index === 1 ? "hero-title__accent" : undefined} key={line}>
                {line}
              </span>
            ))}
          </h1>
          <strong className="hero-name">{heroContent.name}</strong>
          <p className="hero-description">{heroContent.description}</p>
          <div className="hero-actions" aria-label="주요 이동 버튼">
            <Button
              onClick={() => {
                if (heroContent.primaryAction.targetId) {
                  scrollToSection(heroContent.primaryAction.targetId);
                }
              }}
            >
              {heroContent.primaryAction.label}
            </Button>
            <Button as="a" href={profile.github} target="_blank" rel="noreferrer" variant="secondary">
              {heroContent.secondaryAction.label}
            </Button>
            <Button variant="ghost" onClick={handleCareerViewClick}>
              {heroContent.thirdAction.label}
            </Button>
          </div>
        </div>

        <aside className="hero-panel" aria-label="프로필 요약">
          <Card className="profile-card">
            <div className="profile-card__header">
              <div>
                <h2 className="profile-card__name">{language === "EN" ? profile.englishName : profile.name}</h2>
                <p className="profile-card__role">{profile.role}</p>
              </div>
              <div className="profile-card__avatar" aria-hidden="true">
                KHJ
              </div>
            </div>
            <div className="profile-card__tags">
              {heroContent.techTags.map((tag) => (
                <Badge key={tag}>{tag}</Badge>
              ))}
            </div>
            <div className="profile-card__metrics" aria-label="핵심 성과 요약">
              {heroContent.metrics.map((metric) => (
                <div key={metric.label}>
                  <strong>{metric.value}</strong>
                  <span>{metric.label}</span>
                </div>
              ))}
            </div>
            <ul className="profile-card__highlights">
              {heroContent.highlights.map((highlight) => (
                <li className="profile-card__highlight" key={highlight}>
                  {highlight}
                </li>
              ))}
            </ul>
          </Card>
        </aside>
      </div>
    </section>
  );
}
