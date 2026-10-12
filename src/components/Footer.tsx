import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

interface FooterProps {
  onOpenLeadsModal?: () => void;
}

export default function Footer({ onOpenLeadsModal }: FooterProps) {
  return (
    <footer className="bg-black text-stone-400 text-xs py-12 border-t border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2 space-y-3">
            <h3 className="font-serif font-black text-base text-white">Kebab Boyz Benalla</h3>
            <p className="text-stone-400 max-w-sm leading-relaxed">
              Authentic spit kebabs, loaded Halal Snack Packs (HSPs), Turkish pides, and scheduled pickup counter service at 54C Carrier St, Benalla.
            </p>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Location &amp; Contact</h4>
            <div className="flex items-center gap-2 text-stone-300">
              <MapPin className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <span>54C Carrier St, Benalla VIC</span>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Phone className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <a href="tel:0357627757" className="hover:underline">(03) 5762 7757</a>
            </div>
            <div className="flex items-center gap-2 text-stone-300">
              <Mail className="w-3.5 h-3.5 text-amber-500 shrink-0" />
              <a href="mailto:kebabboyz.benalla@hotmail.com" className="hover:underline">kebabboyz.benalla@hotmail.com</a>
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-bold text-white uppercase tracking-wider text-[11px]">Quick Links</h4>
            <div><a href="#builder" className="hover:text-white transition-colors">Build Kebab / HSP</a></div>
            <div><a href="#menu" className="hover:text-white transition-colors">Menu &amp; Eats</a></div>
            <div><a href="#catering" className="hover:text-white transition-colors">Party Platters</a></div>
            <div><a href="#hours" className="hover:text-white transition-colors">Hours &amp; Location</a></div>
          </div>
        </div>

        <div className="pt-8 border-t border-stone-900 flex flex-col sm:flex-row justify-between items-center gap-4 text-stone-500">
          <div>
            &copy; {new Date().getFullYear()} Kebab Boyz Benalla. All rights reserved.
          </div>
          {onOpenLeadsModal && (
            <button
              onClick={onOpenLeadsModal}
              className="text-stone-600 hover:text-stone-400 text-[11px] underline"
            >
              Admin Lead Management
            </button>
          )}
        </div>
      </div>
    </footer>
  );
}
