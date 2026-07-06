import { ReactNode } from "react";
import clsx from "clsx";

interface Props {
  children: ReactNode;
  className?: string;
}

export default function Section({
  children,
  className,
}: Props) {
  return (
    <section className={clsx("min-h-screen flex items-center py-24", className)}>
      {children}
    </section>
  );
}
