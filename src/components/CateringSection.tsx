'use client';

import React, { useState } from 'react';
import { Users, Phone, Send, CheckCircle } from 'lucide-react';

export default function CateringSection() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [eventDate, setEventDate] = useState('');
  const [headCount, setHeadCount] = useState('15');
  const [notes, setNotes] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMsg('');

    try {
      const res = await fetch('/api/inquiries', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          phone,
          email,
          service_type: 'Kebab Boyz Party Platter & Group Order',
          guest_count: headCount,
          event_date: eventDate,
          notes,
        }),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
      } else {
        setErrorMsg(data.error || 'Please call Kebab Boyz directly on (03) 5762 7757.');
      }
    } catch {
      setErrorMsg('Network error. Please call Kebab Boyz directly on (03) 5762 7757.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="catering" className="py-20 bg-stone-950 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-5 space-y-6">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800">
              Group Feasts &amp; Events
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white">
              Catering Platters for Parties &amp; Events in Benalla
            </h2>
            <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
              Hosting a birthday, sporting club breakup, or work celebration? Kebab Boyz provides giant foil trays of spit-roasted meats, warm Turkish flatbreads, dips, and loaded chip boxes.
            </p>
            <div className="p-4 bg-stone-900 rounded-xl border border-stone-800 text-xs space-y-2">
              <div className="font-bold text-white flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400" />
                Direct Platter Inquiries
              </div>
              <p className="text-stone-400">
                Call <a href="tel:0357627757" className="text-amber-400 underline font-bold">(03) 5762 7757</a> for quick group catering coordination.
              </p>
            </div>
          </div>

          <div className="lg:col-span-7 bg-stone-900 text-stone-100 rounded-2xl p-6 sm:p-8 border border-stone-800 shadow-2xl">
            <h3 className="text-xl font-bold font-serif mb-2 text-white">
              Request Party Platter Catering
            </h3>
            <p className="text-xs text-stone-400 mb-6">
              Enter your estimated numbers and date below and the Boyz will call you to confirm packages.
            </p>

            {submitted ? (
              <div className="bg-emerald-950/80 border border-emerald-700 text-emerald-300 p-6 rounded-xl text-center space-y-3">
                <CheckCircle className="w-10 h-10 text-emerald-400 mx-auto" />
                <h4 className="font-bold text-white">Catering Inquiry Received!</h4>
                <p className="text-xs">
                  We will call you shortly to confirm timings and food quantities.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                {errorMsg && (
                  <div className="p-3 bg-red-950 text-red-300 rounded border border-red-800">
                    {errorMsg}
                  </div>
                )}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-300 mb-1">Your Name *</label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Sam Turkish"
                      className="w-full p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-300 mb-1">Phone Number *</label>
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="e.g. 0412 345 678"
                      className="w-full p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block font-bold text-stone-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="e.g. sam@example.com"
                      className="w-full p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                  <div>
                    <label className="block font-bold text-stone-300 mb-1">Guests / Head Count</label>
                    <input
                      type="number"
                      min="5"
                      value={headCount}
                      onChange={(e) => setHeadCount(e.target.value)}
                      className="w-full p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block font-bold text-stone-300 mb-1">Party / Pickup Date</label>
                  <input
                    type="date"
                    required
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    className="w-full p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <div>
                  <label className="block font-bold text-stone-300 mb-1">Platter Requirements</label>
                  <textarea
                    rows={3}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    placeholder="e.g. 3 meat trays (2 lamb, 1 chicken), 2 trays of seasoned chips, garlic and chilli sauces on the side..."
                    className="w-full p-2.5 rounded-lg bg-stone-800 border border-stone-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-lg uppercase tracking-wider text-sm transition-colors shadow-md"
                >
                  {isSubmitting ? 'Sending Request...' : 'Send Platter Request'}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
