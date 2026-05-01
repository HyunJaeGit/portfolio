import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { experiences } from "../../../data/experiences";

export function ExperienceSection() {
  return (
    <section className="section content-section" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="운영 경험을 개발 강점으로 연결"
          description="운영 경험은 개발 이후의 유지보수, 협업, 문서화 단계에서 강점이 됩니다."
        />
        <div className="experience-list">
          {experiences.map((experience) => (
            <Card className="experience-card" key={`${experience.organization}-${experience.role}`}>
              <div>
                <p className="experience-card__period">{experience.period}</p>
                <h3>{experience.organization}</h3>
                <p className="experience-card__role">{experience.role}</p>
              </div>
              <ul className="clean-list">
                {experience.descriptions.map((description) => (
                  <li key={description}>{description}</li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
