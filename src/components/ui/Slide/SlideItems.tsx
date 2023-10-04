import { ComponentProps } from "react";

type SlideItemsProps = ComponentProps<"ul">;

export function SlideItems({ children }: SlideItemsProps) {
  return <ul className="relative grid grid-rows-3 gap-3">{children}</ul>;
}
