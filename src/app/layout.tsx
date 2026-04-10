import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import SmoothScroll from "@/components/layout/SmoothScoll";
import Footer from "@/components/layout/Footer";
import App from "@/components/layout/App";
import Revolution from "@/components/home/Revolution";
import Preloader from "@/components/layout/Preloader";

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
        <Preloader />
        <div className="  w-full relative text-white">
          <div className="max-w-480 mx-auto my-0">
            <Navbar />
            <SmoothScroll>
              <div className="bg-[#101014]  min-h-screen">
                <div
                  className="absolute  inset-0 z-0 pointer-events-none"
                  style={{
                    backgroundImage: `
        repeating-linear-gradient(0deg, rgba(255,255,255,0.04) 0, rgba(255,255,255,0.04) 1px, transparent 1px, transparent 40px),
        repeating-linear-gradient(45deg, rgba(0,255,128,0.09) 0, rgba(0,255,128,0.09) 1px, transparent 1px, transparent 20px),
       repeating-linear-gradient(-45deg, rgba(255,0,128,0.10) 0, rgba(255,0,128,0.10) 1px, transparent 1px, transparent 30px),
        repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0, rgba(255,255,255,0.03) 1px, transparent 1px, transparent 80px),
        radial-gradient(circle at 60% 40%, rgba(0,255,128,0.05) 0, transparent 60%)
      `,
                    backgroundSize:
                      "80px 80px, 40px 40px, 60px 60px, 80px 80px, 100% 100%",
                    backgroundPosition: "0 0, 0 0, 0 0, 40px 40px, center",
                  }}
                />
                <div className="max-w-480 mx-auto my-0">
                  <App>
                    {children}
                    <Revolution />

                    <Footer />
                  </App>
                </div>
              </div>
            </SmoothScroll>
          </div>
        </div>
      </body>
    </html>
  );
}
