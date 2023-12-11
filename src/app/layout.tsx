import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@radix-ui/themes/styles.css";
import "react-loading-skeleton/dist/skeleton.css";
import { PropsWithChildren } from "react";
import Providers from "@/components/Providers";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Odonto Servicios",
  description: "Odoton Servicios",
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E5E7EB" },
    { media: "(prefers-color-scheme: dark)", color: "#E5E7EB" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
};

const RootLayout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <html
      lang="en"
      className="antialiased md:subpixel-antialiased text-gray-800"
    >
      <body className={inter.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
