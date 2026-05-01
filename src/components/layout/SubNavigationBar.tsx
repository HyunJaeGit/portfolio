import { navigationItemsByLanguage } from "../../data/navigation";
import { useLanguage } from "../../hooks/useLanguage";
import { scrollToSection } from "../../utils/scrollToSection";

export function SubNavigationBar() {
  const { language } = useLanguage();
  const navigationItems = navigationItemsByLanguage[language];

  return (
    <nav className="sub-navigation" aria-label="포트폴리오 섹션">
      <div className="container sub-navigation__inner">
        {navigationItems.map((item) => (
          <button
            className="sub-navigation__link"
            type="button"
            key={item.targetId}
            onClick={() => scrollToSection(item.targetId)}
          >
            {item.label}
          </button>
        ))}
      </div>
    </nav>
  );
}
