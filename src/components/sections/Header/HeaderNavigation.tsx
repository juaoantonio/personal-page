import { PropsWithChildren } from "react";

type HeaderNavigationProps = PropsWithChildren;

export function HeaderNavigation({ children }: HeaderNavigationProps) {
  return (
    <nav>
      <ul className="flex w-fit gap-4 sm:gap-8">{children}</ul>
    </nav>
  );
}
