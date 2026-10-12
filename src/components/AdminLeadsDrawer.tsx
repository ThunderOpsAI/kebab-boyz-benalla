'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { X, Database, RefreshCw, Phone, User, Calendar, Users, CheckCircle2, ShieldCheck, Mail, Clock } from 'lucide-react';
import { InquiryRecord } from '@/lib/db';

interface AdminLeadsDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminLeadsDrawer({ isOpen, onClose }: AdminLeadsDrawerProps) {
  const [inquiries, setInquiries] = useState<InquiryRecord[]>([]);
  const [isLiveDb, setIsLiveDb] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchLeads = useCallback(async () => {
    setLoading(true);
    try {
      const res = await fetch('/api/inquiries');
      const data = await res.json();
      if (data.success) {
        setInquiries(data.inquiries || []);
        setIsLiveDb(data.isLiveDb || false);
      }
    } catch (err) {
      console.error('Failed to fetch inquiries:', err);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen, fetchLeads]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/75 backdrop-blur-sm flex justify-end animate-in fade-in duration-200">
      {/* Off-canvas slideover panel */}
      <div className="w-full max-w-xl bg-stone-950 border-l border-stone-800 h-full flex flex-col shadow-2xl text-stone-100">
        
        {/* Drawer Header */}
        <div className="p-5 border-b border-stone-800 flex items-center justify-between bg-stone-900/80">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400">
              <Database className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base font-bold text-white">Owner Lead &amp; Inquiry Hub</h3>
                <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full border ${
                  isLiveDb
                    ? 'bg-emerald-950 border-emerald-500/40 text-emerald-400'
                    : 'bg-amber-950/70 border-amber-500/40 text-amber-300'
                }`}>
                  {isLiveDb ? 'Neon Postgres Live' : 'Demo DB Mode'}
                </span>
              </div>
              <p className="text-xs text-stone-400">
                Direct catering &amp; event leads captured for Kebab Boyz Benalla
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={fetchLeads}
              disabled={loading}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-300 hover:text-amber-400 hover:border-stone-700 transition-colors"
              title="Refresh leads"
            >
              <RefreshCw className={`w-4 h-4 ${loading ? 'animate-spin' : ''}`} />
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-stone-900 border border-stone-800 text-stone-400 hover:text-white transition-colors"
              title="Close drawer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Pitch Callout Note for business owner */}
        <div className="p-4 bg-gradient-to-r from-amber-500/10 via-orange-500/10 to-transparent border-b border-amber-500/20 text-xs text-stone-300 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-amber-400 block mb-0.5">Direct Customer Capture:</span>
            Every event catering request and bulk takeaway order submitted on your site is saved permanently. No lost customer phone numbers, forgotten notes, or third-party commission cuts.
          </div>
        </div>

        {/* Inquiries list */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {inquiries.length === 0 ? (
            <div className="text-center py-16 text-stone-500">
              <Database className="w-8 h-8 mx-auto mb-2 opacity-50" />
              <p className="font-semibold text-sm">No inquiries yet</p>
              <p className="text-xs mt-1">New submissions via the Catering Form will appear here instantly.</p>
            </div>
          ) : (
            inquiries.map((inquiry) => (
              <div
                key={inquiry.id}
                className="p-4 rounded-xl border border-stone-800 bg-stone-900/60 hover:border-stone-700 transition-colors space-y-3"
              >
                <div className="flex items-start justify-between gap-2">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-white text-base">{inquiry.name}</span>
                      <span className="text-[11px] font-semibold bg-amber-500/15 border border-amber-500/30 text-amber-300 px-2 py-0.5 rounded-full">
                        {inquiry.service_type}
                      </span>
                    </div>
                    {inquiry.created_at && (
                      <span className="text-[11px] text-stone-500 flex items-center gap-1 mt-0.5">
                        <Clock className="w-3 h-3" />
                        {new Date(inquiry.created_at).toLocaleDateString("en-AU", {
                          day: "numeric",
                          month: "short",
                          year: "numeric",
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </span>
                    )}
                  </div>

                  <a
                    href={`tel:${inquiry.phone.replace(/\s+/g, '')}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-stone-950 bg-amber-400 hover:bg-amber-300 px-3 py-1.5 rounded-lg transition-colors shadow-sm"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call Customer
                  </a>
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs text-stone-300 pt-1 border-t border-stone-800/80">
                  <div className="flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5 text-stone-400" />
                    <span className="font-medium text-stone-200">{inquiry.phone}</span>
                  </div>
                  {inquiry.email ? (
                    <div className="flex items-center gap-1.5 truncate">
                      <Mail className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{inquiry.email}</span>
                    </div>
                  ) : (
                    <div className="text-stone-500 italic">No email provided</div>
                  )}
                  {inquiry.guest_count ? (
                    <div className="flex items-center gap-1.5">
                      <Users className="w-3.5 h-3.5 text-stone-400" />
                      <span>{inquiry.guest_count} guests</span>
                    </div>
                  ) : null}
                  {inquiry.event_date ? (
                    <div className="flex items-center gap-1.5">
                      <Calendar className="w-3.5 h-3.5 text-stone-400" />
                      <span>{inquiry.event_date}</span>
                    </div>
                  ) : null}
                </div>

                {inquiry.notes && (
                  <div className="p-2.5 rounded-lg bg-stone-950/80 border border-stone-800/80 text-xs text-stone-300 leading-relaxed">
                    <span className="text-stone-400 font-semibold block mb-0.5 text-[10px] uppercase tracking-wider">Order Request / Notes:</span>
                    {inquiry.notes}
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* Drawer Footer */}
        <div className="p-4 border-t border-stone-800 bg-stone-900/40 text-xs text-stone-400 flex items-center justify-between">
          <span>Kebab Boyz Benalla • Carrier St Admin Hub</span>
          <button
            onClick={onClose}
            className="text-stone-300 hover:text-white px-3 py-1 bg-stone-800 hover:bg-stone-700 rounded-lg transition-colors font-medium"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
