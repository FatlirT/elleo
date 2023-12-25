import Footer from "@/components/Footer";
import Nav from "../components/Nav";
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ELLEO LTD",
  description:
    "Certified domestic and commercial electrical installation and safety services",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="sticky backdrop-blur bg-gradient-to-b from-black/40 to-black/50 ">
          <Nav></Nav>
        </nav>
        <main className="flex justify-center flex-col items-center max-w-7xl mx-auto">
          {children}
        </main>
        <footer>
          <Footer></Footer>
        </footer>
      </body>
    </html>
  );
}
