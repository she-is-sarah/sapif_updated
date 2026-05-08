'use client'
import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'

export function Stay() {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error' | 'duplicate'>('idle')
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('loading')

    const supabase = createClient()
    const { error } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email }])

   if (error) {
    if (error.code === '23505') {
        setStatus('duplicate')
    } else {
        setStatus('error')
    }
    } else {
    setStatus('success')
    setEmail('')
    }
}
  return (
    <section id="newsletter" className="py-24 px-6 bg-secondary">
      <div className="max-w-5xl mx-auto">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-black text-white">
          <div className="absolute inset-0 bg-gradient-to-br from-[#8c52ff]/20 via-transparent to-transparent" />
          <div className="relative z-10 grid lg:grid-cols-2 gap-10 items-center p-8 md:p-14">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-[#8c52ff] font-medium mb-4">
                Never Miss an Update
              </p>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                Stay in the loop.
              </h2>
              <p className="text-white/70 text-lg leading-relaxed max-w-lg">
                Be the first to hear about new courses, webinars, AI trends,
                tech opportunities, community events, and free learning resources.
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-5 md:p-6 backdrop-blur">
              <form onSubmit={handleSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  required
                  disabled={status === 'loading'}
                  className="w-full h-14 rounded-xl bg-white/10 border border-white/10 px-4 text-white placeholder:text-white/40 outline-none focus:border-[#8c52ff]"
                />
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full h-14 rounded-xl bg-[#8c52ff] hover:opacity-90 transition font-medium"
                >
                  {status === 'loading' ? 'Subscribing...' : 'Get Updates'}
                </button>
              </form>

             {status === 'success' && (
                <p className="text-green-400 text-sm mt-3">You're subscribed! 🎉</p>
            )}
            {status === 'duplicate' && (
                <p className="text-yellow-400 text-sm mt-3">You're already subscribed!</p>
            )}
            {status === 'error' && (
                <p className="text-red-400 text-sm mt-3">Something went wrong. Try again.</p>
            )}

              <p className="text-xs text-white/40 mt-4 leading-relaxed">
                Curated insights, opportunities, and announcements — straight to your inbox.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}