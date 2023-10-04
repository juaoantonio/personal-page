import { ComponentProps } from "react";

type ButtonProps = ComponentProps<"a"> & {
  ghost?: boolean;
};

export function ButtonRoot({ children, ghost = false, ...props }: ButtonProps) {
  return (
    <a
      {...props}
      className={`
      flex cursor-pointer items-center justify-center gap-2 rounded-md px-5 py-3
       text-xl transition-all duration-300 ease-in-out
      hover:scale-110
      hover:transform
      ${
        ghost
          ? "border-2 border-primary font-medium text-primary hover:bg-primary hover:text-white"
          : "bg-primary font-semibold text-button-text hover:bg-primary-hover"
      }
      `}
    >
      {children}
    </a>
  );
}
