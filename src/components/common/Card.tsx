import type { HTMLAttributes, ReactNode } from "react";
import { classNames } from "../../utils/classNames";

type CardProps = {
  children: ReactNode;
  className?: string;
} & HTMLAttributes<HTMLDivElement>;

export function Card({ children, className, ...props }: CardProps) {
  return (
    <div className={classNames("card", className)} {...props}>
      {children}
    </div>
  );
}
