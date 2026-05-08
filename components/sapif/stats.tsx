const stats = [
  {
    value: "5,000+",
    label: "Learners Reached",
    description: "Free & paid programs combined",
  },
  {
    value: "10+",
    label: "Live Trainings",
    description: "Hands-on sessions delivered",
  },
  {
    value: "2",
    label: "Years of Impact",
    description: "Building since 2024",
  },
  {
    value: "100%",
    label: "Practical Learning",
    description: "Real projects, real outcomes",
  },
]

export function Stats() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/50 mb-4">
            By the numbers
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-balance leading-tight">
            Real impact. <br />
            <span className="text-accent">Measurable results.</span>
          </h2>
          <p className="mt-4 text-primary-foreground/60 text-base">
            Two years of equipping the next generation of digital talent with the skills that matter.
          </p>
        </div>

        {/* Divider */}
        <div className="border-t border-primary-foreground/10 mb-16" />

        {/* Stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-primary-foreground/10">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-primary p-8 lg:p-10 flex flex-col gap-3"
            >
              <div className="text-4xl sm:text-5xl font-bold text-accent tracking-tight">
                {stat.value}
              </div>
              <div className="font-semibold text-base">{stat.label}</div>
              <div className="text-sm text-primary-foreground/50 leading-relaxed">
                {stat.description}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 text-center text-sm text-primary-foreground/40 tracking-wide">
          Numbers updated as of 2026, and growing.
        </div>

      </div>
    </section>
  )
}