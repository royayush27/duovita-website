/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Product from './pages/Product';
import Story from './pages/Story';
import FindUs from './pages/FindUs';
import TextPage from './pages/TextPage';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="menu" element={<Menu />} />
          <Route path="menu/pink-balance" element={<Product />} />
          <Route path="story" element={<Story />} />
          <Route path="find-us" element={<FindUs />} />
          <Route path="page/:slug" element={<TextPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
