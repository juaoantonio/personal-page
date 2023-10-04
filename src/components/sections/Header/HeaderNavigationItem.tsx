"use client";

import { ComponentProps } from "react";

type HeaderNavigationItemProps = ComponentProps<"a"> & {
  active?: boolean;
};

export function HeaderNavigationItem({
  children,
  active,
  ...rest
}: HeaderNavigationItemProps) {
  return (
    <li
      className={`relative px-1 text-sm sm:text-base ${
        active &&
        "after:absolute after:-bottom-1 after:left-0 after:block after:h-[2px] after:w-full after:animate-grow-x-from-0-to-100 after:rounded after:bg-primary"
      }`}
    >
      <a {...rest} className="block w-full text-center">
        {children}
      </a>
    </li>
  );
}
