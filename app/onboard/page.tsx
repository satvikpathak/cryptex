"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
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
    <div className="py-10 px-4">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white">Create Your Cryptex Twin</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Follow the steps below to create your personalized AI twin on the blockchain
          </p>
        </div>

        <div className="mb-8">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-blue-500 h-2 rounded-full transition-all duration-300 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
          <div className="mt-2 flex justify-between text-xs text-gray-500 dark:text-gray-400">
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
              <div className="relative overflow-hidden rounded-lg border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-transparent to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20" />
                <div className="relative text-center p-6">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                    <Brain className="h-8 w-8 text-blue-600 dark:text-blue-400" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Welcome to Cryptex</h2>
                  <p className="mt-2 text-gray-600 dark:text-gray-400">
                    Your journey to creating a digital twin begins here
                  </p>
                </div>
                <div className="relative space-y-4 px-6 pb-0">
                  <div className="mx-auto max-w-md space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Wallet className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900 dark:text-white">Connect Wallet</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Link your blockchain wallet to own your AI twin
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <User className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900 dark:text-white">Customize Personality</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Define traits and characteristics for your AI twin
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Upload className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900 dark:text-white">Upload Memories</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Add personal data to train your AI twin
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-3">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
                        <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium text-gray-900 dark:text-white">Mint NFT</p>
                        <p className="text-sm text-gray-600 dark:text-gray-400">
                          Create your unique Cryptex Soul NFT on the blockchain
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="relative mx-auto mt-8 aspect-video w-full max-w-lg overflow-hidden rounded-t-lg">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-blue-400 to-purple-500">
                      <img
                        src="https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg"
                        alt="Cryptex AI Platform"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    </div>
                  </div>
                </div>
                <div className="relative bg-white dark:bg-gray-800 p-6 text-center">
                  <button
                    className="inline-flex items-center px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                    onClick={() => goToNextStep("welcome")}
                  >
                    Begin Journey
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
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
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Connect Your Wallet</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Connect your Web3 wallet to create and own your Cryptex twin
                  </p>
                </div>
                <div className="p-6 pt-0">
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
                          className="flex cursor-pointer items-center justify-between rounded-lg border border-gray-200 dark:border-gray-700 p-4 transition-colors hover:bg-gray-50 dark:hover:bg-gray-700"
                        >
                          <div className="flex items-center gap-4">
                            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                              <span className="text-lg">{wallet.icon}</span>
                            </div>
                            <div>
                              <p className="font-medium text-gray-900 dark:text-white">{wallet.name}</p>
                              <p className="text-sm text-gray-600 dark:text-gray-400">
                                {wallet.description}
                              </p>
                            </div>
                          </div>
                          <ChevronRight className="h-5 w-5 text-gray-400" />
                        </div>
                      ))}
                    </div>
                    
                    <div>
                      <p className="text-sm text-gray-600 dark:text-gray-400 text-center">
                        By connecting your wallet, you agree to our{" "}
                        <span className="text-blue-600 dark:text-blue-400 underline underline-offset-4 cursor-pointer">
                          Terms of Service
                        </span>{" "}
                        and{" "}
                        <span className="text-blue-600 dark:text-blue-400 underline underline-offset-4 cursor-pointer">
                          Privacy Policy
                        </span>
                        .
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between p-6 pt-0">
                  <button 
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setCurrentStep("welcome")}
                  >
                    Back
                  </button>
                  <button 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    onClick={() => goToNextStep("connect-wallet")}
                  >
                    <Shield className="mr-2 h-4 w-4" />
                    Continue
                  </button>
                </div>
              </div>
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
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Define Your Twin's Personality</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Customize how your AI twin thinks, speaks, and responds
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid gap-6">
                    <div className="grid gap-4">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900 dark:text-white">Name Your Twin</label>
                        <input 
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                          placeholder="e.g., Alex, Cryptex-1, etc." 
                        />
                      </div>
                      
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-900 dark:text-white">Brief Description</label>
                        <textarea 
                          className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
                          placeholder="Describe your twin's personality in a few sentences..."
                        />
                      </div>

                      <div className="space-y-4">
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-white">Communication Style</label>
                            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option value="formal">Formal</option>
                              <option value="casual">Casual</option>
                              <option value="balanced" selected>Balanced</option>
                              <option value="technical">Technical</option>
                              <option value="creative">Creative</option>
                            </select>
                          </div>
                          
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-white">Personality Type</label>
                            <select className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                              <option value="analytical">Analytical</option>
                              <option value="creative">Creative</option>
                              <option value="empathetic">Empathetic</option>
                              <option value="balanced" selected>Balanced</option>
                              <option value="logical">Logical</option>
                            </select>
                          </div>
                        </div>
                        
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900 dark:text-white">Interests & Expertise</label>
                          <div className="grid gap-2 sm:grid-cols-2">
                            {[
                              "Technology", "Art & Design", "Science", "Business", 
                              "Philosophy", "Health", "Entertainment", "Sports"
                            ].map((interest) => (
                              <div key={interest} className="flex items-center space-x-2">
                                <input 
                                  type="checkbox" 
                                  id={interest} 
                                  className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500" 
                                />
                                <label htmlFor={interest} className="text-sm text-gray-900 dark:text-white">
                                  {interest}
                                </label>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between p-6 pt-0">
                  <button 
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setCurrentStep("connect-wallet")}
                  >
                    Back
                  </button>
                  <button 
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    onClick={() => goToNextStep("personality")}
                  >
                    Continue
                  </button>
                </div>
              </div>
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
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Upload Training Data</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Provide information to help your AI twin learn about you
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid gap-6">
                    <div className="rounded-lg border-2 border-dashed border-gray-300 dark:border-gray-600 p-10 text-center">
                      <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-700">
                        <Upload className="h-6 w-6 text-gray-600 dark:text-gray-400" />
                      </div>
                      <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">Upload Files</h3>
                      <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
                        Drag and drop files or click to browse
                      </p>
                      <p className="mt-1 text-xs text-gray-500 dark:text-gray-500">
                        Supported formats: PDF, TXT, DOCX, MD (Max 10MB)
                      </p>
                      <button className="mt-4 inline-flex items-center px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
                        <Upload className="mr-2 h-4 w-4" />
                        Select Files
                      </button>
                    </div>
                    
                    <div className="space-y-4">
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Or Add Information Directly</h3>
                      
                      <div className="space-y-4">
                        <div className="space-y-2">
                          <label className="text-sm font-medium text-gray-900 dark:text-white">Bio & Background</label>
                          <textarea 
                            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[120px]"
                            placeholder="Share details about yourself, your background, and your story..."
                          />
                        </div>
                        <div className="grid gap-4 sm:grid-cols-2">
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-white">Education</label>
                            <input 
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Your education history" 
                            />
                          </div>
                          <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-900 dark:text-white">Occupation</label>
                            <input 
                              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="Your current role" 
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between p-6 pt-0">
                  <button 
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setCurrentStep("personality")}
                  >
                    Back
                  </button>
                  <button 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    onClick={() => goToNextStep("upload")}
                  >
                    <FileText className="mr-2 h-4 w-4" />
                    Continue
                  </button>
                </div>
              </div>
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
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Review Your Cryptex Twin</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Verify the details before minting your AI twin as an NFT
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="grid gap-6 md:grid-cols-2">
                    <div>
                      <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Personality Profile</h3>
                      <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Name</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Cryptex Twin</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Communication Style</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Balanced</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Personality Type</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">Balanced</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Memory Retention</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">High</span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Primary Language</span>
                          <span className="text-sm font-medium text-gray-900 dark:text-white">English</span>
                        </div>
                      </div>
                      
                      <h3 className="mb-4 mt-6 text-lg font-medium text-gray-900 dark:text-white">Training Data</h3>
                      <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4 space-y-3">
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Personal Information</span>
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Preferences & Interests</span>
                          <CheckCircle2 className="h-4 w-4 text-green-500" />
                        </div>
                        <div className="flex justify-between">
                          <span className="text-sm text-gray-600 dark:text-gray-400">Uploaded Documents</span>
                          <span className="text-sm text-gray-900 dark:text-white">3 files</span>
                        </div>
                      </div>
                    </div>
                    
                    <div>
                      <h3 className="mb-4 text-lg font-medium text-gray-900 dark:text-white">Preview</h3>
                      <div className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
                        <div className="aspect-square overflow-hidden rounded-lg bg-gray-100 dark:bg-gray-700 relative">
                          <div className="absolute inset-0 bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 dark:from-blue-800 dark:via-purple-800 dark:to-pink-800 animate-pulse" />
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Brain className="h-20 w-20 text-blue-600 dark:text-blue-400 opacity-70" />
                          </div>
                          <div className="absolute bottom-0 w-full bg-white/80 dark:bg-gray-800/80 p-2 text-center text-sm font-medium backdrop-blur-sm">
                            Cryptex #1024
                          </div>
                        </div>
                        
                        <div className="mt-4 space-y-2">
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Network</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">Polygon</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Standard</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">ERC-721</span>
                          </div>
                          <div className="flex justify-between">
                            <span className="text-sm text-gray-600 dark:text-gray-400">Est. Gas Fee</span>
                            <span className="text-sm font-medium text-gray-900 dark:text-white">~0.0005 ETH</span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="mt-6 rounded-lg border border-yellow-200 dark:border-yellow-800 bg-yellow-50 dark:bg-yellow-900/20 p-4 text-sm text-yellow-800 dark:text-yellow-200">
                        <p>
                          By proceeding, you're creating a unique digital identity stored on the blockchain. Your private data remains encrypted and secure.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between p-6 pt-0">
                  <button 
                    className="px-4 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    onClick={() => setCurrentStep("upload")}
                  >
                    Back
                  </button>
                  <button 
                    className="inline-flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors"
                    onClick={() => goToNextStep("review")}
                  >
                    <Sparkles className="mr-2 h-4 w-4" />
                    Mint NFT
                  </button>
                </div>
              </div>
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
              <div className="rounded-lg border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 shadow-lg">
                <div className="p-6">
                  <h2 className="text-xl font-bold text-gray-900 dark:text-white">Mint Your Cryptex Soul</h2>
                  <p className="mt-1 text-gray-600 dark:text-gray-400">
                    Creating your unique AI twin NFT on the blockchain
                  </p>
                </div>
                <div className="p-6 pt-0">
                  <div className="text-center">
                    <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-blue-100 to-purple-100 dark:from-blue-900 dark:to-purple-900">
                      <Sparkles className="h-12 w-12 text-blue-600 dark:text-blue-400 animate-pulse" />
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex items-center justify-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" />
                        <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.1s' }} />
                        <div className="h-2 w-2 rounded-full bg-blue-600 animate-bounce" style={{ animationDelay: '0.2s' }} />
                      </div>
                      
                      <h3 className="text-lg font-medium text-gray-900 dark:text-white">Minting in Progress...</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        Your Cryptex twin is being created and secured on the blockchain
                      </p>
                      
                      <div className="mx-auto max-w-md space-y-3 text-left">
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-900 dark:text-white">Personality profile processed</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-900 dark:text-white">Training data encrypted</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <CheckCircle2 className="h-5 w-5 text-green-500" />
                          <span className="text-sm text-gray-900 dark:text-white">AI model initialized</span>
                        </div>
                        <div className="flex items-center space-x-3">
                          <div className="h-5 w-5 rounded-full border-2 border-blue-600 border-t-transparent animate-spin" />
                          <span className="text-sm text-gray-900 dark:text-white">Minting NFT...</span>
                        </div>
                      </div>
                      
                      <div className="mt-8 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 p-4">
                        <p className="text-xs text-gray-600 dark:text-gray-400">
                          Transaction Hash: 0x1a2b3c4d5e6f7g8h9i0j1k2l3m4n5o6p7q8r9s0t1u2v3w4x5y6z
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-center p-6 pt-0">
                  <button 
                    className="px-6 py-2 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                    disabled
                  >
                    Please wait...
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}