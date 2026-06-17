import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import InvertCursor from "@/components/InvertCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Déplacé Maison example by MrSeager",
  description: "Déplacé Maison example made by Mr.Seager using Next.JS, TypeScript and Tailwind",
  icons: { 
    icon: "/images/5d0b92e20369a4438cd54272_virgolette.svg", 
  },
  openGraph: {
    title: "Déplacé Maison example by MrSeager",
    description: "Déplacé Maison example made by Mr.Seager using Next.JS, TypeScript and Tailwind",
    images: [
      {
        url: "/images/5ed0ddbec534bd9d113f6188_unisex-label.svg",
        width: 200,
        height: 200,
      },
    ],
  },
  twitter: {
    card: "summary",
    images: ["/images/5ed0ddbec534bd9d113f6188_unisex-label.svg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <InvertCursor />
        {children}
      </body>
    </html>
  );
}
