/** @format */

import NavBar from "@/components/NavBar";
import "./globals.css";
import { Inter } from "next/font/google";
import Footer from "@/components/Footer";
import AuthContextProvider from "@/context/authContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Task App",
  description: "Task app learning by Learn code with durgesh (next.js)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>
      <body className={inter.className}>
        <AuthContextProvider>
          <NavBar />
          {children}
          <Footer />
        </AuthContextProvider>
      </body>
    </html>
  );
}
