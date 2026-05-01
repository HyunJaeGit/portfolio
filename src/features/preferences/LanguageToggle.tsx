import { ToggleButton } from "../../components/common/ToggleButton";
import { useLanguage } from "../../hooks/useLanguage";

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="segmented-control" aria-label="언어 선택">
      <ToggleButton isActive={language === "KR"} onClick={() => setLanguage("KR")}>
        KR
      </ToggleButton>
      <ToggleButton isActive={language === "EN"} onClick={() => setLanguage("EN")}>
        EN
      </ToggleButton>
    </div>
  );
}
