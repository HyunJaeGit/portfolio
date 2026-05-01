import { Button } from "../common/Button";
import { LanguageToggle } from "../../features/preferences/LanguageToggle";
import { ThemeToggle } from "../../features/preferences/ThemeToggle";
import { profile } from "../../data/profile";
import { useLanguage } from "../../hooks/useLanguage";

export function GlobalHeader() {
  const { language } = useLanguage();
  const handleCareerViewClick = () => {
    window.alert("3D 커리어 전시관은 다음 단계에서 구현될 예정입니다.");
  };

  return (
    <header className="global-header">
      <div className="container global-header__inner">
        <a className="global-header__logo" href="#intro" aria-label="권현재 홈페이지 홈">
          <span className="global-header__logo-mark">KHJ</span>
          <span>{language === "EN" ? profile.englishName : `${profile.name} 홈페이지`}</span>
        </a>
        <div className="global-header__actions">
          <LanguageToggle />
          <ThemeToggle />
          <Button variant="secondary" size="sm" onClick={handleCareerViewClick}>
            3D 커리어관
          </Button>
        </div>
      </div>
    </header>
  );
}
