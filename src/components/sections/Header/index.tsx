"use client";

import { HeaderRoot } from "./HeaderRoot";
import { HeaderLogo } from "./HeaderLogo";
import { HeaderNavigation } from "./HeaderNavigation";
import { HeaderNavigationItem } from "./HeaderNavigationItem";
import { MouseEvent, useCallback, useEffect, useRef, useState } from "react";

const sectionsYCoordinates: {
  [key: string]: number;
} = {
  intro: 0,
  skills: 700,
  about: 1200,
};

export function Header() {
  const [y, setY] = useState(0);
  const [visibleSection, setVisibleSection] = useState<string>("intro");

  useEffect(() => {
    const internalLinks = document.querySelectorAll("a[href^='#']");
    internalLinks.forEach((link) => {
      const href = link.getAttribute("href");

      const element = document.querySelector(href!);
      if (!element) return;

      sectionsYCoordinates[href!.replace("#", "")] =
        element.getBoundingClientRect().top + window.scrollY - 200;
    });
  }, []);

  const getVisibleSection = useCallback((y: number) => {
    if (y < sectionsYCoordinates.skills) {
      return "intro";
    } else if (y < sectionsYCoordinates.about) {
      return "skills";
    } else {
      return "about";
    }
  }, []);

  useEffect(() => {
    function handleScroll() {
      setVisibleSection(getVisibleSection(window.scrollY));
      setY(window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);
  }, [y, getVisibleSection]);

  async function handleNavigationItemClick(e: MouseEvent<HTMLAnchorElement>) {
    e.preventDefault();

    const href = e.currentTarget.getAttribute("href");
    if (!href) return;

    const element = document.querySelector(href);
    if (!element) return;

    window.scrollTo({
      top: element.getBoundingClientRect().top + window.scrollY - 100,
      behavior: "smooth",
    });
  }

  return (
    <HeaderRoot>
      <HeaderLogo />
      <HeaderNavigation>
        <HeaderNavigationItem
          href="#intro"
          active={visibleSection === "intro"}
          onClick={handleNavigationItemClick}
        >
          Introdução
        </HeaderNavigationItem>
        <HeaderNavigationItem
          href="#skills"
          active={visibleSection === "skills"}
          onClick={handleNavigationItemClick}
        >
          Skills
        </HeaderNavigationItem>
        <HeaderNavigationItem
          href="#about"
          active={visibleSection === "about"}
          onClick={handleNavigationItemClick}
        >
          Sobre mim
        </HeaderNavigationItem>
      </HeaderNavigation>
    </HeaderRoot>
  );
}
