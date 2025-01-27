"use client"

import { motion } from "framer-motion";
import Gravity, { MatterBody } from "../fancy/gravity";
import { Button } from "../ui/button";

const skills = [
  { name: "Nest JS", color: "bg-pink-600" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Motion", color: "bg-teal-600" },
  { name: "Tailwind", color: "bg-red-400" },
  { name: "Drei", color: "bg-orange-500" },
  { name: "React-JS", color: "bg-blue-400" },
  { name: "Node.js", color: "bg-green-600" },
  { name: "Svelte", color: "bg-orange-600" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "Next.js", color: "bg-gray-900 dark:bg-white dark:text-black" },
  { name: "Material UI", color: "bg-blue-300" },
  { name: "GraphQL", color: "bg-pink-400" },
  { name: "PostgreSQL", color: "bg-indigo-500" },
  { name: "Redux", color: "bg-purple-500" },
];

export default function HeroSec() {
  return (
    <div className="w-full  h-[92vh] flex flex-col font-azeretMono">
      <motion.div initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-20 flex flex-col items-center text-5xl sm:text-6xl space-y-3 md:text-7xl w-full font-calendas ">
        Augustine Zuka
      <p className="pt-4 text-base sm:text-xl md:text-2xl text-foreground/70 w-full text-center">
        Fullstack Developer | Problem Solver | Tech Enthusiast
      </p>
      <Button className="max-w-52" asChild>
        <a href="#contact">Get in Touch</a>
      </Button>
      </motion.div>
      <Gravity gravity={{ x: 0, y: 1 }} className="absolute inset-0 z-0">
        {skills.map((skill) => (
          <MatterBody
            key={skill.name}
            matterBodyOptions={{ friction: 0.5, restitution: 0.2 }}
            x={`${Math.floor(Math.random() * 100)}%`}
            y={`${Math.floor(Math.random() * 30)}%`}
          >
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className={`text-xl sm:text-2xl md:text-3xl ${skill.color} text-white rounded-full hover:cursor-grab px-8 py-4`}
            >
              {skill.name}
            </motion.div>
          </MatterBody>
        ))}
      </Gravity>
    </div>
  );
}
