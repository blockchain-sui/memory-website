/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Moments } from './components/Moments';
import { Stories } from './components/Stories';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[var(--color-brand-bg)]">
      <Navbar />
      <Hero />
      <About />
      <Moments />
      <Stories />
      <Footer />
    </div>
  );
}
