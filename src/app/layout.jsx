import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "your NEXT event",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex gap-4 px-5 py-5 text-xl">
          <Link href="/">Hjem</Link>
          <Link href="/add-event">Tilføj event</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}