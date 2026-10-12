import React from 'react';
import { DollarSign, Clock, Flame } from 'lucide-react';

export default function DirectOrderBanner() {
  return (
    <section className="bg-amber-500 text-stone-950 py-7 border-y border-amber-600 shadow-inner">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center text-center md:text-left">
          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider text-stone-950">
                Scheduled Counter Pickup
              </h4>
              <p className="text-xs text-stone-900 font-semibold">
                Select your collection time. Walk straight up to the counter with zero delay.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
              <Flame className="w-6 h-6 fill-amber-400" />
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider text-stone-950">
                100% Sliced Fresh Off The Spit
              </h4>
              <p className="text-xs text-stone-900 font-semibold">
                Hot carving into flatbread right before you collect at 54C Carrier Street.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-4 justify-center md:justify-start">
            <div className="w-12 h-12 rounded-xl bg-stone-950 text-amber-400 flex items-center justify-center shrink-0">
              <DollarSign className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-black text-sm uppercase tracking-wider text-stone-950">
                Zero Commission Markups
              </h4>
              <p className="text-xs text-stone-900 font-semibold">
                Direct phone &amp; web ordering cuts out 30% delivery app gouging.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
