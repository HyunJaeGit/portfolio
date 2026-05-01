import { useState } from "react";
import { createPortal } from "react-dom";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import {
  certificationItemsByLanguage,
  educationItemsByLanguage,
  resumeSnapshotItemsByLanguage,
  trainingItemsByLanguage,
} from "../../../data/home";
import { experiencesByLanguage } from "../../../data/experiences";
import { useLanguage } from "../../../hooks/useLanguage";

export function ResumeSnapshotSection() {
  const { language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const resumeSnapshotItems = resumeSnapshotItemsByLanguage[language];
  const educationItems = educationItemsByLanguage[language];
  const trainingItems = trainingItemsByLanguage[language];
  const experiences = experiencesByLanguage[language];
  const certificationItems = certificationItemsByLanguage[language];
  const text = {
    title: language === "EN" ? "Education · Training · Work" : "학력 · 교육 · 근무 이력",
    description: language === "EN" ? "Education · Training · Experience" : "Education · Training · Work",
    viewAll: language === "EN" ? "View Full Resume" : "전체 이력 보기",
    viewDetail: language === "EN" ? "Education · training · experience details" : "학력 · 교육 · 근무 경력 자세히 보기",
    close: language === "EN" ? "Close" : "닫기",
    modalTitle: language === "EN" ? "Full Resume" : "전체 이력",
  };
  const resumeModal = isOpen
    ? createPortal(
        <div className="resume-modal" role="dialog" aria-modal="true" aria-label={text.modalTitle}>
          <div className="resume-modal__backdrop" onClick={() => setIsOpen(false)} />
          <Card className="resume-modal__panel">
            <div className="resume-modal__header">
              <h3>{text.modalTitle}</h3>
              <button type="button" onClick={() => setIsOpen(false)}>
                {text.close}
              </button>
            </div>
            <div className="resume-modal__content">
              <section className="resume-modal__group resume-modal__group--education">
                <h4>Education</h4>
                {educationItems.map((item) => (
                  <article className="compact-item" key={`${item.title}-${item.period}`}>
                    <div>
                      <strong>{item.title}</strong>
                      {item.organization ? <span>{item.organization}</span> : null}
                    </div>
                    <time>{item.period}</time>
                  </article>
                ))}
              </section>
              <section className="resume-modal__group resume-modal__group--training">
                <h4>Training</h4>
                {trainingItems.map((item) => (
                  <article className="compact-item" key={`${item.title}-${item.period}`}>
                    <div>
                      <strong>{item.title}</strong>
                      {item.organization ? <span>{item.organization}</span> : null}
                    </div>
                    <time>{item.period}</time>
                  </article>
                ))}
              </section>
              <section className="resume-modal__group resume-modal__group--work">
                <h4>Work Experience</h4>
                {experiences.map((experience) => (
                  <article className="compact-item" key={`${experience.organization}-${experience.role}`}>
                    <div>
                      <strong>{experience.organization}</strong>
                      <span>{experience.role}</span>
                    </div>
                    {experience.period ? <time>{experience.period}</time> : null}
                  </article>
                ))}
              </section>
              <section className="resume-modal__group resume-modal__group--certification">
                <h4>Certifications</h4>
                <ul className="compact-list">
                  {certificationItems.map((certification) => (
                    <li key={certification}>{certification}</li>
                  ))}
                </ul>
              </section>
            </div>
          </Card>
        </div>,
        document.body,
      )
    : null;

  return (
    <section className="section content-section" id="background">
      <div className="container interactive-section">
        <SectionTitle
          eyebrow="Resume"
          title={text.title}
          description={text.description}
        />
        <div className="resume-snapshot-panel">
          <div className="resume-snapshot-grid">
            {resumeSnapshotItems.map((item) => (
              <Card className="resume-snapshot-card" key={item.title}>
                <span>{item.title}</span>
                <strong>{item.value}</strong>
                <p>{item.description}</p>
              </Card>
            ))}
          </div>
          <button
            className="resume-overlay-button"
            type="button"
            onClick={() => setIsOpen(true)}
            aria-label={text.viewAll}
          >
            <strong>{text.viewAll}</strong>
            <span>{text.viewDetail}</span>
          </button>
        </div>
        {resumeModal}
      </div>
    </section>
  );
}
