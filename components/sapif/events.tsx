import { Calendar, Video, Users, ArrowRight, Sparkles, Link  as LinkIcon} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

const events = [
  {
    type: "Webinar",
    icon: Video,
    title: "Evolving in the Era of AI",
    date: "May 23, 2026 · 7PM WAT",
    description: "Weekly sessions covering career transitions, portfolio building, and landing your first role.",
    status: "Coming Soon",
    statusColor: "bg-emerald-500/10 text-emerald-600",
  },
  {
    type: "Workshop",
    icon: Users,
    title: "Building a portfolio that gets you hired",
    date: "February 15, 2025 · 8PM WAT",
    description: "An intensive workshop on getting your first 3 projects, building a portfolio, and landing that first role.",
    status: "Completed",
    statusColor: "bg-amber-500/10 text-amber-600",
  },
  {
    type: "Webinar",
    icon: Calendar,
    title: "Meet & Greet",
    date: "February 1, 2025 · 7PM WAT",
    description: "A casual session to connect with the community, share your journey, and ask questions.",
    status: "Completed",
    statusColor: "bg-blue-500/10 text-blue-600",
  },
]

const opportunities = [
  "Freelance gig board",
  "Job postings from partners",
  "Collaboration requests",
  "Mentorship matching",
]

export function Events() {
  return (
    <section className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16">
          {/* Events column */}
          <div className="lg:col-span-3">
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Events & Workshops
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4 text-balance">
              Always Something Happening
            </h2>
            <p className="text-lg text-muted-foreground mb-10 text-pretty">
              Live sessions, workshops, and community events to accelerate your growth.
            </p>

            <div className="space-y-6">
              {events.map((event) => (
                <div
                  key={event.title}
                  className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
                >
                  <div className="shrink-0">
                    <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center group-hover:bg-accent/10 transition-colors">
                      <event.icon className="w-6 h-6 text-foreground" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <Badge variant="secondary" className="text-xs">
                        {event.type}
                      </Badge>
                      <Badge className={event.statusColor + " border-0 text-xs"}>
                        {event.status}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-lg mb-1">{event.title}</h3>
                    <p className="text-sm text-accent font-medium mb-2">{event.date}</p>
                    <p className="text-sm text-muted-foreground">{event.description}</p>
                  </div>
                  <div className="shrink-0 self-center">
                    {/*<ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-foreground transition-colors" />*/}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Opportunities column */}
          <div className="lg:col-span-2">
            <div className="sticky top-28 p-8 rounded-2xl bg-secondary/50 border border-border">
              <div className="inline-flex p-3 rounded-xl bg-accent/10 mb-6">
                <Sparkles className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-4">Digital Opportunities</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Beyond learning, access real opportunities to earn, grow, and collaborate.
              </p>
              <ul className="space-y-4 mb-8">
                {opportunities.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
              <Link href="#community">
                <Button className="w-full bg-primary hover:bg-primary/90">
                  Explore Opportunities
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
