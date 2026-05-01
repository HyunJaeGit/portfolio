import { ToggleButton } from "../../components/common/ToggleButton";
import { useTheme } from "../../hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <ToggleButton isActive={theme === "dark"} onClick={toggleTheme} aria-label="테마 전환">
      {theme === "dark" ? "Dark" : "Light"}
    </ToggleButton>
  );
}
