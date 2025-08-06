import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Barbosa | Backend FullStack Developer",
  description:
    "Meu nome é João, tenho 20 anos e sou Desenvolvedor Backend com experiência em NestJS, Spring, TypeScript, MySQL, e outras tecnologias. No entanto, o que realmente define um bom profissional não são as ferramentas específicas, mas a habilidade de construir soluções robustas e escaláveis para atender às necessidades dos usuários. Esse é o princípio que aplico no meu dia a dia como desenvolvedor",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body
        className={`min-h-screen bg-background text-text-color ${montserrat.className}`}
      >
        <Header />
        {children}
        <Footer.Root />
      </body>
    </html>
  );
}
