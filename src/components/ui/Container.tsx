import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function Container({ children }: Props) {
  return (
    <div className="max-w-6xl mx-auto px-6 md:px-10">{children}</div>
  );
}
