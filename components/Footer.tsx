"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import toast from "react-hot-toast";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socials = [
    { href: "https://github.com/augustinezuka", Icon: Github, label: "GitHub" },
    { href: "https://x.com/augustinezuka", Icon: Twitter, label: "Twitter" },
    {
      href: "https://zw.linkedin.com/in/augustine-zuka-9768ab32b",
      Icon: Linkedin,
      label: "LinkedIn",
    },
  ];

  const handleCopyPhone = async () => {
    try {
      await navigator.clipboard.writeText("+263 786 831 708");
      toast.success("Phone number copied to clipboard");
    } catch {
      toast.error("Failed to copy phone number");
    }
  };

  return (
    <motion.footer
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
      className="relative w-full overflow-hidden border-t border-border bg-gradient-to-b from-background via-[hsl(var(--background))] to-[hsl(var(--muted))]"
    >
      {/* Subtle background glow for depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-20 left-1/3 w-72 h-72 bg-[hsl(var(--primary))] opacity-[0.08] blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[hsl(var(--chart-4))] opacity-[0.08] blur-[100px]" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 md:px-10 py-16 text-[hsl(var(--muted-foreground))]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-center md:text-left space-y-3"
          >
            <h4 className="text-xl font-semibold text-[hsl(var(--foreground))]">
              Contact
            </h4>
            <Link
              href="mailto:augustinezuka@gmail.com"
              className="block hover:text-[hsl(var(--primary))] transition duration-300 text-base"
            >
              augustinezuka@gmail.com
            </Link>
            <button
              onClick={handleCopyPhone}
              className="block text-base hover:text-[hsl(var(--primary))] transition duration-300"
            >
              +263 786 831 708
            </button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <h4 className="text-xl font-semibold text-[hsl(var(--foreground))] mb-3">
              Follow Me
            </h4>
            <div className="flex justify-center space-x-8">
              {socials.map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="text-[hsl(var(--muted-foreground))] hover:text-[hsl(var(--primary))] transition-colors"
                >
                  <Icon size={30} strokeWidth={1.6} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Credits Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-center md:text-right space-y-2"
          >
            <h4 className="text-xl font-semibold text-[hsl(var(--foreground))]">
              Crafted With ❤️
            </h4>
            <p className="text-sm">
              Designed & built by{" "}
              <span className="text-[hsl(var(--foreground))] font-medium">
                Augustine Zuka
              </span>
            </p>
            <p className="text-sm">
              Powered by{" "}
              <span className="font-medium text-[hsl(var(--primary))]">
                Next.js
              </span>{" "}
              &{" "}
              <span className="font-medium text-[hsl(var(--primary))]">
                Tailwind CSS
              </span>
            </p>
            <p className="text-xs mt-3 text-[hsl(var(--muted-foreground))]">
              © {currentYear} All Rights Reserved
            </p>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="mt-12 h-px w-full bg-gradient-to-r from-transparent via-[hsl(var(--border))] to-transparent" />

        {/* Floating Accent Orb (minimal) */}
        <motion.div
          animate={{
            x: [0, 25, -25, 0],
            y: [0, 15, -15, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute bottom-12 right-12 w-16 h-16 bg-[hsl(var(--primary))]/10 rounded-full blur-2xl"
        />
      </div>
    </motion.footer>
  );
}
