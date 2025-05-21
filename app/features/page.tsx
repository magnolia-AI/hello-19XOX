'use client'

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { CheckCircle, Zap, Shield, Sparkles, Code, Layers, Palette, Globe } from 'lucide-react'

export default function FeaturesPage() {
  return (
    <div className="min-h-full">
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            Features
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            Explore the powerful features that make our platform stand out.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <Tabs defaultValue="design" className="max-w-4xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 md:grid-cols-4">
            <TabsTrigger value="design">Design</TabsTrigger>
            <TabsTrigger value="performance">Performance</TabsTrigger>
            <TabsTrigger value="security">Security</TabsTrigger>
            <TabsTrigger value="development">Development</TabsTrigger>
          </TabsList>
          <TabsContent value="design" className="mt-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Palette className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Modern Design System</CardTitle>
                <CardDescription>
                  Our platform comes with a comprehensive design system that ensures consistency and beauty across your entire application.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Responsive Components</h4>
                        <p className="text-sm text-muted-foreground">All components are fully responsive and work on any device size.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Customizable Themes</h4>
                        <p className="text-sm text-muted-foreground">Easily customize colors, typography, and more to match your brand.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Dark Mode Support</h4>
                        <p className="text-sm text-muted-foreground">Built-in dark mode that respects user preferences.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Animation Library</h4>
                        <p className="text-sm text-muted-foreground">Beautiful animations that enhance the user experience.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="performance" className="mt-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Lightning Fast Performance</CardTitle>
                <CardDescription>
                  Our platform is built with performance in mind, ensuring your application loads quickly and runs smoothly.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Server-Side Rendering</h4>
                        <p className="text-sm text-muted-foreground">Faster initial page loads with server-side rendering.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Code Splitting</h4>
                        <p className="text-sm text-muted-foreground">Only load the code that's needed for each page.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Image Optimization</h4>
                        <p className="text-sm text-muted-foreground">Automatically optimize images for faster loading.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Caching Strategies</h4>
                        <p className="text-sm text-muted-foreground">Smart caching to reduce server load and improve speed.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="security" className="mt-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Enterprise-Grade Security</CardTitle>
                <CardDescription>
                  Security is built into every layer of our platform, protecting your data and your users.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Authentication</h4>
                        <p className="text-sm text-muted-foreground">Secure authentication with multiple providers.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Data Encryption</h4>
                        <p className="text-sm text-muted-foreground">All data is encrypted in transit and at rest.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">CSRF Protection</h4>
                        <p className="text-sm text-muted-foreground">Built-in protection against cross-site request forgery.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Regular Updates</h4>
                        <p className="text-sm text-muted-foreground">Continuous security updates to protect against new threats.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="development" className="mt-6">
            <Card>
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Developer Experience</CardTitle>
                <CardDescription>
                  Built by developers, for developers, with a focus on productivity and ease of use.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">TypeScript Support</h4>
                        <p className="text-sm text-muted-foreground">Full TypeScript support for better code quality.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">API Routes</h4>
                        <p className="text-sm text-muted-foreground">Built-in API routes for backend functionality.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Component Library</h4>
                        <p className="text-sm text-muted-foreground">Extensive library of pre-built components.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-primary mr-2 mt-0.5" />
                      <div>
                        <h4 className="font-medium">Documentation</h4>
                        <p className="text-sm text-muted-foreground">Comprehensive documentation and examples.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </div>
  )
}
