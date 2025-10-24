import "../styles/globals.css";
import { ReactNode } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Conecta Brasil | Soluções rápidas e seguras para sua vida burocrática",
  description: "Soluções rápidas e seguras para sua vida burocrática — parte do ecossistema Conecta Brasil. CPF, IRPF, MEI, Prefeituras e muito mais.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR" className="smooth-scroll">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="bg-[#F9FAFB] text-[#1B3D4B] antialiased">
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
