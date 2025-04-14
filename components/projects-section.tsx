"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"

export default function ProjectsSection() {
  const [activeProject, setActiveProject] = useState<number | null>(null)

  const projects = [
    {
      title: "PDF Merger",
      description:
        "A responsive PDF Merger web application using React, JavaScript, and Tailwind CSS. The app allows users to merge multiple PDF files with a drag-and-drop interface and real-time preview, all without any backend dependency.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "JavaScript", "Tailwind CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Attendance Management System",
      description:
        "A web-based application designed to streamline the process of recording and managing student attendance. It provides a user-friendly interface for administrators, teachers, and students to access attendance records, generate reports, and ensure better accountability and efficiency.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "CSS", "JavaScript"],
      link: "#",
      github: "#",
    },
    {
      title: "Navonmesh",
      description:
        "Collaborated with a team to design, develop, and deploy the official website for our college's annual tech and non-tech event, Navonmesh. The website featured event details, schedules, and registration functionality, ensuring a smooth user experience.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["ReactJS", "CSS", "Vercel"],
      link: "#",
      github: "#",
    },
    {
      title: "Restaurant Webpage",
      description:
        "Created a responsive restaurant webpage with modern design principles, focusing on user experience and visual appeal.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS", "JavaScript"],
      link: "#",
      github: "#",
    },
    {
      title: "CSS Components",
      description: "A collection of reusable CSS components built with modern CSS techniques and best practices.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["HTML", "CSS"],
      link: "#",
      github: "#",
    },
    {
      title: "Study Sync",
      description:
        "An educational platform designed to help students organize their study materials and collaborate with peers.",
      image: "/placeholder.svg?height=400&width=600",
      technologies: ["React", "CSS", "JavaScript"],
      link: "#",
      github: "#",
    },
  ]

  const fadeInUp = {
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

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            My Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            A showcase of my recent work, demonstrating my skills in frontend development and UI/UX design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              custom={index}
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Card
                className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-300 h-full flex flex-col overflow-hidden group"
                onMouseEnter={() => setActiveProject(index)}
                onMouseLeave={() => setActiveProject(null)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <CardHeader className="p-4">
                  <CardTitle className="text-xl text-white">{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="p-4 pt-0 flex-grow">
                  <p className="text-gray-300 text-sm">{project.description}</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="bg-gray-700/50 text-cyan-400 border-cyan-500/50"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-4 pt-0 flex justify-between">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-700/50"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button
                    variant="ghost"
                    size="sm"
                    className="text-cyan-400 hover:text-cyan-300 hover:bg-gray-700/50"
                    asChild
                  >
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <Button
            className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full px-8"
            asChild
          >
            <a href="https://github.com/ashitosh01" target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" />
              View More on GitHub
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
