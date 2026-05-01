import { SectionTitle } from "../../../components/common/SectionTitle";
import { experiences } from "../../../data/experiences";

export function CareerExperienceSection() {
  return (
    <section className="section content-section career-section" id="experience">
      <div className="container">
        <SectionTitle
          eyebrow="Experience"
          title="경력 및 운영 경험"
          description="문서화, 일정 조율, 고객 응대 경험을 개발 협업 역량으로 연결합니다."
        />
        <div className="career-strip">
          {experiences.map((experience) => (
            <article className="career-card" key={`${experience.organization}-${experience.role}`}>
              <p>{experience.period}</p>
              <h3>{experience.organization}</h3>
              <strong>{experience.role}</strong>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
