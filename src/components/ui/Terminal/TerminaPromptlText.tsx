import { useEffect, useState } from "react";

const terminalMessage = `Meu nome é João, tenho 19 anos e sou Desenvolvedor Front-End com experência em React.js, Next.js, JavaScript, TypeScript, TailwindCSS e outras tecnologias. Porém, tecnologias específicas não definem um bom profissional, mas sim sua habilidade em resolver problemas do usuário, e é nisso que acredito.

Sou acadêmico do curso de Ciência da Computação na Universidade Federal do Pará e estou a procura de uma nova oportunidade.`;

export function TerminalPromptText() {
  const [terminalText, setTerminalText] = useState("");

  useEffect(() => {
    let index = -1;

    const interval = setInterval(() => {
      index += 1;

      setTerminalText((prev) => prev + terminalMessage[index]);

      if (index === terminalMessage.length - 1) {
        console.log("clear");

        clearInterval(interval);
      }
    }, 25);

    return () => clearInterval(interval);
  }, []);

  return (
    <pre className="mt-4 whitespace-pre-line">
      {terminalText}

      <span className="inline animate-cursor-blink">|</span>
    </pre>
  );
}
