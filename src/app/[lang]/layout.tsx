import type { Metadata } from "next";
import { Inter, Oswald } from "next/font/google";
import "../globals.css";
import { dictionaries } from "@/i18n/dictionaries";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const oswald = Oswald({ subsets: ["latin"], variable: "--font-oswald" });

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const dict = dictionaries[lang as keyof typeof dictionaries] || dictionaries.en;
  
  return {
    title: dict.meta.title,
    description: dict.meta.description,
    icons: {
      icon: "/favicon.ico",
    },
    openGraph: {
      title: dict.meta.ogTitle,
      description: dict.meta.ogDesc,
      images: ["/logo.png"],
    },
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  
  return (
    <html lang={lang}>
      <body className={`${inter.variable} ${oswald.variable} font-sans antialiased bg-[#F9F7F2] text-slate-900 selection:bg-indigo-500/30`}>
        {children}
      </body>
    </html>
  );
}
