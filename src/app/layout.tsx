import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import NavItems from "@/components/NavItems";
// import NavItems from "@/components/navbar/NavItems";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "strategy food",
  description: "strategy food web",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <NavItems />
      </body>
    </html>
  );
}
