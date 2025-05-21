import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

export default function AboutPage() {
  return (
    <div className="min-h-full">
      <section className="container mx-auto px-4 pt-24 pb-16">
        <div className="max-w-[800px] mx-auto text-center">
          <h1 className="text-4xl font-bold tracking-tight lg:text-5xl">
            About Us
          </h1>
          <p className="mt-6 text-xl text-muted-foreground max-w-[600px] mx-auto">
            We're on a mission to make web development accessible, beautiful, and powerful.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Our Story</h2>
              <p className="text-muted-foreground mb-4">
                Founded in 2025, Magnolia was born from a simple idea: web development should be accessible to everyone, regardless of technical expertise.
              </p>
              <p className="text-muted-foreground mb-4">
                Our team of passionate developers and designers came together with a shared vision of creating tools that empower people to build beautiful, functional web applications without the traditional barriers to entry.
              </p>
              <p className="text-muted-foreground">
                Today, we're proud to serve thousands of customers worldwide, from individual creators to large enterprises, all using our platform to bring their ideas to life on the web.
              </p>
            </div>
            <div className="bg-muted/30 rounded-lg p-8">
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-8 bg-primary"></div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Mission</h3>
                    <p className="text-muted-foreground">To democratize web development and make it accessible to everyone.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-8 bg-primary"></div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Vision</h3>
                    <p className="text-muted-foreground">A world where anyone can build powerful web applications without barriers.</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="w-1 h-8 bg-primary"></div>
                  <div>
                    <h3 className="text-2xl font-bold">Our Values</h3>
                    <p className="text-muted-foreground">Simplicity, Accessibility, Quality, and Innovation.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <Card key={index} className="overflow-hidden">
                <CardContent className="p-6 text-center">
                  <Avatar className="w-24 h-24 mx-auto mb-4">
                    <AvatarFallback>{member.name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                  </Avatar>
                  <h3 className="font-bold text-lg">{member.name}</h3>
                  <p className="text-sm text-muted-foreground mb-2">{member.role}</p>
                  <p className="text-sm">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

const teamMembers = [
  {
    name: "Alex Johnson",
    role: "Founder & CEO",
    bio: "Alex has over 15 years of experience in web development and a passion for making technology accessible."
  },
  {
    name: "Sam Rivera",
    role: "CTO",
    bio: "Sam leads our technical team and ensures our platform stays on the cutting edge of web technology."
  },
  {
    name: "Taylor Kim",
    role: "Lead Designer",
    bio: "Taylor brings a keen eye for design and user experience to every aspect of our platform."
  },
  {
    name: "Jordan Smith",
    role: "Head of Product",
    bio: "Jordan works closely with customers to understand their needs and shape our product roadmap."
  },
  {
    name: "Casey Wong",
    role: "Lead Developer",
    bio: "Casey is responsible for the core architecture of our platform and mentoring our development team."
  },
  {
    name: "Morgan Lee",
    role: "Customer Success",
    bio: "Morgan ensures our customers get the most out of our platform and helps them achieve their goals."
  }
]
