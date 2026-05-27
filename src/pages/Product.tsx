import { trackEvent } from '../utils/tracking';
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronDown, ArrowLeft, Heart, Droplets, Leaf } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { getProductById } from '../data/menu';

export default function Product() {
  const { productId } = useParams();
  const product = getProductById(productId);
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const { addToCart } = useCart();
  const [size, setSize] = useState('Regular Duo');
  const [milkOption, setMilkOption] = useState(product?.milkOptions[0] ?? '');
  const [addons, setAddons] = useState<string[]>([]);

  useEffect(() => {
    if (!product) return;

    setOpenAccordion(null);
    setSize('Regular Duo');
    setMilkOption(product.milkOptions[0] ?? '');
    setAddons([]);
  }, [product?.id]);

  if (!product) {
    return <Navigate to="/menu" replace />;
  }

  const selectedAddons = product.addons.filter((addon) => addons.includes(addon.name));

  const toggleAccordion = (id: string) => {
    const nextValue = openAccordion === id ? null : id;
    setOpenAccordion(nextValue);
    trackEvent({
      eventType: nextValue ? 'accordion_opened' : 'accordion_closed',
      itemId: product.id,
      itemName: product.name,
      eventValue: id,
    });
  };

  const toggleAddon = (addon: string) => {
    const isRemoving = addons.includes(addon);
    setAddons(prev => isRemoving ? prev.filter(a => a !== addon) : [...prev, addon]);
    trackEvent({
      eventType: isRemoving ? 'addon_removed' : 'addon_added',
      itemId: product.id,
      itemName: product.name,
      eventValue: addon,
      metadata: { currentSize: size, currentMilk: milkOption },
    });
  };

  const calculatePrice = () => {
    let price = product.price;
    if (size === 'Large Duo') price += 1500;
    selectedAddons.forEach((addon) => {
      price += addon.price;
    });
    return price;
  };

  const handleAddToCart = () => {
    const options: Record<string, string> = {
      Size: size,
    };

    if (milkOption) {
      options[product.milkLabel.replace(/\s*\([^)]*\)/g, '')] = milkOption;
    }

    if (addons.length > 0) {
      options['Add-ons'] = addons.join(', ');
    }

    trackEvent({
      eventType: 'product_add_to_cart',
      itemId: product.id,
      itemName: product.name,
      itemCategory: product.category,
      eventValue: calculatePrice().toString(),
      metadata: { size, milkOption, addons, price: calculatePrice(), source: 'product_page' },
    });

    addToCart({
      id: product.id,
      name: product.name,
      price: calculatePrice(),
      quantity: 1,
      image: product.image,
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
        <div className="lg:col-span-6 relative">
          <div className="lg:sticky lg:top-32 space-y-4">
            <div className="w-full aspect-square rounded-[2rem] overflow-hidden glass-card relative group shadow-sm bg-white/50">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply"
              />
              <button
                onClick={() =>
                  trackEvent({
                    eventType: 'favorite_clicked',
                    itemId: product.id,
                    itemName: product.name,
                  })
                }
                className="absolute top-4 right-4 bg-surface/80 backdrop-blur-md rounded-full p-3 text-primary shadow-sm hover:scale-110 active:scale-95 transition-transform"
              >
                <Heart size={20} className="fill-current" />
              </button>
            </div>
            <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2 pt-2">
              <button className="w-24 h-24 flex-shrink-0 rounded-[1.25rem] overflow-hidden border-2 border-primary shadow-sm bg-white/50">
                <img src={product.image} alt={`${product.name} thumbnail`} className="w-full h-full object-cover mix-blend-multiply" />
              </button>
            </div>
          </div>
        </div>

        <div className="lg:col-span-6 flex flex-col space-y-8 lg:pl-8 mt-8 lg:mt-0">
          <div>
            <p className="font-sans text-xs font-bold uppercase tracking-[0.15em] text-secondary mb-2">{product.category}</p>
            <h1 className="font-serif text-4xl lg:text-5xl font-bold text-on-surface mb-4">{product.name}</h1>

            <div className="flex flex-wrap items-center gap-3 mb-6">
              {product.badges.map((badge) => (
                <span key={badge} className="bg-[#E6E1DC] text-[#4A3D35] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">
                  {badge}
                </span>
              ))}
              <span className="bg-primary/10 text-primary px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase tracking-widest">DUO VITA EXCLUSIVE</span>
            </div>

            <p className="font-serif text-3xl font-bold text-primary mb-6">₩{calculatePrice().toLocaleString()}</p>
            <p className="font-sans text-lg text-on-surface-variant leading-relaxed">
              {product.detailDescription}
            </p>
          </div>

          <hr className="border-outline-variant/30" />

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
                      trackEvent({ eventType: 'size_selected', itemId: product.id, itemName: product.name, eventValue: e.target.value });
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
                      trackEvent({ eventType: 'size_selected', itemId: product.id, itemName: product.name, eventValue: e.target.value });
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
              <h3 className="font-sans text-xs font-bold uppercase text-on-surface mb-4">{product.milkLabel}</h3>
              <div className="flex flex-wrap gap-4">
                {product.milkOptions.map(option => (
                  <label key={option} className="flex items-center gap-3 cursor-pointer p-3 glass-card rounded-2xl border-2 border-transparent hover:border-primary/30 transition-all flex-1 min-w-[120px] justify-center">
                    <input
                      type="radio"
                      name="milk"
                      value={option}
                      checked={milkOption === option}
                      onChange={(e) => {
                        setMilkOption(e.target.value);
                        trackEvent({ eventType: 'milk_selected', itemId: product.id, itemName: product.name, eventValue: e.target.value });
                      }}
                      className="sr-only peer"
                    />
                    <span className="font-sans text-sm text-on-surface peer-checked:text-primary peer-checked:font-bold">{option}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-sans text-xs font-bold uppercase text-on-surface mb-4">COMPARTMENT ADD-ONS</h3>
              <div className="space-y-3">
                {product.addons.map((addon) => (
                  <label key={addon.name} className="flex items-center justify-between p-4 glass-card rounded-2xl cursor-pointer hover:bg-white/40 transition-colors border border-transparent hover:border-primary/20">
                    <div className="flex items-center gap-4">
                      <input type="checkbox" checked={addons.includes(addon.name)} onChange={() => toggleAddon(addon.name)} className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary bg-transparent" />
                      <span className="font-sans text-base text-on-surface">{addon.name}</span>
                    </div>
                    <span className="font-sans text-base text-on-surface-variant">+₩{addon.price.toLocaleString()}</span>
                  </label>
                ))}
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

            {product.inside.map((inside, index) => {
              const Icon = index % 2 === 0 ? Droplets : Leaf;

              return (
                <div key={inside.title} className="glass-card rounded-[2rem] overflow-hidden">
                  <button
                    onClick={() => toggleAccordion(inside.title)}
                    className="w-full flex items-center justify-between p-6 cursor-pointer hover:bg-white/40 transition-colors"
                  >
                    <div className="flex items-center gap-4">
                      <Icon className={`${index % 2 === 0 ? 'text-primary' : 'text-secondary'} w-6 h-6`} />
                      <span className="font-sans text-lg font-semibold text-on-surface">{inside.title}</span>
                    </div>
                    <ChevronDown className={`text-on-surface-variant transition-transform duration-300 ${openAccordion === inside.title ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {openAccordion === inside.title && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-6 pt-0 text-on-surface-variant font-sans text-base leading-relaxed">
                          {inside.body}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </motion.main>
  );
}
