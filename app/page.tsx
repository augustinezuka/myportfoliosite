"use client"

import HeroSec from "@/components/custom/hero"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Image from "next/image"

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">

      <HeroSec/>

      <section id="about" className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
            <Image
              src="/placeholder.svg?height=400&width=400"
              alt="Augustine Zuka"
              width={400}
              height={400}
              className="rounded-full mx-auto"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-4">
              Hi there! I'm Augustine Zuka, a passionate fullstack developer based in Zimbabwe. With a keen eye for
              detail and a love for clean, efficient code, I specialize in creating robust web applications that solve
              real-world problems.
            </p>
            <p className="text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or
              enjoying a good book on software architecture.
            </p>
          </motion.div>
        </div>
      </section>

      <section id="projects" className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Featured Projects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((project) => (
            <motion.div
              key={project}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: project * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Project {project}</CardTitle>
                  <CardDescription>A brief description of the project</CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={`/placeholder.svg?height=200&width=400&text=Project+${project}`}
                    alt={`Project ${project}`}
                    width={400}
                    height={200}
                    className="rounded-md mb-4"
                  />
                  <p className="mb-4">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua.
                  </p>
                  <Button variant="outline" asChild>
                    <a href="#" target="_blank" rel="noopener noreferrer">
                      View Project
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>


      <section id="contact" className="py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">Get in Touch</h2>
        <div className="max-w-md mx-auto">
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-2">
                Name
              </label>
              <input type="text" id="name" name="name" className="w-full p-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="email" className="block mb-2">
                Email
              </label>
              <input type="email" id="email" name="email" className="w-full p-2 border rounded-md" required />
            </div>
            <div>
              <label htmlFor="message" className="block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border rounded-md"
                required
              ></textarea>
            </div>
            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </form>
        </div>
      </section>
    </div>
  )
}
