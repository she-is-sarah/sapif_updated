import { Quote } from "lucide-react"

const testimonials = [
  {
    name: "Olaleye Toluwani",
    role: "Video Editor",
    company: "Freelance Creative",
    quote:
      "SAPIF unlocked my creativity and transformed me from a beginner to a confident video editor. The hands-on training and supportive environment made learning enjoyable and impactful.",
    image: "O",
  },
  {
    name: "Oluwole David",
    role: "Motion Designer & Video Editor",
    company: "Student",
    quote:
      "I really commend the heightened level of excellence in the presentation of our notes, curriculum and classes, It is truly worthy of honour and celebration. I am so grateful to be a part of this amazing community.",
    image: "D",
  },
  {
    name: "Olayioye Fisolami",
    role: "Creative Designer",
    company: "Freelance Designer",
    quote:
      "I gained confidence and mastered tools that helped me bring my ideas to life, I highly recommend Sapif to anyone passionate about design.",
    image: "F",
  },
  {
    name: "Victoria Iwuchukwu",
    role: "UI/UX Designer",
    company: "Student",
    quote:
      "The class has been going so well, I have learnt a lot, I'm looking forward to applying what I have learnt in life.",
    image: "E",
  },
]

export function Testimonials() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-primary-foreground/60 mb-4">
            Student Wins
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Real Stories. Real Transformation.
          </h2>
          <p className="text-lg text-primary-foreground/70 max-w-2xl mx-auto text-pretty">
            Don&apos;t take our word for it — hear from learners who&apos;ve walked the path.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="relative p-8 rounded-2xl bg-primary-foreground/5 border border-primary-foreground/10 hover:border-primary-foreground/20 transition-colors"
            >
              {/* Quote icon */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-accent/30" />
              
              {/* Quote text */}
              <p className="text-lg leading-relaxed mb-8 text-primary-foreground/90">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center text-accent-foreground font-semibold text-lg">
                  {testimonial.image}
                </div>
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-primary-foreground/60">
                    {testimonial.role} · {testimonial.company}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
