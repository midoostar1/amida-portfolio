import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Amida Fombutu — Portfolio",
  description: "Full-Stack & React Native Developer in OKC",
  openGraph: {
    title: "Amida Fombutu — Portfolio",
    description: "Full-Stack & React Native Developer in OKC",
    images: ["/og-image.png"], // we just added this file to app/
  },
  twitter: {
    card: "summary_large_image",
    title: "Amida Fombutu — Portfolio",
    description: "Full-Stack & React Native Developer in OKC",
    images: ["/og-image.png"],
  },
  icons: [
    { rel: "icon", url: "/favicon.ico" },
    { rel: "icon", url: "/icon.png", type: "image/png", sizes: "512x512" },
    { rel: "apple-touch-icon", url: "/apple-icon.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
