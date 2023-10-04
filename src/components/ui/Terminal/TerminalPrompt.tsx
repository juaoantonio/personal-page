"use client";

import { Tilde, Ubuntu } from "@/components/svgs";
import { ChevronRight, Home } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { TerminalPromptText } from "./TerminaPromptlText";

export function TerminalPrompt() {
  const [visible, setVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (visible) return;

    function handleScroll() {
      const elemTop = elementRef.current?.getBoundingClientRect().top;
      if (elemTop && elemTop - window.innerHeight < -250) {
        setVisible(true);
      }
    }

    window.addEventListener("scroll", handleScroll);
  }, [visible]);

  return (
    <div
      className="a relative flex-1 space-y-3 rounded-b-lg border-2 border-[rgba(113,220,200,0.10)] bg-[rgba(221,248,243,0.10)] px-10 py-6 before:absolute before:left-4 before:top-8 before:h-10 before:w-4 before:border-b-2 before:border-l-2 before:border-t-2 before:border-b-[#64688A] before:border-l-[#64688A] before:border-t-[#64688A]"
      ref={elementRef}
    >
      <div className="flex items-center gap-2">
        <Ubuntu />
        <Home size={20} className="text-primary" />
        <Tilde />
      </div>
      <div>
        <ChevronRight
          size={30}
          className="relative -left-2 inline-block text-primary"
        />
        <pre className="inline-block">cat apresentation.txt</pre>
        <pre className="mt-4 whitespace-pre-line">
          {visible && <TerminalPromptText />}
        </pre>
      </div>
    </div>
  );
}
