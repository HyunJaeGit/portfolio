import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { contactContentByLanguage } from "../../../data/home";
import { useLanguage } from "../../../hooks/useLanguage";

export function ContactSection() {
  const { language } = useLanguage();
  const contactContent = contactContentByLanguage[language];

  return (
    <section className="section content-section content-section--last" id="contact">
      <div className="container contact-grid">
        <SectionTitle
          eyebrow={contactContent.eyebrow}
          title={contactContent.title}
          description={contactContent.description}
        />
        <Card className="contact-card">
          <dl className="contact-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${contactContent.email}`}>{contactContent.email}</a>
              </dd>
            </div>
            <div>
              <dt>Location</dt>
              <dd>{contactContent.location}</dd>
            </div>
            <div>
              <dt>GitHub</dt>
              <dd>
                <a href={contactContent.githubHref} target="_blank" rel="noreferrer">
                  {contactContent.githubLabel}
                </a>
              </dd>
            </div>
          </dl>
          <div className="card-actions">
            <Button as="a" href={contactContent.githubHref} target="_blank" rel="noreferrer">
              {language === "EN" ? "View GitHub" : "GitHub 확인"}
            </Button>
            <Button as="a" href={contactContent.resumeAction.href} variant="secondary">
              {contactContent.resumeAction.label}
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
}
