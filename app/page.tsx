'use client'
import { useState, useRef, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle, CardDescription } from '@/components/ui/card'
import { useToast } from "@/hooks/use-toast"
import { ArrowRight, CheckCircle, Zap, Shield, Sparkles } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Home() {
  const { toast } = useToast()
  const [isVisible, setIsVisible] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      { threshold: 0.1 }
    )
    
    if (heroRef.current) {
      observer.observe(heroRef.current)
    }
    
    return () => {
      if (heroRef.current) {
        observer.unobserve(heroRef.current)
      }
    }
  }, [])
  
  const handleGetStarted = () => {
    toast({
      title: "Welcome to Magnolia!",
      description: "Thanks for your interest. Let's build something amazing together.",
    })
  }
  
  return (
    <div className="min-h-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-primary/10 to-background pt-32 pb-24 md:pt-40 md:pb-32">
        <div className="container mx-auto px-4">
          <div ref={heroRef} className="max-w-[800px] mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-5xl font-bold tracking-tight lg:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-primary/70">
                Build Beautiful Web Experiences
              </h1>
              <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
                Create stunning, responsive web applications with modern design principles and powerful functionality.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" onClick={handleGetStarted}>
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Learn More
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-40 h-40 bg-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-60 h-60 bg-primary/10 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </section>
      
      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-[800px] mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
              Powerful Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-[600px] mx-auto">
              Everything you need to build modern, responsive web applications.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="bg-background/60 backdrop-blur-sm border-muted hover:border-primary/50 transition-all duration-300 overflow-hidden group">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    {feature.icon}
                  </div>
                  <CardTitle>{feature.title}</CardTitle>
                  <CardDescription>{feature.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button variant="ghost" className="group-hover:text-primary transition-colors">
                    Learn more <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-[900px] mx-auto bg-gradient-to-r from-primary/10 to-primary/5 rounded-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.5))] -z-10"></div>
            <div className="max-w-[600px]">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Ready to get started?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Join thousands of users who are already building amazing web experiences with our platform.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" onClick={handleGetStarted}>
                  Start Building Now
                </Button>
                <Button size="lg" variant="outline">
                  Contact Sales
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

const features = [
  {
    title: "Modern Design",
    description: "Beautiful, responsive interfaces that look great on any device.",
    icon: <Sparkles className="h-6 w-6 text-primary" />
  },
  {
    title: "Performance Optimized",
    description: "Lightning-fast load times and smooth interactions for the best user experience.",
    icon: <Zap className="h-6 w-6 text-primary" />
  },
  {
    title: "Secure by Default",
    description: "Built with security best practices to keep your data and users safe.",
    icon: <Shield className="h-6 w-6 text-primary" />
  },
  {
    title: "SEO Friendly",
    description: "Optimized for search engines to help your site rank higher.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  },
  {
    title: "Customizable",
    description: "Easily adapt the design and functionality to match your brand and needs.",
    icon: <Sparkles className="h-6 w-6 text-primary" />
  },
  {
    title: "Responsive Support",
    description: "Get help when you need it with our dedicated support team.",
    icon: <CheckCircle className="h-6 w-6 text-primary" />
  }
]
