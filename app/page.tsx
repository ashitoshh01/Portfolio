"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Download, Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import SkillsSection from "@/components/skills-section"
import ProjectsSection from "@/components/projects-section"
import EducationSection from "@/components/education-section"
import AwardsSection from "@/components/awards-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import ThemeToggle from "@/components/theme-toggle"

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section")
      const scrollPosition = window.scrollY + 300

      sections.forEach((section) => {
        const sectionTop = section.offsetTop
        const sectionHeight = section.offsetHeight
        const sectionId = section.getAttribute("id") || ""

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId)
        }
      })
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleDownloadResume = () => {
    // In a real implementation, this would be a link to the actual resume file
    const link = document.createElement("a")
    link.href = "/resume.pdf"
    link.download = "Ashitosh_Lavhate_Resume.pdf"
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
    { id: "contact", label: "Contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-gray-100 to-background dark:from-black dark:via-gray-900 dark:to-black text-foreground">
      {/* Navbar */}
      <header className="fixed w-full z-50 backdrop-blur-md bg-black/30 border-b border-gray-800">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-purple-600"
          >
            AL
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                  activeSection === item.id ? "text-cyan-400 border-b-2 border-cyan-400" : "text-gray-300"
                }`}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {item.label}
              </motion.a>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Resume Download Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden md:block"
            >
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full px-6"
              >
                <Download className="mr-2 h-4 w-4" />
                Resume
              </Button>
            </motion.div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <Button variant="ghost" size="icon" onClick={toggleMenu} className="text-white">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-md border-b border-gray-800"
          >
            <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`text-sm font-medium transition-colors hover:text-cyan-400 ${
                    activeSection === item.id ? "text-cyan-400" : "text-gray-300"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button
                onClick={handleDownloadResume}
                className="bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white rounded-full"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </motion.div>
        )}
      </header>

      <main>
        <div className="pt-16">
          <HeroSection />
        </div>
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
        <AwardsSection />
        <ContactSection />
      </main>

      <Footer />
    </div>
  )
}
