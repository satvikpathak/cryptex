"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { 
  Brain, 
  MessageSquare, 
  Upload,
  Clock,
  History,
  Sliders,
  ChevronRight,
  BarChart3,
  Zap,
  User
} from "lucide-react"
import { cn } from "@/lib/utils"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState("overview")

  const memoryData = [
    { name: "Mon", memories: 12 },
    { name: "Tue", memories: 19 },
    { name: "Wed", memories: 7 },
    { name: "Thu", memories: 15 },
    { name: "Fri", memories: 22 },
    { name: "Sat", memories: 8 },
    { name: "Sun", memories: 14 }
  ]

  return (
    <div className="container mx-auto px-4 py-6 lg:py-10">
      {/* Header Section */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-bold tracking-tight sm:text-3xl">Dashboard</h1>
          <p className="text-sm text-muted-foreground sm:text-base">
            Manage your Cryptex twin, review training progress, and analyze memory patterns.
          </p>
        </div>
        <Button asChild className="w-full sm:w-auto">
          <Link href="/chat">
            <MessageSquare className="mr-2 h-4 w-4" />
            Chat with Your Twin
          </Link>
        </Button>
      </div>

      {/* Tabs */}
      <Tabs 
        defaultValue="overview" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="space-y-6"
      >
        <TabsList className="grid w-full grid-cols-3 lg:w-fit lg:grid-cols-3">
          <TabsTrigger value="overview" className="text-xs sm:text-sm">Overview</TabsTrigger>
          <TabsTrigger value="training" className="text-xs sm:text-sm">Training</TabsTrigger>
          <TabsTrigger value="memories" className="text-xs sm:text-sm">Memories</TabsTrigger>
        </TabsList>

        {/* Overview Tab */}
        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <Card className="overflow-hidden">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Training Status
                </CardTitle>
                <Brain className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">67%</div>
                <Progress value={67} className="mt-3 h-2" />
                <p className="mt-2 text-xs text-muted-foreground">
                  Your AI twin is learning quickly
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Memories
                </CardTitle>
                <History className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">247</div>
                <p className="mt-2 text-xs text-muted-foreground">
                  +34 memories this week
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Conversations
                </CardTitle>
                <MessageSquare className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">32</div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Last conversation: 2 hours ago
                </p>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  NFT Status
                </CardTitle>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-4 w-4 text-muted-foreground"
                >
                  <path d="M12 2L2 7l10 5 10-5-10-5z" />
                  <path d="m2 17 10 5 10-5" />
                  <path d="m2 12 10 5 10-5" />
                </svg>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">Owned</div>
                <p className="mt-2 text-xs text-muted-foreground">
                  Minted on Polygon · 3 days ago
                </p>
              </CardContent>
            </Card>
          </div>
          
          {/* Chart and NFT Section */}
          <div className="grid gap-6 lg:grid-cols-7">
            <Card className="lg:col-span-4">
              <CardHeader>
                <CardTitle>Memory Activity</CardTitle>
                <CardDescription>
                  New memories created over time
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-[200px] sm:h-[240px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                      data={memoryData}
                      margin={{
                        top: 5,
                        right: 30,
                        left: 0,
                        bottom: 5,
                      }}
                    >
                      <CartesianGrid strokeDasharray="3 3" className="stroke-muted" />
                      <XAxis 
                        dataKey="name" 
                        className="fill-muted-foreground text-xs" 
                        tick={{ fontSize: 12 }}
                      />
                      <YAxis 
                        className="fill-muted-foreground text-xs" 
                        tick={{ fontSize: 12 }}
                      />
                      <Tooltip
                        contentStyle={{
                          backgroundColor: 'hsl(var(--card))',
                          borderColor: 'hsl(var(--border))',
                          borderRadius: '0.5rem',
                          color: 'hsl(var(--foreground))',
                        }}
                      />
                      <Bar 
                        dataKey="memories" 
                        fill="hsl(var(--primary))" 
                        radius={[4, 4, 0, 0]} 
                      />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
            
            <Card className="lg:col-span-3">
              <CardHeader>
                <CardTitle>Your Cryptex Twin NFT</CardTitle>
                <CardDescription>
                  Unique digital identity on the blockchain
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-center space-y-4">
                <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-lg border bg-gradient-to-br from-primary/10 via-primary/5 to-primary/10">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-transparent to-primary/20 animate-pulse" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Brain className="h-16 w-16 text-primary/70 sm:h-20 sm:w-20" />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 bg-background/90 px-3 py-2 text-center backdrop-blur-sm">
                    <div className="text-sm font-medium">Cryptex #1024</div>
                  </div>
                </div>
                <Button variant="outline" size="sm" className="w-full max-w-[200px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-2 h-4 w-4"
                  >
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                  </svg>
                  View on Blockchain
                </Button>
              </CardContent>
            </Card>
          </div>
          
          {/* Bottom Cards */}
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Recent Activities</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {[
                    { icon: MessageSquare, text: "Chat conversation", time: "2 hours ago" },
                    { icon: Upload, text: "Document upload", time: "Yesterday" },
                    { icon: Sliders, text: "Personality adjustment", time: "3 days ago" },
                    { icon: Brain, text: "Memory training", time: "5 days ago" },
                  ].map((activity, i) => (
                    <div key={i} className="flex items-center gap-3">
                      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-muted">
                        <activity.icon className="h-4 w-4" />
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-medium truncate">{activity.text}</p>
                        <p className="text-xs text-muted-foreground">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-3">
                <CardTitle>Top Memory Categories</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    { name: "Personal experiences", percentage: 35 },
                    { name: "Professional knowledge", percentage: 28 },
                    { name: "Preferences & tastes", percentage: 20 },
                    { name: "Relationships", percentage: 17 },
                  ].map((category, i) => (
                    <div key={i} className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span className="truncate">{category.name}</span>
                        <span className="font-medium">{category.percentage}%</span>
                      </div>
                      <Progress value={category.percentage} className="h-2" />
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
            
            <Card className="overflow-hidden md:col-span-2 lg:col-span-1">
              <CardHeader className="pb-0">
                <CardTitle>Quick Actions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <div className="divide-y">
                  {[
                    { icon: MessageSquare, text: "Continue conversation", href: "/chat" },
                    { icon: Upload, text: "Upload new memories", href: "/dashboard/upload" },
                    { icon: Sliders, text: "Adjust personality", href: "/dashboard/settings" },
                    { icon: BarChart3, text: "View detailed stats", href: "/dashboard/stats" },
                    { icon: Zap, text: "Run training session", href: "/dashboard/training" },
                  ].map((action, i) => (
                    <Link
                      key={i}
                      href={action.href}
                      className="flex items-center justify-between p-4 transition-colors hover:bg-muted/50"
                    >
                      <div className="flex items-center gap-3">
                        <action.icon className="h-4 w-4 text-primary" />
                        <span className="text-sm">{action.text}</span>
                      </div>
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </Link>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        {/* Training Tab */}
        <TabsContent value="training" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>AI Training Progress</CardTitle>
              <CardDescription>
                Your Cryptex twin is learning from your data and interactions
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-medium">Overall Training</h3>
                  <span className="text-sm font-medium">67%</span>
                </div>
                <Progress value={67} className="h-2" />
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  { name: "Personality Modeling", progress: 78, icon: Brain },
                  { name: "Language Patterns", progress: 82, icon: MessageSquare },
                  { name: "Memory Integration", progress: 53, icon: History },
                  { name: "Knowledge Processing", progress: 65, icon: Upload },
                  { name: "Behavioral Analysis", progress: 41, icon: Sliders },
                  { name: "Reasoning Capabilities", progress: 59, icon: Zap },
                ].map((module, i) => (
                  <div key={i} className="rounded-lg border p-4 space-y-3">
                    <div className="flex items-start gap-2">
                      <module.icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                      <h3 className="font-medium text-sm leading-tight">{module.name}</h3>
                    </div>
                    <div className="space-y-2">
                      <Progress value={module.progress} className="h-2" />
                      <p className="text-xs text-muted-foreground">
                        {module.progress}% complete
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Card className="bg-muted/30">
                <CardContent className="pt-6">
                  <h3 className="mb-2 text-sm font-medium">Training Schedule</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Your twin is scheduled for deep learning sessions based on your interaction patterns.
                  </p>
                  <div className="space-y-2">
                    <div className="flex items-center justify-between rounded-md bg-background p-3 text-sm shadow-sm">
                      <div className="flex items-center gap-2">
                        <Clock className="h-4 w-4 text-muted-foreground" />
                        <span>Daily Reflection</span>
                      </div>
                      <span className="text-xs text-muted-foreground">12:00 AM</span>
                    </div>
                    <div className="flex items-center justify-between rounded-md bg-background p-3 text-sm shadow-sm">
                      <div className="flex items-center gap-2">
                        <Zap className="h-4 w-4 text-muted-foreground" />
                        <span>Memory Consolidation</span>
                      </div>
                      <span className="text-xs text-muted-foreground">Every Sunday</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </CardContent>
          </Card>
        </TabsContent>

        {/* Memories Tab */}
        <TabsContent value="memories" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Memory Repository</CardTitle>
              <CardDescription>
                Review and manage your AI twin's memory database
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="rounded-lg border p-4 sm:p-6">
                  <div className="mb-4 flex items-center justify-between">
                    <h3 className="font-medium">Memory Categories</h3>
                    <Button variant="ghost" size="sm">Manage</Button>
                  </div>
                  
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {[
                      { name: "Personal Experiences", count: 86, icon: User },
                      { name: "Conversations", count: 124, icon: MessageSquare },
                      { name: "Uploaded Documents", count: 37, icon: Upload },
                    ].map((category, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 rounded-md border p-3"
                      >
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10">
                          <category.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-sm font-medium truncate">{category.name}</p>
                          <p className="text-xs text-muted-foreground">
                            {category.count} items
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="rounded-lg border p-4 sm:p-6">
                  <h3 className="mb-4 font-medium">Recent Memories</h3>
                  <div className="space-y-3">
                    {[
                      { type: "Conversation", title: "Discussion about career goals", date: "Today" },
                      { type: "Document", title: "Resume.pdf", date: "Yesterday" },
                      { type: "Personal", title: "Travel preferences and bucket list", date: "3 days ago" },
                      { type: "Conversation", title: "Favorite books and authors", date: "1 week ago" },
                    ].map((memory, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between rounded-md border p-3"
                      >
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-2 mb-1">
                            <Badge variant="outline" className="text-xs">
                              {memory.type}
                            </Badge>
                            <p className="text-sm font-medium truncate">{memory.title}</p>
                          </div>
                          <p className="text-xs text-muted-foreground">
                            Added: {memory.date}
                          </p>
                        </div>
                        <Button variant="ghost" size="icon" className="shrink-0">
                          <ChevronRight className="h-4 w-4" />
                        </Button>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex justify-center">
                    <Button variant="outline" size="sm">
                      View All Memories
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}