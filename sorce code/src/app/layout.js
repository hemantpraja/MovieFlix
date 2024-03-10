import { Mulish } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/Header.js";

const mulish = Mulish({
  fontWeights: '400',
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={mulish.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
