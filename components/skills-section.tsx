"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import {
  Code,
  Database,
  FileCode2,
  Github,
  Globe,
  Layers,
  Palette,
  PenTool,
  Terminal,
  MessageSquare,
  Brain,
  Bug,
  Workflow,
  Figma,
  Bot,
} from "lucide-react"

export default function SkillsSection() {
  const technicalSkills = [
    { name: "HTML", level: 90, icon: <Globe className="h-6 w-6" /> },
    { name: "CSS", level: 85, icon: <Palette className="h-6 w-6" /> },
    { name: "JavaScript", level: 80, icon: <FileCode2 className="h-6 w-6" /> },
    { name: "React", level: 85, icon: <Code className="h-6 w-6" /> },
    { name: "Tailwind CSS", level: 90, icon: <PenTool className="h-6 w-6" /> },
    { name: "Bootstrap 5", level: 80, icon: <Layers className="h-6 w-6" /> },
    { name: "C/C++", level: 75, icon: <Terminal className="h-6 w-6" /> },
    { name: "Python", level: 70, icon: <FileCode2 className="h-6 w-6" /> },
    { name: "MySQL", level: 65, icon: <Database className="h-6 w-6" /> },
    { name: "Git/GitHub", level: 75, icon: <Github className="h-6 w-6" /> },
  ]

  const softSkills = [
    { name: "Communication", level: 85, icon: <MessageSquare className="h-6 w-6" /> },
    { name: "Problem Solving", level: 90, icon: <Brain className="h-6 w-6" /> },
    { name: "Debugging", level: 85, icon: <Bug className="h-6 w-6" /> },
    { name: "WordPress", level: 70, icon: <Workflow className="h-6 w-6" /> },
    { name: "Figma", level: 75, icon: <Figma className="h-6 w-6" /> },
    { name: "AI Tools", level: 80, icon: <Bot className="h-6 w-6" /> },
  ]

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.05 * i,
        duration: 0.5,
      },
    }),
  }

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900/50 to-background dark:from-gray-900 dark:to-black"
    >
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">My Skills</h2>
          <div className="w-20 h-1 gradient-bg mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            A combination of technical expertise and soft skills that enable me to deliver high-quality web
            applications.
          </p>
        </motion.div>

        <div className="mb-16">
          <h3 className="text-2xl font-semibold mb-8 text-cyan-400 text-center">Technical Skills</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
            {technicalSkills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800/30 border border-gray-700 hover:border-cyan-500 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-6 w-20 h-20">
                      {/* Circular progress background */}
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <circle
                          className="text-gray-700 stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        {/* Animated progress circle */}
                        <motion.circle
                          className="text-cyan-400 stroke-current"
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: skill.level / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          transform="rotate(-90 50 50)"
                        ></motion.circle>
                      </svg>
                      {/* Percentage in the middle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-lg font-bold text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </div>
                    <div className="bg-gray-700/50 p-2 rounded-full mb-3 text-cyan-400">{skill.icon}</div>
                    <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-semibold mb-8 text-purple-400 text-center">Soft Skills & Tools</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {softSkills.map((skill, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gray-800/30 border border-gray-700 hover:border-purple-500 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 flex flex-col items-center justify-center text-center">
                    <div className="relative mb-6 w-20 h-20">
                      {/* Circular progress background */}
                      <svg className="w-full h-full" viewBox="0 0 100 100">
                        <defs>
                          <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                            <stop offset="0%" stopColor="#9333ea" />
                            <stop offset="100%" stopColor="#06b6d4" />
                          </linearGradient>
                        </defs>
                        <circle
                          className="text-gray-700 stroke-current"
                          strokeWidth="10"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                        ></circle>
                        {/* Animated progress circle */}
                        <motion.circle
                          stroke={`url(#gradient-${index})`}
                          strokeWidth="10"
                          strokeLinecap="round"
                          cx="50"
                          cy="50"
                          r="40"
                          fill="transparent"
                          initial={{ pathLength: 0 }}
                          whileInView={{ pathLength: skill.level / 100 }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, delay: 0.2 }}
                          transform="rotate(-90 50 50)"
                        ></motion.circle>
                      </svg>
                      {/* Percentage in the middle */}
                      <div className="absolute inset-0 flex items-center justify-center">
                        <motion.span
                          className="text-lg font-bold text-white"
                          initial={{ opacity: 0 }}
                          whileInView={{ opacity: 1 }}
                          transition={{ delay: 1 }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                    </div>
                    <div className="bg-gray-700/50 p-2 rounded-full mb-3 text-purple-400">{skill.icon}</div>
                    <h4 className="text-lg font-medium text-white">{skill.name}</h4>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
