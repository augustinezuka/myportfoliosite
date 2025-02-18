import Footer from "@/components/Footer"
import { ThemeProvider } from "@/components/theme-provider"
import type { Metadata } from "next"
import { Geist, Azeret_Mono as Geist_Mono } from "next/font/google"
import { Toaster } from "react-hot-toast"
import "./globals.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Augustine Zuka | Fullstack Developer",
  description: "Augustine Zuka is a fullstack developer based in Zimbabwe, specializing in modern web technologies.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col h-screen`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem >
          <main className="flex-grow bg-background z-10">{children}
          <Toaster position="top-left"/>
          </main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
