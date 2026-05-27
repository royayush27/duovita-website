import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Trash2, CheckCircle2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

export function CartDrawer() {
  const { isCartOpen, closeCart, items, removeFromCart, total, clearCart } = useCart();
  const [isCheckingOut, setIsCheckingOut] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleCheckout = () => {
    setIsCheckingOut(true);
    // Simulate API call
    setTimeout(() => {
      setIsCheckingOut(false);
      setIsSuccess(true);
      clearCart();
    }, 1500);
  };

  const handleClose = () => {
    closeCart();
    setTimeout(() => setIsSuccess(false), 300);
  };

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={handleClose}
            className="fixed inset-0 bg-on-surface/30 backdrop-blur-[4px] z-[60]"
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-surface/90 backdrop-blur-3xl border-l border-white/50 shadow-2xl z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-6 border-b border-outline-variant/30 flex-shrink-0">
              <h2 className="font-serif text-2xl font-bold flex items-center gap-3">
                <ShoppingBag /> Your Rituals
              </h2>
              <button 
                onClick={handleClose} 
                className="p-2 hover:bg-surface-variant rounded-full transition-colors text-on-surface"
              >
                <X size={20} />
              </button>
            </div>
            
            <div className="flex-1 overflow-y-auto overflow-x-hidden p-6 custom-scrollbar">
              <AnimatePresence mode="wait">
                {isSuccess ? (
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center py-12"
                  >
                    <div className="w-20 h-20 bg-primary-container text-primary rounded-full flex items-center justify-center mb-6">
                      <CheckCircle2 size={40} />
                    </div>
                    <h3 className="font-serif text-2xl font-bold text-on-surface mb-2">Order Confirmed</h3>
                    <p className="font-sans text-sm text-on-surface-variant mb-8">
                      Your functional wellness ritual is being prepared. We will notify you when it's ready.
                    </p>
                    <button 
                      onClick={handleClose} 
                      className="btn-gradient px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:shadow-lg w-full"
                    >
                      Continue Exploring
                    </button>
                  </motion.div>
                ) : items.length === 0 ? (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex flex-col items-center justify-center h-full text-center opacity-80"
                  >
                    <ShoppingBag size={56} className="mb-6 opacity-30 text-primary" />
                    <p className="font-sans text-xl text-on-surface mb-2 font-bold">Your bag is empty.</p>
                    <p className="font-sans text-sm text-on-surface-variant">Elevate your day by adding a functional beverage to your ritual.</p>
                    
                    <button 
                      onClick={handleClose} 
                      className="mt-8 btn-gradient px-8 py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest hover:shadow-lg w-full"
                    >
                      Continue Exploring
                    </button>
                  </motion.div>
                ) : (
                  <motion.div 
                    key="items"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-6"
                  >
                    {items.map((item, idx) => (
                      <div key={`${item.id}-${idx}`} className="flex gap-4 glass-card p-3 rounded-2xl">
                        {item.image && (
                          <div className="w-20 h-20 rounded-xl overflow-hidden flex-shrink-0">
                            <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                          </div>
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start mb-1">
                            <h3 className="font-serif font-bold text-on-surface truncate pr-2">{item.name}</h3>
                            <button 
                              onClick={() => removeFromCart(item.id, item.options)}
                              className="text-outline-variant hover:text-error transition-colors p-1"
                            >
                              <Trash2 size={16} />
                            </button>
                          </div>
                          <p className="font-sans text-xs text-on-surface-variant mb-2 font-bold">₩{item.price.toLocaleString()}</p>
                          <div className="flex flex-wrap gap-1">
                            {item.options && Object.entries(item.options).map(([key, value]) => (
                               <span key={key} className="text-[10px] uppercase font-bold tracking-widest bg-surface-variant text-on-surface-variant px-2 py-0.5 rounded">
                                 {value}
                               </span>
                            ))}
                            <span className="text-[10px] uppercase font-bold tracking-widest bg-surface-container-high text-on-surface px-2 py-0.5 rounded">
                              Qty: {item.quantity}
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {!isSuccess && items.length > 0 && (
              <div className="p-6 border-t border-outline-variant/30 flex-shrink-0 bg-surface/50 backdrop-blur-md">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-sans text-lg text-on-surface font-bold">Total</span>
                  <span className="font-serif text-2xl font-bold text-primary">₩{total.toLocaleString()}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  disabled={isCheckingOut}
                  className="w-full btn-gradient py-4 rounded-full font-sans text-xs font-bold uppercase tracking-widest shadow-lg hover:shadow-xl transition-all disabled:opacity-70 flex justify-center items-center"
                >
                  {isCheckingOut ? (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                      className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full"
                    />
                  ) : (
                    'Checkout Securely'
                  )}
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
