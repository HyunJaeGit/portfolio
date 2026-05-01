import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { certificationItems } from "../../../data/home";

export function CertificationsSection() {
  return (
    <section className="section content-section" id="certifications">
      <div className="container">
        <SectionTitle eyebrow="Certifications" title="자격 및 기타" />
        <Card>
          <ul className="certification-list">
            {certificationItems.map((certification) => (
              <li key={certification}>{certification}</li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  );
}
