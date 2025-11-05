import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google"; // 👉 Import font
import "./globals.css";

// Setup font dengan subset latin
const redHatDisplay = Red_Hat_Display({
  subsets: ["latin"],
  weight: ["400", "500", "700"], // bisa pilih variant: 400=regular, 500=medium, 700=bold
  variable: "--font-red-hat",   // bikin variable CSS biar fleksibel
});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Portfolio with Next.js & Red Hat Display",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* Apply font di body */}
      <body className={`${redHatDisplay.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
