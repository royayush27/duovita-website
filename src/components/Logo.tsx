import React from 'react';
import logo from '../assets/images/website-logo.png';

export function Logo({className = '', variant = 'full',})
{
  if (variant === 'nav') {
    return(<div className={`flex items-center ${className}`}>
        <img
          src={logo}
          alt="DuoVita"
          className="h-14 w-auto object-contain"
        />
      </div>);
  }
  return(<div className={`flex items-center justify-center ${className}`}>
      <img
        src={logo}
        alt="DuoVita"
        className="w-full max-w-[380px] h-auto object-contain"
      />
    </div>);
}
