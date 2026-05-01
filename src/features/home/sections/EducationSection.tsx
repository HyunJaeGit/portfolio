import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { educationItems } from "../../../data/home";
import type { TimelineItem } from "../../../types/home";

function TimelineList({ items }: { items: TimelineItem[] }) {
  return (
    <div className="timeline-list">
      {items.map((item) => (
        <article className="timeline-item" key={`${item.title}-${item.period}`}>
          <p className="timeline-item__period">{item.period}</p>
          <h3>{item.title}</h3>
          {item.organization ? <p className="timeline-item__organization">{item.organization}</p> : null}
          {item.description ? <p className="timeline-item__description">{item.description}</p> : null}
        </article>
      ))}
    </div>
  );
}

export function EducationSection() {
  return (
    <section className="section content-section" id="education">
      <div className="container split-section">
        <SectionTitle eyebrow="Education" title="학력" description="University · High School" />
        <Card>
          <TimelineList items={educationItems} />
        </Card>
      </div>
    </section>
  );
}
