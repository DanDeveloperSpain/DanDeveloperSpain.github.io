import React from 'react';
import { ArrowUp, Sparkles, Heart } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#040508] border-t border-white/10 py-12 relative overflow-hidden text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Brand & Rights */}
          <div className="flex flex-col items-center md:items-start gap-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-white text-sm">Daniel Pérez</span>
              <span className="text-slate-500">•</span>
              <span className="text-blue-400 font-mono">Senior iOS & AI Engineer</span>
            </div>
            <p className="text-slate-400 text-xs">
              © {new Date().getFullYear()} Daniel Pérez. Todos los derechos reservados.
            </p>
            <p className="text-[11px] text-slate-400 font-mono mt-0.5">
              Desplegado en <a href="https://www.danielperezdeveloper.com" className="text-slate-300 hover:text-white underline">www.danielperezdeveloper.com</a> vía GitHub Pages.
            </p>
          </div>

          {/* Center Info */}
          <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <span>Construido con</span>
            <span className="text-blue-400 font-semibold">SwiftUI Aesthetic</span>
            <span>& React + Tailwind</span>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-all flex items-center gap-2 group"
            aria-label="Volver arriba"
          >
            <span className="text-xs font-semibold">Arriba</span>
            <ArrowUp className="w-4 h-4 text-blue-400 group-hover:-translate-y-1 transition-transform" />
          </button>

        </div>
      </div>
    </footer>
  );
}
