"use client"

import NotFoundIllustration from "@/components/NotFoundIllustration"
import { Button } from "@/components/ui/button"
import { motion, useAnimation } from "framer-motion"
import Link from "next/link"
import { useEffect, useState } from "react"

const NotFound = () => {
  const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 })
  const controls = useAnimation()
  const [failedAttempts, setFailedAttempts] = useState(0)

  useEffect(() => {
    controls.start({
      x: [0, -10, 10, -10, 10, 0],
      transition: { duration: 0.5, loop: Number.POSITIVE_INFINITY, ease: "easeInOut" },
    })
  }, [controls])

  const handleMouseEnter = () => {
    setButtonPosition({
      x: (Math.random() - 0.5) * 200,
      y: (Math.random() - 0.5) * 200,
    })
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-red-800 dark:text-blue-100 p-4">
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, ease: "backOut" }}
      >
        <NotFoundIllustration />
      </motion.div>

      <motion.h1
        className="text-9xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-blue-400 dark:from-red-300 dark:to-blue-200 mb-4 relative"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        404
        <motion.span
          className="absolute top-0 left-0 w-full h-full"
          animate={controls}
          style={{
            textShadow: "2px 0 0 #ff00ff, -2px 0 0 #00ffff",
            opacity: 0.5,
          }}
        >
          404
        </motion.span>
      </motion.h1>

      <motion.p
        className="text-xl mb-8 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.5 }}
      >
        Oops! The page you're looking for doesn't exist.
        <br />
        But don't worry, you can still have some fun here!
      </motion.p>

      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.4 }}
        style={{ x: buttonPosition.x, y: buttonPosition.y }}
        whileHover={{ scale: 0.9 }}
      >
        <Link href="/">
          <Button
            onMouseEnter={handleMouseEnter}
            onClick={() => setFailedAttempts(failedAttempts + 1)}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-blue-400 dark:from-red-500 dark:to-blue-300 text-white rounded-lg shadow-lg hover:from-red-700 hover:to-blue-500 dark:hover:from-red-600 dark:hover:to-blue-400 transition-all duration-300"
          >
            Try to click me!
          </Button>
        </Link>
      </motion.div>

      <motion.p
        className="mt-4 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        {failedAttempts === 0
          ? "Tip: The button is shy. You might need to be quick to catch it!"
          : failedAttempts < 5
            ? `Nice try! You've almost got it. Attempts: ${failedAttempts}`
            : `You're persistent! Keep trying. Attempts: ${failedAttempts}`}
      </motion.p>
    </div>
  )
}

export default NotFound
