import React from 'react';

export function Logo({ className = '', variant = 'full' }: { className?: string; variant?: 'full' | 'nav' }) {
  if (variant === 'nav') {
    return (
      <div className={`flex items-center gap-3 ${className}`}>
        <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="logoGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#A28FCD" />
              <stop offset="50%" stopColor="#DFA6AD" />
              <stop offset="100%" stopColor="#D58E73" />
            </linearGradient>
          </defs>
          <g stroke="url(#logoGradient)" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
            {/* Left Leaf Body */}
            <path d="M 50 80 C 20 85 10 40 25 15 C 45 20 60 55 50 80 Z" />
            {/* Left Leaf Vein */}
            <path d="M 25 15 C 35 40 45 60 50 80" />
            {/* Right Bean Body */}
            <path d="M 50 80 C 80 85 90 40 75 15 C 55 20 40 55 50 80 Z" />
            {/* Right Bean S-Curve */}
            <path d="M 75 15 C 60 30 75 55 50 80" />
          </g>
        </svg>
        <span 
          className="font-serif text-2xl tracking-tight leading-none"
          style={{ 
            background: 'linear-gradient(90deg, #9683BA 0%, #A46973 50%, #9F543C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            filter: 'drop-shadow(0px 1px 1px rgba(0,0,0,0.1))'
          }}
        >
          DuoVita
        </span>
      </div>
    );
  }

  return (
    <div className={`flex flex-col items-center justify-center ${className}`}>
      {/* Icon portion */}
      <svg width="80" height="80" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3">
        <defs>
          <linearGradient id="logoGradientLarge" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#A28FCD" />
            <stop offset="50%" stopColor="#DFA6AD" />
            <stop offset="100%" stopColor="#D58E73" />
          </linearGradient>
        </defs>
        <g stroke="url(#logoGradientLarge)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
          {/* Left Leaf Body */}
          <path d="M 50 80 C 20 85 10 40 25 15 C 45 20 60 55 50 80 Z" />
          {/* Left Leaf Vein */}
          <path d="M 25 15 C 35 40 45 60 50 80" />
          {/* Right Bean Body */}
          <path d="M 50 80 C 80 85 90 40 75 15 C 55 20 40 55 50 80 Z" />
          {/* Right Bean S-Curve */}
          <path d="M 75 15 C 60 30 75 55 50 80" />
        </g>
      </svg>
      {/* Text portion */}
      <div className="flex flex-col items-center">
        <h1 
          className="font-serif text-5xl tracking-tight leading-none mb-2"
          style={{ 
            background: 'linear-gradient(90deg, #9683BA 0%, #A46973 50%, #9F543C 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          }}
        >
          DuoVita
        </h1>
        <p className="font-sans text-[8px] font-bold tracking-[0.3em] text-[#8C5C4A] mt-2 text-center">
          NOURISH. INDULGE. THRIVE.
        </p>
        <p className="font-sans text-[7px] font-bold tracking-[0.2em] text-[#A46973] mt-1 text-center flex items-center justify-center gap-1 opacity-80">
          INTEGRATED WELLNESS CAFE
          <svg width="6" height="6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#A46973]">
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
        </p>
      </div>
    </div>
  );
}
