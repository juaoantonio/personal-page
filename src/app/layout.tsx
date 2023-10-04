import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Barbosa | Frontend Developer & UI/UX Designer",
  description:
    "Meu nome é João, tenho 19 anos e sou Desenvolvedor Front-End com experência em React.js, Next.js, JavaScript, TypeScript, TailwindCSS e outras tecnologias. Porém, tecnologias específicas não definem um bom profissional, mas sim sua habilidade em resolver problemas do usuário, e é nisso que acredito e aplico no meu dia-a-dia como desenvolvedor.",
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
