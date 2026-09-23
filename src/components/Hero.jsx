import React from 'react';
import { ArrowRight, Download, Sparkles, ShieldCheck, Terminal, Award, Cpu, Code2 } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import IPhoneMockup from './IPhoneMockup';

export default function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden">
      {/* Glow Orbs Background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Text Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Seniority & AI Badges */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-xs text-slate-200 backdrop-blur-md shadow-inner">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span className="font-semibold text-emerald-400">Disponible para Proyectos & Leadership</span>
              <span className="text-slate-500">•</span>
              <span className="text-blue-400 font-mono font-medium flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-purple-400" /> AI-Driven Workflow
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.1]">
              Daniel Pérez <br />
              <span className="gradient-text-blue">Senior iOS Developer</span> <br />
              <span className="gradient-text-ai text-3xl sm:text-4xl lg:text-5xl font-bold">
                & AI Mobile Engineer
              </span>
            </h1>

            {/* Subtitle / Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Más de <strong className="text-white font-semibold">10 años de experiencia</strong> creando aplicaciones nativas de alto rendimiento para el ecosistema Apple (Swift, SwiftUI, UIKit). Potencio cada fase del desarrollo con <strong className="text-purple-300 font-semibold">Inteligencia Artificial avanzada</strong> para entregar código limpio, escalable y en tiempo récord.
            </p>

            {/* Call to Action Buttons */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#proyectos"
                className="group px-6 py-3.5 rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Ver Proyectos Destacados</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contacto"
                className="px-6 py-3.5 rounded-2xl bg-white/[0.05] hover:bg-white/[0.1] text-white font-semibold text-sm border border-white/15 backdrop-blur-md flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <span>Contactar</span>
              </a>

              <a
                href="#contacto"
                className="px-5 py-3.5 rounded-2xl bg-purple-950/40 hover:bg-purple-900/50 text-purple-200 font-medium text-sm border border-purple-500/30 backdrop-blur-md flex items-center gap-2 transition-all duration-300 hover:scale-[1.02]"
              >
                <Download className="w-4 h-4 text-purple-400" />
                <span>CV (PDF)</span>
              </a>
            </div>

            {/* Quick Stats Grid */}
            <div className="pt-8 border-t border-white/10 grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-2xl mx-auto lg:mx-0">
              {personalInfo.stats.map((stat, idx) => (
                <div key={idx} className="p-3 rounded-2xl bg-white/[0.02] border border-white/[0.06] text-center lg:text-left">
                  <div className="text-2xl font-extrabold text-white font-mono tracking-tight gradient-text-apple">
                    {stat.value}
                  </div>
                  <div className="text-xs text-slate-400 font-medium mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

          </div>

          {/* Right Column: 3D/CSS iPhone Mockup */}
          <div className="lg:col-span-5 flex justify-center">
            <IPhoneMockup />
          </div>

        </div>
      </div>
    </section>
  );
}
