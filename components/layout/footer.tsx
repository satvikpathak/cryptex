import { Brain } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="border-t bg-background/30 backdrop-blur-sm">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Brain className="h-5 w-5" />
              <span className="font-bold">Cryptex</span>
            </div>
            <p className="text-sm text-muted-foreground mt-2">
              Train, tokenize, and own your digital identity powered by AI and stored immutably on the blockchain.
            </p>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Platform</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/dashboard" className="hover:text-primary transition-colors">Dashboard</Link></li>
              <li><Link href="/chat" className="hover:text-primary transition-colors">AI Chat</Link></li>
              <li><Link href="/marketplace" className="hover:text-primary transition-colors">Marketplace</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Company</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-primary transition-colors">About</Link></li>
              <li><Link href="/blog" className="hover:text-primary transition-colors">Blog</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div className="flex flex-col gap-2">
            <h3 className="text-sm font-medium">Legal</h3>
            <ul className="flex flex-col gap-2 text-sm text-muted-foreground">
              <li><Link href="/privacy" className="hover:text-primary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-primary transition-colors">Terms of Service</Link></li>
              <li><Link href="/cookies" className="hover:text-primary transition-colors">Cookie Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 border-t pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} Cryptex. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Twitter</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-twitter"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">GitHub</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /></svg>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <span className="sr-only">Discord</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-circle"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}