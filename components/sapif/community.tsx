import { MessageSquare, Users, Heart, Rocket, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const communityFeatures = [
  {
    icon: MessageSquare,
    title: "Active Discussions",
    description: "Get answers, share insights, and learn from peers across all skill levels.",
  },
  {
    icon: Users,
    title: "Accountability Groups",
    description: "Join small groups that keep you on track and celebrate your wins.",
  },
  {
    icon: Heart,
    title: "Peer Support",
    description: "A safe space to ask questions, share struggles, and get encouragement.",
  },
  {
    icon: Rocket,
    title: "Collaboration",
    description: "Find teammates for projects, freelance gigs, or startup ideas.",
  },
]

export function Community() {
  return (
    <section id="community" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Feature cards */}
          <div className="order-2 lg:order-1">
            <div className="grid sm:grid-cols-2 gap-6">
              {communityFeatures.map((feature) => (
                <div
                  key={feature.title}
                  className="p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="mb-4 inline-flex p-3 rounded-xl bg-primary text-primary-foreground">
                    <feature.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Right - Content */}
          <div className="order-1 lg:order-2">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Community
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              More Than a Platform.{" "}
              <span className="text-muted-foreground">A Movement.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed text-pretty">
              Learning alone is hard. At Sapif, you&apos;re never alone. Join a 
              community of ambitious learners, mentors, and professionals who 
              genuinely want to see you succeed.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Share your journey, celebrate your wins, get help when you&apos;re stuck, 
              and build relationships that last beyond any course.
            </p>

            {/* Community stats */}
            <div className="flex flex-wrap gap-10 mb-8">
              <div>
                <div className="text-3xl font-bold text-accent">250+</div>
                <div className="text-sm text-muted-foreground">Active members</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">10+</div>
                <div className="text-sm text-muted-foreground">Mentors</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-accent">24/7</div>
                <div className="text-sm text-muted-foreground">Support</div>
              </div>
            </div>
            <Link href="https://forms.gle/jRjivurhP9tNMRuK9">
              <Button size="lg" className="bg-primary hover:bg-primary/90">
                Join the Community
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>

          </div>
        </div>
      </div>
    </section>
  )
}
