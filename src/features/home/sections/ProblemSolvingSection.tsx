import { useState } from "react";
import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { problemSolvingItemsByLanguage } from "../../../data/home";
import { useLanguage } from "../../../hooks/useLanguage";

export function ProblemSolvingSection() {
  const { language } = useLanguage();
  const problemSolvingItems = problemSolvingItemsByLanguage[language];
  const [selectedTitle, setSelectedTitle] = useState(problemSolvingItems[0]?.title);
  const selectedCase = problemSolvingItems.find((item) => item.title === selectedTitle) ?? problemSolvingItems[0];
  const selectedIndex = problemSolvingItems.findIndex((item) => item.title === selectedCase.title);

  if (!selectedCase) {
    return null;
  }

  const moveToNextCase = () => {
    const nextCase = problemSolvingItems[(selectedIndex + 1) % problemSolvingItems.length];
    setSelectedTitle(nextCase.title);
  };

  return (
    <section className="section content-section" id="problem-solving">
      <div className="container interactive-section">
        <SectionTitle
          eyebrow="Case Study"
          title={language === "EN" ? "Problem-Solving Cases" : "문제 해결 사례"}
          description={language === "EN" ? "Cost · Structure · Workflow" : "비용 · 구조 · 반복 작업 개선"}
        />
        <div className="case-layout">
          <div className="selector-list" aria-label="문제 해결 사례 선택">
            {problemSolvingItems.map((item) => (
              <button
                className={item.title === selectedCase.title ? "selector-list__item selector-list__item--active" : "selector-list__item"}
                key={item.title}
                onClick={() => setSelectedTitle(item.title)}
                type="button"
              >
                {item.title}
              </button>
            ))}
          </div>
          <Card className="case-card">
            <p>{selectedCase.problem}</p>
            <h3>{selectedCase.solution}</h3>
            <strong>{selectedCase.result}</strong>
            <button
              className="card-next-hitarea"
              type="button"
              onClick={moveToNextCase}
              aria-label="다음 문제 해결 사례 보기"
            >
              <span className="card-next-arrow" aria-hidden="true" />
            </button>
          </Card>
        </div>
      </div>
    </section>
  );
}
