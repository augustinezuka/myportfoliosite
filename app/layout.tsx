import type React from "react";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { ThemeProvider } from "@/components/theme-provider";
import { Toaster } from "react-hot-toast";
import { Suspense } from "react";
import "./globals.css";

const nunito = localFont({
  src: [
    { path: "./fonts/Nunito-ExtraLight.ttf", weight: "200", style: "normal" },
    { path: "./fonts/Nunito-Light.ttf", weight: "300", style: "normal" },
    { path: "./fonts/Nunito-Regular.ttf", weight: "400", style: "normal" },
    { path: "./fonts/Nunito-Medium.ttf", weight: "500", style: "normal" },
    { path: "./fonts/Nunito-SemiBold.ttf", weight: "600", style: "normal" },
    { path: "./fonts/Nunito-Bold.ttf", weight: "700", style: "normal" },
    { path: "./fonts/Nunito-ExtraBold.ttf", weight: "800", style: "normal" },
    {
      path: "./fonts/Bitcount.ttf",
      weight: "800",
      style: "normal",
    },
  ],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Augustine Zuka | Fullstack Developer",
  description:
    "Augustine Zuka is a fullstack developer based in Zimbabwe, specializing in modern web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${nunito.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Suspense fallback={null}>
            {children}
            <Toaster position="bottom-right" />
          </Suspense>
        </ThemeProvider>
      </body>
    </html>
  );
}
