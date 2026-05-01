import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { certificationItems, educationItems, trainingItems } from "../../../data/home";

export function BackgroundSection() {
  return (
    <section className="section content-section background-section" id="background">
      <div className="container">
        <SectionTitle
          eyebrow="Background"
          title="학력 · 교육 · 자격"
          description="Education · Training · Certification"
        />
        <div className="background-grid">
          <Card className="background-card background-card--wide">
            <h3>Education & Training</h3>
            <div className="compact-timeline">
              {[...educationItems, ...trainingItems].map((item) => (
                <article className="compact-item" key={`${item.title}-${item.period}`}>
                  <div>
                    <strong>{item.title}</strong>
                    {item.organization ? <span>{item.organization}</span> : null}
                  </div>
                  <time>{item.period}</time>
                </article>
              ))}
            </div>
          </Card>

          <Card className="background-card">
            <h3>Certifications</h3>
            <ul className="compact-list">
              {certificationItems.map((certification) => (
                <li key={certification}>{certification}</li>
              ))}
            </ul>
          </Card>
        </div>
      </div>
    </section>
  );
}
