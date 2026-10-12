import React from 'react';
import { Phone, ArrowRight, Flame, ShieldCheck, Clock } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-b from-stone-950 via-stone-900 to-stone-950 text-white py-20 lg:py-28 overflow-hidden border-b border-stone-800">
      <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#f59e0b_1px,transparent_1px)] [background-size:20px_20px]" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 mb-6">
            <Flame className="w-3.5 h-3.5 text-amber-400 fill-amber-400" />
            54C Carrier Street, Benalla &bull; Scheduled Pickup Counter
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-serif tracking-tight leading-tight mb-6 text-white">
            Thinly Sliced Spit Meats, Loaded HSPs &amp; Real Turkish Bread.
          </h1>

          <p className="text-lg sm:text-xl text-stone-300 leading-relaxed mb-8 max-w-2xl font-light">
            Marinated lamb and tender rotisserie chicken roasted continuously over vertical spits. Toasted in authentic stone-baked flatbread with crisp salads, molten mozzarella, and the holy trinity sauces.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href="#builder"
              className="px-6 py-4 bg-amber-500 hover:bg-amber-400 text-stone-950 font-black rounded-xl text-center text-sm uppercase tracking-wider transition-all shadow-xl shadow-amber-950/50 flex items-center justify-center gap-2"
            >
              <span>Build Your Kebab / Order Pickup</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <a
              href="tel:0357627757"
              className="px-6 py-4 bg-stone-900 hover:bg-stone-800 text-white border border-stone-700 font-bold rounded-xl text-center text-sm uppercase tracking-wider transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call (03) 5762 7757</span>
            </a>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-12 mt-12 border-t border-stone-800 text-xs text-stone-400">
            <div>
              <div className="text-white font-black text-lg font-serif">Scheduled Counter</div>
              <div>Ready Right On Time</div>
            </div>
            <div>
              <div className="text-white font-black text-lg font-serif">Holy Trinity</div>
              <div>Garlic, BBQ &amp; Chilli</div>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <div className="text-white font-black text-lg font-serif">Open Late</div>
              <div>Thursday to Saturday</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
