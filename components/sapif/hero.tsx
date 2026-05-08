import { ArrowRight, Users, Briefcase, Sparkles,Link as LinkIcon } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 lg:pt-0 overflow-hidden">
      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Subtle decorative elements */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Trust badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary border border-border mb-8">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-muted-foreground">
              Trusted by 5,000+ ambitious Youths
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-6">
            Learn Digital Skills.{" "}
            <span className="text-muted-foreground">Build Real Projects.</span>{" "}
            <span className="relative">
              Grow Your Future
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" stroke="#8c52ff" strokeWidth="3" strokeLinecap="round" className="text-accent/40"/>
              </svg>
            </span>
            .
          </h1>

          {/* Supporting copy */}
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed text-pretty">
            Sapif empowers the next generation of digital talent, equipping them with practical skills, real-world projects, and the opportunities to compete and thrive anywhere in the world.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
          <Link href="#tracks">
            <Button size="lg" className="w-56 bg-primary hover:bg-primary/90 text-lg px-8 py-5 h-auto">
              Start Learning Free
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
          <Link href="#tracks">
            <Button size="lg" variant="outline" className="w-56 text-lg px-8 py-5 h-auto border-2">
              Explore Tracks
            </Button>
            </Link>
          </div>

          {/* Quick trust indicators */}
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-12 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-accent" />
              <span>Active Community</span>
            </div>
            <div className="flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-accent" />
              <span>Real Opportunities</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-accent" />
              <span>Project-Based Learning</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
