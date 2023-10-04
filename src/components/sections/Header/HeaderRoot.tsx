import { ComponentProps, PropsWithChildren } from "react";
import { Header } from ".";

type HeaderRootProps = PropsWithChildren;

export function HeaderRoot({ children }: HeaderRootProps) {
  return (
    <header className="fixed z-50  w-full bg-background">
      <div className="container-wrapper flex items-center justify-between py-4">
        {children}
      </div>
    </header>
  );
}
