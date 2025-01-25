"use client";

import { Button } from "@/components/ui/button"; // Assuming you're using a UI button component from shadcn/ui or similar
import { motion } from "framer-motion";
import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-800">
      {/* Animated 404 text */}
      <motion.h1
        className="text-9xl font-extrabold text-gray-800 mb-4"
        initial={{ scale: 0.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        404
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="text-xl text-gray-600 mb-8"
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5, ease: "easeInOut" }}
      >
        Oops! The page you're looking for doesn't exist.
      </motion.p>

      {/* Button to go back home */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ delay: 0.6, duration: 0.4 }}
      >
        <Link href="/">
          <Button className="px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
            Go Back Home
          </Button>
        </Link>
      </motion.div>

      {/* Decorative element */}
      <motion.div
        className="mt-16 w-32 h-32 rounded-full bg-blue-500"
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 0.1 }}
        transition={{ duration: 1.5, repeat: Infinity, repeatType: "mirror" }}
      ></motion.div>
    </div>
  );
};

export default NotFound;
