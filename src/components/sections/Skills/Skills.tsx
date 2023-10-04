import { Title } from "@/components/utilities";
import { Subtitle } from "@/components/utilities/Subtitle";
import { Slide } from "./Slide";

export function Skills() {
  return (
    <section className="container-wrapper mt-28 md:mt-8" id="skills">
      <div className="space-y-12 md:space-y-8">
        <div className="text-center md:text-start">
          <Subtitle>Minhas</Subtitle>
          <Title>Habilidades</Title>
        </div>
        <Slide />
      </div>
    </section>
  );
}
