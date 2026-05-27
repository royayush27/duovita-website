import { trackEvent } from '../utils/tracking';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Plus, ArrowRight, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { menuCategories, seasonalMenuItem } from '../data/menu';

const filters = ['All', 'Focus & Calm', 'Energy & Glow', 'Indulgence & Wellness', 'Refresh & Revive'];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5, ease: [0.22, 0.61, 0.36, 1] },
};

export default function Menu() {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');

  const filteredCategories = activeFilter === 'All'
    ? menuCategories
    : menuCategories.filter((c) => c.name === activeFilter);

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      {/* ── PAGE HERO ──────────────────────────────── */}
      <section className="pt-32 pb-16 px-5 md:px-16 text-center" style={{ background: 'linear-gradient(160deg, #ffd9e3 0%, #f6d9ff 60%, #e7deff 100%)' }}>
        <div className="max-w-3xl mx-auto space-y-5">
          <p className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary">The Menu</p>
          <h1 className="font-serif text-4xl md:text-6xl font-bold italic text-on-surface tracking-tight leading-tight">
            Two Needs.<br />One Cup.
          </h1>
          <div className="w-10 h-0.5 bg-primary mx-auto" />
          <p className="font-sans text-lg text-on-surface-variant max-w-xl mx-auto leading-relaxed">
            Every Duo Vita split-cup is crafted for the modern pursuit of balance. Choose by feeling, by function, or by flavour.
          </p>
        </div>
      </section>

      {/* ── SEASONAL HERO CARD ─────────────────────── */}
      <section className="px-5 md:px-16 -mt-6 relative z-10 max-w-7xl mx-auto">
        <motion.div
          {...fadeUp}
          className="rounded-3xl overflow-hidden grid md:grid-cols-2 shadow-2xl"
          style={{ background: 'linear-gradient(135deg, #352858 0%, #4a3580 100%)' }}
        >
          <div className="p-10 md:p-14 flex flex-col justify-center space-y-6">
            <div className="flex items-center gap-2">
              <Sparkles size={14} className="text-primary-fixed-dim" />
              <span className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-primary-fixed-dim">Seasonal Special</span>
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-bold italic text-inverse-on-surface leading-tight">
              The Kombucha Glow Duo
            </h2>
            <p className="font-sans text-base text-inverse-on-surface/70 leading-relaxed max-w-sm">
              Summer's exclusive: Golden ginger kombucha meets antioxidant acai smoothie with vitamin C boost. Available until August 31st.
            </p>
            <div className="flex flex-wrap gap-2">
              {['Limited Time', 'Probiotics', 'Vitamin C', '₩9,500'].map(tag => (
                <span key={tag} className="font-sans text-xs font-bold uppercase tracking-wider px-3 py-1.5 rounded-full bg-white/10 text-inverse-on-surface border border-white/20">
                  {tag}
                </span>
              ))}
            </div>
            <button
              onClick={() => {
                trackEvent({
                  eventType: 'seasonal_cta_clicked',
                  itemId: seasonalMenuItem.id,
                  itemName: seasonalMenuItem.name,
                  itemCategory: seasonalMenuItem.category,
                });
                navigate(`/menu/${seasonalMenuItem.id}`);
              }}
              className="self-start flex items-center gap-2 bg-inverse-primary text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-wider px-7 py-3.5 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 shadow-lg"
            >
              Try This Season <ArrowRight size={14} />
            </button>
          </div>
          <div className="aspect-[4/3] md:aspect-auto overflow-hidden">
            <img
              src={seasonalMenuItem.image}
              alt={seasonalMenuItem.name}
              className="w-full h-full object-cover opacity-90"
            />
          </div>
        </motion.div>
      </section>

      {/* ── FILTER BAR ─────────────────────────────── */}
      <div className="sticky top-16 z-40 py-4 bg-background/85 backdrop-blur-md border-b border-outline-variant/15 mt-10">
        <div className="max-w-7xl mx-auto px-5 md:px-16">
          <div className="flex overflow-x-auto no-scrollbar gap-2 pb-1">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  trackEvent({ eventType: 'filter_clicked', eventValue: filter, itemCategory: filter });
                }}
                className={`whitespace-nowrap px-5 py-2 rounded-full font-sans text-xs font-bold uppercase tracking-wider shadow-sm transition-all duration-300 flex-shrink-0 ${
                  activeFilter === filter
                    ? 'bg-primary text-on-primary shadow-md'
                    : 'bg-surface-container border border-outline-variant/50 text-on-surface-variant hover:bg-surface-container-high hover:border-primary/30'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU ITEMS ─────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-5 md:px-16 py-16 space-y-24 min-h-[60vh]">
        <AnimatePresence mode="popLayout">
          {filteredCategories.map((category) => (
            <motion.section
              key={category.name}
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.97 }}
              transition={{ duration: 0.45, ease: [0.22, 0.61, 0.36, 1] }}
            >
              {/* Category header */}
              <div className="mb-10">
                <div className="flex items-center gap-4 mb-2">
                  <span className="font-serif text-2xl text-primary/40">{category.emoji}</span>
                  <h3 className="font-serif text-2xl md:text-3xl font-bold text-on-surface">{category.name}</h3>
                  <div className="flex-1 h-px bg-gradient-to-r from-outline-variant/40 to-transparent" />
                </div>
                <p className="font-serif text-base italic text-on-surface-variant opacity-75 ml-10">{category.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.items.map((item) => (
                  <motion.div
                    key={item.id}
                    whileHover={{ y: -4 }}
                    onClick={() => {
                      trackEvent({
                        eventType: 'menu_item_opened',
                        itemId: item.id,
                        itemName: item.name,
                        itemCategory: category.name,
                        metadata: { price: item.price, badges: item.badges, tag: item.tag },
                      });
                      navigate(`/menu/${item.id}`);
                    }}
                    className="glass-card rounded-2xl overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex items-stretch">
                      {/* Image */}
                      <div className="w-36 h-36 flex-shrink-0 overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Info */}
                      <div className="flex-1 p-5 flex flex-col justify-between">
                        <div>
                          <div className="flex items-start justify-between mb-1.5 gap-2">
                            <h4 className="font-serif text-lg font-bold text-on-surface leading-snug">{item.name}</h4>
                            <span className="font-sans font-bold text-primary flex-shrink-0">₩{item.price.toLocaleString()}</span>
                          </div>
                          <p className="text-sm text-on-surface-variant leading-relaxed line-clamp-2 mb-3">{item.description}</p>
                          <div className="flex flex-wrap gap-1.5">
                            {item.badges.map(b => (
                              <span key={b} className="font-sans text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-full bg-secondary-container/50 text-on-secondary-container">
                                {b}
                              </span>
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between mt-3">
                          <span className="font-sans text-[10px] font-bold uppercase tracking-[0.14em] text-secondary/80 bg-secondary-fixed/40 px-2 py-1 rounded">
                            {item.tag}
                          </span>
                          <button
                            onClick={(e) => {
                              e.preventDefault();
                              e.stopPropagation();
                              trackEvent({
                                eventType: 'quick_add_to_cart',
                                itemId: item.id,
                                itemName: item.name,
                                itemCategory: category.name,
                                eventValue: 'Regular Duo',
                                metadata: { price: item.price, source: 'menu_card' },
                              });
                              addToCart({ id: item.id, name: item.name, price: item.price, quantity: 1, image: item.image, options: { size: 'Regular Duo' } });
                            }}
                            className="w-9 h-9 rounded-full bg-primary/10 text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all duration-300 shadow-sm flex-shrink-0"
                          >
                            <Plus size={16} />
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </AnimatePresence>
      </div>
    </motion.main>
  );
}
