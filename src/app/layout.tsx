import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Shared/Navbar/Navbar";
import Footer from "@/components/Shared/Footer/Footer";

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
        <main className="border border-transparent">
          {children}
        </main>
        <footer>
          <Footer />
        </footer>
      </body>
    </html>
  );
}
