import React from 'react';
import { Flame, Check } from 'lucide-react';

export default function FlyersSection() {
  return (
    <section className="py-16 bg-stone-900 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-amber-400 bg-amber-500/20 border border-amber-500/40 px-3 py-1 rounded-full">
            The Boyz Combos
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold font-serif text-white mt-3">
            Benalla's Hardest Hitting Deals
          </h2>
          <p className="text-xs sm:text-sm text-stone-400 mt-2">
            Available daily at 54C Carrier Street for phone or counter collection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-stone-950 rounded-2xl p-6 border border-stone-800 shadow-xl relative">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2.5 py-1 bg-amber-500 text-stone-950 rounded text-[10px] font-black uppercase tracking-wider">
                Classic Combo
              </span>
              <span className="text-xl font-bold text-amber-400 font-serif">$21.50</span>
            </div>
            <h3 className="text-lg font-bold font-serif mb-2 text-white">Regular Kebab &amp; Loaded Chips</h3>
            <ul className="text-xs text-stone-300 space-y-1.5 mb-6">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Regular Flatbread Kebab (Lamb or Chicken)</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Shredded Lettuce, Tomato, Onion</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Small Kebab-Salted Hot Chips</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 375ml Chilled Soft Drink Can</li>
            </ul>
            <a
              href="#builder"
              className="block w-full text-center py-2 bg-stone-800 hover:bg-stone-750 text-amber-400 rounded-lg text-xs font-black uppercase tracking-wider"
            >
              Build Your Kebab
            </a>
          </div>

          <div className="bg-stone-950 rounded-2xl p-6 border-2 border-amber-500 shadow-2xl relative ring-2 ring-amber-500/20">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2.5 py-1 bg-amber-500 text-stone-950 rounded text-[10px] font-black uppercase tracking-wider">
                Heavyweight Beast
              </span>
              <span className="text-xl font-bold text-amber-400 font-serif">$26.00</span>
            </div>
            <h3 className="text-lg font-bold font-serif mb-2 text-white">Monster HSP &amp; Drink Combo</h3>
            <ul className="text-xs text-stone-300 space-y-1.5 mb-6">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Large Halal Snack Pack (Chips + Meat)</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Double Melted Mozzarella Layer</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> The Holy Trinity (Garlic, BBQ, Chilli)</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 600ml Cold Drink or Water</li>
            </ul>
            <a
              href="#builder"
              className="block w-full text-center py-2 bg-amber-500 hover:bg-amber-400 text-stone-950 rounded-lg text-xs font-black uppercase tracking-wider"
            >
              Order Monster HSP
            </a>
          </div>

          <div className="bg-stone-950 rounded-2xl p-6 border border-stone-800 shadow-xl relative">
            <div className="flex justify-between items-start mb-4">
              <span className="px-2.5 py-1 bg-amber-500 text-stone-950 rounded text-[10px] font-black uppercase tracking-wider">
                Stone-Baked
              </span>
              <span className="text-xl font-bold text-amber-400 font-serif">$22.00</span>
            </div>
            <h3 className="text-lg font-bold font-serif mb-2 text-white">Turkish Pide &amp; Baklava Combo</h3>
            <ul className="text-xs text-stone-300 space-y-1.5 mb-6">
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Choice of Sucuk, Spinach/Feta, or Meat Pide</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Stone-baked crisp pastry crust</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> 2 Pieces Sweet Honey Walnut Baklava</li>
              <li className="flex items-center gap-1.5"><Check className="w-3.5 h-3.5 text-amber-400" /> Turkish Ayran or Can of Drink</li>
            </ul>
            <a
              href="#menu"
              className="block w-full text-center py-2 bg-stone-800 hover:bg-stone-750 text-amber-400 rounded-lg text-xs font-black uppercase tracking-wider"
            >
              View Pide Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
