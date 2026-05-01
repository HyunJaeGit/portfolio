import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type BadgeProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLSpanElement>;

export function Badge({ children, className, ...props }: BadgeProps) {
  return (
    <span className={classNames("badge", className)} {...props}>
      {children}
    </span>
  );
}
