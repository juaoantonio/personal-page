"use client";

import { Slide as SlideComponent } from "@/components/ui/Slide";
import { useSlide } from "@/components/ui/Slide/hooks/useSlide";
import { SlideSection } from "@/components/ui/Slide/types";

const slideSections: SlideSection[] = [
  {
    title: "Fundamentos",
    description:
      "Tecnologias que domino e baseiam meus conhecimentos em bibliotecas e frameworks frontend.",

    image: "/foundations.png",

    items: [
      {
        title: "JavaScript",
        logo: "/javascript.png",
      },

      {
        title: "HTML",
        logo: "/html.svg",
      },

      {
        title: "CSS",
        logo: "/css.png",
      },
    ],
  },

  {
    title: "Bibliotecas e Frameworks",
    description:
      "Tecnologias que domino e baseiam meus conhecimentos em bibliotecas e frameworks frontend.",
    image: "/frameworks.png",
    items: [
      {
        title: "React.js",
        logo: "/react.png",
      },

      {
        title: "Next.js",
        logo: "/next.png",
      },

      {
        title: "TailwindCSS",
        logo: "/tailwind.png",
      },
    ],
  },

  {
    title: "Design",
    description:
      "Ferramentas e princípios de design que utilizo para criar interfaces e experiências de usuário.",
    image: "/design-background.png",

    items: [
      {
        title: "Figma",
        logo: "/figma.png",
      },

      {
        title: "Design Principles",
        logo: "/design.png",
      },
    ],
  },
];

export function Slide() {
  const {
    activeSlideSection,
    handleSlideSectionIncrement,
    handleSlideSectionDecrement,
    activeSlideItem,
    setActiveSlideItem,
  } = useSlide(slideSections);

  const { title, description, image, items } =
    slideSections[activeSlideSection];

  return (
    <SlideComponent.Root>
      <SlideComponent.Painel>
        <SlideComponent.Items>
          {items.map(({ title, logo }, index) => (
            <SlideComponent.Item
              title={title}
              logo={logo}
              key={title}
              active={activeSlideItem === index}
              onClick={() => setActiveSlideItem(index)}
            />
          ))}
        </SlideComponent.Items>
        <SlideComponent.Controls
          activeSlideSection={activeSlideSection}
          slideSections={slideSections}
          handleSlideSectionIncrement={handleSlideSectionIncrement}
          handleSlideSectionDecrement={handleSlideSectionDecrement}
        />
      </SlideComponent.Painel>
      <SlideComponent.Description
        title={title}
        description={description}
        image={image}
        key={activeSlideSection}
      />
    </SlideComponent.Root>
  );
}
