import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { exhibitionCtaContent } from "../../../data/home";
import { scrollToSection } from "../../../utils/scrollToSection";

export function ExhibitionCTASection() {
  const handleEnterClick = () => {
    window.alert("3D 커리어 전시관은 다음 단계에서 구현될 예정입니다.");
  };

  return (
    <section className="section content-section" id="exhibition-cta">
      <div className="container">
        <Card className="exhibition-cta">
          <SectionTitle
            eyebrow={exhibitionCtaContent.eyebrow}
            title={exhibitionCtaContent.title}
            description={exhibitionCtaContent.description}
          />
          <div className="exhibition-cta__body">
            {exhibitionCtaContent.paragraphs.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>
          <div className="card-actions">
            <Button onClick={handleEnterClick}>{exhibitionCtaContent.primaryAction.label}</Button>
            <Button
              variant="secondary"
              onClick={() => {
                if (exhibitionCtaContent.secondaryAction.targetId) {
                  scrollToSection(exhibitionCtaContent.secondaryAction.targetId);
                }
              }}
            >
              {exhibitionCtaContent.secondaryAction.label}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
