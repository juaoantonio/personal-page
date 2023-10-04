import { ArrowLeftCircle, ArrowRightCircle } from "lucide-react";
import { SlideSection } from "./types";

type SlideControlsProps = {
  activeSlideSection: number;
  slideSections: SlideSection[];
  handleSlideSectionIncrement: () => void;
  handleSlideSectionDecrement: () => void;
};

export function SlideControls({
  activeSlideSection,
  slideSections,
  handleSlideSectionIncrement,
  handleSlideSectionDecrement,
}: SlideControlsProps) {
  return (
    <div className="flex justify-between px-4">
      <button onClick={handleSlideSectionDecrement}>
        <ArrowLeftCircle
          size={48}
          color={activeSlideSection === 0 ? "#9299A3" : "#27DEBF"}
        />
      </button>

      <button onClick={handleSlideSectionIncrement}>
        <ArrowRightCircle
          size={48}
          color={
            activeSlideSection === slideSections.length - 1
              ? "#9299A3"
              : "#27DEBF"
          }
        />
      </button>
    </div>
  );
}
