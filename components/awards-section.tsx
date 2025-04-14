"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Mountain } from "lucide-react"

export default function AwardsSection() {
  const awards = [
    {
      title: "CHESS",
      organization: "KV AFS 2",
      description:
        "Achieved 3rd place in an interschool competition, representing Kendriya Vidyalaya AFS 2, in collaboration with St. Arnold's Center School.",
      icon: <Award className="h-8 w-8 text-cyan-400" />,
    },
    {
      title: "Table Tennis",
      organization: "KV AFS 2",
      description: "Secured 2nd place in Table Tennis at the IntraSchool Competition, Kendriya Vidyalaya AFS 2.",
      icon: <Award className="h-8 w-8 text-cyan-400" />,
    },
  ]

  const extraCurricular = [
    {
      title: "Event Management Volunteer",
      description:
        "Led a team in organizing events for First-Year Students, overseeing planning, coordination, and execution, demonstrating leadership and teamwork.",
      icon: <Users className="h-8 w-8 text-purple-400" />,
    },
    {
      title: "Hackathon Participant",
      description:
        "Participated in a university-level hackathon. Although the team didn't qualify, the experience highlighted effective collaboration, time management, and creative problem-solving under pressure.",
      icon: <Users className="h-8 w-8 text-purple-400" />,
    },
  ]

  const hobbies = [
    "Programming and exploring new technologies",
    "Swimming for fitness and discipline",
    "Trekking to stay active and connect with nature",
  ]

  const languages = ["English", "Hindi", "Marathi"]

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
    <section id="awards" className="py-20 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600">
            Awards & Activities
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-purple-600 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-300">
            Recognitions, extracurricular activities, and personal interests that shape who I am.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-cyan-400">Awards & Achievements</h3>
            <div className="space-y-6">
              {awards.map((award, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-cyan-500 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{award.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold text-white">{award.title}</h4>
                          <p className="text-cyan-400 text-sm mb-2">{award.organization}</p>
                          <p className="text-gray-300">{award.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-purple-400">Extracurricular Activities</h3>
            <div className="space-y-6">
              {extraCurricular.map((activity, index) => (
                <motion.div
                  key={index}
                  custom={index}
                  variants={fadeInUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  <Card className="bg-gray-800/50 border-gray-700 hover:border-purple-500 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="mr-4 mt-1">{activity.icon}</div>
                        <div>
                          <h4 className="text-xl font-semibold text-white">{activity.title}</h4>
                          <p className="text-gray-300">{activity.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <Mountain className="h-6 w-6 text-cyan-400 mr-2" />
              <h3 className="text-xl font-semibold text-white">Hobbies</h3>
            </div>
            <ul className="space-y-2">
              {hobbies.map((hobby, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-gray-300 flex items-center"
                >
                  <span className="h-2 w-2 bg-cyan-400 rounded-full mr-2"></span>
                  {hobby}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-gray-800/30 border border-gray-700 rounded-xl p-6"
          >
            <div className="flex items-center mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-purple-400 mr-2"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
                />
              </svg>
              <h3 className="text-xl font-semibold text-white">Languages</h3>
            </div>
            <ul className="space-y-2">
              {languages.map((language, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.1 * index }}
                  viewport={{ once: true }}
                  className="text-gray-300 flex items-center"
                >
                  <span className="h-2 w-2 bg-purple-400 rounded-full mr-2"></span>
                  {language}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
