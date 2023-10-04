import { Terminal } from "@/components/ui/Terminal";
import { Title } from "@/components/utilities";
import { Subtitle } from "@/components/utilities/Subtitle";

export function About() {
  return (
    <section className="container-wrapper mt-24" id="about">
      <div className="text-center md:text-start">
        <Subtitle>Sobre mim,</Subtitle>
        <Title>Uma pessoa apaixonada por tecnologia</Title>
      </div>
      <Terminal />
    </section>
  );
}
