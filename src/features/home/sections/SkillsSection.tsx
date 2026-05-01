import { useState } from "react";
import { Badge } from "../../../components/common/Badge";
import { Card } from "../../../components/common/Card";
import { SectionTitle } from "../../../components/common/SectionTitle";
import { skillCategories } from "../../../data/skills";

export function SkillsSection() {
  const [selectedCategory, setSelectedCategory] = useState(skillCategories[0]?.category);
  const selectedSkill = skillCategories.find((category) => category.category === selectedCategory) ?? skillCategories[0];
  const selectedIndex = skillCategories.findIndex((category) => category.category === selectedSkill.category);

  if (!selectedSkill) {
    return null;
  }

  const moveToNextSkill = () => {
    const nextSkill = skillCategories[(selectedIndex + 1) % skillCategories.length];
    setSelectedCategory(nextSkill.category);
  };

  return (
    <section className="section content-section" id="skills">
      <div className="container interactive-section">
        <SectionTitle
          eyebrow="Capabilities"
          title="핵심 역량"
          description="Backend · Infra · UI · 3D/AI · Team"
        />
        <div className="capability-grid">
          {skillCategories.map((category) => (
            <button
              className={category.category === selectedSkill.category ? "capability-card capability-card--active" : "capability-card"}
              key={category.category}
              onClick={() => setSelectedCategory(category.category)}
              type="button"
            >
              <span>{category.levelLabel}</span>
              <strong>{category.category}</strong>
            </button>
          ))}
        </div>
        <Card className="capability-detail">
          <h3>{selectedSkill.category}</h3>
          <div className="tag-list">
            {selectedSkill.items.map((item) => (
              <Badge key={item}>{item}</Badge>
            ))}
          </div>
          <button
            className="card-next-hitarea"
            type="button"
            onClick={moveToNextSkill}
            aria-label="다음 역량 보기"
          >
            <span className="card-next-arrow" aria-hidden="true" />
          </button>
        </Card>
      </div>
    </section>
  );
}
