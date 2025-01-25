"use client"

import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ModeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme() // `resolvedTheme` handles system theme correctly.

  return (
    <>
      {/* Render Light Theme Button Only If Active */}
      {resolvedTheme === "light" && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("dark")}
        >
          <Sun className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch to Dark Theme</span>
        </Button>
      )}

      {/* Render Dark Theme Button Only If Active */}
      {resolvedTheme === "dark" && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("light")}
        >
          <Moon className="h-[1.2rem] w-[1.2rem]" />
          <span className="sr-only">Switch to Light Theme</span>
        </Button>
      )}

      {/* Render System Theme Button Only If Active */}
      {resolvedTheme === "system" && (
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setTheme("light")}
        >
          {theme === "dark" ? (
            <Moon className="h-[1.2rem] w-[1.2rem]" />
          ) : (
            <Sun className="h-[1.2rem] w-[1.2rem]" />
          )}
          <span className="sr-only">Switch to Light or Dark Theme</span>
        </Button>
      )}
    </>
  )
}
