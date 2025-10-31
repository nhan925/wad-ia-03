import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { Button } from "@/components/ui/button"
import { TooltipWrapper } from "@/components/TooltipWrapper"
import { useEffect, useState } from "react"

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return <Button variant="outline" size="icon" className="w-9 h-9" />
  }

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else if (theme === "dark") {
      setTheme("system")
    } else {
      setTheme("light")
    }
  }

  const getIcon = () => {
    if (theme === "light") {
      return <Sun className="h-[1.2rem] w-[1.2rem]" />
    } else if (theme === "dark") {
      return <Moon className="h-[1.2rem] w-[1.2rem]" />
    } else {
      return <Monitor className="h-[1.2rem] w-[1.2rem]" />
    }
  }

  const getTooltipText = () => {
    if (theme === "light") {
      return "Switch to dark mode"
    } else if (theme === "dark") {
      return "Switch to system theme"
    } else {
      return "Switch to light mode"
    }
  }

  return (
    <TooltipWrapper tooltipText={getTooltipText()}>
      <Button
        variant="outline"
        size="icon"
        onClick={toggleTheme}
        className="w-9 h-9 active:scale-95 transition-transform duration-100"
      >
        {getIcon()}
        <span className="sr-only">Toggle theme</span>
      </Button>
    </TooltipWrapper>
  )
}
