import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, X, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useCart } from '../context/CartContext';
import { Logo } from './Logo';

export function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

export function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [scrolled, setScrolled] = React.useState(false);
  const { openCart, items } = useCart();
  const cartCount = items.reduce((sum, i) => sum + i.quantity, 0);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Menu', path: '/menu' },
    { name: 'Our Story', path: '/story' },
    { name: 'Find Us', path: '/find-us' },
  ];

  return (
    <nav className={cn(
      'fixed top-0 w-full z-50 backdrop-blur-xl border-b transition-all duration-300',
      scrolled
        ? 'bg-surface/92 border-primary/10 shadow-sm'
        : 'bg-surface/75 border-white/30'
    )}>
      <div className={cn(
        'flex justify-between items-center w-full px-5 md:px-16 max-w-7xl mx-auto transition-all duration-300',
        scrolled ? 'h-16' : 'h-20'
      )}>
        <NavLink to="/" className="flex-shrink-0">
          <Logo variant="nav" />
        </NavLink>

        {/* Desktop links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              className={({ isActive }) =>
                cn(
                  'font-sans text-[11px] font-bold tracking-[0.12em] uppercase px-4 py-2 rounded-full transition-all duration-300',
                  isActive
                    ? 'text-primary bg-primary/8'
                    : 'text-on-surface-variant hover:text-primary hover:bg-primary/5'
                )
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        <div className="flex items-center gap-3">
          {/* Cart icon — desktop */}
          <button
            onClick={openCart}
            className="hidden md:flex relative items-center justify-center w-10 h-10 rounded-full hover:bg-primary/8 text-on-surface-variant hover:text-primary transition-all duration-300"
            aria-label="Open cart"
          >
            <ShoppingBag size={20} />
            {cartCount > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="absolute -top-0.5 -right-0.5 w-4.5 h-4.5 min-w-[18px] px-1 bg-primary text-on-primary font-sans text-[9px] font-bold rounded-full flex items-center justify-center leading-none"
              >
                {cartCount}
              </motion.span>
            )}
          </button>

          <button
            onClick={openCart}
            className="hidden md:flex items-center gap-2 font-sans text-xs font-bold btn-gradient rounded-full px-6 py-3 uppercase tracking-wider shadow-sm hover:shadow-md transition-all duration-300"
          >
            Order Now
          </button>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-on-surface p-2 rounded-full hover:bg-surface-container transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-surface/95 backdrop-blur-xl border-b border-outline-variant/20 overflow-hidden"
          >
            <div className="flex flex-col p-5 gap-2">
              {navLinks.map((link) => (
                <NavLink
                  key={link.name}
                  to={link.path}
                  end={link.path === '/'}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    cn(
                      'font-sans text-sm font-bold tracking-widest uppercase p-3 rounded-xl transition-colors',
                      isActive
                        ? 'bg-primary/10 text-primary'
                        : 'text-on-surface-variant hover:bg-surface-variant'
                    )
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <button
                onClick={() => { setIsOpen(false); openCart(); }}
                className="w-full mt-3 font-sans text-sm font-bold btn-gradient rounded-full px-6 py-3.5 uppercase tracking-wider shadow-md active:scale-[0.98] transition-transform flex items-center justify-center gap-2"
              >
                <ShoppingBag size={16} />
                Order Now {cartCount > 0 && `(${cartCount})`}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
