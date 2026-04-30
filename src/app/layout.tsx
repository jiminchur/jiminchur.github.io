import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "MinChur's Blog",
  description: "Software engineering and thoughts.",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen bg-white text-black antialiased flex flex-col selection:bg-black selection:text-white`}>
        <div className="mx-auto w-full max-w-5xl px-6 lg:px-8 flex-1 flex flex-col">
          <header className="py-12 flex items-center justify-between">
            <Link href="/" className="font-bold tracking-tight text-black hover:text-gray-600 transition-colors">
              MinChur
            </Link>
            <nav className="flex items-center gap-6 text-sm font-medium">
              <Link
                href="https://github.com/jiminchur/jiminchur.github.io"
                target="_blank"
                rel="noreferrer"
                className="text-gray-500 hover:text-black transition-colors flex items-center gap-1 group"
              >
                GitHub
                <ArrowUpRight className="w-3 h-3 opacity-50 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-all" />
              </Link>
            </nav>
          </header>

          <main className="flex-1 w-full py-8">
            {children}
          </main>

          <footer className="py-12 border-t border-gray-100 mt-20">
            <p className="text-sm text-gray-400">
              © {new Date().getFullYear()} MinChur.
            </p>
          </footer>
        </div>
      </body>
    </html>
  );
}
