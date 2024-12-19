"use client"

import * as React from "react"
import { Moon, Sun, MonitorSmartphone } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function SwitchTheme() {
  const { setTheme, theme } = useTheme()  

  return (    
    <div className="flex gap-5">
        <button className={(theme === 'light' && 'bg-amber-400') +" rounded p-1"} type="button" onClick={() => setTheme("light")}>
          <Sun className="text-black dark:text-white"/>
        </button>        
        <button className={(theme === 'dark' && 'bg-blue-800') + " rounded p-1"} type="button" onClick={() => setTheme("dark")}>
          <Moon className="text-black dark:text-white"/>
        </button>
        <button className={(theme === 'system' && 'bg-amber-400') + " rounded p-1"} type="button" onClick={() => setTheme("system")}>
          <MonitorSmartphone className="text-black dark:text-white"/>
        </button>
    </div>
  )
}
