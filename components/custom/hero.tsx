import { shuffleArray } from "@/utils/shuffle"
import { motion } from "framer-motion"
import { Frown } from "lucide-react"
import type React from "react"
import { useEffect, useRef } from "react"
import { toast } from "react-hot-toast"
import Gravity, { MatterBody, type GravityRef } from "../fancy/gravity"

interface Skill {
  name: string
  color: string
}

const skillsArray = [
  { name: "Nest JS", color: "bg-pink-600" },
  { name: "TypeScript", color: "bg-blue-600" },
  { name: "Motion", color: "bg-teal-600" },
  { name: "Tailwind", color: "bg-red-400" },
  { name: "Drei", color: "bg-orange-500" },
  { name: "React JS", color: "bg-blue-400" },
  { name: "Node js", color: "bg-green-600" },
  { name: "Svelte", color: "bg-orange-600" },
  { name: "Python", color: "bg-yellow-500" },
  { name: "Next JS", color: "bg-gray-900 dark:bg-white dark:text-black" },
  { name: "Material UI", color: "bg-teal-300" },
  { name: "GraphQL", color: "bg-pink-400" },
  { name: "PostgreSQL", color: "bg-indigo-500" },
  { name: "Expo", color: "bg-purple-500" },
  { name: "Flutter", color: "bg-blue-700" },
  { name: "Remix", color: "bg-red-700" },
  { name: "Events not working sorry", color: "bg-primary/40" },
];

const skills  = shuffleArray(skillsArray)

const Hero: React.FC = () => {
  const gravityRef = useRef<GravityRef>(null)

  useEffect(() => {
    const handleScroll = () => {
      if (gravityRef.current) {
        gravityRef.current.stop()
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <>
      <div className="md:hidden px-4 flex flex-col items-center justify-center">
        <h1 className="text-2xl font-bold py-4 text-center">These are some of the skills I picked up on my way to fullstack development</h1>
        <div className="flex flex-wrap justify-center gap-2">
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              whileHover={{ scale: 1.5 }}
              whileTap={{ scale: 0.95 }}
              className={`text-sm ${skill.color} ${skill.name ==="Events not working sorry" && "hidden"} shadow-md text-white flex rounded-full px-3 py-1`}
              onClick={() => toast(`${skill.name} - A skill I'm proud of!`)}
            >
              {skill.name}
            </motion.div>
          ))}
        </div>
      </div>
      <div className="hidden md:flex w-full">
        <div className="h-[60vh] md:w-[50vh] flex justify-center items-center">
          <p className="text-3xl font-bold py-4 text-center" >These are some of the skills I picked up on my way to fullstack development</p>
        </div>
    <div className="h-[60vh]  md:w-[85%]  relative overflow-hidden">
      <Gravity ref={gravityRef} className="hidden md:block w-[85%]" resetOnResize={true} grabCursor={false}>
        {skills.map((skill) => (
          <MatterBody
            key={skill.name}
            matterBodyOptions={{ friction: -0.0003, restitution: 0.9,density: 1,force: { x: Math.floor(Math.random() * 100), y: Math.floor(Math.random() * 30) } }}
            x={`${Math.floor(Math.random() * 100)}%`}
            y={`${Math.floor(Math.random() * 30)}%`}
          >
            <motion.div
              whileHover={{ scale: 1.6 }}
              whileTap={{ scale: 0.9 }}
              className={`text-xl sm:text-xl flex items-center md:text-2xl ${skill.color} shadow-xl drop-shadow-lg text-white rounded-full hover:cursor-grab active:cursor-grabbing px-4 py-1`}
              onMouseEnter={() => {
                if (gravityRef.current) {
                  gravityRef.current.start()

                  toast(`${skill.name} ... Let go`)
                }
              }}
              onMouseLeave={() => {
                if (gravityRef.current) {
                  gravityRef.current.stop()
                }
                  toast(`${skill.name} ... Do not let go`)
              }}
              onClick={() => {
                if (gravityRef.current) {
                  gravityRef.current.reset()
                }
                  toast(`${skill.name} ... I am trapped because I am causing trouble with events`)
              }}
            >
              {skill.name}
              {skill.name ==="Events not working sorry" ? <Frown className="ml-2"/>:<></>}
            </motion.div>
          </MatterBody>
        ))}
      </Gravity>
    </div>
      </div>
  </>
  )
}

export default Hero
