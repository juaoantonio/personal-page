import { useState } from "react";
import { SlideSection } from "../types";

export function useSlide(slideSections: SlideSection[]) {
  const [activeSlideSection, setActiveSlideSection] = useState(0);
  const [activeSlideItem, setActiveSlideItem] = useState(0);

  function handleSlideSectionDecrement() {
    setActiveSlideSection((prev) => {
      if (prev > 0) {
        return prev - 1;
      }

      return prev;
    });

    setActiveSlideItem(0);
  }

  function handleSlideSectionIncrement() {
    setActiveSlideSection((prev) => {
      if (prev < slideSections.length - 1) {
        return prev + 1;
      }

      return prev;
    });

    setActiveSlideItem(0);
  }

  return {
    activeSlideItem,
    setActiveSlideItem,
    activeSlideSection,
    handleSlideSectionDecrement,
    handleSlideSectionIncrement,
  };
}
