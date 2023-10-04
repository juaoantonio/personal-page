import { ComponentProps } from "react";
import { twMerge } from "tailwind-merge";

type TitleProps = ComponentProps<"h1" | "h2"> & {
  principal?: boolean;
};

export function Title({ children, className, principal = false }: TitleProps) {
  if (principal) {
    return (
      <h1
        className={twMerge(
          "max-w-2xl text-5xl font-semibold text-white",
          className,
        )}
      >
        {children}
        <strong className="font-semibold text-primary">.</strong>
      </h1>
    );
  }

  return (
    <h2 className={`max-w-2xl text-5xl font-semibold text-white`}>
      {children}
      <strong className="font-semibold text-primary">.</strong>
    </h2>
  );
}
