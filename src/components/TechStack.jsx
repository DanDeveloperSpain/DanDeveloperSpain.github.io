import React, { useState } from 'react';
import { Cpu, Sparkles, Layers, CheckCircle2, Code2, Award } from 'lucide-react';
import { techStackData } from '../data/portfolioData';

export default function TechStack() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0);

  const activeCategory = techStackData[selectedCategoryIndex];

  return (
    <section id="stack" className="py-20 relative bg-black/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-mono font-medium">
            <Cpu className="w-3.5 h-3.5" /> Stack Técnico & Especialidades
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Herramientas & <span className="gradient-text-blue">Dominio Tecnológico</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Combinación de dominio clásico del ecosistema nativo iOS con tecnologías emergentes de Inteligencia Artificial.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {techStackData.map((cat, idx) => (
            <button
              key={cat.category}
              onClick={() => setSelectedCategoryIndex(idx)}
              className={`px-5 py-3 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center gap-2 ${
                selectedCategoryIndex === idx
                  ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-xl shadow-blue-600/30 scale-105'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {idx === 0 && <Code2 className="w-4 h-4" />}
              {idx === 1 && <Sparkles className="w-4 h-4 text-purple-300" />}
              {idx === 2 && <Layers className="w-4 h-4 text-blue-300" />}
              <span>{cat.category}</span>
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="glass-panel rounded-3xl p-6 sm:p-10 border border-white/10 relative">
          <div className="mb-8 pb-6 border-b border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white">
                {activeCategory.category}
              </h3>
              <p className="text-slate-400 text-sm mt-1 font-sans">
                {activeCategory.description}
              </p>
            </div>
            <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20 self-start sm:self-auto">
              {activeCategory.skills.length} Tecnologías Clave
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activeCategory.skills.map((skill, idx) => (
              <div
                key={idx}
                className="bg-white/[0.02] border border-white/[0.07] hover:border-white/20 rounded-2xl p-4 transition-all duration-200 group"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 group-hover:text-purple-400 transition-colors" />
                    <span className="font-semibold text-white text-sm sm:text-base">
                      {skill.name}
                    </span>
                  </div>
                  <span className="text-xs font-mono text-purple-400 bg-purple-500/10 px-2.5 py-0.5 rounded-full border border-purple-500/20">
                    {skill.highlight}
                  </span>
                </div>

                <div className="flex items-center justify-between text-xs text-slate-400 mt-2 font-mono">
                  <span>Experiencia: {skill.experience}</span>
                  <span className="text-slate-300 font-bold">{skill.level}%</span>
                </div>

                {/* Animated Level Bar */}
                <div className="w-full h-2 bg-slate-800 rounded-full mt-2 overflow-hidden p-[1px]">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
