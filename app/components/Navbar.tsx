'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const navLinks = [
    { name: 'Início', href: '/' },
    { name: 'Serviços', href: '/servicos' },
    { name: 'Dashboard', href: '/dashboard' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-to-br from-[#1C7C64] to-[#1B3D4B] rounded-xl flex items-center justify-center transition-all-smooth group-hover:scale-105">
              <span className="text-white font-bold text-xl">CB</span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-lg text-[#1B3D4B] font-['Montserrat']">
                Conecta Brasil
              </span>
              <span className="text-xs text-[#6B6B6B] -mt-1">Soluções Burocráticas</span>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`font-medium transition-all-smooth ${
                  isActive(link.href)
                    ? 'text-[#1C7C64] font-semibold border-b-2 border-[#1C7C64] pb-1'
                    : 'text-[#6B6B6B] hover:text-[#1C7C64]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/dashboard"
              className="px-6 py-2.5 bg-[#1C7C64] text-white rounded-xl hover:bg-[#15655a] transition-all-smooth shadow-lg hover:shadow-xl hover:-translate-y-0.5 font-medium"
            >
              Acessar Dashboard
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1B3D4B]"
            aria-label="Menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-3 border-t border-gray-100 pt-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`block font-medium transition-all-smooth ${
                  isActive(link.href)
                    ? 'text-[#1C7C64] font-semibold'
                    : 'text-[#6B6B6B] hover:text-[#1C7C64]'
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Link
              href="/dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="block text-center px-6 py-2.5 bg-[#1C7C64] text-white rounded-xl hover:bg-[#15655a] transition-all-smooth font-medium"
            >
              Acessar Dashboard
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

