import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Mail, Send } from 'lucide-react';
import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="w-full rounded-t-3xl bg-[#1A1110] text-[#EFEAE8] shadow-2xl mt-auto z-10 relative overflow-hidden">
      {/* subtle background glow */}
      <div className="absolute top-0 left-1/4 w-80 h-40 bg-[#f2b6c8]/5 blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-1/4 w-80 h-40 bg-[#ddbbea]/5 blur-3xl pointer-events-none" />

      <div className="grid grid-cols-1 md:grid-cols-12 gap-10 px-5 md:px-16 pt-20 pb-12 max-w-7xl mx-auto relative z-10">
        {/* Brand */}
        <div className="md:col-span-4 space-y-6">
          <Link to="/" className="inline-block hover:opacity-90 transition-opacity">
            <div className="bg-[#FFF4ED] p-4 rounded-2xl inline-block">
              <Logo />
            </div>
          </Link>
          <p className="font-sans text-sm text-[#EFEAE8]/60 max-w-xs leading-relaxed">
            Functional wellness, curated for the modern pursuit of balance. Elegance in every sip.
          </p>
          <div className="flex gap-3">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-full border border-[#EFEAE8]/20 flex items-center justify-center text-[#EFEAE8]/50 hover:text-[#f2b6c8] hover:border-[#f2b6c8]/50 transition-all duration-300"
            >
              <Instagram size={16} />
            </a>
            <a
              href="mailto:hello@duovita.kr"
              className="w-10 h-10 rounded-full border border-[#EFEAE8]/20 flex items-center justify-center text-[#EFEAE8]/50 hover:text-[#f2b6c8] hover:border-[#f2b6c8]/50 transition-all duration-300"
            >
              <Mail size={16} />
            </a>
          </div>
        </div>

        {/* Links */}
        <div className="md:col-span-2 space-y-5">
          <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#f2b6c8]">Explore</h4>
          <ul className="space-y-3">
            {[
              { label: 'Menu', to: '/menu' },
              { label: 'Our Story', to: '/story' },
              { label: 'Find Us', to: '/find-us' },
            ].map(l => (
              <li key={l.label}>
                <Link to={l.to} className="font-sans text-sm text-[#EFEAE8]/60 hover:text-[#EFEAE8] transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-2 space-y-5">
          <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#f2b6c8]">Company</h4>
          <ul className="space-y-3">
            {[
              { label: 'Sustainability', to: '/page/sustainability' },
              { label: 'Careers', to: '/page/careers' },
              { label: 'Privacy Policy', to: '/page/privacy-policy' },
              { label: 'Terms of Service', to: '/page/terms-of-service' },
            ].map(l => (
              <li key={l.label}>
                <Link to={l.to} className="font-sans text-sm text-[#EFEAE8]/60 hover:text-[#EFEAE8] transition-colors duration-300">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter */}
        <div className="md:col-span-4 space-y-5">
          <h4 className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-[#f2b6c8]">Inner Circle</h4>
          <p className="font-sans text-sm text-[#EFEAE8]/60 leading-relaxed">
            Seasonal menus, wellness rituals, and member-only rewards — delivered monthly.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 min-w-0 bg-[#EFEAE8]/8 border border-[#EFEAE8]/15 text-[#EFEAE8] placeholder:text-[#EFEAE8]/30 rounded-full px-5 py-3 font-sans text-sm outline-none focus:border-[#f2b6c8]/50 transition-colors"
            />
            <button className="w-12 h-12 flex-shrink-0 rounded-full bg-gradient-to-r from-[#f2b6c8] to-[#ddbbea] flex items-center justify-center hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg">
              <Send size={16} className="text-[#1A1110]" />
            </button>
          </div>
          <p className="font-sans text-xs text-[#EFEAE8]/30">No spam, only sips. Unsubscribe anytime.</p>
        </div>
      </div>

      <div className="border-t border-[#EFEAE8]/8 px-5 md:px-16 py-6 max-w-7xl mx-auto">
        <p className="font-sans text-xs text-[#EFEAE8]/30 text-center tracking-wide">
          © 2026 Duo Vita Functional Wellness · Seoul, South Korea · All rights reserved.
        </p>
      </div>
    </footer>
  );
}
