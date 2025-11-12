"use client";

import { shuffleArray } from "@/utils/shuffle";
import { motion } from "framer-motion";
import { Frown } from "lucide-react";
import { useEffect, useRef } from "react";
import { toast } from "react-hot-toast";
import Gravity, { GravityRef, MatterBody } from "../fancy/gravity";

interface Skill {
  name: string;
  color: string;
}

const skillsArray: Skill[] = [
  { name: "NestJS", color: "bg-pink-600" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Framer Motion", color: "bg-teal-600" },
  { name: "TailwindCSS", color: "bg-red-400" },
  { name: "Three.js (Drei)", color: "bg-orange-500" },
  { name: "React", color: "bg-blue-400" },
  { name: "Node.js", color: "bg-green-600" },
  { name: "Svelte", color: "bg-orange-600" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "Next.js", color: "bg-gray-900 dark:bg-white dark:text-black" },
  { name: "Material UI", color: "bg-teal-300" },
  { name: "GraphQL", color: "bg-pink-400" },
  { name: "PostgreSQL", color: "bg-indigo-500" },
  { name: "Expo", color: "bg-purple-500" },
  { name: "Flutter", color: "bg-blue-700" },
  { name: "Remix", color: "bg-red-700" },
];

const skills = shuffleArray(skillsArray);

export default function Hero() {
  const gravityRef = useRef<GravityRef>(null);

  useEffect(() => {
    const handleScroll = () => gravityRef.current?.stop();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      id="hero"
      className="relative w-full min-h-[80vh] md:min-h-[100vh] flex flex-col md:flex-row items-center justify-center overflow-hidden"
    >
      {/* Left content */}
      <div className="relative z-10 flex flex-col items-center md:items-start justify-center px-6 md:px-12 lg:px-20 text-center md:text-left">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
          Crafting Modern{" "}
          <span className="text-primary">{"Web & Mobile Experiences"}</span>
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-8">
          I'm a{" "}
          <span className="font-semibold text-foreground">
            Full-Stack Developer
          </span>{" "}
          passionate about building scalable, engaging, and performance-driven
          digital products.
          <br />
          <br />
          Here are some of the technologies I use to bring ideas to life:
        </p>

        <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-10 md:hidden">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => toast(`${skill.name} — One of my favorite tools!`)}
              className={`px-4 py-2 rounded-full text-sm font-semibold text-white shadow-md ${skill.color}`}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>

        <a
          href="#projects"
          className="inline-block px-6 py-3 text-lg font-semibold rounded-xl bg-primary text-primary-foreground hover:opacity-90 transition-all"
        >
          View My Projects
        </a>
      </div>

      {/* Right (Gravity Simulation for desktop) */}
      <div className="hidden z-0 md:block w-full md:w-[70%] h-[70vh] relative">
        <Gravity ref={gravityRef} className="w-full h-full" resetOnResize>
          {skills.map((skill) => (
            <MatterBody
              key={skill.name}
              matterBodyOptions={{
                friction: 0.0001,
                restitution: 0.9,
                density: 1,
              }}
              x={`${Math.floor(Math.random() * 100)}%`}
              y={`${Math.floor(Math.random() * 40)}%`}
            >
              <motion.div
                whileHover={{ scale: 1.3 }}
                whileTap={{ scale: 0.9 }}
                className={`text-base font-bold ${skill.color} text-white rounded-full shadow-lg px-5 py-2 flex items-center gap-2`}
                onMouseEnter={() => gravityRef.current?.start()}
                onMouseLeave={() => gravityRef.current?.stop()}
                onClick={() => {
                  gravityRef.current?.reset();
                  toast(`${skill.name} — Restarting physics!`);
                }}
              >
                {skill.name}
                {skill.name === "Events not working sorry" && (
                  <Frown className="w-4 h-4" />
                )}
              </motion.div>
            </MatterBody>
          ))}
        </Gravity>
      </div>

      {/* Background gradient decoration */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-background via-background/80 to-primary/10" />
    </section>
  );
}
