import React from 'react';
import { Smartphone, Sparkles, ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/portfolioData';

export default function Services() {
  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Smartphone': return <Smartphone className="w-6 h-6 text-blue-400" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-purple-400" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-emerald-400" />;
      default: return <Smartphone className="w-6 h-6 text-blue-400" />;
    }
  };

  return (
    <section id="servicios" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-xs text-purple-400 font-mono font-medium">
            <Sparkles className="w-3.5 h-3.5" /> ¿Cómo puedo ayudarte?
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Servicios de Consultoría & <span className="gradient-text-blue">Desarrollo iOS</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Soluciones a medida para startups, empresas consolidadas y proyectos exigentes.
          </p>
        </div>

        {/* Services 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <div
              key={service.id}
              className="glass-panel glass-panel-hover rounded-3xl p-6 sm:p-8 border border-white/10 flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Header Badge & Icon */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {getIcon(service.icon)}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-full bg-white/5 text-slate-300 border border-white/10">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white tracking-tight">
                  {service.title}
                </h3>
                <h4 className="text-xs font-semibold text-purple-400 font-mono">
                  {service.subtitle}
                </h4>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables checklist */}
                <div className="space-y-2 pt-3 border-t border-white/10">
                  <span className="text-xs font-semibold text-slate-200 block">Entregables Clave:</span>
                  {service.deliverables.map((item, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-slate-300">
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action Link */}
              <div className="pt-6 mt-6 border-t border-white/10">
                <a
                  href="#contacto"
                  className="w-full py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/15 text-white font-semibold text-xs flex items-center justify-center gap-2 transition-all group-hover:border-blue-500/40"
                >
                  <span>Solicitar Propuesta</span>
                  <ArrowRight className="w-3.5 h-3.5 text-blue-400 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
