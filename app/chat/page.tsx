"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  Send, Brain, User, Clock, 
  ChevronDown, Menu, Lock
} from "lucide-react"
import { cn } from "@/lib/utils"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"

type Message = {
  id: string
  content: string
  role: "user" | "assistant"
  timestamp: Date
}

export default function ChatPage() {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Hello! I'm your Cryptex AI twin. How can I assist you today?",
      role: "assistant",
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    // Add user message
    const userMessage: Message = {
      id: crypto.randomUUID(),
      content: input,
      role: "user",
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])
    setInput("")
    
    // Simulate AI typing
    setIsTyping(true)
    
    // Simulate AI response
    setTimeout(() => {
      setIsTyping(false)
      const aiMessage: Message = {
        id: crypto.randomUUID(),
        content: getAIResponse(input),
        role: "assistant",
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, aiMessage])
    }, 1500)
  }
  
  // Simulate AI responses
  const getAIResponse = (message: string): string => {
    const responses = [
      "I remember you mentioned something like this before. Let me build on that...",
      "Based on our previous conversations, I think you'll find this interesting...",
      "I've analyzed this with the context of your preferences and history...",
      "This aligns with your personality traits that I've learned...",
      "Given your interests, I think you'd appreciate this perspective...",
    ]
    
    return responses[Math.floor(Math.random() * responses.length)]
  }
  
  // Scroll to bottom when messages change
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex h-[calc(100vh-4rem)] flex-col md:flex-row">
      {/* Sidebar - Hidden on mobile */}
      <div className="hidden border-r bg-card/30 md:block md:w-80 lg:w-96">
        <div className="flex h-full flex-col">
          <div className="border-b p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-primary" />
                <span className="absolute right-0 top-0 h-2.5 w-2.5 rounded-full bg-green-500 ring-2 ring-background"></span>
              </div>
              <div>
                <h2 className="font-semibold">Your Cryptex Twin</h2>
                <p className="text-xs text-muted-foreground">Connected to your NFT</p>
              </div>
            </div>
          </div>
          
          <div className="flex-1 overflow-auto p-4">
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-sm font-medium">Training Progress</h3>
                <Progress value={67} className="h-2" />
                <p className="mt-2 text-xs text-muted-foreground">67% - Your twin is learning quickly</p>
              </div>
              
              <div>
                <h3 className="mb-2 text-sm font-medium">Personality Traits</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="outline">Analytical</Badge>
                  <Badge variant="outline">Creative</Badge>
                  <Badge variant="outline">Empathetic</Badge>
                  <Badge variant="outline">Curious</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 text-sm font-medium">Memory Stats</h3>
                <div className="space-y-1 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Memories</span>
                    <span>247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversations</span>
                    <span>32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Documents</span>
                    <span>15</span>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="mb-2 text-sm font-medium">Recent Topics</h3>
                <div className="space-y-1">
                  {["Career goals", "Travel plans", "Reading list", "Technology interests"].map((topic) => (
                    <div 
                      key={topic} 
                      className="flex cursor-pointer items-center gap-2 rounded-md p-2 text-sm hover:bg-muted"
                    >
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span>{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile sidebar trigger */}
      <Sheet>
        <SheetTrigger asChild>
          <Button 
            variant="ghost" 
            size="icon" 
            className="absolute left-4 top-20 z-10 md:hidden"
          >
            <Menu className="h-5 w-5" />
            <span className="sr-only">Open sidebar</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[80%] sm:w-[350px]">
          <SheetHeader>
            <SheetTitle>Your Cryptex Twin</SheetTitle>
            <SheetDescription>AI memory and stats</SheetDescription>
          </SheetHeader>
          <div className="mt-6 space-y-6">
            <div>
              <h3 className="mb-2 text-sm font-medium">Training Progress</h3>
              <Progress value={67} className="h-2" />
              <p className="mt-2 text-xs text-muted-foreground">67% - Your twin is learning quickly</p>
            </div>
            
            <div>
              <h3 className="mb-2 text-sm font-medium">Personality Traits</h3>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline">Analytical</Badge>
                <Badge variant="outline">Creative</Badge>
                <Badge variant="outline">Empathetic</Badge>
                <Badge variant="outline">Curious</Badge>
              </div>
            </div>
            
            <div>
              <h3 className="mb-2 text-sm font-medium">Memory Stats</h3>
              <div className="space-y-1 text-xs">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Total Memories</span>
                  <span>247</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Conversations</span>
                  <span>32</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Documents</span>
                  <span>15</span>
                </div>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col">
        {/* Chat Messages */}
        <div className="flex-1 overflow-auto p-4">
          <div className="space-y-4">
            <AnimatePresence initial={false}>
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className={cn(
                    "flex items-start gap-3 rounded-lg p-4",
                    message.role === "user"
                      ? "ml-auto max-w-[80%] bg-primary/10"
                      : "mr-auto max-w-[80%] bg-card"
                  )}
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    {message.role === "user" ? (
                      <User className="h-5 w-5" />
                    ) : (
                      <Brain className="h-5 w-5 text-primary" />
                    )}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <p className="text-sm font-medium">
                        {message.role === "user" ? "You" : "Cryptex AI"}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {new Date(message.timestamp).toLocaleTimeString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </p>
                    </div>
                    <p className="mt-1">{message.content}</p>
                  </div>
                </motion.div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mr-auto flex max-w-[80%] items-start gap-3 rounded-lg bg-card p-4"
                >
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                    <Brain className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 rounded-full bg-primary animate-bounce"></div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
            <div ref={messagesEndRef} />
          </div>
        </div>
        
        {/* Memory Recall Indicator */}
        <div className="border-t border-border/50 bg-muted/30 px-4 py-2 text-xs text-muted-foreground">
          <div className="flex items-center gap-2">
            <Lock className="h-3 w-3" />
            <span>Memory access: Personal memories + 15 documents</span>
            <ChevronDown className="ml-auto h-3 w-3" />
          </div>
        </div>
        
        {/* Input Area */}
        <div className="border-t bg-background p-4">
          <form onSubmit={handleSendMessage} className="flex items-center gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Message your Cryptex twin..."
              className="flex-1 bg-background"
            />
            <Button 
              type="submit" 
              size="icon" 
              disabled={!input.trim()}
              className={cn(
                "transition-colors",
                !input.trim() && "opacity-50"
              )}
            >
              <Send className="h-4 w-4" />
              <span className="sr-only">Send message</span>
            </Button>
          </form>
        </div>
      </div>
    </div>
  )
}