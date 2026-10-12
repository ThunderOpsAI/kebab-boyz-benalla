import React from 'react';
import { Flame, CheckCircle2 } from 'lucide-react';

export default function StorySection() {
  return (
    <section className="py-20 bg-stone-900 text-stone-100 border-b border-stone-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <span className="text-xs font-black uppercase tracking-widest text-amber-400 bg-amber-950 px-3 py-1 rounded-full border border-amber-800">
            About Kebab Boyz
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold font-serif text-white tracking-tight">
            Authentic Flavours &amp; Generous Servings in Benalla
          </h2>
          <p className="text-stone-300 text-sm sm:text-base leading-relaxed">
            At Kebab Boyz Benalla, we take pride in doing kebabs the right way. That means generous portions of properly seasoned meats carved sizzling hot from the spit, fresh local produce, and warm, pillowy Turkish bread.
          </p>
          <p className="text-stone-400 text-xs sm:text-sm leading-relaxed">
            Whether you are picking up a quick smoko lunch or fueling up late on a Friday night, our scheduled counter pickup lets you order ahead so your kebab is wrapped fresh the second you step into 54C Carrier Street.
          </p>
          <div className="pt-4 flex flex-wrap justify-center gap-6 text-xs text-stone-300">
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Spit-Roasted Daily
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Halal Certified Meats
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> Scheduled Counter Pickup
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
