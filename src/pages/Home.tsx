import React from 'react';
import { motion } from 'motion/react';
import { Droplet, SlidersHorizontal, Users, ArrowRight, Sparkles, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

import matchaCoffeeImg from '../assets/images/duo_cup_coffee_matcha_1779329655007.png';
import milkteaCollagenImg from '../assets/images/duo_cup_milktea_collagen_1779329673545.png';
import kombuchaSmoothieImg from '../assets/images/duo_cup_kombucha_smoothie_1779329691723.png';
import cacaoGoldenImg from '../assets/images/duo_cup_cacao_golden_1779329731426.png';
import dragonCitrusImg from '../assets/images/duo_cup_dragonfruit_citrus_1779329748981.png';
import storyPersonImg from '../assets/images/story_person_drinking_duo_1779329710122.png';

const featuredDuos = [
  {
    id: 'the-clarity-duo',
    name: 'The Clarity Duo',
    desc: 'Ethiopian Cold Brew meets Ceremonial Matcha. Sharp focus, jitter-free calm.',
    tag: 'FOCUS + CALM',
    tagColor: 'bg-tertiary-container/60 text-on-tertiary-container',
    price: '₩8,500',
    img: matchaCoffeeImg,
    gradient: 'from-[#c7d8c2]/40 to-[#e8f0e4]/10',
  },
  {
    id: 'the-seoul-blossom',
    name: 'The Seoul Blossom',
    desc: 'Earl Grey milk tea boba with wild rose collagen water. Indulge and glow.',
    tag: 'INDULGE + GLOW',
    tagColor: 'bg-primary-container/60 text-on-primary-container',
    price: '₩9,000',
    img: milkteaCollagenImg,
    gradient: 'from-[#ffd9e3]/40 to-[#f6d9ff]/10',
  },
  {
    id: 'the-cacao-vitality',
    name: 'The Cacao Vitality',
    desc: 'Dark chocolate sea salt cacao with turmeric golden spice latte.',
    tag: 'TREAT + HEAL',
    tagColor: 'bg-secondary-container/60 text-on-secondary-container',
    price: '₩8,000',
    img: cacaoGoldenImg,
    gradient: 'from-[#f6d9ff]/40 to-[#d7ccff]/10',
  },
  {
    id: 'the-citrus-oasis',
    name: 'The Citrus Oasis',
    desc: 'Pink dragonfruit lemonade meets sparkling yuzu with electrolytes.',
    tag: 'HYDRATE + AWAKEN',
    tagColor: 'bg-tertiary-container/60 text-on-tertiary-container',
    price: '₩7,000',
    img: dragonCitrusImg,
    gradient: 'from-[#ffc2d4]/40 to-[#e7deff]/10',
  },
];

const segments = [
  { num: '01', title: 'Café Identity Seekers', body: 'MZ consumers who live inside beautiful spaces. The cup is the content.' },
  { num: '02', title: 'Wellness Professionals', body: 'Convenience-seeking, self-managing adults who refuse to skip their health routine.' },
  { num: '03', title: 'K-Beauty Inner Consumers', body: 'Those who know real beauty starts from within — collagen, glow, vitality.' },
  { num: '04', title: 'Zero-Culture Converts', body: 'Reducing sugar without giving up the café pleasure. No compromise.' },
];

const pressItems = ['Vogue Korea', 'Well+Good', 'Allure Korea', 'Marie Claire', 'The Korea Herald'];

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] },
};

export default function Home() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow"
    >
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero-gradient w-full max-w-full min-h-[95vh] flex items-center justify-center pt-24 pb-16 px-5 md:px-16 overflow-hidden relative">
        {/* decorative blobs */}
        <div className="absolute top-24 left-8 w-72 h-72 rounded-full bg-primary-fixed/30 blur-3xl pointer-events-none" />
        <div className="absolute bottom-16 right-8 w-80 h-80 rounded-full bg-tertiary-container/40 blur-3xl pointer-events-none" />

        <div className="w-full max-w-[calc(100vw-2.5rem)] md:max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center min-w-0 relative z-10">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 0.61, 0.36, 1] }}
            className="space-y-8 min-w-0 max-w-full"
          >
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-primary text-lg">✦</span>
              <span className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary bg-secondary-fixed/60 px-4 py-1.5 rounded-full border border-white/50">
                The Seoul Standard
              </span>
              <span className="text-primary-fixed-dim text-sm">✦</span>
            </div>

            <h1 className="font-serif text-5xl md:text-[64px]/tight text-on-surface font-bold italic tracking-tight">
              Elegance in<br />Every Sip.
            </h1>

            <p className="font-sans text-lg text-on-surface-variant max-w-full sm:max-w-md w-full leading-relaxed">
              Where high-end café culture meets functional wellness. Our signature split-cup delivers indulgence and vitality in one beautiful moment.
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 pt-2">
              <Link
                to="/menu"
                className="bg-primary text-on-primary font-sans text-xs font-bold uppercase tracking-wider px-6 sm:px-8 py-4 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex items-center gap-2"
              >
                Discover the Menu <ArrowRight size={14} />
              </Link>
              <Link
                to="/story"
                className="border border-outline/50 font-sans text-xs font-bold uppercase px-6 sm:px-8 py-4 rounded-full text-on-surface hover:bg-surface-container/60 transition-all duration-300 tracking-[0.12em] backdrop-blur-sm"
              >
                Our Story
              </Link>
            </div>

            {/* Social proof micro */}
            <div className="flex flex-wrap items-center gap-x-3 gap-y-2 pt-2">
              <div className="flex -space-x-2">
                {['#f2b6c8','#ddbbea','#cbbefd','#ffd9e3'].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-white/80" style={{ background: c }} />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-1.5">
                {[...Array(5)].map((_,i) => <Star key={i} size={12} className="text-primary fill-primary" />)}
                <span className="font-sans text-xs text-on-surface-variant ml-1">4.9 · 2,400+ rituals daily</span>
              </div>
            </div>
          </motion.div>

          {/* Right — hero image card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.88, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 2 }}
            transition={{ duration: 1.1, delay: 0.35, ease: [0.22, 0.61, 0.36, 1] }}
            className="relative flex justify-center items-center mt-8 md:mt-0"
          >
            <div className="absolute inset-0 bg-white/25 blur-3xl rounded-full" />
            {/* floating sparkles */}
            <motion.span
              animate={{ y: [-6, 6, -6], rotate: [0, 15, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute -top-4 right-12 text-primary text-2xl select-none"
            >✦</motion.span>
            <motion.span
              animate={{ y: [6, -6, 6], rotate: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
              className="absolute bottom-8 -left-4 text-secondary text-xl select-none opacity-70"
            >✧</motion.span>
            <motion.span
              animate={{ y: [-4, 8, -4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
              className="absolute top-1/3 -right-6 text-tertiary text-base select-none opacity-60"
            >✦</motion.span>

            <motion.div
              whileHover={{ rotate: 0, scale: 1.02 }}
              transition={{ duration: 0.5 }}
              className="glass-panel p-4 rounded-[2.5rem] w-full max-w-md shadow-2xl z-10 overflow-hidden aspect-[4/5]"
            >
              <img
                src={milkteaCollagenImg}
                alt="Duo Vita signature split cup"
                className="w-full h-full object-cover rounded-[2rem] pointer-events-none"
              />
            </motion.div>
          </motion.div>
        </div>

        {/* scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1.5 opacity-50"
        >
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase text-on-surface-variant">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-on-surface-variant to-transparent" />
        </motion.div>
      </section>

      {/* ── PROMISE PILLARS ────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-3">
            <p className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary">Why Duo Vita</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-on-surface">The Duo Vita Promise</h2>
            <div className="w-10 h-0.5 bg-primary mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: <Droplet className="w-8 h-8" />, title: 'Indulgence + Wellness', body: 'Decadent flavors expertly paired with collagen, adaptogens, and clean energy — never one or the other.' },
              { icon: <SlidersHorizontal className="w-8 h-8" />, title: 'Function, Not Fuss', body: 'Effortless wellness rituals that fit seamlessly into your fast-paced Seoul lifestyle. No clinical aftertaste.' },
              { icon: <Users className="w-8 h-8" />, title: 'Shareable by Design', body: 'Aesthetic excellence that demands to be photographed. Your daily ritual, worthy of your feed.' },
            ].map((p, i) => (
              <motion.div
                key={p.title}
                {...fadeUp}
                transition={{ duration: 0.65, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
                whileHover={{ y: -8 }}
                className="glass-panel p-10 rounded-3xl text-center group transition-all duration-300 hover:shadow-xl"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary-container/40 flex items-center justify-center text-primary mx-auto mb-6 group-hover:bg-primary-container/70 transition-colors duration-300">
                  {p.icon}
                </div>
                <h3 className="font-serif text-xl font-bold text-on-surface mb-3">{p.title}</h3>
                <p className="font-sans text-base text-on-surface-variant leading-relaxed">{p.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED COLLECTION ────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16" style={{ background: 'linear-gradient(160deg, #ffd9e3 0%, #f6d9ff 50%, #e7deff 100%)' }}>
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
            <div className="space-y-3">
              <p className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary">Our Signatures</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-on-surface leading-tight">
                Crafted for how<br />you actually live.
              </h2>
            </div>
            <Link
              to="/menu"
              className="self-start md:self-auto flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-primary border border-primary/30 px-6 py-3 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300 whitespace-nowrap backdrop-blur-sm bg-white/30"
            >
              View All Duos <ArrowRight size={14} />
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredDuos.map((duo, i) => (
              <motion.div
                key={duo.id}
                {...fadeUp}
                transition={{ duration: 0.65, delay: i * 0.1, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <Link to={`/menu/${duo.id}`} className="block group">
                  <div className="glass-card rounded-3xl overflow-hidden hover:-translate-y-2 hover:shadow-2xl transition-all duration-400">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${duo.gradient} overflow-hidden`}>
                      <img
                        src={duo.img}
                        alt={duo.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-5 space-y-3">
                      <span className={`inline-block font-sans text-[10px] font-bold tracking-[0.14em] uppercase px-3 py-1 rounded-full ${duo.tagColor}`}>
                        {duo.tag}
                      </span>
                      <h3 className="font-serif text-lg font-bold text-on-surface leading-snug">{duo.name}</h3>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed line-clamp-2">{duo.desc}</p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-sans font-bold text-primary">{duo.price}</span>
                        <span className="font-sans text-xs font-bold uppercase tracking-wider text-primary flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          Order <ArrowRight size={12} />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── STORY SPLIT ────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16 bg-surface overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
          <motion.div
            {...fadeUp}
            className="relative"
          >
            <div className="absolute -top-6 -left-6 w-full h-full rounded-3xl bg-gradient-to-br from-primary-fixed/40 to-secondary-fixed/30 -rotate-2 pointer-events-none" />
            <img
              src={storyPersonImg}
              alt="Duo Vita lifestyle"
              className="relative w-full aspect-[3/4] object-cover rounded-3xl shadow-xl"
            />
            {/* floating card */}
            <motion.div
              initial={{ opacity: 0, y: 20, x: 20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="absolute -bottom-6 -right-4 md:-right-10 glass-panel rounded-2xl px-6 py-4 shadow-xl"
            >
              <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary mb-0.5">Daily ritual</p>
              <p className="font-serif text-lg font-bold text-on-surface">Balance in every sip.</p>
              <div className="flex items-center gap-1 mt-1">
                {[...Array(5)].map((_,i) => <Star key={i} size={10} className="text-primary fill-primary" />)}
                <span className="font-sans text-[10px] text-on-surface-variant ml-1">Loved by Seoul</span>
              </div>
            </motion.div>
          </motion.div>

          <motion.div {...fadeUp} className="space-y-8">
            <div className="space-y-4">
              <p className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary">Our Story</p>
              <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-on-surface leading-tight">
                We started Duo Vita because we were tired of choosing.
              </h2>
              <div className="w-10 h-0.5 bg-primary" />
            </div>
            <div className="space-y-5 font-sans text-base text-on-surface-variant leading-relaxed">
              <p>Every day presented a false choice: the indulgent café drink that left you feeling guilty, or the bitter green elixir that felt like punishment.</p>
              <p>We believe functional wellness should be an exquisite experience — wrapped in uncompromising taste and designed to fit the rhythm of modern Seoul life.</p>
            </div>
            <blockquote className="border-l-2 border-primary pl-6 py-1">
              <p className="font-serif text-xl italic text-on-surface font-bold">
                "Don't sacrifice joy for health. Integrate them seamlessly."
              </p>
            </blockquote>
            <Link
              to="/story"
              className="inline-flex items-center gap-2 font-sans text-xs font-bold uppercase tracking-wider text-primary border border-primary/40 px-7 py-3.5 rounded-full hover:bg-primary hover:text-on-primary transition-all duration-300"
            >
              Read Our Story <ArrowRight size={14} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ── FOR YOU SEGMENTS ───────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-3">
            <p className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary">Made for you</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-on-surface">Four kinds of people.<br />One answer.</h2>
            <div className="w-10 h-0.5 bg-primary mx-auto mt-4" />
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {segments.map((s, i) => (
              <motion.div
                key={s.num}
                {...fadeUp}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                className="glass-panel rounded-3xl p-8 border-l-4 border-primary/40 hover:border-primary hover:-translate-y-1 transition-all duration-300 group"
              >
                <p className="font-serif text-4xl font-bold italic text-primary/20 group-hover:text-primary/40 transition-colors duration-300 mb-4 leading-none">{s.num}</p>
                <h3 className="font-serif text-lg font-bold text-on-surface mb-3 leading-snug">{s.title}</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{s.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEWSLETTER ─────────────────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16 bg-inverse-surface relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #f2b6c8 0, transparent 40%), radial-gradient(circle at 80% 50%, #ddbbea 0, transparent 40%)'
        }} />
        <div className="max-w-2xl mx-auto text-center space-y-8 relative z-10">
          <motion.div {...fadeUp} className="space-y-4">
            <span className="text-inverse-primary text-2xl">✦</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-inverse-on-surface leading-tight">
              Your wellness ritual<br />starts here.
            </h2>
            <p className="font-sans text-base text-inverse-on-surface/70 leading-relaxed">
              Join the Duo Vita inner circle. New seasonal drinks, functional wellness tips, and member-only rewards.
            </p>
          </motion.div>

          <motion.div {...fadeUp} transition={{ delay: 0.15 }}>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="your@email.com"
                className="flex-1 bg-white/10 backdrop-blur border border-white/20 text-inverse-on-surface placeholder:text-inverse-on-surface/40 rounded-full px-6 py-4 font-sans text-sm outline-none focus:border-inverse-primary transition-colors"
              />
              <button className="bg-inverse-primary text-on-primary-fixed font-sans text-xs font-bold uppercase tracking-wider px-8 py-4 rounded-full hover:opacity-90 hover:-translate-y-0.5 transition-all duration-300 whitespace-nowrap shadow-lg">
                Join Now
              </button>
            </div>
            <p className="font-sans text-xs text-inverse-on-surface/40 mt-4 tracking-wide">
              No spam, only sips. Unsubscribe anytime.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── PRESS BAR ──────────────────────────────────────── */}
      <section className="py-10 px-5 md:px-16 bg-surface border-t border-outline-variant/20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <p className="font-sans text-[10px] font-bold tracking-[0.2em] uppercase text-outline whitespace-nowrap flex-shrink-0">
            As featured in
          </p>
          <div className="w-px h-4 bg-outline-variant hidden md:block flex-shrink-0" />
          <div className="flex flex-wrap justify-center md:justify-start gap-x-10 gap-y-4">
            {pressItems.map(p => (
              <span key={p} className="font-serif text-lg font-bold text-outline-variant/50 hover:text-outline-variant/80 transition-colors duration-300 cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>
    </motion.main>
  );
}
