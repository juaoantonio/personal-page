import Image from "next/image";
import { ComponentProps } from "react";

type SlideDescriptionProps = ComponentProps<"div"> & {
  title: string;
  description: string;
  image: string;
};

export function SlideDescription({
  title,
  description,
  image,
}: SlideDescriptionProps) {
  return (
    <div
      className={`relative -order-1 mx-auto animate-from-bottom-fadein space-y-4 self-center justify-self-end text-center opacity-0 md:order-none md:mx-0 md:text-start`}
    >
      <h2 className="mx-auto max-w-[348px] text-4xl font-medium text-[#F5F6F8] md:mx-0">
        {title}
      </h2>
      <p className="mx-auto max-w-[348px] md:mx-0">{description}</p>
      <Image
        src={image}
        width={250}
        height={250}
        alt="imagem de fundo"
        className="absolute -top-16 left-[25%] -z-[1000] w-[55%] md:-top-24"
        priority={true}
      />
    </div>
  );
}
