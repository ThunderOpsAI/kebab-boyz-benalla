'use client';

import React, { useState } from 'react';
import { Flame, CheckCircle, Plus, Sparkles, ShoppingBag, Phone, Clock, ArrowRight } from 'lucide-react';

interface Option {
  id: string;
  name: string;
  price: number;
}

const SIZE_OPTIONS: Option[] = [
  { id: 'reg', name: 'Regular Toasted Flatbread Kebab', price: 15.00 },
  { id: 'jumbo', name: 'Jumbo Monster Flatbread Kebab', price: 19.50 },
  { id: 'hsp-med', name: 'Halal Snack Pack (Medium HSP on Chips)', price: 17.50 },
  { id: 'hsp-lrg', name: 'Monster Snack Pack (Large Loaded HSP)', price: 22.50 },
];

const MEAT_OPTIONS: Option[] = [
  { id: 'lamb', name: 'Slow-Turned Marinated Lamb', price: 0.00 },
  { id: 'chicken', name: 'Seasoned Rotisserie Chicken', price: 0.00 },
  { id: 'mixed', name: 'Mixed (Lamb & Chicken Spit)', price: 0.00 },
  { id: 'falafel', name: 'House Crispy Falafel (Veg)', price: 0.00 },
];

const SALAD_OPTIONS = [
  { id: 'lettuce', name: 'Crisp Shredded Lettuce' },
  { id: 'tomato', name: 'Fresh Diced Tomatoes' },
  { id: 'onion', name: 'Spanish Red Onion' },
  { id: 'tabouli', name: 'Fresh Parsley Tabouli' },
  { id: 'jalapenos', name: 'Pickled Jalapeno Peppers' },
];

const EXTRA_OPTIONS: Option[] = [
  { id: 'cheese', name: 'Melted Mozzarella Cheese', price: 1.50 },
  { id: 'extra-meat', name: 'Double Spit-Roasted Meat', price: 4.50 },
  { id: 'egg', name: 'Fried Free-Range Egg', price: 2.00 },
  { id: 'pineapple', name: 'Golden Pineapple Ring', price: 1.50 },
];

const SAUCE_OPTIONS = [
  { id: 'garlic', name: 'Signature Garlic Sauce' },
  { id: 'bbq', name: 'Smoky BBQ Sauce' },
  { id: 'chilli', name: 'Hot Sriracha Chilli' },
  { id: 'sweet-chilli', name: 'Sweet Chilli Sauce' },
  { id: 'hummus', name: 'Creamy Chickpea Hummus' },
  { id: 'holy-trinity', name: 'Holy Trinity (Garlic + BBQ + Chilli)' },
];

const PICKUP_TIMES = [
  'In 15 Minutes (Express)',
  'In 30 Minutes',
  'In 45 Minutes',
  'In 1 Hour',
  'Specific Counter Time',
];

export default function KebabBuilder() {
  const [selectedSize, setSelectedSize] = useState<Option>(SIZE_OPTIONS[0]);
  const [selectedMeat, setSelectedMeat] = useState<Option>(MEAT_OPTIONS[2]); // Mixed default
  const [selectedSalads, setSelectedSalads] = useState<string[]>(['lettuce', 'tomato', 'onion']);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(['cheese']);
  const [selectedSauces, setSelectedSauces] = useState<string[]>(['holy-trinity']);
  const [pickupTime, setPickupTime] = useState<string>(PICKUP_TIMES[0]);
  const [orderAdded, setOrderAdded] = useState(false);

  const toggleSalad = (id: string) => {
    setSelectedSalads(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleExtra = (id: string) => {
    setSelectedExtras(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const toggleSauce = (id: string) => {
    setSelectedSauces(prev =>
      prev.includes(id) ? prev.filter(x => x !== id) : [...prev, id]
    );
  };

  const extrasTotal = selectedExtras.reduce((sum, id) => {
    const opt = EXTRA_OPTIONS.find(e => e.id === id);
    return sum + (opt ? opt.price : 0);
  }, 0);

  const totalPrice = selectedSize.price + selectedMeat.price + extrasTotal;

  const handleOrder = () => {
    setOrderAdded(true);
    setTimeout(() => setOrderAdded(false), 5000);
  };

  return (
    <section id="builder" className="py-20 bg-stone-900 border-b border-stone-800 text-stone-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider bg-amber-500/20 text-amber-400 border border-amber-500/40 mb-4">
            <Flame className="w-4 h-4 text-amber-400 fill-amber-400" />
            Custom Mobile Kebab Builder
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-serif tracking-tight">
            Build Your Custom Kebab or HSP
          </h2>
          <p className="mt-4 text-stone-300 text-base sm:text-lg">
            Choose your size, spit meats, fresh salads, melted cheese, and signature sauces. Schedule your pickup time so it is wrapped scorching hot for you at 54C Carrier St!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Builder Steps (8 Cols) */}
          <div className="lg:col-span-8 space-y-6">
            {/* Step 1: Base & Size */}
            <div className="bg-stone-850 bg-stone-900/90 rounded-2xl p-6 border border-stone-750 shadow-md">
              <h3 className="font-bold text-base text-white flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 text-xs flex items-center justify-center font-black">1</span>
                Select Wrap Style or Snack Pack (HSP)
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SIZE_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedSize(opt)}
                    className={`p-4 rounded-xl border text-left transition-all ${
                      selectedSize.id === opt.id
                        ? 'border-amber-500 bg-amber-500/15 ring-2 ring-amber-500/30'
                        : 'border-stone-700 bg-stone-800/60 hover:border-stone-600'
                    }`}
                  >
                    <div className="font-bold text-sm text-white">{opt.name}</div>
                    <div className="text-amber-400 font-black text-sm mt-1">${opt.price.toFixed(2)}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Spit Meat */}
            <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-750 shadow-md">
              <h3 className="font-bold text-base text-white flex items-center gap-2 mb-4">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 text-xs flex items-center justify-center font-black">2</span>
                Choose Your Meat (Spit-Roasted)
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {MEAT_OPTIONS.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setSelectedMeat(opt)}
                    className={`p-3.5 rounded-xl border text-center transition-all ${
                      selectedMeat.id === opt.id
                        ? 'border-amber-500 bg-amber-500/15 ring-2 ring-amber-500/30 font-bold'
                        : 'border-stone-700 bg-stone-800/60 hover:border-stone-600'
                    }`}
                  >
                    <div className="font-bold text-xs sm:text-sm text-white">{opt.name}</div>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Salads */}
            <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-750 shadow-md">
              <h3 className="font-bold text-base text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 text-xs flex items-center justify-center font-black">3</span>
                Select Fresh Salads (Included)
              </h3>
              <div className="flex flex-wrap gap-2.5">
                {SALAD_OPTIONS.map((opt) => {
                  const active = selectedSalads.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleSalad(opt.id)}
                      className={`px-3.5 py-2 rounded-lg border text-xs font-semibold transition-all ${
                        active
                          ? 'border-emerald-500 bg-emerald-950/70 text-emerald-300'
                          : 'border-stone-700 bg-stone-800/40 text-stone-400 hover:border-stone-600'
                      }`}
                    >
                      {active ? '✓ ' : '+ '} {opt.name}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 4: Extras & Cheese */}
            <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-750 shadow-md">
              <h3 className="font-bold text-base text-white flex items-center gap-2 mb-3">
                <span className="w-6 h-6 rounded-full bg-amber-500 text-stone-950 text-xs flex items-center justify-center font-black">4</span>
                Loaded Cheeses &amp; Extras
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {EXTRA_OPTIONS.map((opt) => {
                  const active = selectedExtras.includes(opt.id);
                  return (
                    <button
                      key={opt.id}
                      onClick={() => toggleExtra(opt.id)}
                      className={`p-3 rounded-lg border text-left transition-all ${
                        active
                          ? 'border-amber-500 bg-amber-500/15 text-white'
                          : 'border-stone-700 bg-stone-800/40 text-stone-400 hover:border-stone-600'
                      }`}
                    >
                      <div className="font-bold text-xs">{opt.name}</div>
                      <div className="text-amber-400 font-extrabold text-xs mt-0.5">+${opt.price.toFixed(2)}</div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 5: Sauces & Scheduled Pickup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-750 shadow-md">
                <h3 className="font-bold text-sm text-white flex items-center gap-2 mb-3">
                  <span className="w-5 h-5 rounded-full bg-amber-500 text-stone-950 text-xs flex items-center justify-center font-black">5</span>
                  Signature Sauces
                </h3>
                <div className="space-y-1.5">
                  {SAUCE_OPTIONS.map((opt) => {
                    const active = selectedSauces.includes(opt.id);
                    return (
                      <button
                        key={opt.id}
                        onClick={() => toggleSauce(opt.id)}
                        className={`w-full p-2.5 rounded-lg border text-left text-xs transition-all flex justify-between items-center ${
                          active
                            ? 'border-amber-500 bg-amber-500/20 text-white font-bold'
                            : 'border-stone-700 bg-stone-800/40 text-stone-400 hover:border-stone-600'
                        }`}
                      >
                        <span>{opt.name}</span>
                        {active && <span className="text-amber-400">Selected</span>}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Scheduled Pickup Counter Time */}
              <div className="bg-stone-900/90 rounded-2xl p-6 border border-stone-750 shadow-md">
                <h3 className="font-bold text-sm text-white flex items-center gap-2 mb-3">
                  <Clock className="w-4 h-4 text-amber-400" />
                  Scheduled Counter Pickup Time
                </h3>
                <p className="text-[11px] text-stone-400 mb-3">
                  Tell the Boyz when you will reach 54C Carrier Street so your kebab comes hot from the toaster.
                </p>
                <div className="space-y-2">
                  {PICKUP_TIMES.map((time) => (
                    <button
                      key={time}
                      onClick={() => setPickupTime(time)}
                      className={`w-full p-2.5 rounded-lg border text-left text-xs transition-all flex justify-between items-center ${
                        pickupTime === time
                          ? 'border-amber-500 bg-amber-500/20 text-white font-bold'
                          : 'border-stone-700 bg-stone-800/40 text-stone-400 hover:border-stone-600'
                      }`}
                    >
                      <span>{time}</span>
                      {pickupTime === time && <span className="text-amber-400">✓</span>}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Live Order Summary Column (4 Cols) */}
          <div className="lg:col-span-4 sticky top-24">
            <div className="bg-stone-950 text-white rounded-2xl p-6 border border-stone-800 shadow-2xl space-y-5">
              <div className="flex items-center justify-between border-b border-stone-800 pb-4">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-amber-400">Custom Order Live</span>
                  <h3 className="text-xl font-bold font-serif text-white mt-0.5">Your Custom Kebab</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-amber-500/20 border border-amber-500/40 flex items-center justify-center text-amber-400">
                  <Flame className="w-5 h-5 fill-amber-400" />
                </div>
              </div>

              <div className="space-y-2.5 text-xs text-stone-300">
                <div className="flex justify-between pb-2 border-b border-stone-800">
                  <span className="font-medium">{selectedSize.name}</span>
                  <span className="font-bold text-white">${selectedSize.price.toFixed(2)}</span>
                </div>
                <div className="flex justify-between pb-2 border-b border-stone-800">
                  <span className="text-stone-400">Meat Choice:</span>
                  <span className="font-bold text-white">{selectedMeat.name}</span>
                </div>
                <div className="pb-2 border-b border-stone-800">
                  <span className="text-stone-400 block mb-1">Salads:</span>
                  <span className="text-stone-200">
                    {selectedSalads.length > 0
                      ? selectedSalads.map(s => SALAD_OPTIONS.find(o => o.id === s)?.name).join(', ')
                      : 'None'}
                  </span>
                </div>
                <div className="pb-2 border-b border-stone-800">
                  <span className="text-stone-400 block mb-1">Sauces:</span>
                  <span className="text-amber-400 font-semibold">
                    {selectedSauces.length > 0
                      ? selectedSauces.map(s => SAUCE_OPTIONS.find(o => o.id === s)?.name).join(' + ')
                      : 'No sauce'}
                  </span>
                </div>
                {extrasTotal > 0 && (
                  <div className="flex justify-between pb-2 border-b border-stone-800">
                    <span className="text-stone-400">Extras:</span>
                    <span className="font-bold text-amber-400">+${extrasTotal.toFixed(2)}</span>
                  </div>
                )}
                <div className="flex justify-between pb-1">
                  <span className="text-stone-400">Ready At Counter:</span>
                  <span className="font-bold text-emerald-400">{pickupTime}</span>
                </div>
              </div>

              <div className="pt-2 border-t border-stone-800 flex justify-between items-baseline">
                <span className="text-sm font-bold text-stone-300">Total Pickup Price:</span>
                <span className="text-3xl font-black font-serif text-amber-400">${totalPrice.toFixed(2)}</span>
              </div>

              {orderAdded ? (
                <div className="bg-emerald-600 text-white rounded-xl p-4 text-center space-y-2 animate-in fade-in">
                  <CheckCircle className="w-8 h-8 mx-auto" />
                  <div className="font-bold text-sm">Kebab Added to Pickup Order!</div>
                  <p className="text-xs text-emerald-100">
                    Call <a href="tel:0357627757" className="underline font-black">(03) 5762 7757</a> for instant counter placement!
                  </p>
                </div>
              ) : (
                <div className="space-y-3 pt-2">
                  <button
                    onClick={handleOrder}
                    className="w-full py-3.5 px-4 bg-amber-500 hover:bg-amber-400 active:bg-amber-600 text-stone-950 font-black rounded-xl text-sm uppercase tracking-wider transition-all shadow-lg shadow-amber-900/40 flex items-center justify-center gap-2"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>Build Your Kebab / Order Pickup</span>
                  </button>

                  <a
                    href="tel:0357627757"
                    className="w-full py-3 px-4 bg-stone-800 hover:bg-stone-750 text-white rounded-xl text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 border border-stone-700"
                  >
                    <Phone className="w-3.5 h-3.5 text-amber-400" />
                    <span>Call (03) 5762 7757 to Order</span>
                  </a>
                </div>
              )}

              <div className="text-[11px] text-stone-500 text-center flex items-center justify-center gap-1.5 pt-1">
                <span>54C Carrier St, Benalla &bull; Scheduled Pickup &bull; No Waiting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
