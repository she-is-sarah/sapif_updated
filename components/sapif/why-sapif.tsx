import { Target, Users, Zap, Heart, Award, Globe } from "lucide-react"

const features = [
  {
    icon: Target,
    title: "Project-Based Learning",
    description: "Learn by doing. Every skill leads to a real project you can add to your portfolio.",
  },
  {
    icon: Users,
    title: "Beginner-Friendly",
    description: "No prior experience needed. Our paths are designed for complete beginners with career-level outcomes.",
  },
  {
    icon: Zap,
    title: "Modern Digital Skills",
    description: "Learn the skills actually in demand, from AI tools to modern web development.",
  },
  {
    icon: Heart,
    title: "Supportive Community",
    description: "Join thousands of ambitious learners. Get help, share wins, and grow together.",
  },
  {
    icon: Award,
    title: "Real Opportunities",
    description: "Access job postings, freelance gigs, and collaboration opportunities as you grow.",
  },
  {
    icon: Globe,
    title: "Global Learning",
    description: "Industry-relevant learning designed to equip you with practical skills and a global perspective."
  },
]

export function WhySapif() {
  return (
    <section id="why-sapif" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
              Why Choose Us
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-balance">
              Built Different.{" "}
              <span className="text-muted-foreground">Built for You.</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed text-pretty">
              Sapif isn&apos;t just another course platform. We&apos;re a digital ecosystem built 
              specifically for ambitious people who want practical skills, real projects, 
              and genuine opportunities, not just certificates.
            </p>
            <div className="flex items-center gap-6">
              <div className="flex -space-x-3">
              {[
                "/students/student1.png",
                "/students/student2.png",
                "/students/student3.jpg",
                "/students/student4.jpg",
              ].map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full overflow-hidden border-2 border-background"
                >
                  <img
                    src={src}
                    alt={`Student ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
              <div className="text-sm">
                <span className="font-semibold">500+ learners</span>
                <span className="text-muted-foreground"> joined this week</span>
              </div>
            </div>
          </div>

          {/* Right features grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="mb-4 inline-flex p-3 rounded-xl bg-secondary group-hover:bg-accent/10 transition-colors">
                  <feature.icon className="w-6 h-6 text-foreground group-hover:text-accent transition-colors" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
