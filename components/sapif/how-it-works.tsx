import { BookOpen, Hammer, Rocket } from "lucide-react"

const steps = [
  {
    icon: BookOpen,
    step: "01",
    title: "Learn",
    subtitle: "Gain Practical Skills",
    description:
      "Access structured, beginner-friendly lessons designed around real-world applications. No fluff — just the skills that matter.",
    highlights: ["Video lessons", "Hands-on exercises", "Real examples"],
  },
  {
    icon: Hammer,
    step: "02",
    title: "Build",
    subtitle: "Create Real Projects",
    description:
      "Apply what you learn by building portfolio-worthy projects. Get feedback, iterate, and develop work you can actually show.",
    highlights: ["Portfolio projects", "Expert feedback", "Industry standards"],
  },
  {
    icon: Rocket,
    step: "03",
    title: "Grow",
    subtitle: "Access Opportunities",
    description:
      "Join a supportive community, connect with mentors, and access real job opportunities, freelance gigs, and collaborations.",
    highlights: ["Community access", "Job opportunities", "Mentorship"],
  },
]

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-secondary/50 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            The Journey
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            How Sapif Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            A simple, structured path from where you are to where you want to be.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 lg:gap-6">
          {steps.map((step, index) => (
            <div
              key={step.title}
              className="relative group"
            >
              {/* Connector line for desktop */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-16 left-full w-full h-px bg-gradient-to-r from-border via-accent/30 to-border z-0" />
              )}
              
              <div className="relative bg-card rounded-2xl p-8 border border-border shadow-sm hover:shadow-lg transition-all duration-300 h-full">
                {/* Step number */}
                <div className="absolute -top-4 -left-2 text-6xl font-bold text-muted/30 select-none">
                  {step.step}
                </div>
                
                {/* Icon */}
                <div className="relative mb-6 inline-flex p-4 rounded-2xl bg-primary text-primary-foreground">
                  <step.icon className="w-7 h-7" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-bold mb-2">{step.title}</h3>
                <p className="text-accent font-medium mb-4">{step.subtitle}</p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {step.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2">
                  {step.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="px-3 py-1 text-sm font-medium rounded-full bg-secondary text-secondary-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
