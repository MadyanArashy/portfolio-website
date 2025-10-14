import type { Metadata, Viewport } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  style: ["normal", "italic"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  metadataBase: new URL("https://madyan.online"),
  title: {
    default: "Madyan Arashy",
    template: "%s | Madyan Arashy",
  },
  description:
    "Portfolio showcasing my projects, skills, and experience as a web developer.",
  keywords: ["portfolio", "web developer", "react", "nextjs"],
  authors: [{ name: "Madyan Arashy" }],
  robots: "index, follow",
  openGraph: {
    title: "Madyan Arashy | Web Developer",
    description: "Explore my portfolio projects and skills.",
    url: "https://madyan.online",
    siteName: "Madyan’s Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Portfolio preview image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#0D1117",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </head>
      <body
        className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased bg-primary text-text-primary`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
