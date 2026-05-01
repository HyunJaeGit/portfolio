import type { ButtonHTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type ToggleButtonProps = {
  children: ReactNode;
  isActive?: boolean;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement>;

export function ToggleButton({ children, isActive = false, className, ...props }: ToggleButtonProps) {
  return (
    <button
      className={classNames("toggle-button", isActive && "toggle-button--active", className)}
      type="button"
      aria-pressed={isActive}
      {...props}
    >
      {children}
    </button>
  );
}
