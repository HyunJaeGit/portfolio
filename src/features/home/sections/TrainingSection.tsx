import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { trainingItems } from "../../../data/home";

export function TrainingSection() {
  return (
    <section className="section content-section" id="training">
      <div className="container split-section">
        <SectionTitle
          eyebrow="Training"
          title="개발 교육"
          description="Java, Spring, AWS, Web Development 기반 교육을 이수했습니다."
        />
        <Card>
          <div className="timeline-list">
            {trainingItems.map((item) => (
              <article className="timeline-item" key={`${item.title}-${item.period}`}>
                <p className="timeline-item__period">{item.period}</p>
                <h3>{item.title}</h3>
                {item.organization ? <p className="timeline-item__organization">{item.organization}</p> : null}
                {item.description ? <p className="timeline-item__description">{item.description}</p> : null}
              </article>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
