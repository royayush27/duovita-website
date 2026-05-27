import React from 'react';
import { motion } from 'motion/react';
import { TestTube2, Sprout, Coffee, Star } from 'lucide-react';
import storyProductImage from '../assets/images/story_person_drinking_duo_1779329710122.png';
import storyImg2 from '../assets/images/story_product_1779328645480.png';
import matchaCoffeeImg from '../assets/images/duo_cup_coffee_matcha_1779329655007.png';
import milkteaCollagenImg from '../assets/images/duo_cup_milktea_collagen_1779329673545.png';

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] },
};

const pillars = [
  {
    num: '01',
    title: 'No Compromise',
    body: 'The wellness industry has convinced us that healthy things must taste medicinal. We rejected that premise entirely. Every Duo Vita formula is tested to taste indulgent first. The function follows.',
    img: matchaCoffeeImg,
    imgAlt: 'Cold brew and matcha side by side',
  },
  {
    num: '02',
    title: 'Science + Beauty',
    body: 'We partner with Korean dermatologists and functional nutritionists — not trend forecasters. Our ingredient selection is evidence-based. Our flavour profiles are joy-based. Both matter equally.',
    img: storyImg2,
    imgAlt: 'Duo Vita product apothecary style',
  },
  {
    num: '03',
    title: 'Seoul, Always',
    body: 'Duo Vita is a Seoul brand. Our flavours take inspiration from Korean seasons, our aesthetic from Korean café culture, our values from a generation that refuses to see self-care as a luxury.',
    img: milkteaCollagenImg,
    imgAlt: 'Seoul Blossom duo cup',
  },
];

export default function Story() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow pt-20"
    >
      {/* ── HERO STATEMENT ─────────────────────────── */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-5 md:px-16 text-center overflow-hidden" style={{ background: 'linear-gradient(160deg, #ffd9e3 0%, #f6d9ff 55%, #e7deff 100%)' }}>
        <div className="absolute top-1/4 left-1/4 w-80 h-80 bg-primary-fixed/30 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-tertiary-container/40 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-4xl z-10 space-y-8">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-secondary"
          >
            Our Story
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
            className="font-serif text-5xl md:text-7xl font-bold italic text-on-surface leading-tight tracking-tight"
          >
            We started Duo Vita because we were tired of choosing.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="font-sans text-xl text-on-surface-variant max-w-2xl mx-auto leading-relaxed"
          >
            The tension between indulgence and health should never require a compromise.
          </motion.p>
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="w-16 h-0.5 bg-primary mx-auto origin-left"
          />
        </div>
      </section>

      {/* ── FOUNDER NOTE ───────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-12 gap-12 items-center">
          <motion.div {...fadeUp} className="md:col-span-5 relative group">
            <div className="absolute -top-4 -left-4 w-full h-full rounded-3xl bg-gradient-to-tr from-primary-fixed/40 to-secondary-fixed/20 -rotate-1 pointer-events-none transition-transform duration-500 group-hover:rotate-0" />
            <img
              src={storyProductImage}
              alt="Our Story"
              className="relative w-full h-[500px] md:h-[600px] object-cover rounded-3xl shadow-xl"
            />
          </motion.div>
          <div className="hidden md:block md:col-span-1" />

          <motion.div {...fadeUp} className="md:col-span-6 space-y-8 glass-panel p-8 md:p-12 rounded-[2rem]">
            <span className="font-sans text-xs font-bold text-primary tracking-[0.18em] uppercase">The Genesis</span>
            <h2 className="font-serif text-3xl md:text-4xl font-bold italic text-on-surface">A Note from Seoul</h2>
            <div className="w-8 h-0.5 bg-primary" />
            <div className="space-y-5 font-sans text-base text-on-surface-variant leading-relaxed">
              <p>We spent years navigating the high-pressure rhythm of modern Seoul life. We loved the ritual of the café — the aroma, the pause, the decadent escape. But we also demanded more from our bodies.</p>
              <p>Every day presented a false choice: the indulgent latte that left us sluggish, or the bitter green elixir that felt like punishment. The wellness industry told us to strip away pleasure; café culture ignored our nutritional needs.</p>
              <p>Duo Vita was born in a quiet corner of Hannam-dong, out of a desire to bridge this gap. We believe that true functional wellness should be an exquisite experience — scientifically-backed ingredients wrapped in uncompromising taste.</p>
            </div>
            <blockquote className="pt-6 border-t border-outline-variant/30 flex items-start gap-5">
              <span className="font-serif text-5xl text-primary/25 leading-none mt-1 select-none">"</span>
              <p className="font-serif text-xl italic text-on-surface font-bold">Don't sacrifice joy for health. Integrate them seamlessly.</p>
            </blockquote>
            <p className="font-serif italic text-on-surface-variant text-base pl-10">— The Founders, Duo Vita</p>
          </motion.div>
        </div>
      </section>

      {/* ── BRAND PILLARS (alternating) ────────────── */}
      <section className="bg-surface-container-low py-24 md:py-32 px-5 md:px-16">
        <div className="max-w-7xl mx-auto space-y-6 mb-20 text-center">
          <motion.div {...fadeUp} className="space-y-3">
            <p className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary">What we stand for</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-on-surface">Three commitments.<br />No exceptions.</h2>
            <div className="w-10 h-0.5 bg-primary mx-auto mt-4" />
          </motion.div>
        </div>
        <div className="max-w-7xl mx-auto space-y-24">
          {pillars.map((pillar, i) => (
            <motion.div
              key={pillar.num}
              {...fadeUp}
              transition={{ duration: 0.7, delay: 0.1 }}
              className={`grid md:grid-cols-2 gap-12 md:gap-20 items-center ${i % 2 === 1 ? 'md:[direction:rtl]' : ''}`}
            >
              <div className={`relative ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <div className={`absolute -top-4 ${i % 2 === 0 ? '-left-4' : '-right-4'} w-full h-full rounded-3xl bg-gradient-to-br from-primary-fixed/30 to-secondary-fixed/20 ${i % 2 === 0 ? '-rotate-1' : 'rotate-1'} pointer-events-none`} />
                <img
                  src={pillar.img}
                  alt={pillar.imgAlt}
                  className="relative w-full aspect-[4/3] object-cover rounded-3xl shadow-lg"
                />
              </div>
              <div className={`space-y-6 ${i % 2 === 1 ? 'md:[direction:ltr]' : ''}`}>
                <p className="font-serif text-6xl font-bold italic text-primary/15 leading-none">{pillar.num}</p>
                <h3 className="font-serif text-3xl md:text-4xl font-bold italic text-on-surface -mt-4">{pillar.title}</h3>
                <div className="w-8 h-0.5 bg-primary" />
                <p className="font-sans text-base text-on-surface-variant leading-relaxed">{pillar.body}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── YUNA PERSONA ──────────────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16 bg-surface">
        <div className="max-w-7xl mx-auto">
          <motion.div {...fadeUp} className="text-center mb-16 space-y-3">
            <p className="font-sans text-xs font-bold tracking-[0.18em] uppercase text-secondary">Who we made this for</p>
            <h2 className="font-serif text-3xl md:text-5xl font-bold italic text-on-surface">Meet Yuna.</h2>
            <div className="w-10 h-0.5 bg-primary mx-auto" />
          </motion.div>

          <motion.div {...fadeUp} className="glass-panel rounded-[2.5rem] overflow-hidden grid md:grid-cols-5">
            {/* Image */}
            <div className="md:col-span-2 aspect-[3/4] md:aspect-auto overflow-hidden bg-gradient-to-br from-primary-fixed/50 to-secondary-fixed/30 relative">
              <img src={storyProductImage} alt="Yuna — Duo Vita customer" className="w-full h-full object-cover object-top" />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-on-surface/60 to-transparent">
                <p className="font-serif text-2xl font-bold italic text-white">Yuna Kim</p>
                <p className="font-sans text-sm text-white/80">28 · Junior Marketing Executive</p>
              </div>
            </div>

            {/* Info */}
            <div className="md:col-span-3 p-10 md:p-14 flex flex-col justify-between gap-8">
              <div className="grid grid-cols-2 gap-4">
                {[
                  { label: 'Location', value: 'Mapo-Gu → Gangnam' },
                  { label: 'Income', value: 'KRW 3.4M / month' },
                  { label: 'Café visits', value: '3–4 times / week' },
                  { label: 'Identity', value: 'Image-conscious · Health-aware' },
                ].map(stat => (
                  <div key={stat.label} className="bg-surface-container/60 rounded-2xl p-4">
                    <p className="font-sans text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">{stat.label}</p>
                    <p className="font-sans text-sm font-bold text-on-surface">{stat.value}</p>
                  </div>
                ))}
              </div>

              <div>
                <p className="font-sans text-xs font-bold uppercase tracking-widest text-secondary mb-5">Her Pain Points</p>
                <div className="space-y-3">
                  {[
                    'Must often choose between a tasty café drink and a healthier option.',
                    'Finds supplements too clinical, easy to forget, and hard to turn into a habit.',
                    'Wants convenience, variety, and a wellness option that fits her daily rhythm.',
                  ].map((pain, i) => (
                    <div key={i} className="flex items-start gap-4 glass-card rounded-2xl p-4">
                      <span className="font-serif text-lg font-bold italic text-primary/40 flex-shrink-0 w-6 leading-snug">0{i + 1}</span>
                      <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{pain}</p>
                    </div>
                  ))}
                </div>
              </div>

              <blockquote className="border-l-2 border-primary pl-5">
                <p className="font-serif text-lg font-bold italic text-on-surface">
                  "Duo Vita is the answer Yuna never had to ask for twice."
                </p>
              </blockquote>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── POSITIONING STATEMENT ────────────────── */}
      <section className="py-24 md:py-32 px-5 md:px-16 bg-inverse-surface text-inverse-on-surface text-center relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-10" style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, #f2b6c8 0, transparent 40%), radial-gradient(circle at 80% 50%, #ddbbea 0, transparent 40%)'
        }} />

        <motion.div {...fadeUp} className="max-w-4xl mx-auto space-y-10 relative z-10">
          <span className="text-2xl select-none">✦</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold italic leading-tight">
            Own the space between indulgent café pleasure and integrated functional wellness.
          </h2>
          <div className="flex flex-wrap justify-center gap-4 pt-2">
            {[
              { icon: <TestTube2 className="w-4 h-4" />, label: '16.3M MZ Consumers in Korea' },
              { icon: <Sprout className="w-4 h-4" />, label: '7.8× Zero-Drink Growth' },
              { icon: <Coffee className="w-4 h-4" />, label: '₩7.59B → ₩16.89B K-Beauty Market' },
            ].map(({ icon, label }) => (
              <span key={label} className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-inverse-on-surface/10 text-inverse-primary font-sans text-xs font-bold uppercase tracking-wider border border-inverse-primary/30">
                {icon} {label}
              </span>
            ))}
          </div>
        </motion.div>
      </section>
    </motion.main>
  );
}
