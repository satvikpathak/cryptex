"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Brain,
  Upload,
  CheckCircle2,
  ChevronRight,
  User,
  Shield,
  FileText,
  Sparkles,
  Wallet,
  ArrowRight,
} from "lucide-react"

type OnboardingStep = 
  | "welcome" 
  | "connect-wallet" 
  | "personality" 
  | "upload" 
  | "review" 
  | "mint"

export default function OnboardPage() {
  const [currentStep, setCurrentStep] = useState<OnboardingStep>("welcome")
  const [progress, setProgress] = useState(0)
  
  // Handle step transitions
  const goToNextStep = (current: OnboardingStep) => {
    const steps: OnboardingStep[] = ["welcome", "connect-wallet", "personality", "upload", "review", "mint"]
    const currentIndex = steps.indexOf(current)
    
    if (currentIndex < steps.length - 1) {
      const nextStep = steps[currentIndex + 1]
      setCurrentStep(nextStep)
      setProgress(((currentIndex + 1) / (steps.length - 1)) * 100)
    }
  }

  return (
    <div className="py-10">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight">Create Your Cryptex Twin</h1>
          <p className="mt-2 text-muted-foreground">
            Follow the steps below to create your personalized AI twin on the blockchain
          </p>
        </div>

        <div className="mb-8">
          <Progress value={progress} className="h-2" />
          <div className="mt-2 flex justify-between text-xs text-muted-foreground">
            <span>Getting Started</span>
            <span>Personalization</span>
            <span>Finalization</span>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {currentStep === "welcome" && (
            <motion.div
              key="welcome"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden border-2">
                <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-transparent to-chart-2/10" />
                <CardHeader className="relative text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Brain className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Welcome to Cryptex</CardTitle>
                  <CardDescription>
                    Your journey to creating a digital twin begins here
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative space-y-4 text-center pb-0">
                  <div className="mx-auto max-w-md space-y-1">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Wallet className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Connect Wallet</p>
                        <p className="text-sm text-muted-foreground">
                          Link your blockchain wallet to own your AI twin
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <User className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Customize Personality</p>
                        <p className="text-sm text-muted-foreground">
                          Define traits and characteristics for your AI twin
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Upload className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Upload Memories</p>
                        <p className="text-sm text-muted-foreground">
                          Add personal data to train your AI twin
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                        <Sparkles className="h-4 w-4 text-primary" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Mint NFT</p>
                        <p className="text-sm text-muted-foreground">
                          Create your unique Cryptex Soul NFT on the blockchain
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mx-auto mt-8 aspect-video w-full max-w-lg overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Image
                        src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"
                        alt="Cryptex AI Platform"
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="relative block bg-card p-6 text-center">
                  <Button
                    size="lg"
                    onClick={() => goToNextStep("welcome")}
                    className="px-8"
                  >
                    Begin Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === "connect-wallet" && (
            <motion.div
              key="connect-wallet"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Connect Your Wallet</CardTitle>
                  <CardDescription>
                    Connect your Web3 wallet to create and own your Cryptex twin
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      {[
                        { name: "MetaMask", description: "Connect to your MetaMask wallet", icon: "🦊" },
                        { name: "Coinbase Wallet", description: "Connect to Coinbase Wallet", icon: "🔵" },
                        { name: "WalletConnect", description: "Connect with WalletConnect", icon: "🔗" },
                        { name: "Rainbow", description: "Connect to Rainbow", icon: "🌈" },
                      ].map((wallet) => (
                        <div
                          key={wallet.name}
                          className="flex cursor-pointer items-center justify-between rounded-lg border p-4 transition-colors hover:bg-accent"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                              <span className="text-lg">{wallet.icon}</span>
                            </div>
                            <div>
                              <p className="font-medium">{wallet.name}</p>
                              <p className="text-sm text-muted-foreground">
                                {wallet.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-muted-foreground" />
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <p className="text-sm text-muted-foreground text-center">
                        By connecting your wallet, you agree to our{" "}
                        <Link href="/terms" className="text-primary underline underline-offset-4">
                          Terms of Service
                        </Link>{" "}
                        and{" "}
                        <Link href="/privacy" className="text-primary underline underline-offset-4">
                          Privacy Policy
                        </Link>
                        .
                      </p>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep("welcome")}>
                    Back
                  </Button>
                  <Button onClick={() => goToNextStep("connect-wallet")}>
                    <Shield className="mr-2 h-4 w-4" />
                    Continue
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === "personality" && (
            <motion.div
              key="personality"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Define Your Twin's Personality</CardTitle>
                  <CardDescription>
                    Customize how your AI twin thinks, speaks, and responds
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="twin-name">Name Your Twin</Label>
                        <Input id="twin-name" placeholder="e.g., Alex, Cryptex-1, etc." />
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="description">Brief Description</Label>
                        <Textarea 
                          id="description" 
                          placeholder="Describe your twin's personality in a few sentences..."
                          className="min-h-[100px]"
                        />
                      </div>

                      <Tabs defaultValue="traits">
                        <TabsList className="w-full grid grid-cols-2">
                          <TabsTrigger value="traits">Personality Traits</TabsTrigger>
                          <TabsTrigger value="advanced">Advanced Settings</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="traits" className="space-y-4 pt-4">
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label>Communication Style</Label>
                              <Select defaultValue="balanced">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select style" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="formal">Formal</SelectItem>
                                  <SelectItem value="casual">Casual</SelectItem>
                                  <SelectItem value="balanced">Balanced</SelectItem>
                                  <SelectItem value="technical">Technical</SelectItem>
                                  <SelectItem value="creative">Creative</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label>Personality Type</Label>
                              <Select defaultValue="balanced">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select type" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="analytical">Analytical</SelectItem>
                                  <SelectItem value="creative">Creative</SelectItem>
                                  <SelectItem value="empathetic">Empathetic</SelectItem>
                                  <SelectItem value="balanced">Balanced</SelectItem>
                                  <SelectItem value="logical">Logical</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                          </div>
                          
                          <div className="space-y-2">
                            <Label>Interests & Expertise</Label>
                            <div className="grid gap-2 sm:grid-cols-2">
                              {[
                                "Technology", "Art & Design", "Science", "Business", 
                                "Philosophy", "Health", "Entertainment", "Sports"
                              ].map((interest) => (
                                <div key={interest} className="flex items-center space-x-2">
                                  <input type="checkbox" id={interest} className="h-4 w-4 rounded border-gray-300 text-primary focus:ring-primary" />
                                  <Label htmlFor={interest} className="text-sm font-normal">
                                    {interest}
                                  </Label>
                                </div>
                              ))}
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="advanced" className="space-y-4 pt-4">
                          <div className="grid gap-4">
                            <div className="space-y-2">
                              <Label>Memory Retention</Label>
                              <Select defaultValue="balanced">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select level" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="high">High - Remember most details</SelectItem>
                                  <SelectItem value="balanced">Balanced - Focus on key points</SelectItem>
                                  <SelectItem value="selective">Selective - Only important memories</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label>Response Length</Label>
                              <Select defaultValue="medium">
                                <SelectTrigger>
                                  <SelectValue placeholder="Select length" />
                                </SelectTrigger>
                                <SelectContent>
                                  <SelectItem value="concise">Concise - Brief responses</SelectItem>
                                  <SelectItem value="medium">Medium - Balanced responses</SelectItem>
                                  <SelectItem value="detailed">Detailed - Thorough explanations</SelectItem>
                                </SelectContent>
                              </Select>
                            </div>
                            
                            <div className="space-y-2">
                              <Label htmlFor="language">Primary Language</Label>
                              <Input id="language" defaultValue="English" />
                            </div>
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep("connect-wallet")}>
                    Back
                  </Button>
                  <Button onClick={() => goToNextStep("personality")}>
                    Continue
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === "upload" && (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Upload Training Data</CardTitle>
                  <CardDescription>
                    Provide information to help your AI twin learn about you
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6">
                    <div className="rounded-lg border border-dashed p-10 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-muted">
                        <Upload className="h-6 w-6 text-muted-foreground" />
                      </div>
                      <h3 className="mt-4 text-lg font-medium">Upload Files</h3>
                      <p className="mt-2 text-sm text-muted-foreground">
                        Drag and drop files or click to browse
                      </p>
                      <p className="mt-1 text-xs text-muted-foreground">
                        Supported formats: PDF, TXT, DOCX, MD (Max 10MB)
                      </p>
                      <Button variant="outline" className="mt-4">
                        <Upload className="mr-2 h-4 w-4" />
                        Select Files
                      </Button>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium">Or Add Information Directly</h3>
                      
                      <Tabs defaultValue="personal">
                        <TabsList className="w-full grid grid-cols-3">
                          <TabsTrigger value="personal">Personal</TabsTrigger>
                          <TabsTrigger value="preferences">Preferences</TabsTrigger>
                          <TabsTrigger value="experiences">Experiences</TabsTrigger>
                        </TabsList>
                        
                        <TabsContent value="personal" className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="bio">Bio & Background</Label>
                            <Textarea 
                              id="bio" 
                              placeholder="Share details about yourself, your background, and your story..."
                              className="min-h-[120px]"
                            />
                          </div>
                          <div className="grid gap-4 sm:grid-cols-2">
                            <div className="space-y-2">
                              <Label htmlFor="education">Education</Label>
                              <Input id="education" placeholder="Your education history" />
                            </div>
                            <div className="space-y-2">
                              <Label htmlFor="occupation">Occupation</Label>
                              <Input id="occupation" placeholder="Your current role" />
                            </div>
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="preferences" className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="interests">Interests & Hobbies</Label>
                            <Textarea 
                              id="interests" 
                              placeholder="What are you passionate about?"
                              className="min-h-[100px]"
                            />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="values">Core Values</Label>
                            <Textarea 
                              id="values" 
                              placeholder="What principles guide your decisions?"
                              className="min-h-[100px]"
                            />
                          </div>
                        </TabsContent>
                        
                        <TabsContent value="experiences" className="space-y-4 pt-4">
                          <div className="space-y-2">
                            <Label htmlFor="experiences">Key Life Experiences</Label>
                            <Textarea 
                              id="experiences" 
                              placeholder="Share formative experiences that have shaped who you are..."
                              className="min-h-[150px]"
                            />
                          </div>
                        </TabsContent>
                      </Tabs>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep("personality")}>
                    Back
                  </Button>
                  <Button onClick={() => goToNextStep("upload")}>
                    <FileText className="mr-2 h-4 w-4" />
                    Continue
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === "review" && (
            <motion.div
              key="review"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>Review Your Cryptex Twin</CardTitle>
                  <CardDescription>
                    Verify the details before minting your AI twin as an NFT
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Personality Profile</h3>
                      <div className="rounded-lg border p-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Name</span>
                          <span className="text-sm font-medium">Cryptex Twin</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Communication Style</span>
                          <span className="text-sm font-medium">Balanced</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Personality Type</span>
                          <span className="text-sm font-medium">Balanced</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Memory Retention</span>
                          <span className="text-sm font-medium">High</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Primary Language</span>
                          <span className="text-sm font-medium">English</span>
                        </div>
                      </div>
                      
                      <h3 className="mb-4 mt-6 text-lg font-medium">Training Data</h3>
                      <div className="rounded-lg border p-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Personal Information</span>
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Preferences & Interests</span>
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-muted-foreground">Uploaded Documents</span>
                          <span className="text-sm">3 files</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="mb-4 text-lg font-medium">Preview</h3>
                      <div className="rounded-lg border p-4">
                        <div className="aspect-square overflow-hidden rounded-lg bg-muted relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-chart-1/30 via-chart-2/20 to-chart-3/30 animate-pulse" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Brain className="h-20 w-20 text-primary/70" />
                          </div>
                          <div className="absolute bottom-0 w-full bg-background/80 p-2 text-center text-sm font-medium backdrop-blur-sm">
                            Cryptex #1024
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Network</span>
                            <span className="text-sm font-medium">Polygon</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Standard</span>
                            <span className="text-sm font-medium">ERC-721</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-muted-foreground">Est. Gas Fee</span>
                            <span className="text-sm font-medium">~0.0005 ETH</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 rounded-lg border border-amber-200/20 bg-amber-50/10 p-4 text-sm text-amber-900 dark:text-amber-200">
                        <p>
                          By proceeding, you're creating a unique digital identity stored on the blockchain. Your private data remains encrypted and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep("upload")}>
                    Back
                  </Button>
                  <Button onClick={() => goToNextStep("review")}>
                    Continue to Mint
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}

          {currentStep === "mint" && (
            <motion.div
              key="mint"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-chart-1/10 via-transparent to-chart-2/10" />
                <CardHeader className="relative text-center">
                  <CardTitle className="text-2xl">Mint Your Cryptex Twin NFT</CardTitle>
                  <CardDescription>
                    Your AI twin is ready to be tokenized on the blockchain
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative">
                  <div className="mx-auto mb-8 max-w-sm text-center">
                    <div className="aspect-square overflow-hidden rounded-lg bg-muted relative mx-auto">
                      <div className="absolute inset-0 bg-gradient-to-br from-chart-1/30 via-chart-2/20 to-chart-3/30 animate-pulse" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Brain className="h-24 w-24 text-primary/70" />
                      </div>
                      <div className="absolute bottom-0 w-full bg-background/80 p-2 text-center text-sm font-medium backdrop-blur-sm">
                        Cryptex #1024
                      </div>
                    </div>
                    
                    <div className="mt-6 space-y-2 text-sm">
                      <div className="grid grid-cols-2 gap-2">
                        <div className="rounded-md bg-muted p-2">
                          <p className="text-muted-foreground">Network</p>
                          <p className="font-medium">Polygon</p>
                        </div>
                        <div className="rounded-md bg-muted p-2">
                          <p className="text-muted-foreground">Type</p>
                          <p className="font-medium">ERC-721</p>
                        </div>
                      </div>
                      
                      <div className="rounded-md border p-3">
                        <div className="flex justify-between">
                          <span className="text-muted-foreground">Est. Gas Fee</span>
                          <span className="font-medium">~0.0005 ETH</span>
                        </div>
                        <div className="flex justify-between mt-1">
                          <span className="text-muted-foreground">Your Balance</span>
                          <span className="font-medium">1.245 ETH</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="rounded-lg border p-4 bg-card">
                    <h3 className="mb-4 font-medium">Ownership Benefits</h3>
                    <div className="space-y-3">
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Full Ownership</p>
                          <p className="text-sm text-muted-foreground">
                            You are the sole owner of your digital identity, secured on the blockchain
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Unlimited Access</p>
                          <p className="text-sm text-muted-foreground">
                            Interact with your AI twin anytime with no usage limits
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start gap-3">
                        <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                        <div>
                          <p className="font-medium">Memory Encryption</p>
                          <p className="text-sm text-muted-foreground">
                            Your personal data is securely encrypted and only accessible by you
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="relative flex justify-between">
                  <Button variant="outline" onClick={() => setCurrentStep("review")}>
                    Back
                  </Button>
                  <Button
                    className="bg-gradient-to-r from-chart-1 to-chart-2 text-white"
                    onClick={() => {
                      // In a real app, this would trigger the wallet transaction
                      setTimeout(() => {
                        window.location.href = "/dashboard";
                      }, 1500);
                    }}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Mint Cryptex NFT
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}