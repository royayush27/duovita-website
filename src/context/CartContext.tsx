import React, { createContext, useContext, useState, ReactNode } from 'react';
import { CartItem } from '../types';

interface CartContextType {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
  items: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string, options?: Record<string, string>) => void;
  clearCart: () => void;
  total: number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [items, setItems] = useState<CartItem[]>([]);

  const openCart = () => setIsCartOpen(true);
  const closeCart = () => setIsCartOpen(false);

  const addToCart = (newItem: CartItem) => {
    setItems(prevItems => {
      // Create a unique key for the item based on id and options
      const isSameItem = (item: CartItem) => {
        if (item.id !== newItem.id) return false;
        if (!item.options && !newItem.options) return true;
        if (item.options && newItem.options) {
          return JSON.stringify(item.options) === JSON.stringify(newItem.options);
        }
        return false;
      };

      const existingItem = prevItems.find(isSameItem);

      if (existingItem) {
        return prevItems.map(item =>
          isSameItem(item)
            ? { ...item, quantity: item.quantity + newItem.quantity }
            : item
        );
      }
      return [...prevItems, newItem];
    });
    openCart();
  };

  const removeFromCart = (id: string, options?: Record<string, string>) => {
    setItems(prevItems => prevItems.filter(item => {
      if (item.id !== id) return true;
      if (!item.options && !options) return false;
      if (item.options && options) {
        return JSON.stringify(item.options) !== JSON.stringify(options);
      }
      return true;
    }));
  };

  const clearCart = () => {
    setItems([]);
  };

  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  return (
    <CartContext.Provider value={{ isCartOpen, openCart, closeCart, items, addToCart, removeFromCart, clearCart, total }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
