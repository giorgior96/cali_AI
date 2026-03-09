import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export const metadata: Metadata = {
  title: "CALI.AI — Moltiplica il Tuo Metodo, Non il Tuo Tempo",
  description: "L'AI Assistant che apprende il tuo stile di coaching e genera schede di calisthenics evidence-based in 30 secondi.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "CALI.AI — Moltiplica il Tuo Metodo",
    description: "L'AI Assistant per coach di calisthenics. Carica i tuoi protocolli, genera schede perfette in 30 secondi.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="it">
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-[#F9F7F2] text-slate-900 selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
