import type { Metadata } from "next";
import { Geist_Mono, Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
})

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: {
    default: "Madyan Arashy",
    template: "%s | Madyan Arashy"
  },
  description: "Portfolio showcasing my projects, skills, and experience as a web developer.",
  other: {
    keywords: "portfolio, web developer, react, nextjs",
    author: "Madyan Arashy",
    robots: "index, follow",
    "theme-color": "#0D1117"
  },
  openGraph: {
    title: "Madyan Arashy | Web Developer",
    description: "Explore my portfolio projects and skills.",
    url: "https://madyan.online",
    siteName: "Madyan’s Portfolio",
    images: [
      {
        url: "/og-image.png",  // should be 1200x630px
        width: 1200,
        height: 630,
        alt: "Portfolio preview image"
      }
    ],
    locale: "en_US",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${geistMono.variable} ${spaceGrotesk.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
