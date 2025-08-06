import "./globals.css";
import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

import { Header } from "@/components/sections/Header";
import { Footer } from "@/components/sections/Footer";

const montserrat = Montserrat({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "João Barbosa | Backend FullStack Developer",
  description:
    "João, 20 anos, é Desenvolvedor Backend especialista em NestJS, Spring, TypeScript e MySQL. Constrói soluções robustas e escaláveis, sempre focado na experiência do usuário.",
    openGraph: {
    locale: "pt_BR",
     type: "website",
      siteName: "João Barbosa | Backend FullStack Developer",
        title:
          "João Barbosa | Backend FullStack Developer",
        description:
          "João, 20 anos, é Desenvolvedor Backend especialista em NestJS, Spring, TypeScript e MySQL. Constrói soluções robustas e escaláveis, sempre focado na experiência do usuário.",
        url: "https://joaobarbosa.dev.br",
        images: [
          {
            url: "/og.jpg",
    width: 239,
    height: 239,
    alt: "João Barbosa | Backend FullStack Developer",
  },
   ],
 },
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
