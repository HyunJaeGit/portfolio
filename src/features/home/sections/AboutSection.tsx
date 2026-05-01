import { Badge } from "../../../components/common/Badge";
import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { aboutContent } from "../../../data/home";

export function AboutSection() {
  return (
    <section className="section content-section" id="about">
      <div className="container split-section">
        <SectionTitle
          eyebrow={aboutContent.eyebrow}
          title={aboutContent.title}
          description={aboutContent.description}
        />
        <Card className="text-card">
          {aboutContent.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <div className="tag-list">
            {aboutContent.tags.map((tag) => (
              <Badge key={tag}>{tag}</Badge>
            ))}
          </div>
        </Card>
      </div>
    </section>
  );
}
