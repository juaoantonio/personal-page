import { Title } from "@/components/utilities";
import { Subtitle } from "@/components/utilities/Subtitle";
import Image from "next/image";

export function Intro() {
  return (
    <section className="container-wrapper mt-20 grid items-center gap-12 md:mt-8 md:grid-cols-2">
      <div className="space-y-5 text-center md:text-start">
        <div>
          <Subtitle>Para além de ferramentas,</Subtitle>
          <Title>Conceitos</Title>
        </div>
        <p className="mx-auto max-w-lg md:mx-0">
          Sou um generalista especialista em frontend. Possuo conhecimentos
          necessários para qualquer desenvolvedor:{" "}
          <strong>
            Lógica de Programação, Resolução de Problemas, Protocolos HTTP/
            TCP-IP, DNS, Servidores Linux, SSH, Infra
          </strong>
          , entre outros, o que me permite ser flexível e não depender de
          tecnologias ou hypes.
        </p>
      </div>

      <div className="relative w-fit animate-float justify-self-center md:justify-self-end">
        <Image
          src={"/left-bracket.svg"}
          width={112.5}
          height={250}
          alt={
            "Ilustração de uma pessoa sentada em cima de um computador aberto"
          }
          className="absolute -left-16 -top-0 -z-10 w-[25%] rotate-12"
        />
        <Image
          src={"/illustration.svg"}
          width={410}
          height={410}
          alt={
            "Ilustração de uma pessoa sentada em cima de um computador aberto"
          }
          className="w-full"
        />
        <Image
          src={"/right-bracket.svg"}
          width={112.5}
          height={250}
          alt={
            "Ilustração de uma pessoa sentada em cima de um computador aberto"
          }
          className="absolute -bottom-12 -right-16 -z-10 w-[25%] rotate-12"
        />
      </div>
    </section>
  );
}
