import { PropsWithChildren } from "react";

type SubtitleProps = PropsWithChildren;

export function Subtitle({ children }: SubtitleProps) {
  return <h3 className="text-subtitle text-2xl font-semibold">{children}</h3>;
}
