import React from 'react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function LocationHours() {
  return (
    <section id="hours" className="py-20 bg-stone-950 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800">
              Find Us in Benalla
            </span>
            <h2 className="text-3xl font-extrabold font-serif text-white">
              Trading Hours &amp; Shop Location
            </h2>
            <p className="text-stone-300 text-sm leading-relaxed">
              Located on Carrier Street in central Benalla. Counter pickup and casual dining available.
            </p>

            <div className="space-y-4 pt-2">
              <div className="flex items-start gap-3.5">
                <MapPin className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Address</h4>
                  <p className="text-xs sm:text-sm text-stone-300">54C Carrier Street, Benalla, VIC 3672</p>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Phone className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Phone</h4>
                  <a href="tel:0357627757" className="text-xs sm:text-sm text-amber-400 font-black hover:underline">
                    (03) 5762 7757
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3.5">
                <Mail className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="font-bold text-sm text-white">Email</h4>
                  <a href="mailto:kebabboyz.benalla@hotmail.com" className="text-xs sm:text-sm text-stone-300 hover:underline">
                    kebabboyz.benalla@hotmail.com
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-4 border-t border-stone-800">
              <h4 className="font-bold text-sm text-white mb-3 flex items-center gap-2">
                <Clock className="w-4 h-4 text-amber-400" />
                Weekly Trading Hours
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 max-w-sm">
                <div>Monday – Wednesday:</div>
                <div className="text-right font-bold text-white">10:30 AM – 9:00 PM</div>
                <div>Thursday – Saturday:</div>
                <div className="text-right font-bold text-amber-400">10:30 AM – 11:00 PM (Late)</div>
                <div>Sunday:</div>
                <div className="text-right font-bold text-white">11:00 AM – 9:00 PM</div>
              </div>
            </div>
          </div>

          <div className="bg-stone-900 p-4 rounded-2xl border border-stone-800 shadow-xl">
            <div className="w-full h-80 rounded-xl overflow-hidden bg-stone-800">
              <iframe
                title="Kebab Boyz Benalla Location Map"
                src="https://maps.google.com/maps?q=54C+Carrier+Street+Benalla+VIC+3672&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <div className="mt-3 text-center text-xs text-stone-400">
              54C Carrier Street, Benalla VIC 3672 &bull; Central town location
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
