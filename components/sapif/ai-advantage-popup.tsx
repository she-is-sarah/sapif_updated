"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, X } from "lucide-react"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog"
import { START_DATE } from "@/app/AI/data"

const STORAGE_KEY = "sapif-ai-advantage-popup-dismissed"
const SHOW_DELAY_MS = 1200

/**
 * Announcement popup for the AI Advantage class.
 * - Opens shortly after the homepage loads.
 * - Closes with the X, the Escape key or a click outside.
 * - Stays closed for the rest of the browser session once dismissed.
 */
export function AIAdvantagePopup() {
  const [open, setOpen] = useState(false)
  const contentRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    let dismissed = false
    try {
      dismissed = window.sessionStorage.getItem(STORAGE_KEY) === "1"
    } catch {
      // Storage can be unavailable (private mode, blocked cookies); show the popup anyway.
    }
    if (dismissed) return

    const timer = window.setTimeout(() => setOpen(true), SHOW_DELAY_MS)
    return () => window.clearTimeout(timer)
  }, [])

  const handleOpenChange = (next: boolean) => {
    setOpen(next)
    if (!next) {
      try {
        window.sessionStorage.setItem(STORAGE_KEY, "1")
      } catch {
        // Ignore: the popup simply may show again on the next visit.
      }
    }
  }

  return (
    <Dialog open={open} onOpenChange={handleOpenChange}>
      <DialogContent
        ref={contentRef}
        showCloseButton={false}
        // Keep focus inside the dialog without highlighting a button on open.
        onOpenAutoFocus={(event) => {
          event.preventDefault()
          contentRef.current?.focus()
        }}
        className="gap-0 overflow-hidden focus:outline-none rounded-2xl border-white/10 bg-[#0e0d12] p-0 text-[#f4f1ea] shadow-2xl sm:max-w-md"
      >
        {/* single, soft brand glow */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-24 -right-24 size-72 rounded-full bg-[#8c52ff]/30 blur-3xl"
        />

        <div className="relative px-7 pt-9 pb-8 sm:px-9 sm:pt-11 sm:pb-9">
          <p className="mb-6 inline-flex items-center gap-2.5 font-mono text-[0.7rem] font-medium tracking-[0.18em] text-[#c8f169] uppercase">
            <span className="relative flex size-2">
              <span className="absolute inline-flex size-full animate-ping rounded-full bg-[#c8f169] opacity-60" />
              <span className="relative inline-flex size-2 rounded-full bg-[#c8f169]" />
            </span>
            Coming soon
          </p>

          <DialogTitle className="text-[2.6rem] leading-[0.95] font-extrabold tracking-[-0.045em] sm:text-5xl">
            <span className="text-[#8c52ff]">AI</span> Advantage
          </DialogTitle>

          <p className="mt-3 text-lg leading-snug font-semibold tracking-tight">
            Create with AI. Build with AI. Stay ahead.
          </p>

          <DialogDescription className="mt-4 max-w-[34ch] text-[0.95rem] leading-relaxed text-[#a39db3]">
            Practical training in AI Video Creation and AI Automation. Starts{" "}
            <span className="font-semibold text-[#f4f1ea]">{START_DATE}</span>.
          </DialogDescription>

          <Link
            href="/AI"
            className="group mt-8 inline-flex min-h-12 items-center gap-2.5 rounded-full bg-[#8c52ff] px-6 py-3 text-[0.95rem] font-semibold text-white shadow-[0_10px_30px_-12px_rgba(140,82,255,0.8)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#9c68ff] focus-visible:ring-2 focus-visible:ring-[#c8f169] focus-visible:ring-offset-2 focus-visible:ring-offset-[#0e0d12] focus-visible:outline-none active:translate-y-0 active:scale-[0.98]"
          >
            Learn more
            <ArrowRight className="size-4 transition-transform duration-200 group-hover:translate-x-1" />
          </Link>
        </div>

        <DialogClose
          aria-label="Close"
          className="absolute top-4 right-4 grid size-10 place-items-center rounded-full border border-white/15 text-[#f4f1ea]/80 transition-colors hover:bg-white/10 hover:text-white focus-visible:ring-2 focus-visible:ring-[#c8f169] focus-visible:outline-none"
        >
          <X className="size-5" />
        </DialogClose>
      </DialogContent>
    </Dialog>
  )
}
