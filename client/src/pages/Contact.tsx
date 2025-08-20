import { useState } from 'react';

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);

  return (
    <section className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <form
        className="mt-6 grid gap-4 max-w-xl"
        onSubmit={(e) => { e.preventDefault(); setStatus('Thanks! We will get back to you.'); }}
      >
        <input className="border rounded px-3 py-2" placeholder="Your Name" required />
        <input type="email" className="border rounded px-3 py-2" placeholder="Email" required />
        <textarea className="border rounded px-3 py-2" placeholder="Message" rows={5} required />
        <button className="bg-blue-600 text-white px-4 py-2 rounded">Send</button>
        {status && <p className="text-green-700">{status}</p>}
      </form>
    </section>
  )
}
