import { ComponentProps } from "react";

type SlideProps = ComponentProps<"div">;

export function SlidePainel({ children }: SlideProps) {
  return (
    <div className="space-y-8 rounded-lg border-2 border-[#71DCC8]/[.10] bg-[#DDF8F3]/[.06] px-3 py-6 backdrop-blur-sm sm:px-10">
      {children}
    </div>
  );
}
