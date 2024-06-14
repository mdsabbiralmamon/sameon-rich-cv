import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";

export const metadata: Metadata = {
  title: "SAMEON CV",
  description: "Interactive CV/Resume designed by SAM",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="light">
      <body className="bg-gray-800 text-white">
        <header>
          <Navbar />
        </header>
        <main>
          {children}
        </main>
        <footer>

        </footer>
      </body>
    </html>
  );
}
