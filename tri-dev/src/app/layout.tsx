import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.scss";
import { Container } from "@/components/Container/Index";

const poppins = Poppins({ weight: "400", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tridev",
  description: "Faça seu site. Seu site online por um preço acessível, incluindo landign page, e-commerce, blog, portfólio e muito mais. Compre seu site hoje e impulsione sua presença online."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <Container>{children}</Container>
      </body>
    </html>
  );
}
