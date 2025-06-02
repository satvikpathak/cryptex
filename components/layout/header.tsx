"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { Brain, Menu, X, MessageSquare, LayoutDashboard as Dashboard, LayoutGrid, Wallet } from "lucide-react"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { cn } from "@/lib/utils"

const navItems = [
  { name: "Home", path: "/" },
  { name: "Dashboard", path: "/dashboard" },
  { name: "Chat", path: "/chat" },
  { name: "Marketplace", path: "/marketplace" },
]

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const pathname = usePathname()

  // Change header background on scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        isScrolled 
          ? "bg-background/80 backdrop-blur-md border-b" 
          : "bg-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <motion.div 
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
              className="relative flex h-8 w-8 items-center justify-center"
            >
              <Brain className="h-7 w-7 text-primary absolute" />
              <div className="h-8 w-8 rounded-full bg-primary/10 animate-pulse" />
            </motion.div>
            <span className="font-bold text-xl">Cryptex</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                pathname === item.path
                  ? "text-foreground"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <ModeToggle />
          <Button className="hidden md:flex" variant="default">
            <Wallet className="mr-2 h-4 w-4" />
            Connect Wallet
          </Button>

          {/* Mobile Menu */}
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="flex flex-col gap-4 py-4">
                <Link
                  href="/"
                  className="flex items-center gap-2 font-bold text-lg"
                >
                  <Brain className="h-5 w-5" />
                  Cryptex
                </Link>
                <nav className="flex flex-col gap-3 mt-4">
                  <Link
                    href="/"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
                  >
                    <LayoutGrid className="h-5 w-5" />
                    Home
                  </Link>
                  <Link
                    href="/dashboard"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
                  >
                    <Dashboard className="h-5 w-5" />
                    Dashboard
                  </Link>
                  <Link
                    href="/chat"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
                  >
                    <MessageSquare className="h-5 w-5" />
                    Chat
                  </Link>
                  <Link
                    href="/marketplace"
                    className="flex items-center gap-2 px-3 py-2 rounded-md hover:bg-muted"
                  >
                    <LayoutGrid className="h-5 w-5" />
                    Marketplace
                  </Link>
                </nav>
                <Button className="mt-6">
                  <Wallet className="mr-2 h-4 w-4" />
                  Connect Wallet
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}