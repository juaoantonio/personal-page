import Image from "next/image";
import { ComponentProps } from "react";

type SlideItemProps = ComponentProps<"li"> & {
  title: string;
  logo: string;
  active: boolean;
};

export function SlideItem({ title, logo, active, ...props }: SlideItemProps) {
  return (
    <li
      {...props}
      className={`flex flex-1 cursor-pointer items-center justify-between rounded-xl px-4 py-3  ${
        active && "bg-[#B8EDE3]/[.1]"
      }`}
    >
      <p className="max-w-[10ch] text-xl font-medium text-white min-[420px]:max-w-none">
        {title}
      </p>
      {active && (
        <Image
          src={`${logo}`}
          alt={title}
          width={170}
          height={170}
          className="absolute bottom-5 right-0 w-[45%] animate-from-bottom-fadein-rotate rounded-xl min-[420px]:w-[35%] sm:-bottom-1 md:w-[40%]"
        />
      )}
    </li>
  );
}
