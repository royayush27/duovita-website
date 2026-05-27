import { trackEvent } from '../utils/tracking';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowLeft, Heart, Droplets, Leaf } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';

import matchaCoffeeImg from '../assets/images/duo_cup_coffee_matcha_1779329655007.png';

export default function Product() {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [size, setSize] = useState('Regular Duo');
  const [milkOption, setMilkOption] = useState('Oat Milk');
  const [addons, setAddons] = useState<string[]>([]);

  const toggleAccordion = (id: string) => {
    const nextValue = openAccordion === id ? null : id;
    setOpenAccordion(nextValue);
    trackEvent({
      eventType: nextValue ? 'accordion_opened' : 'accordion_closed',
      itemId: 'the-clarity-duo',
      itemName: 'The Clarity Duo',
      eventValue: id,
    });
  };

  const toggleAddon = (addon: string) => {
    const isRemoving = addons.includes(addon);
    setAddons(prev => isRemoving ? prev.filter(a => a !== addon) : [...prev, addon]);
    trackEvent({
      eventType: isRemoving ? 'addon_removed' : 'addon_added',
      itemId: 'the-clarity-duo',
      itemName: 'The Clarity Duo',
      eventValue: addon,
      metadata: { currentSize: size, currentMilk: milkOption },
    });
  };

  const calculatePrice = () => {
    let price = 8500;
    if (size === 'Large Duo') price += 1500;
    if (addons.includes('Extra Shot Espresso')) price += 1000;
    if (addons.includes('Extra Ceremonial Matcha')) price += 2000;
    return price;
  };

  const handleAddToCart = () => {
    const options: Record<string, string> = {
      Size: size,
      Milk: milkOption,
    };
    if (addons.length > 0) {
      options['Add-ons'] = addons.join(', ');
    }

    trackEvent({
      eventType: 'product_add_to_cart',
      itemId: 'the-clarity-duo',
      itemName: 'The Clarity Duo',
      itemCategory: 'SPLIT COMPARTMENT',
      eventValue: calculatePrice().toString(),
      metadata: { size, milkOption, addons, price: calculatePrice(), source: 'product_page' },
    });

    addToCart({
      id: 'the-clarity-duo',
      name: 'The Clarity Duo',
      price: calculatePrice(),
      quantity: 1,
      image: matchaCoffeeImg,
      options,
    });
  };

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex-grow pt-28 pb-32 px-5 md:px-16 max-w-7xl mx-auto w-full"
    >
      <div className="mb-8 flex items-center justify-between">
        <Link to="/menu" className="flex items-center gap-2 text-on-surface-variant hover:text-primary transition-colors font-sans text-xs font-bold uppercase tracking-widest">
          <ArrowLeft size={16} />
          BACK TO MENU
        </Link>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
        {/* Left Column: Sticky Image Gallery */}
        <div className="lg:col-span-6 relative">
          <div className="lg:sticky lg:top-32 space-y-4">
            <div className="w-full aspect-square rounded-[2rem] overflow-hidden glass-card relative group shadow-sm bg-white/50">
              <img
                src={matchaCoffeeImg}
                alt="The Clarity Duo"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply"
              />
              <button
                onClick={() =>
                  trackEvent({
                    eventType: 'favorite_clicked',
                    itemId: 'the-clarity-duo',
                    itemName: 'The Clarity Duo',
                  })
                }
                className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md rounded-full p-3 text-primary shadow-sm hover:scale-110 active:scale-95 transition-transform"
              >
                <Heart size={20} className="fill-current" />
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 pt-2">
              <button className="w-24 h-24 flex-shrink-0 rounded-[1.25rem] overflow-hidden border-2 border-primary shadow-sm bg-white/50">
                <img src={matchaCoffeeImg} alt="Thumbnail 1" className="w-full h-full object-cover mix-blend-multiply" />
              </button>
            </div>
          </div>
        </div>

        {/* Right Column: Details */}
        <div className="lg:col-span-6 flex flex-col space-y-8 lg:pl-8 mt-8 lg:mt-0">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary mb-2">SPLIT COMPARTMENT</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-on-surface mb-4">The Clarity Duo</h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              <span className="bg-[#E6E1DC] text-[#4A3D35] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">L-Theanine</span>
              <span className="bg-[#E6E1DC] text-[#4A3D35] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Lion's Mane</span>
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest">DUO VITA EXCLUSIVE</span>
            </div>

            <p className="font-serif text-3xl font-bold text-primary mb-6">₩{calculatePrice().toLocaleString()}</p>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
              Why choose when you can experience both? The left compartment holds our slow-dripped Ethiopian Cold Brew, infused with Lion's Mane for sharp focus. The right compartment offers Ceremonial Grade Matcha enriched with L-Theanine for a jitter-free, grounded calm. Sip alternately to find your ultimate flow state.
            </p>
          </div>

          <hr className="border-outline-variant/30" />

          {/* Config Options */}
          <div className="space-y-8">
            <div>
              <h3 className="font-sans text-xs font-bold uppercase text-on-surface mb-4">DUO SIZE</h3>
              <div className="grid grid-cols-2 gap-4">
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value="Regular Duo"
                    checked={size === 'Regular Duo'}
                    onChange={(e) => {
                      setSize(e.target.value);
                      trackEvent({ eventType: 'size_selected', itemId: 'the-clarity-duo', itemName: 'The Clarity Duo', eventValue: e.target.value });
                    }}
                    className="peer sr-only"
                  />
                  <div className="glass-card rounded-2xl p-4 text-center border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                    <span className="font-sans text-base block text-on-surface">Regular Duo</span>
                    <span className="font-sans text-xs font-bold uppercase text-on-surface-variant block mt-1">16 oz (8oz/8oz)</span>
                  </div>
                </label>
                <label className="cursor-pointer">
                  <input
                    type="radio"
                    name="size"
                    value="Large Duo"
                    checked={size === 'Large Duo'}
                    onChange={(e) => {
                      setSize(e.target.value);
                      trackEvent({ eventType: 'size_selected', itemId: 'the-clarity-duo', itemName: 'The Clarity Duo', eventValue: e.target.value });
                    }}
                    className="peer sr-only"
                  />
                  <div className="glass-card rounded-2xl p-4 text-center border-2 border-transparent peer-checked:border-primary peer-checked:bg-primary/5 transition-all">
                    <span className="font-sans text-base block text-on-surface">Large Duo</span>
                    <span className="font-sans text-xs font-bold uppercase text-on-surface-variant block mt-1">24 oz (+₩1,500)</span>
                  </div>
                </label>
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-bold uppercase text-on-surface mb-4">MILK PREFERENCE (MATCHA SIDE)</h3>
              <div className="flex flex-wrap gap-4">
                {['Oat Milk', 'Whole Milk', 'Almond Milk'].map(milk => (
                  <label key={milk} className="flex items-center gap-3 cursor-pointer p-3 glass-card rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all flex-1 min-w-[120px] justify-center">
                    <input
                      type="radio"
                      name="milk"
                      value={milk}
                      checked={milkOption === milk}
                      onChange={(e) => {
                        setMilkOption(e.target.value);
                        trackEvent({ eventType: 'milk_selected', itemId: 'the-clarity-duo', itemName: 'The Clarity Duo', eventValue: e.target.value });
                      }}
                      className="sr-only peer"
                    />
                    <span className="font-sans text-sm text-on-surface peer-checked:text-primary peer-checked:font-bold">{milk}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-bold uppercase text-on-surface mb-4">COMPARTMENT ADD-ONS</h3>
              <div className="space-y-3">
                <label className="flex items-center justify-between p-4 glass-card rounded-2xl cursor-pointer hover:bg-white/40 transition-colors border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" checked={addons.includes('Extra Shot Espresso')} onChange={() => toggleAddon('Extra Shot Espresso')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-transparent" />
                    <span className="font-sans text-base text-on-surface">Extra Shot Espresso (Left)</span>
                  </div>
                  <span className="font-sans text-base text-on-surface-variant">+₩1,000</span>
                </label>
                <label className="flex items-center justify-between p-4 glass-card rounded-2xl cursor-pointer hover:bg-white/40 transition-colors border border-transparent hover:border-primary/20">
                  <div className="flex items-center gap-4">
                    <input type="checkbox" checked={addons.includes('Extra Ceremonial Matcha')} onChange={() => toggleAddon('Extra Ceremonial Matcha')} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-transparent" />
                    <span className="font-sans text-base text-on-surface">Extra Ceremonial Matcha (Right)</span>
                  </div>
                  <span className="font-sans text-base text-on-surface-variant">+₩2,000</span>
                </label>
              </div>
            </div>
          </div>

          <div className="pt-4 sticky bottom-4 lg:static z-40">
            <button
              onClick={handleAddToCart}
              className="w-full btn-gradient rounded-[1.5rem] py-5 px-8 flex items-center justify-between shadow-lg hover:shadow-xl active:scale-[0.99] transition-all"
            >
              <span className="font-serif text-2xl font-bold tracking-wide">Add Duo to Order</span>
              <span className="font-serif text-2xl font-bold">₩{calculatePrice().toLocaleString()}</span>
            </button>
          </div>

          <div className="mt-12 space-y-4">
            <h3 className="font-serif text-2xl font-bold text-on-surface mb-6">What's Inside</h3>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <button
                onClick={() => toggleAccordion('lionsmane')}
                className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Droplets className="text-primary w-6 h-6" />
                  <span className="font-sans text-lg font-semibold text-on-surface">Lion's Mane Extract (Espresso Side)</span>
                </div>
                <ChevronDown className={`text-on-surface-variant transition-transform duration-300 ${openAccordion === 'lionsmane' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openAccordion === 'lionsmane' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-on-surface-variant font-sans text-base leading-relaxed">
                      A powerful adaptogenic mushroom known for stimulating nerve growth factor (NGF), enhancing memory, and providing sustained cognitive energy.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <div className="glass-card rounded-[2rem] overflow-hidden">
              <button
                onClick={() => toggleAccordion('theanine')}
                className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/40 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <Leaf className="text-secondary w-6 h-6" />
                  <span className="font-sans text-lg font-semibold text-on-surface">L-Theanine & Matcha (Right Side)</span>
                </div>
                <ChevronDown className={`text-on-surface-variant transition-transform duration-300 ${openAccordion === 'theanine' ? 'rotate-180' : ''}`} />
              </button>
              <AnimatePresence>
                {openAccordion === 'theanine' && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 pt-0 text-on-surface-variant font-sans text-base leading-relaxed">
                      Matcha naturally contains high levels of L-Theanine, an amino acid that promotes an alpha-brainwave state, counteracting espresso jitters with smooth, sustained calm.
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </motion.main>
  );
}
