'use client';

import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import KebabBuilder from '@/components/KebabBuilder';
import DirectOrderBanner from '@/components/DirectOrderBanner';
import Menu, { CartItem } from '@/components/Menu';
import CateringSection from '@/components/CateringSection';
import FlyersSection from '@/components/FlyersSection';
import StorySection from '@/components/StorySection';
import LocationHours from '@/components/LocationHours';
import Footer from '@/components/Footer';
import AdminLeadsDrawer from '@/components/AdminLeadsDrawer';

export default function Home() {
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState(false);
  const [cartCount, setCartCount] = useState(0);

  const handleCartChange = (items: CartItem[]) => {
    const totalCount = items.reduce((sum, item) => sum + item.quantity, 0);
    setCartCount(totalCount);
  };

  const scrollToMenu = () => {
    const menuEl = document.getElementById('menu');
    if (menuEl) {
      menuEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="min-h-screen bg-stone-950 text-stone-100 font-sans selection:bg-amber-400 selection:text-stone-950">
      {/* Sticky Modular Header */}
      <Navbar
        onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)}
        cartCount={cartCount}
        onCartClick={scrollToMenu}
      />

      {/* Hero Section */}
      <Hero />

      {/* Unique Feature: Custom Kebab & HSP Mobile Builder */}
      <KebabBuilder />

      {/* Scheduled Pickup Counter Savings Callout */}
      <DirectOrderBanner />

      {/* Full Kebab, HSP, Pide Menu & Shopping Cart */}
      <Menu onCartChange={handleCartChange} />

      {/* Late Night & Party Platter Catering Lead Engine */}
      <CateringSection />

      {/* Daily Blackboard Specials */}
      <FlyersSection />

      {/* The Kebab Boyz Benalla Story */}
      <StorySection />

      {/* Trading Hours, Location Map & Contact */}
      <LocationHours />

      {/* Site Footer with Admin Drawer Trigger */}
      <Footer onOpenLeadsModal={() => setIsLeadsDrawerOpen(true)} />

      {/* Admin Leads Slide-Over Drawer */}
      <AdminLeadsDrawer
        isOpen={isLeadsDrawerOpen}
        onClose={() => setIsLeadsDrawerOpen(false)}
      />
    </main>
  );
}
