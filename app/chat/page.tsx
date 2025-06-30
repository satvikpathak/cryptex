"use client"

import { useState, useRef, useEffect } from "react"
import { Send, Brain, User, Clock, ChevronDown, Menu, Lock } from "lucide-react"

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
  const [sidebarOpen, setSidebarOpen] = useState(false)
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
  
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  return (
    <div className="flex h-screen bg-background">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black bg-opacity-50 md:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 transform bg-background border-r border-border shadow-lg
        transition-transform duration-300 ease-in-out
        md:relative md:translate-x-0 md:shadow-none
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="flex h-full flex-col">
          {/* Sidebar Header */}
          <div className="border-b border-border p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <Brain className="h-8 w-8 text-primary" />
                <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full bg-green-500 border-2 border-background"></span>
              </div>
              <div>
                <h2 className="font-semibold text-foreground">Your Cryptex Twin</h2>
                <p className="text-xs text-muted-foreground">Connected to your NFT</p>
              </div>
            </div>
          </div>
          
          {/* Sidebar Content */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="space-y-6">
              {/* Training Progress */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-foreground">Training Progress</h3>
                <div className="w-full bg-secondary rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: '67%' }}></div>
                </div>
                <p className="mt-2 text-xs text-muted-foreground">67% - Your twin is learning quickly</p>
              </div>
              
              {/* Personality Traits */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-foreground">Personality Traits</h3>
                <div className="flex flex-wrap gap-2">
                  {['Analytical', 'Creative', 'Empathetic', 'Curious'].map((trait) => (
                    <span key={trait} className="px-2 py-1 text-xs bg-secondary text-secondary-foreground rounded-md border border-border">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              
              {/* Memory Stats */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-foreground">Memory Stats</h3>
                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Total Memories</span>
                    <span className="text-foreground">247</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Conversations</span>
                    <span className="text-foreground">32</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Documents</span>
                    <span className="text-foreground">15</span>
                  </div>
                </div>
              </div>
              
              {/* Recent Topics */}
              <div>
                <h3 className="mb-2 text-sm font-medium text-foreground">Recent Topics</h3>
                <div className="space-y-1">
                  {["Career goals", "Travel plans", "Reading list", "Technology interests"].map((topic) => (
                    <div 
                      key={topic} 
                      className="flex items-center gap-2 rounded-md p-2 text-sm hover:bg-accent hover:text-accent-foreground cursor-pointer transition-colors"
                    >
                      <Clock className="h-4 w-4 text-muted-foreground" />
                      <span className="text-foreground">{topic}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Chat Area */}
      <div className="flex flex-1 flex-col min-w-0">
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-background md:hidden">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            <Menu className="h-5 w-5 text-foreground" />
          </button>
          <h1 className="font-semibold text-foreground">Cryptex AI</h1>
          <div className="w-9"></div>
        </div>

        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex items-start gap-3 max-w-4xl ${
                message.role === "user" 
                  ? "ml-auto flex-row-reverse" 
                  : "mr-auto"
              }`}
            >
              <div className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${
                message.role === "user" 
                  ? "bg-blue-100" 
                  : "bg-gray-100"
              }`}>
                {message.role === "user" ? (
                  <User className="h-4 w-4 text-blue-600" />
                ) : (
                  <Brain className="h-4 w-4 text-gray-600" />
                )}
              </div>
              <div className={`flex-1 max-w-xs sm:max-w-md md:max-w-lg lg:max-w-xl ${
                message.role === "user" ? "text-right" : "text-left"
              }`}>
                <div className="flex items-center gap-2 mb-1">
                  <p className="text-sm font-medium text-gray-900">
                    {message.role === "user" ? "You" : "Cryptex AI"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {new Date(message.timestamp).toLocaleTimeString([], {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
                <div className={`rounded-lg p-3 ${
                  message.role === "user"
                    ? "bg-blue-600 text-white"
                    : "bg-white border border-gray-200 text-gray-900"
                }`}>
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex items-start gap-3 max-w-4xl mr-auto">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-secondary">
                <Brain className="h-4 w-4 text-secondary-foreground" />
              </div>
              <div className="bg-card border border-border rounded-lg p-3">
                <div className="flex items-center gap-1">
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '-0.3s' }}></div>
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce" style={{ animationDelay: '-0.15s' }}></div>
                  <div className="h-2 w-2 rounded-full bg-muted-foreground animate-bounce"></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Memory Recall Indicator */}
        <div className="border-t border-border bg-muted/30 px-4 py-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Lock className="h-3 w-3" />
            <span>Memory access: Personal memories + 15 documents</span>
            <ChevronDown className="ml-auto h-3 w-3" />
          </div>
        </div>
        
        {/* Input Area */}
        <div className="border-t border-border bg-background p-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' && !e.shiftKey) {
                  e.preventDefault()
                  handleSendMessage(e)
                }
              }}
              placeholder="Message your Cryptex twin..."
              className="flex-1 px-4 py-2 border border-input rounded-lg bg-background text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
            />
            <button 
              onClick={handleSendMessage}
              disabled={!input.trim()}
              className={`p-2 rounded-lg transition-colors ${
                input.trim() 
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground' 
                  : 'bg-muted text-muted-foreground cursor-not-allowed'
              }`}
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}