import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "./styles-page.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pelucilas ABC",
  description: "Encuentra en este sitio tus peliculas favoritas",
  openGraph: {
    title: ' Películas ABC',
    description: 'Encontraste lo que buscabas..',
    images: [`/img/images.png`],
    type: 'article',
    siteName: 'Películas ABC',
    publishedTime: '2025-01-11',
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
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}

