import type { Metadata } from "next";
import localFont from "next/font/local";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Jose Murillo | Mobile & Full Stack Developer",
  description:
    "Experienced developer specialized in React Native, Flutter, and Next.js. Building innovative mobile and web applications with cutting-edge technologies.",
  openGraph: {
    title: "Jose Murillo | Mobile & Full Stack Developer",
    description:
      "Experienced developer specialized in React Native, Flutter, and Next.js. Building innovative mobile and web applications with cutting-edge technologies.",
    images: [
      {
        url: "/og-image.png", // Your image in the public folder
        width: 1200,
        height: 630,
        alt: "Jose Murillo Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
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
