"use client";
// app/layout.js
import "./globals.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "./components/Footer"
import Header from "./components/Header"


// export const metadata = {
//   title: "TechStore Demo",
//   description: "Simple Next.js ecommerce demo site",
// };

export default function RootLayout({ children }) {
   const pathname = usePathname();
    const bodyClass =
    pathname === "/"
      ? "page-home"
      : "page-" + pathname.replace(/\//g, "");
  return (
    <html lang="en">
      <body  className={bodyClass}>
         <Header />

        <main className="main-content">{children}</main>

       <Footer />
      </body>
    </html>
  );
}
