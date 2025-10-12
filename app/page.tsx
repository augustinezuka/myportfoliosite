"use client";

import Header from "@/components/custom/header";
import HeroSec from "@/components/custom/hero";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Home() {
  const projects = [
    {
      title: "Real Estate App",
      desc: "A real-time property listing platform with AI-based search and recommendation system.",
      img: "/projects/real-estate.png", // Replace with your own image
      link: "https://realestate.zuka.dev", // Replace with your deployed app
    },
    {
      title: "Nurse Staffing Platform",
      desc: "A platform connecting healthcare providers with short-term medical staff.",
      img: "/projects/nurse-platform.png",
      link: "https://nurse.zuka.dev",
    },
    {
      title: "Minimal Weather App",
      desc: "A sleek weather dashboard built with Next.js, Tailwind, and OpenWeather API.",
      img: "/projects/weather-app.png",
      link: "https://weather.zuka.dev",
    },
  ];

  return (
    <>
      <main className="flex flex-col items-center justify-center mx-auto px-4 sm:px-8 py-8">
        <Header />
        <HeroSec />

        {/* ABOUT SECTION */}
        <section id="about" className="py-20 w-full">
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center"
            >
              <Image
                src="/me.jpg"
                alt="Augustine Zuka"
                width={400}
                height={400}
                className="rounded-full shadow-lg"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center md:text-left space-y-4"
            >
              <p className="text-lg leading-relaxed">
                Hi there! I'm{" "}
                <span className="font-semibold">Augustine Zuka</span>, a
                passionate fullstack developer based in Zimbabwe. I specialize
                in building modern, performant web and mobile applications that
                solve real-world problems.
              </p>
              <p className="text-lg leading-relaxed">
                When I’m not coding, I love exploring new technologies,
                contributing to open-source, and watching or playing football.
              </p>
            </motion.div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-20 w-full">
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                  <div className="relative aspect-video rounded-t-md overflow-hidden group">
                    {/* Live preview iframe on hover */}
                    <iframe
                      src={project.link}
                      title={`${project.title} Preview`}
                      className="absolute inset-0 w-full h-full border-none rounded-t-md  transition-opacity duration-700"
                      loading="lazy"
                    />
                  </div>

                  <CardHeader>
                    <CardTitle>{project.title}</CardTitle>
                    <CardDescription>{project.desc}</CardDescription>
                  </CardHeader>

                  <CardContent>
                    <Button variant="outline" asChild>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Visit Project
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-20 w-full">
          <h2 className="text-4xl font-extrabold mb-12 text-center tracking-tight">
            Get in Touch
          </h2>

          <motion.form
            whileInView={{ opacity: 1, y: 0 }}
            initial={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.6 }}
            className="max-w-lg mx-auto space-y-5 bg-muted/30 p-8 rounded-xl shadow-md"
          >
            <div>
              <label htmlFor="name" className="block mb-2 font-medium">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-2 border rounded-md bg-background"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block mb-2 font-medium">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-2 border rounded-md bg-background"
                required
              />
            </div>

            <div>
              <label htmlFor="message" className="block mb-2 font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                className="w-full p-2 border rounded-md bg-background"
                required
              ></textarea>
            </div>

            <Button type="submit" className="w-full">
              Send Message
            </Button>
          </motion.form>
        </section>
      </main>
      <Footer />
    </>
  );
}
