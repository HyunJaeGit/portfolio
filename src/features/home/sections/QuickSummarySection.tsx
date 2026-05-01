import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { quickSummaryCards } from "../../../data/home";

export function QuickSummarySection() {
  return (
    <section className="section content-section" id="summary">
      <div className="container">
        <SectionTitle
          eyebrow="Quick Summary"
          title="핵심 강점 요약"
          description="Backend · Infra · Optimization · Operation"
        />
        <div className="summary-grid">
          {quickSummaryCards.map((card) => (
            <Card className="summary-card" key={card.title}>
              <p className="summary-card__subtitle">{card.subtitle}</p>
              <h3>{card.title}</h3>
              <p>{card.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
