import React, { useState } from 'react';
import { Calendar, Briefcase, MapPin, Award, ChevronRight, CheckCircle2 } from 'lucide-react';
import { timelineData } from '../data/portfolioData';

export default function Timeline() {
  const [activeItem, setActiveItem] = useState(0);

  return (
    <section id="trayectoria" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-400 font-mono font-medium">
            <Briefcase className="w-3.5 h-3.5" /> Evolución Profesional
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            10 Años de Trayectoria en <span className="gradient-text-blue">Ingeniería iOS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Evolución continua desde el desarrollo clásico en Objective-C/UIKit hasta el liderazgo técnico y la integración de IA.
          </p>
        </div>

        {/* Timeline Interactive Layout */}
        <div className="relative">
          {/* Vertical central line guide for desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 via-indigo-600 to-purple-600 opacity-30 -translate-x-1/2"></div>

          <div className="space-y-12 relative">
            {timelineData.map((item, idx) => {
              const isEven = idx % 2 === 0;

              return (
                <div
                  key={idx}
                  className={`flex flex-col lg:flex-row items-center gap-8 ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  {/* Timeline Card Content */}
                  <div className="w-full lg:w-1/2">
                    <div
                      onClick={() => setActiveItem(idx)}
                      className={`glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 cursor-pointer transition-all duration-300 border ${
                        activeItem === idx
                          ? 'border-blue-500/50 bg-white/[0.05] shadow-2xl shadow-blue-500/10'
                          : 'border-white/10'
                      }`}
                    >
                      {/* Period Badge & Location */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono font-semibold">
                          <Calendar className="w-3 h-3" /> {item.period}
                        </span>
                        <span className="text-xs text-slate-400 font-mono flex items-center gap-1">
                          <MapPin className="w-3 h-3" /> {item.location}
                        </span>
                      </div>

                      {/* Title & Company */}
                      <h3 className="text-xl font-bold text-white tracking-tight">
                        {item.role}
                      </h3>
                      <h4 className="text-sm font-semibold text-purple-400 mb-3">
                        {item.company}
                      </h4>

                      <p className="text-slate-300 text-sm leading-relaxed mb-4">
                        {item.description}
                      </p>

                      {/* Key Achievements Bullet points */}
                      <div className="space-y-2 mb-5">
                        {item.achievements.map((ach, aIdx) => (
                          <div key={aIdx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{ach}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Tags */}
                      <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/10">
                        {item.tags.map((tag, tIdx) => (
                          <span
                            key={tIdx}
                            className="text-[11px] font-mono px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Central Node Badge (Desktop) */}
                  <div className="hidden lg:flex items-center justify-center w-12 h-12 rounded-full bg-[#0b0d14] border-2 border-blue-500 shadow-lg shadow-blue-500/30 z-10 shrink-0">
                    <span className="text-xs font-mono font-bold text-blue-400">
                      {10 - idx * 2.5 > 0 ? `${Math.round(10 - idx * 2.5)}y` : '1y'}
                    </span>
                  </div>

                  {/* Empty Spacer Column for balance */}
                  <div className="hidden lg:block w-1/2"></div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}
