import type { Metadata } from "next";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import "./globals.css";
import AppHeader from "./components/ui/AppHeader";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Quick Notes - Facilitando suas Anotações",
  description: "Crie anotações de forma simples e rápida.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="light">
          <AppHeader />
          <main className="px-[40px] py-[20px] md:px-[100px] lg:px-[180px] xl:px-[280px] 2xl:px-[340px]">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
