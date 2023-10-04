import { ComponentProps } from "react";

type SlideRootProps = ComponentProps<"div">;

export function SlideRoot({ children }: SlideRootProps) {
  return (
    <div className="relative grid gap-8 md:grid-cols-2 min-[890px]:after:absolute min-[890px]:after:-right-[calc(20vw-65%)] min-[890px]:after:top-[calc(50%-100px)] min-[890px]:after:h-[200px] min-[890px]:after:w-[3px] min-[890px]:after:bg-primary">
      {children}
    </div>
  );
}
