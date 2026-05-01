import { useState } from "react";
import { Badge } from "../../../components/common/Badge";
import { Button } from "../../../components/common/Button";
import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { projectsByLanguage } from "../../../data/projects";
import { useLanguage } from "../../../hooks/useLanguage";
import type { LinkItem } from "../../../types/common";
import { scrollToSection } from "../../../utils/scrollToSection";

function handleProjectLink(link: LinkItem, language: "KR" | "EN") {
  if (link.targetId) {
    scrollToSection(link.targetId);
    return;
  }

  if (link.href === "#") {
    window.alert(language === "EN" ? "Portfolio detail link will be connected later." : "포트폴리오 상세 링크는 추후 연결 예정입니다.");
  }
}

export function ProjectsSection() {
  const { language } = useLanguage();
  const projects = projectsByLanguage[language];
  const [selectedProjectId, setSelectedProjectId] = useState(projects[0]?.id);
  const selectedProject = projects.find((project) => project.id === selectedProjectId) ?? projects[0];
  const selectedIndex = projects.findIndex((project) => project.id === selectedProject.id);

  if (!selectedProject) {
    return null;
  }

  const moveToNextProject = () => {
    const nextProject = projects[(selectedIndex + 1) % projects.length];
    setSelectedProjectId(nextProject.id);
  };

  return (
    <section className="section content-section" id="projects">
      <div className="container interactive-section">
        <SectionTitle
          eyebrow="Projects"
          title={language === "EN" ? "Featured Projects" : "대표 프로젝트"}
          description={language === "EN" ? "From Java 8 development to Java 21 backend systems and custom tools" : "Java 8 유지보수부터 Java 21 신규 개발, 제작 툴까지"}
        />
        <div className="selector-tabs" aria-label="프로젝트 선택">
          {projects.map((project) => (
            <button
              className={project.id === selectedProject.id ? "selector-tab selector-tab--active" : "selector-tab"}
              key={project.id}
              onClick={() => setSelectedProjectId(project.id)}
              type="button"
            >
              {project.title}
            </button>
          ))}
        </div>
        <Card className="featured-card featured-card--project">
          <div className="featured-card__main">
            <p className="project-card__role">{selectedProject.role}</p>
            <h3>{selectedProject.title}</h3>
            <p>{selectedProject.subtitle}</p>
            <div className="tag-list">
              {selectedProject.techStack.slice(0, 4).map((tech) => (
                <Badge key={tech}>{tech}</Badge>
              ))}
            </div>
          </div>
          <div className="featured-card__side">
            <ul className="project-points">
              {[...selectedProject.achievements, ...selectedProject.features].slice(0, 3).map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <div className="card-actions">
              {selectedProject.links.map((link, index) =>
                link.href && link.href !== "#" ? (
                  <Button
                    as="a"
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    variant={index === 0 ? "primary" : "secondary"}
                    key={link.label}
                  >
                    {link.label}
                  </Button>
                ) : (
                  <Button
                    variant={index === 0 ? "primary" : "secondary"}
                    onClick={() => handleProjectLink(link, language)}
                    key={link.label}
                  >
                    {link.label}
                  </Button>
                ),
              )}
            </div>
          </div>
          <button
            className="card-next-hitarea"
            type="button"
            onClick={moveToNextProject}
            aria-label="다음 프로젝트 보기"
          >
            <span className="card-next-arrow" aria-hidden="true" />
          </button>
        </Card>
      </div>
    </section>
  );
}
