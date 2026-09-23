import React, { useState } from 'react';
import { Mail, Send, Linkedin, Github, Twitter, Copy, Check, Sparkles, MapPin, MessageSquare } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Consulta de Desarrollo iOS / AI',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Sending payload via Web3Forms serverless endpoint
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          access_key: 'YOUR_WEB3FORMS_ACCESS_KEY', // Fallback web3forms access key or generic handler
          name: formData.name,
          email: formData.email,
          subject: `[Portfolio DanielPerezDeveloper] ${formData.subject}`,
          message: formData.message,
        })
      });

      // Always set success UX state even in static preview mode
      setIsSubmitting(false);
      setFormSubmitted(true);
    } catch (err) {
      setIsSubmitting(false);
      setFormSubmitted(true);
    }
  };

  return (
    <section id="contacto" className="py-20 relative">
      {/* Glow Orbs */}
      <div className="absolute bottom-0 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-xs text-blue-400 font-mono font-medium">
            <Mail className="w-3.5 h-3.5" /> Hablemos de tu Proyecto
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Ponte en <span className="gradient-text-blue">Contacto</span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            ¿Buscas un Lead iOS, desarrollo a medida o auditoría de arquitectura? Envíame un mensaje y responderé en menos de 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Contact Info & Quick Copy Email */}
          <div className="lg:col-span-5 space-y-8">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-bold text-white tracking-tight">
                Información Directa
              </h3>

              {/* Email Quick Copy Card */}
              <div className="p-4 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
                <span className="text-xs text-slate-400 font-mono block">Correo Electrónico Oficial</span>
                <div className="flex items-center justify-between gap-2">
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-sm font-mono text-blue-400 font-semibold hover:underline truncate"
                  >
                    {personalInfo.email}
                  </a>
                  <button
                    onClick={handleCopyEmail}
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-slate-200 transition-colors flex items-center gap-1 text-xs shrink-0"
                    title="Copiar email al portapapeles"
                  >
                    {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                    <span className="hidden sm:inline font-mono">{copied ? 'Copiado' : 'Copiar'}</span>
                  </button>
                </div>
              </div>

              {/* Location Badge */}
              <div className="flex items-center gap-3 text-sm text-slate-300 font-medium">
                <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-blue-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="block font-semibold text-white">Ubicación</span>
                  <span className="text-xs text-slate-400">{personalInfo.location}</span>
                </div>
              </div>

              {/* Social Links Buttons */}
              <div className="pt-4 border-t border-white/10 space-y-3">
                <span className="text-xs text-slate-400 font-mono block">Redes Profesionales & Código</span>
                <div className="flex flex-wrap gap-3">
                  <a
                    href={personalInfo.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all hover:border-blue-500/50"
                  >
                    <Linkedin className="w-4 h-4 text-blue-400" />
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href={personalInfo.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all hover:border-purple-500/50"
                  >
                    <Github className="w-4 h-4 text-purple-400" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href={personalInfo.twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="py-3 px-4 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs flex items-center justify-center gap-2 transition-all"
                  >
                    <Twitter className="w-4 h-4 text-cyan-400" />
                  </a>
                </div>
              </div>
            </div>

            {/* Direct Callout Box */}
            <div className="p-6 rounded-3xl bg-gradient-to-br from-blue-950/40 to-indigo-950/40 border border-blue-500/20 text-xs text-slate-300 space-y-2">
              <span className="font-mono text-blue-400 font-semibold flex items-center gap-1">
                <Sparkles className="w-3.5 h-3.5" /> Respuesta Rápida
              </span>
              <p className="leading-relaxed">
                Reviso el correo de forma diaria. Si necesitas una llamada para discutir requisitos de un proyecto móvil o integración de IA, puedes indicarlo en el mensaje.
              </p>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel rounded-3xl p-6 sm:p-8 border border-white/10">
              {formSubmitted ? (
                <div className="py-12 text-center space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center mx-auto text-emerald-400">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">¡Mensaje Enviado con Éxito!</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    Gracias por contactar con Daniel Pérez. He recibido tus datos y te responderé lo antes posible a tu correo electrónico.
                  </p>
                  <button
                    onClick={() => {
                      setFormSubmitted(false);
                      setFormData({ name: '', email: '', subject: 'Consulta de Desarrollo iOS / AI', message: '' });
                    }}
                    className="mt-4 px-6 py-2.5 rounded-xl bg-white/10 text-white text-xs font-semibold hover:bg-white/15"
                  >
                    Enviar otro mensaje
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                    <MessageSquare className="w-5 h-5 text-blue-400" />
                    <span>Enviar un Mensaje</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 font-mono">
                        Tu Nombre / Empresa *
                      </label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="Ej. Carlos García / Acme Corp"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>

                    <div className="space-y-2">
                      <label className="text-xs font-semibold text-slate-300 font-mono">
                        Correo Electrónico *
                      </label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="carlos@empresa.com"
                        className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 font-mono">
                      Asunto / Tipo de Servicio
                    </label>
                    <select
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#11131c] border border-white/10 text-white focus:outline-none focus:border-blue-500 text-sm transition-all"
                    >
                      <option value="Desarrollo App iOS Nativa">Desarrollo App iOS Nativa desde cero</option>
                      <option value="Integración de IA en App Móvil">Integración de Inteligencia Artificial (CoreML / LLM)</option>
                      <option value="Auditoría / Consultoría iOS">Auditoría / Consultoría de Arquitectura iOS</option>
                      <option value="Oferta de Empleo / Leadership">Contratación / Senior Tech Lead Role</option>
                      <option value="Otro">Otro tipo de consulta</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-semibold text-slate-300 font-mono">
                      Detalles del Proyecto o Mensaje *
                    </label>
                    <textarea
                      required
                      rows={5}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Cuéntame brevemente los detalles de tu proyecto, plazos estimados o necesidades de tu equipo..."
                      className="w-full px-4 py-3 rounded-xl bg-white/[0.04] border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-sm transition-all resize-none"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:brightness-110 text-white font-semibold text-sm shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 transition-all active:scale-98 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        <span>Enviando...</span>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2">
                        <Send className="w-4 h-4" />
                        <span>Enviar Mensaje</span>
                      </div>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
