import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en">
      <body>
        <header>

        </header>
        {children}
        <footer>
          
        </footer>
      </body>
    </html>
  );
}
