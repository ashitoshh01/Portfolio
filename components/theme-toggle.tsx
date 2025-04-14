"use client"

import { useEffect, useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // Wait for component to mount to avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <button
        className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center"
        aria-label="Toggle theme"
      >
        <Sun className="h-5 w-5 text-cyan-400" />
      </button>
    )
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center relative overflow-hidden"
      aria-label="Toggle theme"
    >
      <Sun
        className={`h-5 w-5 absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-0 translate-y-10" : "opacity-100 translate-y-0"
        } text-yellow-400`}
      />
      <Moon
        className={`h-5 w-5 absolute transition-all duration-300 ${
          theme === "dark" ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        } text-purple-400`}
      />
    </button>
  )
}
