import type { Metadata } from "next";
import {  } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/Navbar/Navbar";


export const metadata: Metadata = {
  title: "Fanny D&T - Portfolio",
  description: "Découvrez le portfolio de Fanny D&T, une testeuse et développeuse passionnée par la création d'expériences web innovantes et esthétiques de qualité. Explorez ses projets, compétences et réalisations dans le domaine du test et du développement web.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="fr"
      className={` h-full antialiased`}
    >
      <body className="min-h-full flex flex-col "><Navbar />{children}</body>
    </html>
  );
}
