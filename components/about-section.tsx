"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Code, Laptop, Lightbulb, Users } from "lucide-react"

export default function AboutSection() {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 * i,
        duration: 0.5,
      },
    }),
  }

  const qualities = [
    {
      icon: <Code className="h-8 w-8 text-cyan-400" />,
      title: "Clean Code",
      description: "Writing maintainable, efficient, and well-documented code is my priority.",
    },
    {
      icon: <Laptop className="h-8 w-8 text-cyan-400" />,
      title: "Responsive Design",
      description: "Creating interfaces that work flawlessly across all devices and screen sizes.",
    },
    {
      icon: <Lightbulb className="h-8 w-8 text-cyan-400" />,
      title: "Problem Solver",
      description: "Approaching challenges with creative solutions and analytical thinking.",
    },
    {
      icon: <Users className="h-8 w-8 text-cyan-400" />,
      title: "Team Player",
      description: "Collaborating effectively with teams to achieve project goals and deadlines.",
    },
  ]

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-background to-gray-900/50 dark:from-black dark:to-gray-900"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">About Me</h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            I'm a Frontend Developer with expertise in creating responsive web applications. I'm passionate about
            building user-friendly interfaces and solving complex problems with clean, efficient code.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {qualities.map((quality, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-300 h-full">
                <CardContent className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 bg-gray-700/50 rounded-full">{quality.icon}</div>
                  <h3 className="text-xl font-semibold mb-2 text-white">{quality.title}</h3>
                  <p className="text-gray-300">{quality.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 bg-gray-800/30 border border-gray-700 rounded-xl p-6 md:p-8"
        >
          <h3 className="text-2xl font-semibold mb-4 text-cyan-400">My Journey</h3>
          <p className="text-gray-300 mb-4">
            As a Computer Science Engineering student, I've developed a strong foundation in programming fundamentals
            while focusing on frontend technologies. I've worked on various projects that have helped me refine my
            skills in HTML, CSS, JavaScript, React, and Tailwind CSS.
          </p>
          <p className="text-gray-300">
            I'm committed to leveraging modern AI tools and frameworks to deliver impactful projects. When I'm not
            coding, I enjoy swimming, trekking, and exploring new technologies to stay at the forefront of web
            development.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
