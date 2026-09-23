import React from 'react';
import { Cpu, Sparkles, BrainCircuit, CheckCircle2, Shield, Code, Rocket } from 'lucide-react';
import { personalInfo, philosophyPillars } from '../data/portfolioData';

export default function About() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-6 h-6 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'BrainCircuit': return <BrainCircuit className="w-6 h-6 text-emerald-400" />;
      default: return <Code className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="sobre-mi" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono font-medium">
            <Rocket className="w-3.5 h-3.5" /> Trayectoria & Filosofía
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            10 Años en iOS. <span className="gradient-text-ai">Potenciado por Inteligencia Artificial.</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Mi enfoque combina el conocimiento técnico profundo del entorno nativo de Apple con las técnicas más avanzadas de desarrollo asistido por IA.
          </p>
        </div>

        {/* Bio Card Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Main Bio Card */}
          <div className="lg:col-span-7 glass-panel rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="space-y-4 relative z-10">
              <h3 className="text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <span>Hola, soy Daniel Pérez</span>
              </h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                {personalInfo.bioFull}
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Mi misión es ayudar a startups y empresas a construir productos móviles excepcionales, manteniendo siempre un estándar de excelencia en la arquitectura, la experiencia de usuario y la privacidad.
              </p>
            </div>

            <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-3 relative z-10">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Swift & SwiftUI Nativo 100%</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CoreML & Inferencia On-Device</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>Clean Architecture & Refactorización</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>CI/CD & Automatización con Fastlane</span>
              </div>
            </div>
          </div>

          {/* AI Workflow Card */}
          <div className="lg:col-span-5 bg-gradient-to-br from-purple-950/40 via-[#0d0f19] to-blue-950/40 border border-purple-500/20 rounded-3xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 p-4">
              <Sparkles className="w-8 h-8 text-purple-400/50 animate-pulse" />
            </div>

            <div className="space-y-4">
              <span className="text-xs font-mono font-semibold text-purple-400 bg-purple-500/10 border border-purple-500/20 px-3 py-1 rounded-full inline-block">
                Ventaja Competitiva
              </span>
              <h3 className="text-xl font-bold text-white">
                ¿Qué es el AI-Driven Workflow?
              </h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                No solo integro IA dentro de las aplicaciones para los usuarios finales; utilizo asistentes de código de última generación, automatización de pruebas y modelos generativos en mi ciclo de desarrollo diario.
              </p>
              
              <div className="space-y-2.5 pt-2">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-blue-400 mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-white block font-semibold">3x Velocidad de Desarrollo:</strong>
                    Reducción drástica del tiempo de entrega de características complejas sin comprometer calidad.
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-200 flex items-start gap-2.5">
                  <div className="w-2 h-2 rounded-full bg-purple-400 mt-1.5 shrink-0"></div>
                  <div>
                    <strong className="text-white block font-semibold">Calidad de Código Robusta:</strong>
                    Generación continua de unit tests y detección proactiva de bugs antes de compilar.
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Philosophy Pillars 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {philosophyPillars.map((pillar) => (
            <div
              key={pillar.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 flex flex-col justify-between border border-white/10"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center">
                  {getIcon(pillar.icon)}
                </div>
                <div>
                  <h4 className="text-lg font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-blue-400 font-mono font-medium mt-0.5">{pillar.subtitle}</p>
                </div>
                <p className="text-slate-300 text-sm leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
