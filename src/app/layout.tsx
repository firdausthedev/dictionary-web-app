import type { Metadata } from "next";
import { Inter, Lora, Inconsolata } from "next/font/google";
import "./globals.css";
import { ThemeProviders } from "./components/context/theme/ThemeProviders";
import Navbar from "./components/Navbar";
import { AppProvider } from "./components/context/app/AppContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const lora = Lora({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lora",
});

const inconsolata = Inconsolata({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inconsolata",
});

export const metadata: Metadata = {
  title: "firdausthedev | Dictionary App",
  description:
    "A dictionary app built with Next.js and Tailwind CSS by @firdausthedev using frontendmentor challenge",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${lora.variable} ${inconsolata.variable} font-sans container mx-auto max-w-[768px] px-6 py-14 dark:bg-black`}>
        <ThemeProviders>
          <AppProvider>
            <Navbar />
            {children}
          </AppProvider>
        </ThemeProviders>
      </body>
    </html>
  );
}
