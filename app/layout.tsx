import type { Metadata } from "next";
import { Noto_Sans_Thai } from "next/font/google";
import "./globals.css";
import HomeButton from "./component/HomeButton";

const noto_sans_thai = Noto_Sans_Thai({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Web Archive",
  description: "สำหรับใช้เก็บเว็บไว้ก็อป style tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={noto_sans_thai.className}>
        <HomeButton />
        {children}
      </body>
    </html>
  );
}
