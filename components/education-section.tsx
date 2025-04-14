"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { GraduationCap, Calendar } from "lucide-react"

export default function EducationSection() {
  const education = [
    {
      institution: "Army Public School Dighi",
      degree: "SSC 10th, CGPA: 80.2%",
      year: "Mar 2022",
      icon: <GraduationCap className="h-8 w-8 text-cyan-400" />,
    },
    {
      institution: "Kendriya Vidyalaya AFS 2",
      degree: "HSC 12th, CGPA: 76.4%",
      year: "Mar 2024",
      icon: <GraduationCap className="h-8 w-8 text-cyan-400" />,
    },
    {
      institution: "DES Pune University",
      degree: "Bachelor of Technology (B.Tech) - Computer Science Engineering",
      year: "Jul 2024",
      icon: <GraduationCap className="h-8 w-8 text-cyan-400" />,
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
    <section id="education" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            My academic journey that has shaped my knowledge and skills.
          </p>
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline line - fixed for large screens */}
            <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-gradient-to-b from-cyan-500 to-purple-600"></div>

            {/* Education items */}
            {education.map((item, index) => (
              <motion.div
                key={index}
                custom={index}
                variants={fadeInUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className={`relative mb-12 md:mb-24 ${
                  index % 2 === 0
                    ? "md:pr-12 md:text-right md:ml-0 md:mr-auto md:pl-0"
                    : "md:pl-12 md:ml-auto md:mr-0 md:pr-0"
                } md:w-[calc(50%-24px)]`}
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-0 md:left-auto ${
                    index % 2 === 0 ? "md:right-0" : "md:left-0"
                  } top-0 md:top-1/2 transform md:-translate-y-1/2 ${
                    index % 2 === 0 ? "md:translate-x-1/2" : "md:-translate-x-1/2"
                  } w-10 h-10 rounded-full bg-gray-800 border-4 border-cyan-500 z-10 flex items-center justify-center`}
                >
                  {index + 1}
                </div>

                <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="mr-4">{item.icon}</div>
                      <div>
                        <h3 className="text-xl font-semibold text-white">{item.institution}</h3>
                        <div className="flex items-center text-gray-400 text-sm mt-1">
                          <Calendar className="h-4 w-4 mr-1" />
                          {item.year}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-300">{item.degree}</p>
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
