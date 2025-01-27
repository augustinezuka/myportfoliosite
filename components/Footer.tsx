"use client"

import { Github, Linkedin, Twitter } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-primary/60 backdrop-blur-md py-8 z-20"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h4 className="text-2xl font-bold mb-4 underline">Contact Me</h4>
            <motion.p whileHover={{ scale: 1.05 }} className="mb-2">
              <Link href="mailto:augustinezuka@gmail.com" className="hover:text-blue-200 transition duration-300">
                augustinezuka@gmail.com
              </Link>
            </motion.p>
            <motion.p whileHover={{ scale: 1.05 }}>
              <span className="hover:text-blue-200 transition duration-300">+263 786 831 708</span>
            </motion.p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <h4 className="text-2xl font-bold mb-4 underline">Follow Me</h4>
            <div className="flex justify-center space-x-6">
              {[
                { href: "https://github.com/augustinezuka", Icon: Github, label: "GitHub" },
                { href: "https://x.com/augustinezuka", Icon: Twitter, label: "Twitter" },
                { href: "https://zw.linkedin.com/in/augustine-zuka-9768ab32b", Icon: Linkedin, label: "LinkedIn" },
              ].map(({ href, Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  className="transition-colors duration-300 hover:text-blue-200"
                >
                  <Icon size={32} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-center md:text-right"
          >
            <p className="text-sm mb-2">&copy; {currentYear} Augustine Zuka. All rights reserved.</p>
            <p className="text-sm">Crafted with passion using Next.js & Tailwind CSS</p>
          </motion.div>
        </div>
      </div>
    </motion.footer>
  )
}

export default Footer

