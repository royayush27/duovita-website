import React from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { Outlet } from 'react-router-dom';
import { CartProvider } from '../context/CartContext';
import { CartDrawer } from './CartDrawer';

export function Layout() {
  return (
    <CartProvider>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <CartDrawer />
        <div className="flex-grow flex flex-col">
          <Outlet />
        </div>
        <Footer />
      </div>
    </CartProvider>
  );
}
