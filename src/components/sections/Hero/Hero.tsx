"use client";

import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { Github, Linkedin } from "lucide-react";
import { Title } from "@/components/utilities";

export function Hero() {
  return (
    <section
      className="container-wrapper center grid justify-items-center md:grid-cols-2 md:items-center md:gap-8"
      id="intro"
    >
      <div className="relative">
        <Image
          className=""
          src={"/hero-photo.png"}
          alt={"João Barbosa"}
          width={500}
          height={500}
        />
        <Image
          className="absolute bottom-[120px] left-[24%] -z-10 w-[15%] animate-[float_2.8s_ease-in_infinite_alternate_none_running]"
          src={"/next.svg"}
          alt={"NextJS Icon"}
          width={76}
          height={76}
        />
        <Image
          className="absolute bottom-[180px] right-[13%] -z-10 w-[15%] animate-[float_2.2s_linear_infinite_alternate_none_running]"
          src={"/react.svg"}
          alt={"NextJS Icon"}
          width={76}
          height={76}
        />
        <Image
          className="absolute bottom-[15%] right-[20%] w-[15%] animate-[float_2.4s_ease-out_infinite_alternate_none_running]"
          src={"/typescript.svg"}
          alt={"NextJS Icon"}
          width={76}
          height={76}
        />
      </div>

      <div className="relative space-y-10 justify-self-stretch md:justify-self-auto">
        <Image
          src={"/vscode.png"}
          alt={"VSCode Logo"}
          width={607}
          height={607}
          className="absolute  -z-10 h-auto sm:left-[15%] sm:h-full sm:w-auto md:left-0 md:h-auto md:w-[80%]"
        />

        <div className="grid gap-4 text-center md:gap-5 md:text-start">
          <p className="font-bold text-primary-2">Hello, there!</p>
          <Title principal>Frontend Developer & UI/UX Designer</Title>
          <p className="mx-auto max-w-lg md:mx-0">
            Me chamo João Barbosa e sou um desenvolvedor experiente em
            JavaScript e TypeScript, criando interfaces de alta qualidade com
            Next.js e React.js, focando na usabilidade e eficácia da experiência
            do usuário.
          </p>
        </div>

        <div className="mx-auto flex flex-wrap justify-center gap-5 md:justify-normal">
          <Button.Root
            href="https://api.whatsapp.com/send?phone=+5591985992757&text=Ol%C3%A1%2C%20Jo%C3%A3o%21%20Vi%20seu%20portf%C3%B3lio%20e%20gostaria%20de%20conversar%20sobre%20um%20projeto%20com%20voc%C3%AA%21"
            target="_blank"
            rel="external"
          >
            Contate-me
          </Button.Root>
          <Button.Root
            ghost
            href="https://github.com/juaoantonio/"
            target="_blank"
            rel="external"
          >
            Github
            <Button.Icon icon={Github} />
          </Button.Root>
          <Button.Root
            ghost
            href="https://www.linkedin.com/in/juaoantonio/"
            target="_blank"
            rel="external"
          >
            LinkedIn
            <Button.Icon icon={Linkedin} />
          </Button.Root>
        </div>
      </div>
    </section>
  );
}
