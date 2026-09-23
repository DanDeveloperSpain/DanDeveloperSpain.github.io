import React, { useState } from 'react';
import { Code, Smartphone, Sparkles, Mic, Activity, Cpu, ShieldCheck, Play, Terminal } from 'lucide-react';

export default function IPhoneMockup() {
  const [activeTab, setActiveTab] = useState('preview'); // 'preview' or 'code'
  const [isAiProcessing, setIsAiProcessing] = useState(false);
  const [aiResponseText, setAiResponseText] = useState(
    "Modelo CoreML ejecutado en Neural Engine (0.8ms). Postura correcta y 14 repeticiones contabilizadas."
  );

  const handleSimulateAi = () => {
    setIsAiProcessing(true);
    setTimeout(() => {
      setIsAiProcessing(false);
      setAiResponseText(
        "¡Respuesta procesada en el iPhone! Concurrencia segura Swift enviada a la UI a 120 FPS ProMotion."
      );
    }, 1200);
  };

  const swiftCodeSnippet = `import SwiftUI
import CoreML
import Vision

struct NeuroTaskView: View {
    @StateObject private var vm = AIViewModel()
    @State private var isListening = false
    
    var body: some View {
        VStack(spacing: 20) {
            // Dynamic Island Header
            HeaderView(title: "NeuroTask AI")
            
            // CoreML Neural Engine Stream
            if let response = vm.aiResponse {
                Text(response)
                    .font(.system(.body, design: .rounded))
                    .padding()
                    .glassEffect()
            }
            
            Spacer()
            
            // AI Voice Action Button
            Button(action: {
                Task {
                    await vm.processVoiceCommand()
                }
            }) {
                Label("Hablar con IA", systemImage: "sparkles")
                    .bold()
            }
            .buttonStyle(.borderedProminent)
            .tint(.blue)
        }
        .task {
            await vm.loadLocalModel()
        }
    }
}`;

  return (
    <div className="relative mx-auto w-full max-w-[340px] sm:max-w-[380px] group">
      {/* Background Outer Glow */}
      <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/30 via-indigo-600/20 to-purple-600/30 rounded-[50px] blur-2xl opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse-slow"></div>

      {/* Main iPhone 16 Pro Frame */}
      <div className="relative bg-[#181920] border-[6px] border-[#2d303e] rounded-[50px] shadow-2xl overflow-hidden shadow-blue-950/50">
        {/* Hardware Side Buttons subtle overlay */}
        <div className="absolute -right-[9px] top-28 w-[3px] h-12 bg-slate-700 rounded-r-sm"></div>
        <div className="absolute -left-[9px] top-24 w-[3px] h-9 bg-slate-700 rounded-l-sm"></div>
        <div className="absolute -left-[9px] top-36 w-[3px] h-12 bg-slate-700 rounded-l-sm"></div>

        {/* Dynamic Island Header */}
        <div className="relative pt-3 pb-2 px-6 bg-[#090a0f] flex items-center justify-between z-20 border-b border-white/5">
          <span className="text-[11px] font-mono text-slate-400 font-semibold">9:41</span>

          {/* Dynamic Island Pill */}
          <div className="w-24 h-5 bg-black rounded-full flex items-center justify-between px-2 gap-1.5 shadow-inner">
            <div className="w-2.5 h-2.5 rounded-full bg-blue-500/80 animate-pulse"></div>
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-500/80"></div>
          </div>

          <div className="flex items-center gap-1.5 text-[10px] text-slate-400 font-mono">
            <span>5G</span>
            <div className="w-4 h-2 border border-slate-400 rounded-sm p-[1px] flex items-center">
              <div className="w-full h-full bg-emerald-400 rounded-px"></div>
            </div>
          </div>
        </div>

        {/* Top View Selector Toggle */}
        <div className="bg-[#0e1017] px-4 py-2 flex items-center justify-center border-b border-white/10 z-20">
          <div className="bg-white/5 p-1 rounded-xl flex items-center gap-1 border border-white/10 w-full">
            <button
              onClick={() => setActiveTab('preview')}
              className={`flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium py-1.5 rounded-lg transition-all ${
                activeTab === 'preview'
                  ? 'bg-blue-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span>Live App</span>
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`flex-1 flex items-center justify-center gap-1.5 text-[11px] font-medium py-1.5 rounded-lg transition-all ${
                activeTab === 'code'
                  ? 'bg-purple-600 text-white shadow-md'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Code className="w-3.5 h-3.5" />
              <span>Swift Code</span>
            </button>
          </div>
        </div>

        {/* iPhone Display Content Body */}
        <div className="h-[480px] bg-[#0b0d14] overflow-y-auto p-4 flex flex-col justify-between font-sans relative">
          {activeTab === 'preview' ? (
            /* Live Simulated iOS AI App Interface */
            <div className="flex-1 flex flex-col justify-between space-y-4">
              {/* App Navigation Bar */}
              <div className="flex items-center justify-between pt-1">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-blue-500/30">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-white tracking-tight">NeuroFit iOS</h4>
                    <p className="text-[10px] text-blue-400 font-mono flex items-center gap-1">
                      <Cpu className="w-2.5 h-2.5" /> CoreML Neural Engine
                    </p>
                  </div>
                </div>
                <span className="text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded-full font-mono">
                  60 FPS
                </span>
              </div>

              {/* Central AI Vision & Data Card */}
              <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-3.5 space-y-3 backdrop-blur-md">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-200">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-blue-400" /> Cámara Vision AI
                  </span>
                  <span className="text-[10px] text-slate-400 font-mono">Swift Concurrency</span>
                </div>

                {/* Simulated Camera Feed with AI Overlay */}
                <div className="relative h-32 rounded-xl bg-gradient-to-br from-slate-900 to-blue-950 border border-blue-500/30 overflow-hidden flex items-center justify-center p-3">
                  <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:12px_12px] opacity-20"></div>

                  {/* AI Detection Bounding Box */}
                  <div className="border-2 border-dashed border-blue-400 rounded-lg w-24 h-24 flex items-center justify-center relative animate-pulse">
                    <span className="absolute -top-2 left-2 bg-blue-500 text-[8px] font-mono text-white px-1 rounded">
                      Pose: 99.4%
                    </span>
                    <div className="w-2 h-2 rounded-full bg-blue-400 shadow-glow"></div>
                  </div>
                </div>

                {/* AI Dynamic Output Box */}
                <div className="bg-blue-950/40 border border-blue-500/20 rounded-xl p-2.5 text-[11px] text-slate-200 leading-relaxed font-sans">
                  {isAiProcessing ? (
                    <div className="flex items-center gap-2 text-blue-400 font-mono py-1">
                      <Sparkles className="w-3.5 h-3.5 animate-spin text-purple-400" />
                      <span>Ejecutando modelo CoreML...</span>
                    </div>
                  ) : (
                    <p className="text-slate-300">{aiResponseText}</p>
                  )}
                </div>
              </div>

              {/* Action Trigger Button */}
              <div className="space-y-2">
                <button
                  onClick={handleSimulateAi}
                  disabled={isAiProcessing}
                  className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-medium text-xs flex items-center justify-center gap-2 shadow-lg shadow-blue-600/30 hover:brightness-110 transition active:scale-98"
                >
                  <Mic className="w-3.5 h-3.5" />
                  <span>Probar Inferencia IA (Simulación)</span>
                </button>
                <div className="flex items-center justify-between text-[10px] text-slate-400 px-1 font-mono">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-emerald-400" /> On-Device Privacy
                  </span>
                  <span>SwiftData Sync</span>
                </div>
              </div>
            </div>
          ) : (
            /* SwiftUI Code Editor View */
            <div className="flex-1 flex flex-col justify-between font-mono text-[10px] leading-relaxed text-slate-300 space-y-2">
              <div className="flex items-center justify-between text-slate-400 border-b border-white/10 pb-1.5">
                <span className="flex items-center gap-1.5 text-purple-400 font-medium">
                  <Terminal className="w-3 h-3" /> NeuroTaskView.swift
                </span>
                <span className="text-[9px] bg-purple-500/20 text-purple-300 px-1.5 py-0.5 rounded">
                  Swift 5.10
                </span>
              </div>
              <pre className="overflow-x-auto text-[9.5px] leading-4 text-slate-300 font-mono bg-black/40 p-2.5 rounded-xl border border-white/5 flex-1">
                <code>
                  {swiftCodeSnippet.split('\n').map((line, idx) => (
                    <div key={idx} className="table-row">
                      <span className="table-cell pr-2 text-slate-600 select-none text-[9px]">
                        {idx + 1}
                      </span>
                      <span className="table-cell">{line}</span>
                    </div>
                  ))}
                </code>
              </pre>
              <div className="pt-1 flex items-center justify-between text-[9px] text-slate-400 border-t border-white/5">
                <span>Clean MVVM Architecture</span>
                <span className="text-blue-400">100% Native Swift</span>
              </div>
            </div>
          )}
        </div>

        {/* Home Indicator Bar */}
        <div className="bg-[#090a0f] py-2 flex justify-center border-t border-white/5">
          <div className="w-28 h-1 bg-slate-500/50 rounded-full"></div>
        </div>
      </div>
    </div>
  );
}
