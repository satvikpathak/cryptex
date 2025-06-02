"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { 
  Brain, 
  ArrowRight, 
  LucideShieldCheck, 
  MessageSquare, 
  Fingerprint,
  Zap 
} from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(120,80,255,0.12),transparent_50%)]" />
        <div className="absolute top-0 right-0 -z-10 h-64 w-64 rounded-full bg-chart-1/20 blur-3xl" />
        <div className="absolute bottom-0 left-0 -z-10 h-64 w-64 rounded-full bg-chart-2/20 blur-3xl" />

        <div className="container relative py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="flex justify-center mb-6">
                <div className="relative">
                  <Brain className="h-12 w-12 text-primary" />
                  <div className="absolute inset-0 animate-ping rounded-full bg-primary/20" />
                </div>
              </div>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
                Your AI Twin on the{" "}
                <span className="bg-gradient-to-r from-chart-1 via-chart-2 to-chart-4 bg-clip-text text-transparent">
                  Blockchain
                </span>
              </h1>
              <p className="mt-6 text-lg text-muted-foreground md:text-xl">
                Train, tokenize, and own your digital identity powered by AI and stored immutably on the blockchain.
                Create a digital extension of yourself that learns and evolves.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button size="lg" asChild>
                  <Link href="/onboard" className="group">
                    Create Your Cryptex
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline">
                  <Link href="/marketplace">
                    Explore Marketplace
                  </Link>
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, delay: 0.3 }}
              className="relative mt-20"
            >
              <div className="relative mx-auto aspect-video overflow-hidden rounded-xl border bg-background/50 shadow-xl backdrop-blur">
                <div className="absolute inset-0 bg-gradient-to-tr from-background/10 to-background/5" />
                <Image
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg"
                  alt="Cryptex AI platform visualization"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 transform rounded-full bg-background/80 px-4 py-2 backdrop-blur">
                <p className="text-xs font-medium text-muted-foreground">
                  Powered by GPT-4 + Blockchain
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-background/50">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              The future of digital identity
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Cryptex brings together cutting-edge AI and blockchain technology to create a truly unique digital extension of yourself.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Brain className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">AI Training</h3>
              <p className="text-muted-foreground">
                Train your AI twin with your personal memories, preferences, and knowledge to create a digital extension of your identity.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-2/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <MessageSquare className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Memory Storage</h3>
              <p className="text-muted-foreground">
                Your AI twin stores memories in a secure, encrypted format, creating a persistent digital consciousness that evolves over time.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-3/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <LucideShieldCheck className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">NFT Ownership</h3>
              <p className="text-muted-foreground">
                Mint your digital identity as an NFT, establishing verifiable ownership of your AI twin on the blockchain.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-4/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Fingerprint className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Digital Identity</h3>
              <p className="text-muted-foreground">
                Create a unique digital representation of yourself that preserves your personality traits, knowledge, and values.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-5/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <Zap className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-xl font-bold">Interactive Chat</h3>
              <p className="text-muted-foreground">
                Engage in natural conversations with your AI twin, allowing it to learn and adapt to your communication style and preferences.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="group relative overflow-hidden rounded-xl border bg-card/50 p-6 backdrop-blur transition-colors hover:bg-card"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-chart-1/10 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-primary"
                >
                  <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
                  <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
                  <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
                </svg>
              </div>
              <h3 className="mb-2 text-xl font-bold">Marketplace</h3>
              <p className="text-muted-foreground">
                Explore and interact with other public Cryptex twins, creating a vibrant ecosystem of digital identities.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(120,80,255,0.08),transparent_50%)]" />
        <div className="container">
          <div className="mx-auto max-w-3xl rounded-2xl border bg-card/30 p-8 shadow-lg backdrop-blur-sm md:p-12">
            <div className="text-center">
              <h2 className="text-3xl font-bold tracking-tight">
                Ready to create your digital twin?
              </h2>
              <p className="mt-4 text-muted-foreground">
                Start your journey to creating a unique AI representation of yourself, preserved forever on the blockchain.
              </p>
              <div className="mt-8">
                <Button size="lg" asChild>
                  <Link href="/onboard" className="group">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}