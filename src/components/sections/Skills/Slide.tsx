"use client";

import { Slide as SlideComponent } from "@/components/ui/Slide";
import { useSlide } from "@/components/ui/Slide/hooks/useSlide";
import { SlideSection } from "@/components/ui/Slide/types";

const slideSections: SlideSection[] = [
  {
    title: "Backend",
    description: "Tecnologias que utilizo para criar aplicações de servidor.",
    image: "/backend.png",
    items: [
      {
        title: "Spring",
        logo: "/spring.png",
      },

      {
        title: "Nest.js",
        logo: "/nest.png",
      },

      {
        title: "Postgres",
        logo: "/postgres.png",
      },
    ],
  },

  {
    title: "Frontend",
    description: "Tecnologias que utilizo para criar interfaces de usuário.",
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
    title: "Design e Arquitetura",
    description:
      "Conceitos e princípios de design e arquitetura que utilizo para criar aplicações escaláveis e de fácil manutenção.",
    image: "/design-background.png",

    items: [
      {
        title: "Domain-Driven Design",
        logo: "/ddd.png",
      },
      {
        title: "Clean Arch",
        logo: "/clean.png",
      },
      {
        title: "Test-Driven Development",
        logo: "/tdd.png",
      },
    ],
  },

  {
    title: "Outras tecnologias",
    description:
      "Tecnologias genéricas que utilizo para criar aplicações e projetos.",
    image: "/other.png",
    items: [
      {
        title: "Git",
        logo: "/git.png",
      },

      {
        title: "Docker",
        logo: "/docker.png",
      },

      {
        title: "Linux",
        logo: "/linux.png",
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
