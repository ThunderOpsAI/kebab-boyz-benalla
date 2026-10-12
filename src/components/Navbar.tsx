'use client';

import React, { useState } from 'react';
import { Phone, Clock, MapPin, ShoppingBag, Menu as MenuIcon, X, Flame } from 'lucide-react';

interface NavbarProps {
  onOpenLeadsModal?: () => void;
  cartCount?: number;
  onCartClick?: () => void;
}

export default function Navbar({ onOpenLeadsModal, cartCount = 0, onCartClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-stone-950 text-stone-100 shadow-xl border-b border-stone-800">
      {/* Top bar */}
      <div className="bg-amber-500 text-stone-950 px-4 py-1.5 text-xs font-bold flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1">
            <MapPin className="w-3.5 h-3.5" />
            54C Carrier Street, Benalla VIC 3672
          </span>
          <span className="hidden sm:flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            Open Late: Thu-Sat Till 11:00pm
          </span>
        </div>
        <div>
          <a
            href="tel:0357627757"
            className="flex items-center gap-1 text-stone-950 hover:text-stone-800 font-black transition-colors"
          >
            <Phone className="w-3.5 h-3.5" />
            (03) 5762 7757
          </a>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-xl bg-amber-500 text-stone-950 flex items-center justify-center font-black text-xl shadow-md border border-amber-400">
            KB
          </div>
          <div>
            <div className="font-serif font-black text-lg sm:text-xl text-white tracking-tight group-hover:text-amber-400 transition-colors">
              Kebab Boyz Benalla
            </div>
            <div className="text-[10px] sm:text-xs text-amber-400 uppercase tracking-widest font-bold">
              Kebabs &bull; HSPs &bull; Pides
            </div>
          </div>
        </a>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-semibold text-stone-300">
          <a href="#builder" className="hover:text-amber-400 transition-colors">Build Kebab / HSP</a>
          <a href="#menu" className="hover:text-amber-400 transition-colors">Menu</a>
          <a href="#catering" className="hover:text-amber-400 transition-colors">Party Platters</a>
          <a href="#hours" className="hover:text-amber-400 transition-colors">Hours & Location</a>
        </nav>

        {/* CTA buttons */}
        <div className="flex items-center gap-3">
          <a
            href="#builder"
            className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-amber-500 hover:bg-amber-400 text-stone-950 font-black text-xs uppercase tracking-wider transition-all shadow-md shadow-amber-950/60"
          >
            Build Your Kebab / Order Pickup
          </a>

          <a
            href="tel:0357627757"
            className="inline-flex sm:hidden p-2 rounded-xl bg-amber-500 text-stone-950"
            aria-label="Call (03) 5762 7757"
          >
            <Phone className="w-4 h-4" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-stone-300 hover:text-white"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-stone-900 border-t border-stone-800 px-4 pt-3 pb-6 space-y-3 text-sm">
          <a
            href="#builder"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Build Kebab / HSP
          </a>
          <a
            href="#menu"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Menu & Prices
          </a>
          <a
            href="#catering"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Party Platters
          </a>
          <a
            href="#hours"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-stone-200 hover:text-white py-1.5"
          >
            Hours & Location
          </a>
          <div className="pt-2">
            <a
              href="tel:0357627757"
              className="w-full text-center py-2.5 px-4 bg-amber-500 text-stone-950 rounded-xl font-black flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Call (03) 5762 7757 Now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
