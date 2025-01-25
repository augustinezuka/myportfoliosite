import { ThemeProvider } from "@/components/theme-provider";
import { Github, Linkedin, Twitter } from "lucide-react"; // Importing icons
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Augustine Zuka",
  description: "Hi I am Augustine Zuka and I am a fullstack developer based in Zimbabwe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {/* Main content with relative positioning */}
          <div className="relative h-fit w-full z-10 whitespace-pre">
            {children}
          </div>

          {/* Sticky footer */}
          <div className="sticky z-0 bottom-0 left-0 w-full h-80 bg-primary/60 flex justify-center items-center">
            <div id="footer" className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Contact Section */}
              <div className="text-center sm:text-left">
                <h4 className="text-2xl font-bold mb-2 underline">Contact Me</h4>
                <p>
                  Email:{" "}
                  <a
                    href="mailto:augustinezuka@gmail.com"
                    className="hover:text-blue-200 transition duration-300"
                  >
                    augustinezuka@gmail.com
                  </a>
                </p>
                <p>
                  Phone:{" "}
                  <span className="hover:text-blue-200 transition duration-300">
                    +263 786 831 708
                  </span>
                </p>
              </div>

              {/* Follow Me Section */}
              <div className="text-center">
                <h4 className="text-2xl font-bold mb-2 underline">Follow Me</h4>
                <div className="flex justify-center space-x-6">
                  <a
                    href="https://github.com/augustinezuka"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Github size={32} />
                  </a>
                  <a
                    href="https://x.com/augustinezuka"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Twitter"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Twitter size={32} />
                  </a>
                  <a
                    href="https://zw.linkedin.com/in/augustine-zuka-9768ab32b"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="hover:scale-110 transition-transform duration-300"
                  >
                    <Linkedin size={32} />
                  </a>
                </div>
              </div>

              {/* Footer Note Section */}
              <div className="text-center sm:text-right">
                <p className="text-sm">&copy; {new Date().getFullYear()} Augustine Zuka. All rights reserved.</p>
                <p className="text-sm">Crafted with passion using Next.js & Tailwind CSS</p>
              </div>
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
