import type { ButtonHTMLAttributes, ElementType, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type ButtonVariant = "primary" | "secondary" | "ghost";
type ButtonSize = "sm" | "md";

type ButtonProps<T extends ElementType = "button"> = {
  as?: T;
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  Record<string, unknown>;

export function Button<T extends ElementType = "button">({
  as,
  children,
  variant = "primary",
  size = "md",
  className,
  type,
  ...props
}: ButtonProps<T>) {
  const Component = as ?? "button";

  return (
    <Component
      className={classNames("button", `button--${variant}`, `button--${size}`, className)}
      type={Component === "button" ? (type ?? "button") : undefined}
      {...props}
    >
      {children}
    </Component>
  );
}
