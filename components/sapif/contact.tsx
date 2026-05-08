"use client"

import { useState } from "react"
import { Send, Mail, MessageCircle, Building, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { createClient } from "@/lib/supabase/client"

const inquiryTypes = [
  { value: "general", label: "General Inquiry" },
  { value: "partnership", label: "Partnership Opportunity" },
  { value: "collaboration", label: "Collaboration Request" },
  { value: "support", label: "Technical Support" },
  { value: "business", label: "Business Inquiry" },
]

const contactMethods = [
  {
    icon: Mail,
    title: "Email Us",
    description: "For detailed inquiries",
    contact: "sapifinfo@gmail.com",
    href: "mailto:sapifinfo@gmail.com",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    description: "Quick questions & support",
    contact: "+234 7073533116",
    href: "https://wa.me/2347073533116",
  },
  {
    icon: Building,
    title: "Business",
    description: "Partnerships & enterprise",
    contact: "helloayopelumi@gmail.com",
    href: "mailto:helloayopelumi@gmail.com",
  },
]

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [honeypot, setHoneypot] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")

    if (honeypot) {
      setStatus("error")
      return
    }
    const supabase = createClient()

    const { error } = await supabase.from("contact").insert([
      {
        name: formData.name,
        email: formData.email,
        value: formData.inquiryType,
        message: formData.message,
      },
    ])

    if (error) {
      setStatus("error")
    } else {
      setStatus("success")
      setFormData({ name: "", email: "", inquiryType: "", message: "" })
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-sm font-medium tracking-widest uppercase text-accent mb-4">
            Get In Touch
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-balance">
            Let&apos;s Start a Conversation
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
            Whether you have questions, want to partner, or just want to say hi —
            we&apos;d love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 min-w-0 max-w-full">
          {/* Contact Form */}
          <div className="lg:col-span-3 min-w-0">
            <form onSubmit={handleSubmit} className="space-y-6 max-w-full min-w-0">
              <div className="grid sm:grid-cols-2 gap-6 min-w-0">
                <div className="space-y-2 min-w-0">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="h-12 bg-card"
                    required
                  />
                </div>
                <div className="space-y-2 min-w-0">
                  <Label htmlFor="email">Email Address</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="h-12 bg-card"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2 min-w-0">
                <Label htmlFor="inquiry">Inquiry Type</Label>
                <Select
                  value={formData.inquiryType}
                  onValueChange={(value) => setFormData({ ...formData, inquiryType: value })}
                >
                  <SelectTrigger className="h-12 bg-card w-full">
                    <SelectValue placeholder="Select inquiry type" />
                  </SelectTrigger>
                  <SelectContent>
                    {inquiryTypes.map((type) => (
                      <SelectItem key={type.value} value={type.value}>
                        {type.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <input
                type="text"
                value={honeypot}
                onChange={(e) => setHoneypot(e.target.value)}
                style={{ display: "none" }}
                tabIndex={-1}
                autoComplete="off"
              />

              <div className="space-y-2">
                <Label htmlFor="message">Your Message</Label>
                <Textarea
                  id="message"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="min-h-40 bg-card resize-none"
                  required
                />
              </div>

              {status === "success" && (
                <p className="text-green-600 text-sm">
                  Message sent! We&apos;ll get back to you within 24 hours.
                </p>
              )}
              {status === "error" && (
                <p className="text-red-500 text-sm">
                  Something went wrong. Please try again.
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                disabled={status === "loading"}
                className="w-full sm:w-auto bg-primary hover:bg-primary/90"
              >
                {status === "loading" ? "Sending..." : "Send Message"}
                <Send className="ml-2 w-5 h-5" />
              </Button>
            </form>
          </div>

          {/* Contact Methods */}
          <div className="lg:col-span-2 min-w-0 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-secondary/50 border border-border min-w-0">
              <h3 className="text-xl font-bold mb-2">Prefer direct contact?</h3>
              <p className="text-muted-foreground mb-6 text-sm leading-relaxed">
                Reach out through any of these channels — we typically respond within 24 hours.
              </p>

              <div className="space-y-4">
                {contactMethods.map((method) => (
                  <a
                    key={method.title}
                    href={method.href}
                    className="flex flex-col sm:flex-row items-start gap-4 p-4 rounded-xl bg-card border border-border hover:border-accent/30 transition-all duration-300 group min-w-0"
                  >
                    <div className="flex-shrink-0 p-2 rounded-lg bg-primary text-primary-foreground">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold group-hover:text-accent transition-colors break-words">
                        {method.title}
                      </div>
                      <div className="text-sm text-muted-foreground break-words">
                        {method.description}
                      </div>
                      <div className="text-sm font-medium text-accent mt-1 break-words">
                        {method.contact}
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-accent transition-colors mt-2 sm:mt-0 shrink-0" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}