import { Header } from "@/components/sapif/header"
import { Hero } from "@/components/sapif/hero"
import { Stats } from "@/components/sapif/stats"
import { Tracks } from "@/components/sapif/tracks"
import { HowItWorks } from "@/components/sapif/how-it-works"
import { WhySapif } from "@/components/sapif/why-sapif"
import { Testimonials } from "@/components/sapif/testimonials"
import { Stay } from "@/components/sapif/stay"
import { Events } from "@/components/sapif/events"
import { Community } from "@/components/sapif/community"
import { Contact } from "@/components/sapif/contact"
import { Footer } from "@/components/sapif/footer"
import { AIAdvantagePopup } from "@/components/sapif/ai-advantage-popup"

export default function SapifPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Tracks />
      <HowItWorks />
      <WhySapif />
      <Testimonials />
      <Stay />
      <Events />
      <Community />
      <Contact />
      <Footer />
      <AIAdvantagePopup />
    </main>
  )
}
