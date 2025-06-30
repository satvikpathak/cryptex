"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Brain, Search, Star, Users, ChevronDown } from "lucide-react"

const cryptexTwins = [
  {
    id: 1,
    name: "Intellex",
    creator: "0x1a2...3b4c",
    image: "https://images.pexels.com/photos/4050291/pexels-photo-4050291.jpeg",
    traits: ["Analytical", "Philosophical", "Calm"],
    price: "0.25 ETH",
    rating: 4.7,
  },
  {
    id: 2,
    name: "Nova",
    creator: "0x5e6...7f8g",
    image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg",
    traits: ["Creative", "Witty", "Curious"],
    price: "0.32 ETH",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Cortex",
    creator: "0x9h0...1i2j",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg",
    traits: ["Precise", "Logical", "Detailed"],
    price: "0.18 ETH",
    rating: 4.5,
  },
  {
    id: 4,
    name: "Lumina",
    creator: "0x3k4...5l6m",
    image: "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg",
    traits: ["Empathetic", "Intuitive", "Warm"],
    price: "0.28 ETH",
    rating: 4.8,
  },
  {
    id: 5,
    name: "Synth",
    creator: "0x7n8...9o0p",
    image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg",
    traits: ["Technical", "Innovative", "Direct"],
    price: "0.22 ETH",
    rating: 4.6,
  },
  {
    id: 6,
    name: "Quantum",
    creator: "0xq1r...2s3t",
    image: "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg",
    traits: ["Strategic", "Visionary", "Bold"],
    price: "0.35 ETH",
    rating: 4.9,
  },
]

export default function MarketplacePage() {
  const [activeTab, setActiveTab] = useState("explore")

  return (
    <div className=" py-10 w-full">
      <div className="mb-8 flex flex-col gap-2 md:flex-row md:items-center md:justify-evenly">
        <div>
          <h1 className="text-3xl font-bold tracking-tight">Marketplace</h1>
          <p className="text-muted-foreground">
            Explore and interact with Cryptex twins from the community
          </p>
        </div>
        <Button asChild>
          <Link href="/onboard">
            Create Your Twin
          </Link>
        </Button>
      </div>

      <div className="mb-8 grid gap-4 md:grid-cols-3">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 transform text-muted-foreground" />
          <Input
            placeholder="Search marketplace"
            className="pl-10"
          />
        </div>
        <div>
          <Select defaultValue="all">
            <SelectTrigger>
              <SelectValue placeholder="Categories" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Categories</SelectItem>
              <SelectItem value="creative">Creative</SelectItem>
              <SelectItem value="analytical">Analytical</SelectItem>
              <SelectItem value="professional">Professional</SelectItem>
              <SelectItem value="entertainment">Entertainment</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Select defaultValue="newest">
            <SelectTrigger>
              <SelectValue placeholder="Sort by" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="newest">Newest First</SelectItem>
              <SelectItem value="oldest">Oldest First</SelectItem>
              <SelectItem value="price_high">Price: High to Low</SelectItem>
              <SelectItem value="price_low">Price: Low to High</SelectItem>
              <SelectItem value="rating">Highest Rated</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      <Tabs 
        defaultValue="explore" 
        value={activeTab} 
        onValueChange={setActiveTab} 
        className="space-y-6"
      >
        <TabsList className="w-full grid grid-cols-3 md:w-fit">
          <TabsTrigger value="explore">Explore</TabsTrigger>
          <TabsTrigger value="trending">Trending</TabsTrigger>
          <TabsTrigger value="new">New Arrivals</TabsTrigger>
        </TabsList>

        <TabsContent value="explore" className="space-y-6">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {cryptexTwins.map((twin) => (
              <motion.div
                key={twin.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="overflow-hidden h-full flex flex-col">
                  <div className="relative aspect-square overflow-hidden">
                    <Image
                      src={twin.image}
                      alt={twin.name}
                      fill
                      className="object-cover transition-transform group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent opacity-60" />
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-xl font-bold text-white">{twin.name}</h3>
                      <p className="text-sm text-white/80">by {twin.creator}</p>
                    </div>
                  </div>
                  <CardContent className="flex-1 p-4">
                    <div className="flex flex-wrap gap-2 mb-4">
                      {twin.traits.map((trait, i) => (
                        <Badge key={i} variant="secondary">
                          {trait}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                      <span className="text-sm font-medium">{twin.rating}</span>
                      <span className="text-xs text-muted-foreground">(120+ reviews)</span>
                    </div>
                  </CardContent>
                  <CardFooter className="border-t p-4">
                    <div className="flex w-full items-center justify-between">
                      <div>
                        <p className="text-sm text-muted-foreground">Price</p>
                        <p className="font-bold">{twin.price}</p>
                      </div>
                      <Button size="sm">View Details</Button>
                    </div>
                  </CardFooter>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="flex justify-center">
            <Button variant="outline" className="gap-2">
              Load More
              <ChevronDown className="h-4 w-4" />
            </Button>
          </div>
        </TabsContent>

        <TabsContent value="trending" className="space-y-6">
          <div className="rounded-lg border p-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Users className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-medium">Trending Cryptex Twins</h3>
            <p className="mt-2 text-muted-foreground">
              Discover the most popular AI twins based on community engagement
            </p>
          </div>
        </TabsContent>

        <TabsContent value="new" className="space-y-6">
          <div className="rounded-lg border p-8 text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-muted">
              <Brain className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="mt-6 text-xl font-medium">New Arrivals</h3>
            <p className="mt-2 text-muted-foreground">
              Explore the latest Cryptex twins added to the marketplace
            </p>
          </div>
        </TabsContent>
      </Tabs>

      <div className="mt-16 rounded-xl border bg-card/50 p-8 backdrop-blur-sm">
        <div className="grid gap-6 lg:grid-cols-2">
          <div>
            <h2 className="text-2xl font-bold tracking-tight">
              Create and Sell Your Own AI Twin
            </h2>
            <p className="mt-2 text-muted-foreground">
              Tokenize your digital identity and join the Cryptex marketplace. 
              Create your unique NFT and connect with the community.
            </p>
            <Button className="mt-6" asChild>
              <Link href="/onboard">Get Started</Link>
            </Button>
          </div>
          <div className="relative h-48 overflow-hidden rounded-lg lg:h-auto">
            <Image
              src="https://images.pexels.com/photos/1762851/pexels-photo-1762851.jpeg"
              alt="Create your Cryptex"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </div>
  )
}