import React from 'react';
import { motion } from 'motion/react';
import { Search } from 'lucide-react';
import { useCart } from '../context/CartContext';

export default function FindUs() {
  const { openCart } = useCart();

  return (
    <motion.main 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }} 
      exit={{ opacity: 0 }}
      className="flex flex-col md:flex-row h-screen pt-20"
    >
      {/* Left Panel: Location List */}
      <div className="w-full md:w-[42%] h-full overflow-y-auto flex flex-col bg-background relative z-10 custom-scrollbar">
        <div className="px-5 md:px-12 lg:px-16 py-10 flex-grow max-w-2xl mx-auto w-full">
          <h1 className="font-serif text-5xl md:text-6xl text-on-surface font-bold tracking-tight leading-none mb-12">
            Sanctuaries <br/> in Seoul
          </h1>

          {/* Search Input */}
          <div className="relative mb-12 group">
            <Search className="absolute left-0 bottom-3 text-on-surface-variant group-focus-within:text-primary transition-colors w-6 h-6" />
            <input 
              type="text" 
              placeholder="Search by district or neighborhood..." 
              className="w-full bg-transparent border-b border-surface-variant focus:border-primary focus:shadow-[0_10px_20px_rgba(255,194,212,0.15)] outline-none py-3 pl-10 pr-4 font-sans text-lg transition-all text-on-surface placeholder:text-outline-variant"
            />
          </div>

          {/* Locations List */}
          <div className="space-y-6 pb-12">
            {/* Location Card 1: Mapo-Gu */}
            <div className="bg-white/60 backdrop-blur-[20px] border border-white/60 shadow-lg rounded-[2rem] p-8 relative overflow-hidden group hover:bg-white/80 transition-all duration-300 cursor-pointer">
              <div className="absolute top-8 right-8 text-secondary-fixed-dim text-2xl">✦</div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="font-serif text-3xl font-bold text-on-surface">Mapo-Gu</h2>
                <span className="bg-surface-container text-on-surface px-3 py-1 rounded-full font-sans text-xs font-bold uppercase border border-white/50">Open Until 9PM</span>
              </div>
              <p className="font-sans text-base text-on-surface-variant mb-6 w-5/6 leading-relaxed">
                123 Wausan-ro, Mapo-gu<br/>Seoul, South Korea 04054
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#F5F0FF] text-[#573c64] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Collagen Bar</span>
                <span className="bg-[#F5F0FF] text-[#573c64] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Retail</span>
                <span className="bg-[#F5F0FF] text-[#573c64] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Consultation</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openCart}
                  className="bg-gradient-to-r from-primary-container to-secondary-container text-on-surface font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all w-full sm:w-auto text-center"
                >
                  Order Ahead
                </button>
                <a 
                  href="https://maps.google.com/?q=Seoul+Mapo+gu" target="_blank" rel="noreferrer"
                  className="border border-secondary text-secondary rounded-full px-6 py-4 font-sans text-xs font-bold uppercase tracking-[0.12em] hover:bg-secondary/5 active:bg-secondary/10 transition-colors w-full sm:w-auto text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Location Card 2: Gangnam */}
            <div className="bg-white/60 backdrop-blur-[20px] border border-white/60 shadow-lg rounded-[2rem] p-8 relative overflow-hidden group hover:bg-white/80 transition-all duration-300 cursor-pointer">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="font-serif text-3xl font-bold text-on-surface">Gangnam Flagship</h2>
                <span className="bg-surface-container text-on-surface px-3 py-1 rounded-full font-sans text-xs font-bold uppercase border border-white/50">Open Until 10PM</span>
              </div>
              <p className="font-sans text-base text-on-surface-variant mb-6 w-5/6 leading-relaxed">
                456 Apgujeong-ro, Gangnam-gu<br/>Seoul, South Korea 06000
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#F5F0FF] text-[#573c64] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Collagen Bar</span>
                <span className="bg-[#F5F0FF] text-[#573c64] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Lounge</span>
                <span className="bg-[#F5F0FF] text-[#573c64] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Exclusive Menu</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openCart}
                  className="bg-gradient-to-r from-primary-container to-secondary-container text-on-surface font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all w-full sm:w-auto text-center"
                >
                  Order Ahead
                </button>
                <a 
                  href="https://maps.google.com/?q=Seoul+Gangnam+gu" target="_blank" rel="noreferrer"
                  className="border border-secondary text-secondary rounded-full px-6 py-4 font-sans text-xs font-bold uppercase tracking-[0.12em] hover:bg-secondary/5 active:bg-secondary/10 transition-colors w-full sm:w-auto text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>
            
            {/* Location Card 3: Hongdae Express */}
            <div className="bg-white/60 backdrop-blur-[20px] border border-white/60 shadow-lg rounded-[2rem] p-8 relative overflow-hidden group hover:bg-white/80 transition-all duration-300 cursor-pointer">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="font-serif text-3xl font-bold text-on-surface">Hongdae Express</h2>
                <span className="bg-surface-variant text-on-surface-variant px-3 py-1 rounded-full font-sans text-xs font-bold uppercase border border-white/50">Closes in 30m</span>
              </div>
              <p className="font-sans text-base text-on-surface-variant mb-6 w-5/6 leading-relaxed">
                 789 Hongik-ro, Mapo-gu<br/>Seoul, South Korea 04000
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                <span className="bg-[#F5F0FF] text-[#573c64] px-4 py-1.5 rounded-full font-sans text-xs font-bold uppercase">Grab & Go</span>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={openCart}
                  className="bg-gradient-to-r from-primary-container to-secondary-container text-on-surface font-sans text-xs font-bold uppercase tracking-widest px-6 py-4 rounded-full hover:shadow-lg hover:-translate-y-0.5 active:scale-95 transition-all w-full sm:w-auto text-center"
                >
                  Order Ahead
                </button>
                <a 
                  href="https://maps.google.com/?q=Hongik+University+Seoul" target="_blank" rel="noreferrer"
                  className="border border-secondary text-secondary rounded-full px-6 py-4 font-sans text-xs font-bold uppercase tracking-[0.12em] hover:bg-secondary/5 active:bg-secondary/10 transition-colors w-full sm:w-auto text-center"
                >
                  Get Directions
                </a>
              </div>
            </div>

            {/* Location Card 4: Seongsu (Coming Soon) */}
            <div className="bg-surface-container-low/40 border border-white/20 rounded-[2rem] p-8 relative overflow-hidden opacity-70 cursor-not-allowed">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <h2 className="font-serif text-3xl font-bold text-on-surface-variant">Seongsu-dong</h2>
                <span className="bg-surface-dim text-on-surface-variant px-3 py-1 rounded-full font-sans text-xs font-bold uppercase">Coming Soon</span>
              </div>
              <p className="font-sans text-base text-on-surface-variant mb-2 w-5/6 leading-relaxed">
                 Seongsu-il-ro, Seongdong-gu<br/>Seoul, South Korea
              </p>
              <p className="font-sans text-base text-primary opacity-80 italic">Opening Fall 2024</p>
            </div>
            
          </div>
        </div>
      </div>

      {/* Right Panel: Map */}
      <div className="hidden md:block w-[58%] h-full sticky top-20 bg-surface-container-high relative overflow-hidden">
        {/* Soft, minimal map placeholder gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/40 via-surface-dim to-primary-container/20"></div>
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(circle at 40% 40%, rgba(255, 255, 255, 0.4) 0%, transparent 40%), radial-gradient(circle at 70% 60%, rgba(255, 194, 212, 0.3) 0%, transparent 40%)' }}></div>
        
        <div className="absolute inset-0 pointer-events-none p-12">
          {/* Pins wrapper */}
          <div className="relative w-full h-full">

            {/* Pin: Mapo-Gu */}
            <div className="absolute top-[40%] left-[30%] flex flex-col items-center group cursor-pointer pointer-events-auto">
              <div className="w-8 h-8 bg-gradient-to-br from-primary-container to-secondary-container rounded-full flex items-center justify-center shadow-lg border-2 border-white transform transition-transform group-hover:scale-110">
                <div className="w-2 h-2 bg-on-surface rounded-full"></div>
              </div>
              <div className="mt-3 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-on-surface font-sans text-[10px] font-bold uppercase tracking-widest shadow-md border border-white/50 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                MAPO-GU
              </div>
            </div>

            {/* Pin: Gangnam */}
            <div className="absolute top-[65%] left-[55%] flex flex-col items-center group cursor-pointer pointer-events-auto">
              <div className="w-12 h-12 bg-gradient-to-br from-primary-container to-secondary-container rounded-full flex items-center justify-center shadow-lg border-2 border-white transform transition-transform group-hover:scale-110 z-10">
                <span className="text-on-surface text-xl">✦</span>
              </div>
              <div className="mt-3 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-on-surface font-sans text-[10px] font-bold uppercase tracking-widest shadow-md border border-white/50">
                GANGNAM FLAGSHIP
              </div>
            </div>

             {/* Pin: Hongdae */}
             <div className="absolute top-[38%] left-[26%] flex flex-col items-center group cursor-pointer pointer-events-auto">
              <div className="w-6 h-6 bg-surface border-2 border-primary-container rounded-full flex items-center justify-center shadow-md transform transition-transform group-hover:scale-110">
              </div>
              <div className="mt-2 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-on-surface font-sans text-[10px] font-bold uppercase tracking-widest shadow-md border border-white/50 opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                HONGDAE
              </div>
            </div>

          </div>
        </div>
      </div>
    </motion.main>
  );
}
