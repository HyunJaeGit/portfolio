import { ToggleButton } from "../../components/common/ToggleButton";
import { useLocalStorage } from "../../hooks/useLocalStorage";

type ViewMode = "2D" | "3D";

export function ViewModeToggle() {
  const [viewMode, setViewMode] = useLocalStorage<ViewMode>("portfolio-view-mode", "2D");

  const handle3DClick = () => {
    setViewMode("3D");
    window.alert("3D 커리어 전시관은 다음 단계에서 구현될 예정입니다.");
  };

  return (
    <div className="segmented-control" aria-label="보기 모드 선택">
      <ToggleButton isActive={viewMode === "2D"} onClick={() => setViewMode("2D")}>
        2D
      </ToggleButton>
      <ToggleButton isActive={viewMode === "3D"} onClick={handle3DClick}>
        3D
      </ToggleButton>
    </div>
  );
}
