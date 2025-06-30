"use client"

import { Brain, Twitter, Github } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background/95 shadow-sm">
      <div className="container mx-auto px-4 py-8 sm:px-6 sm:py-10 lg:px-8 lg:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-4">
          {/* Brand Section */}
          <div className="flex flex-col gap-3">
            <Link href="/" className="flex items-center gap-2">
              <Brain className="h-5 w-5 text-primary" />
              <span className="font-bold text-lg tracking-tight">Cryptex</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-[200px] sm:max-w-[240px]">
              Train, tokenize, and own your digital identity powered by AI and stored immutably on the blockchain.
            </p>
          </div>

          {/* Platform Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Platform</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/dashboard" className="hover:text-primary transition-colors">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link href="/chat" className="hover:text-primary transition-colors">
                  AI Chat
                </Link>
              </li>
              <li>
                <Link href="/marketplace" className="hover:text-primary transition-colors">
                  Marketplace
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/about" className="hover:text-primary transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-3">
            <h3 className="text-sm font-semibold text-foreground">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li>
                <Link href="/privacy" className="hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="/cookies" className="hover:text-primary transition-colors">
                  Cookie Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 border-t pt-6 sm:mt-8 sm:pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Cryptex. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link
                href="https://x.com"
                aria-label="X Platform"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="https://github.com"
                aria-label="GitHub"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
                <Github className="h-5 w-5" />
              </Link>
              <Link
                href="https://discord.com"
                aria-label="Discord"
                className="text-muted-foreground hover:text-primary transition-colors"
              >
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}