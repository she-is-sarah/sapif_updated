"use client"

import { useState } from "react"
import { Palette, Code, Bot, Video, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { createClient } from "@/lib/supabase/client"

const tracks = [
  {
    icon: Palette,
    category: "Design",
    title: "UI/UX Design",
    description: "Master interface design and user experience principles.",
    size: "normal",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: Code,
    category: "Tech",
    title: "Software Development",
    description: "Build interactive web and app experiences with modern tools.",
    size: "featured",
    color: "bg-blue-500/10 text-blue-500",
  },
  {
    icon: Video,
    category: "Motion",
    title: "Video Editing and Motion Design",
    description: "Tell stories through dynamic video and animation.",
    size: "normal",
    color: "bg-amber-500/10 text-amber-500",
  },
  {
    icon: Palette,
    category: "Design",
    title: "Graphics Design",
    description: "Create stunning visuals and brand identities from scratch.",
    size: "normal",
    color: "bg-rose-500/10 text-rose-500",
  },
  {
    icon: Bot,
    category: "Tech",
    title: "AI and Automation",
    description: "Leverage AI to solve real problems and automate workflows.",
    size: "normal",
    color: "bg-emerald-500/10 text-emerald-500",
  },
]

export function Tracks() {
  const [selectedTrack, setSelectedTrack] = useState<string | null>(null)
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")

  const handleSubmit = async () => {
    if (!name.trim()) return
    setStatus("loading")

    const supabase = createClient()

    const { error } = await supabase.from("track_interests").insert([
      {
        name: name.trim(),
        email: email.trim(),
        track: selectedTrack,
      },
    ])

    if (error) {
      setStatus("error")
    } else {
      setStatus("success")
    }
  }

  const handleClose = () => {
    setSelectedTrack(null)
    setName("")
    setEmail("")
    setStatus("idle")
  }

  return (
    <section id="tracks" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Learning Tracks
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Choose Your Growth Path
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Not just courses, structured pathways designed to take you from curious beginner
            to confident professional.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-auto lg:auto-rows-[200px]">
          {tracks.map((track, index) => {
            const Icon = track.icon
            const isFeatured = track.size === "featured"

            return (
              <div
                key={index}
                className={`
                  group relative flex flex-col justify-between
                  p-5 sm:p-6 rounded-2xl border border-border
                  bg-secondary/30 hover:bg-secondary/60
                  transition-all duration-300 cursor-pointer
                  hover:border-border/80 hover:shadow-lg
                  min-h-[220px] lg:min-h-0
                  ${isFeatured ? "lg:row-span-2" : ""}
                `}
              >
                <div>
                  {track.category && (
                    <p className="text-[11px] sm:text-xs font-medium tracking-widest uppercase text-muted-foreground mb-3">
                      {track.category}
                    </p>
                  )}
                  <h3
                    className={`
                      font-bold tracking-tight leading-tight text-balance
                      ${isFeatured ? "text-2xl lg:text-3xl" : "text-xl lg:text-xl"}
                    `}
                  >
                    {track.title}
                  </h3>
                  <p
                    className={`
                      text-muted-foreground mt-3 leading-relaxed text-pretty
                      ${isFeatured ? "text-sm sm:text-base" : "text-sm"}
                    `}
                  >
                    {track.description}
                  </p>
                </div>

                <div className="flex items-center justify-between mt-6">
                  <button
                    onClick={() => setSelectedTrack(track.title)}
                    className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors hover:text-accent"
                  >
                    Explore →
                  </button>
                  <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${track.color}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>

      {/* Modal */}
      {selectedTrack && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4"
          onClick={handleClose}
        >
          <div
            className="bg-background border border-border rounded-2xl p-8 w-full max-w-md shadow-2xl relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {status !== "success" ? (
              <>
                <p className="text-xs font-medium tracking-widest uppercase text-accent mb-2">
                  Get Started
                </p>
                <h3 className="text-2xl font-bold mb-1">{selectedTrack}</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Leave your details and we'll notify you once classes for this track are available.
                </p>

                <div className="space-y-4">
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Your Name</label>
                    <Input
                      placeholder="e.g. Amara Johnson"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Email Address</label>
                    <Input
                      type="email"
                      placeholder="e.g. amara@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      disabled={status === "loading"}
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium mb-1.5 block">Interested Course</label>
                    <Input
                      value={selectedTrack}
                      readOnly
                      className="bg-secondary/50 text-muted-foreground"
                    />
                  </div>

                  {status === "error" && (
                    <p className="text-red-500 text-sm">Something went wrong. Please try again.</p>
                  )}

                  <Button
                    className="w-full bg-primary hover:bg-primary/90"
                    onClick={handleSubmit}
                    disabled={!name.trim() || !email.trim() || status === "loading"}
                  >
                    {status === "loading" ? "Submitting..." : "Submit Interest"}
                  </Button>
                </div>
              </>
            ) : (
              <div className="text-center py-6">
                <div className="text-4xl mb-4">🎉</div>
                <h3 className="text-xl font-bold mb-2">You're on the list!</h3>
                <p className="text-muted-foreground text-sm mb-6">
                  Thanks <span className="text-foreground font-medium">{name}</span>! We'll be in touch soon about the{" "}
                  <span className="text-foreground font-medium">{selectedTrack}</span> track.
                </p>
                <Button variant="outline" onClick={handleClose}>
                  Close
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </section>
  )
}