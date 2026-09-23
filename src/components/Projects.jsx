import React, { useState } from 'react';
import { ExternalLink, Github, Sparkles, Star, Layers, Smartphone, Check, X, Trophy } from 'lucide-react';
import { featuredProjects } from '../data/portfolioData';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);

  const categories = ['All', 'AI + iOS', 'Core Apps', 'Enterprise'];

  const filteredProjects = filter === 'All'
    ? featuredProjects
    : featuredProjects.filter(p => p.category === filter);

  return (
    <section id="proyectos" className="py-20 relative bg-black/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono font-medium">
            <Smartphone className="w-3.5 h-3.5" /> Portafolio de Proyectos
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Aplicaciones Destacadas & <span className="gradient-text-ai">Demos de IA</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Muestra de productos lanzados en la App Store, integraciones con IA y arquitecturas de código abierto.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2.5 rounded-2xl font-semibold text-xs sm:text-sm transition-all duration-200 ${
                filter === cat
                  ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-600/30'
                  : 'bg-white/[0.04] text-slate-300 hover:text-white hover:bg-white/[0.08] border border-white/10'
              }`}
            >
              {cat === 'AI + iOS' && <Sparkles className="w-3.5 h-3.5 inline mr-1 text-purple-300" />}
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="glass-panel glass-panel-hover rounded-3xl overflow-hidden border border-white/10 flex flex-col justify-between group"
            >
              <div>
                {/* Header Banner / Gradient Representation */}
                <div className={`h-40 bg-gradient-to-br ${project.imageBg} p-6 flex flex-col justify-between relative overflow-hidden border-b border-white/10`}>
                  <div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
                    <Smartphone className="w-24 h-24 text-white" />
                  </div>

                  <div className="flex items-center justify-between z-10">
                    <span className="text-xs font-mono font-semibold px-3 py-1 rounded-full bg-black/60 text-white backdrop-blur-md border border-white/15">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-full border border-emerald-500/30 flex items-center gap-1">
                      <Trophy className="w-3 h-3" /> {project.metrics}
                    </span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight z-10">
                    {project.title}
                  </h3>
                </div>

                {/* Body Content */}
                <div className="p-6 space-y-4">
                  <h4 className="text-xs font-semibold text-purple-300 font-mono">
                    {project.subtitle}
                  </h4>
                  <p className="text-slate-300 text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Feature Highlights */}
                  <div className="space-y-1.5 pt-2">
                    {project.highlights.slice(0, 3).map((h, hIdx) => (
                      <div key={hIdx} className="flex items-center gap-2 text-xs text-slate-300">
                        <Check className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions & Tags */}
              <div className="p-6 pt-0 space-y-4">
                <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10.5px] font-mono px-2.5 py-0.5 rounded-lg bg-white/5 border border-white/10 text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between gap-3 pt-2">
                  <button
                    onClick={() => setSelectedProject(project)}
                    className="text-xs font-semibold text-blue-400 hover:text-blue-300 underline underline-offset-4"
                  >
                    Ver detalles del proyecto →
                  </button>

                  <div className="flex items-center gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="p-2 rounded-xl bg-white/5 border border-white/10 text-slate-300 hover:text-white hover:bg-white/10 transition-colors"
                        title="Ver Código en GitHub"
                      >
                        <Github className="w-4 h-4" />
                      </a>
                    )}
                    {project.appStoreUrl && (
                      <a
                        href={project.appStoreUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-xl bg-blue-600/80 hover:bg-blue-600 text-white font-medium text-xs flex items-center gap-1.5 shadow-md"
                      >
                        <span>App Store</span>
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal Overlay for Detailed Project View */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200">
            <div className="bg-[#0f111a] border border-white/15 rounded-3xl max-w-2xl w-full p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto shadow-2xl">
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-5 right-5 p-2 rounded-xl bg-white/10 text-slate-300 hover:text-white"
              >
                <X className="w-5 h-5" />
              </button>

              <div>
                <span className="text-xs font-mono px-3 py-1 rounded-full bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  {selectedProject.category}
                </span>
                <h3 className="text-2xl font-bold text-white mt-2">
                  {selectedProject.title}
                </h3>
                <p className="text-sm font-semibold text-purple-300 font-mono mt-1">
                  {selectedProject.subtitle}
                </p>
              </div>

              <p className="text-slate-300 text-sm leading-relaxed">
                {selectedProject.description}
              </p>

              <div className="space-y-3">
                <h4 className="text-sm font-bold text-white">Características & Innovaciones Clave:</h4>
                <div className="space-y-2">
                  {selectedProject.highlights.map((h, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs text-slate-300 bg-white/5 p-2.5 rounded-xl border border-white/10">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                <span className="text-xs text-slate-400 font-mono">
                  Métricas: {selectedProject.metrics}
                </span>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl bg-white/10 text-white font-semibold text-xs"
                >
                  Cerrar
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
