import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import NewApp from "@/lib/NewApp";

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
  variable: "--font-geist",
});

export const metadata: Metadata = {
  title: "Future Tech",
  description:
    "Welcome to the epicenter of AI innovation. FutureTech AI News is your passport to a world where machines think, learn, and reshape the future. Join us on this visionary expedition into the heart of AI.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geist.className}  h-full antialiased`}>
      <body className="min-h-full flex flex-col">
        <NewApp>{children}</NewApp>
      </body>
    </html>
  );
}
