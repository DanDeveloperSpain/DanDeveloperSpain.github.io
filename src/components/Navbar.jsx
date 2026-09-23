import React, { useState, useEffect } from 'react';
import { Menu, X, Download, MessageSquare, Code2, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Sobre Mí', href: '#sobre-mi' },
    { name: 'Stack Técnico', href: '#stack' },
    { name: 'Trayectoria', href: '#trayectoria' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Servicios', href: '#servicios' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#06070b]/85 backdrop-blur-xl border-b border-white/10 shadow-2xl shadow-blue-950/20 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-[1px] shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full bg-[#08090f] rounded-[11px] flex items-center justify-center">
                <span className="font-mono font-bold text-lg text-white group-hover:text-blue-400 transition-colors">
                  DP
                </span>
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold tracking-tight text-slate-100 group-hover:text-blue-400 transition-colors">
                Daniel Pérez
              </span>
              <span className="text-xs text-blue-400 font-mono flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" /> Senior iOS & AI
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center gap-1 bg-white/[0.03] border border-white/10 rounded-full px-4 py-1.5 backdrop-blur-md">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:bg-white/10 px-3.5 py-1.5 rounded-full transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Desktop Right CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-white/10 hover:bg-white/15 text-white border border-white/15 backdrop-blur-md transition-all duration-200 hover:scale-[1.02]"
            >
              <MessageSquare className="w-3.5 h-3.5 text-blue-400" />
              <span>Contactar</span>
            </a>
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 text-xs font-semibold px-4 py-2.5 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white shadow-lg shadow-blue-600/30 transition-all duration-200 hover:scale-[1.02]"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Descargar CV</span>
            </a>
          </div>

          {/* Mobile menu trigger */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl bg-white/5 border border-white/10 text-slate-200 hover:text-white hover:bg-white/10 focus:outline-none"
              aria-label="Menu Toggle"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0c14]/95 backdrop-blur-2xl border-b border-white/10 px-4 pt-4 pb-6 mt-3 space-y-3 animate-in slide-in-from-top duration-300">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium text-slate-200 hover:text-white hover:bg-white/10 px-4 py-3 rounded-xl transition-all"
              >
                {link.name}
              </a>
            ))}
          </nav>
          <div className="pt-3 border-t border-white/10 flex flex-col gap-2">
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl bg-white/10 text-white border border-white/15"
            >
              <MessageSquare className="w-4 h-4 text-blue-400" />
              Contactar
            </a>
            <a
              href="#contacto"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center gap-2 text-sm font-semibold py-3 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg"
            >
              <Download className="w-4 h-4" />
              Descargar CV
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
