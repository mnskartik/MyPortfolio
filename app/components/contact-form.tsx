'use client'

import { FormEvent, useState } from 'react'

export function ContactForm() {
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle')

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()

    const form = e.currentTarget // ✅ store reference immediately

    setLoading(true)
    setStatus('idle')

    const formData = new FormData(form)

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.get('name'),
          email: formData.get('email'),
          message: formData.get('message'),
        }),
      })

      const data = await res.json()

      if (!res.ok || !data.success) {
        throw new Error('Email failed')
      }

      setStatus('success')
      form.reset() // ✅ safe now
    } catch (err) {
      console.error(err)
      setStatus('error')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form onSubmit={onSubmit} className="mt-8 space-y-5">
      <input
        name="name"
        required
        className="w-full rounded-xl border bg-background px-4 py-3"
        placeholder="Your Name"
      />

      <input
        name="email"
        type="email"
        required
        className="w-full rounded-xl border bg-background px-4 py-3"
        placeholder="Your Email"
      />

      <textarea
        name="message"
        required
        rows={4}
        className="w-full rounded-xl border bg-background px-4 py-3"
        placeholder="Your Message"
      />

      <button
        disabled={loading}
        className="w-full rounded-xl bg-primary py-3 text-primary-foreground font-medium disabled:opacity-60"
      >
        {loading ? 'Sending…' : 'Send Message'}
      </button>

      {status === 'success' && (
        <p className="text-sm text-green-500">
          ✅ Message sent successfully!
        </p>
      )}

      {status === 'error' && (
        <p className="text-sm text-red-500">
          ❌ Failed to send message. Please try again.
        </p>
      )}
    </form>
  )
}
