'use client';

import { useState } from 'react';

interface NavbarProps {
  activeSection: string;
  onNavigate: (section: string) => void;
}

export default function Navbar({ activeSection, onNavigate }: NavbarProps) {
  const navItems = ['home', 'about', 'portfolio', 'contacts'];

  return (
    <nav className="w-full h-20 bg-slate-950 flex items-center relative">
      {/* Logo */}
      <div className="w-48 h-20 bg-slate-900 flex items-center justify-center">
        <h1 className="text-2xl font-normal text-blue-100">Raunak Das</h1>
      </div>

      {/* Navigation Links */}
      <div className="flex-1 flex items-center justify-start gap-16 pl-16">
        {navItems.map((item) => (
          <button
            key={item}
            onClick={() => onNavigate(item)}
            className={`text-lg font-normal capitalize transition-all ${
              activeSection === item
                ? 'text-white font-bold'
                : 'text-white hover:text-blue-100'
            }`}
          >
            {item}
          </button>
        ))}
      </div>
    </nav>
  );
}
