"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import { TypeAnimation } from "react-type-animation"

type Particle = {
  width: number
  height: number
  left: string
  top: string
  y: number
  duration: number
}

export default function HeroSection() {
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const generated = [...Array(10)].map(() => ({
      width: Math.random() * 6 + 2,
      height: Math.random() * 6 + 2,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      y: Math.random() * 100 - 50,
      duration: Math.random() * 10 + 10,
    }))
    setParticles(generated)
  }, [])

  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center relative overflow-hidden pt-24"
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient background circles */}
        <motion.div
          className="absolute rounded-full bg-cyan-500/5 w-[800px] h-[800px] -left-[200px] -top-[200px]"
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, repeatType: "reverse" }}
        />
        <motion.div
          className="absolute rounded-full bg-purple-500/5 w-[600px] h-[600px] right-[10%] top-[20%]"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", delay: 1 }}
        />
        <motion.div
          className="absolute rounded-full bg-cyan-500/5 w-[500px] h-[500px] left-[30%] bottom-[10%]"
          animate={{ scale: [1, 1.15, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 9, repeat: Infinity, repeatType: "reverse", delay: 2 }}
        />

        {/* Particles */}
        {particles.map((p, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-white/10"
            style={{
              width: p.width,
              height: p.height,
              left: p.left,
              top: p.top,
            }}
            animate={{
              y: [0, p.y],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: p.duration,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6"
        >
          <h1 className="text-4xl md:text-7xl font-bold mb-4 gradient-text">Ashitosh Lavhate</h1>
          <div className="text-xl md:text-2xl text-gray-300 h-12">
            <TypeAnimation
              sequence={["Frontend Developer", 2000, "React Specialist", 2000, "UI/UX Enthusiast", 2000]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-2xl mx-auto mb-8 text-gray-300"
        >
          <p className="text-lg">
            Creating responsive and interactive web applications with modern technologies. Passionate about clean code
            and exceptional user experiences.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          <Button
            className="bg-gradient-to-r from-cyan-500 to-cyan-700 hover:from-cyan-600 hover:to-cyan-800 text-white rounded-full px-6 py-6"
            onClick={() => (window.location.href = "#contact")}
          >
            Contact Me
          </Button>
          <Button
            variant="outline"
            className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 rounded-full px-6 py-6"
            onClick={() => (window.location.href = "#projects")}
          >
            View Projects
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex justify-center space-x-6"
        >
          <motion.a
            href="https://github.com/ashitosh01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Github className="h-6 w-6 text-cyan-400" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/ashitosh01"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Linkedin className="h-6 w-6 text-cyan-400" />
          </motion.a>
          <motion.a
            href="mailto:ashitoshlavhate2@gmail.com"
            whileHover={{ y: -5 }}
            className="bg-gray-800 p-3 rounded-full hover:bg-gray-700 transition-colors"
          >
            <Mail className="h-6 w-6 text-cyan-400" />
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
          <a href="#about">
            <ChevronDown className="h-8 w-8 text-cyan-400" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}
