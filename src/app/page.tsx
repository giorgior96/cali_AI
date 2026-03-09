"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { supabase } from "@/lib/supabase";
import { Loader2, Cpu, Dna, ShieldAlert, Sparkles, TerminalSquare, Send, Target, Users, Database, BrainCircuit, CheckSquare, Layers, XCircle, ArrowRight, ChevronDown, Activity, CheckCircle2 } from "lucide-react";

// Animation Variants
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" as const } }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const Marquee = () => (
  <div className="w-full overflow-hidden bg-white/50 border-y border-indigo-100 py-6 mt-20 relative flex items-center">
    <div className="absolute left-0 w-32 h-full bg-gradient-to-r from-[#F9F7F2] to-transparent z-10" />
    <div className="absolute right-0 w-32 h-full bg-gradient-to-l from-[#F9F7F2] to-transparent z-10" />
    <motion.div
      animate={{ x: ["0%", "-50%"] }}
      transition={{ repeat: Infinity, ease: "linear", duration: 30 }}
      className="flex whitespace-nowrap gap-16 px-8 items-center"
    >
      {[...Array(4)].map((_, i) => (
        <div key={i} className="flex gap-16 items-center">
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><CheckCircle2 size={16} className="text-emerald-500" /> IL TUO ALTER-EGO DIGITALE</span>
          <span className="text-xl font-oswald text-slate-300">CALI.ATHLETICS</span>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest">💪 RISPARMIA 40 ORE/MESE</span>
          <span className="text-xl font-oswald text-slate-300">STREET WORKOUT PRO</span>
          <span className="text-sm font-bold text-slate-400 uppercase tracking-widest flex items-center gap-2"><Target size={16} className="text-indigo-500" /> KNOW-HOW SCALATO</span>
          <span className="text-xl font-oswald text-slate-300">CALI.AI COACH</span>
        </div>
      ))}
    </motion.div>
  </div>
);

const GlassMockup = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.9, rotateY: 10 }}
    animate={{ opacity: 1, scale: 1, rotateY: 0 }}
    transition={{ duration: 1, delay: 0.4, type: "spring" }}
    className="relative w-full max-w-md sm:max-w-lg xl:max-w-2xl mx-auto xl:mx-0 mt-12 xl:mt-0 xl:absolute xl:right-[-5%] xl:top-1/2 xl:-translate-y-1/2 z-10"
    style={{ perspective: 1000 }}
  >
    <div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500 to-purple-400 rounded-3xl blur-2xl opacity-20 animate-pulse" />
    <div className="bg-white/60 backdrop-blur-2xl border border-white rounded-3xl p-6 shadow-2xl relative overflow-hidden">
      {/* Top Bar */}
      <div className="flex items-center justify-between border-b border-indigo-100/50 pb-4 mb-4">
        <div className="flex items-center gap-3">
          <BrainCircuit className="text-indigo-500 w-5 h-5" />
          <span className="font-oswald text-sm tracking-wider uppercase text-slate-700">Analisi Stile in Corso...</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
        </div>
      </div>
      
      {/* Content */}
      <div className="space-y-4">
        <div className="flex justify-between items-end mb-6">
          <div>
            <div className="text-[10px] font-bold text-indigo-500 uppercase tracking-widest mb-1">Stile Appreso Da Te</div>
            <div className="text-xl font-oswald text-slate-800 uppercase">Focus: Ipertrofia + Skills</div>
          </div>
          <div className="px-3 py-1 bg-emerald-100/50 border border-emerald-200 text-emerald-700 text-[10px] font-bold uppercase rounded-md flex items-center gap-1"><CheckSquare size={12}/> Stile Appreso</div>
        </div>

        {[
          { icon: <Activity className="text-orange-500" size={16}/>, title: "Tuck Planche Hold", sub: "Protrazione scapolare", sets: "4x", reps: "15s" },
          { icon: <Layers className="text-indigo-500" size={16}/>, title: "Planche Push Ups", sub: "Sbilanciamento", sets: "3x", reps: "6-8" },
          { icon: <Database className="text-purple-500" size={16}/>, title: "HSPU al muro", sub: "RPE 8", sets: "4x", reps: "5" }
        ].map((item, i) => (
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + (i * 0.2) }}
            key={i} 
            className="flex items-center justify-between p-3 bg-white border border-slate-100 rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.02)]"
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-slate-50 border border-slate-100 rounded-lg shadow-sm">{item.icon}</div>
              <div>
                <div className="text-sm font-bold text-slate-800 leading-tight mb-0.5">{item.title}</div>
                <div className="text-[10px] font-bold tracking-wider text-slate-400 uppercase">{item.sub}</div>
              </div>
            </div>
            <div className="text-right">
              <div className="font-oswald text-indigo-600 font-bold">{item.sets}</div>
              <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">{item.reps}</div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </motion.div>
);

const BentoGrid = () => (
  <motion.div 
    variants={staggerContainer}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-100px" }}
    className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 max-w-7xl mx-auto px-4 sm:px-8 mt-16 sm:mt-32"
  >
    <motion.div variants={fadeUp} className="md:col-span-2 bg-white rounded-2xl sm:rounded-[2rem] p-6 sm:p-12 shadow-xl shadow-indigo-100/50 border border-indigo-50 relative overflow-hidden group">
      <div className="absolute right-[-10%] top-[-10%] w-[500px] h-[500px] bg-indigo-50/50 rounded-full blur-3xl group-hover:bg-indigo-100/50 transition-colors duration-700" />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-indigo-50 border border-indigo-100 text-indigo-600 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform duration-500">
          <BrainCircuit size={28} />
        </div>
        <h3 className="font-oswald text-3xl sm:text-4xl uppercase tracking-tight mb-4 text-slate-900 leading-[1.1]">Trasformiamo il tuo <br/>Cervello in Algoritmo</h3>
        <p className="text-slate-500 font-medium max-w-md leading-relaxed">Non il solito generatore di schede pre-impostate. Dai in pasto a CALI.AI i tuoi migliori protocolli passati: la nostra IA estrae il tuo DNA da coach. Copia la tua logica di progressione, la scelta degli esercizi e la gestione della fatica. È esattamente il tuo stile, ma alla velocità della luce.</p>
      </div>
    </motion.div>

    <motion.div variants={fadeUp} className="bg-gradient-to-br from-indigo-600 to-purple-700 rounded-2xl sm:rounded-[2rem] p-6 sm:p-12 shadow-xl shadow-indigo-500/20 text-white relative overflow-hidden group">
      <motion.div 
        animate={{ rotate: 360 }} 
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute -right-20 -top-20 text-white/5"
      >
        <Target size={240} />
      </motion.div>
      <div className="relative z-10 flex flex-col h-full justify-between">
        <div>
          <h3 className="font-oswald text-2xl sm:text-3xl uppercase tracking-tight mb-4 text-white">Riprenditi il <br/>Tuo Tempo</h3>
          <p className="text-indigo-200/80 font-medium text-sm leading-relaxed">Gestisci 100 allievi con lo sforzo che impiegavi per 10. Smetti di passare le notti a sistemare file Excel e concentra le tue energie a chiudere nuove vendite.</p>
        </div>
        <div className="mt-12 text-5xl font-oswald text-white flex items-baseline tracking-tighter">
          -85<span className="text-2xl text-indigo-300 ml-1">%</span>
          <span className="text-[10px] ml-3 mb-2 font-sans font-bold uppercase tracking-widest text-indigo-300">Lavoro<br/>Manuale</span>
        </div>
      </div>
    </motion.div>

    <motion.div variants={fadeUp} className="bg-rose-50/50 border border-rose-100/60 rounded-2xl sm:rounded-[2rem] p-6 sm:p-12 shadow-sm relative group hover:bg-rose-50 transition-colors">
      <div className="w-14 h-14 bg-rose-100 text-rose-600 rounded-2xl flex items-center justify-center mb-8">
        <ShieldAlert size={28} />
      </div>
      <h3 className="font-oswald text-2xl sm:text-3xl uppercase tracking-tight mb-6 text-slate-900 leading-[1.1]">Il Soffitto di <br/>Cristallo del Coach</h3>
      <ul className="space-y-4 text-sm text-rose-900/70 font-medium">
        <li className="flex gap-3 items-start"><XCircle size={18} className="text-rose-400 shrink-0 mt-0.5"/> Lavorare su Excel ti impedisce di scalare fisicamente oltre i 30 allievi.</li>
        <li className="flex gap-3 items-start"><XCircle size={18} className="text-rose-400 shrink-0 mt-0.5"/> Consegni PDF anonimi e macchinosi da leggere da smartphone in palestra.</li>
        <li className="flex gap-3 items-start"><XCircle size={18} className="text-rose-400 shrink-0 mt-0.5"/> Passi più tempo a contare i volumi medi settimanali che a correggere la tecnica o attirare leads.</li>
      </ul>
    </motion.div>

    <motion.div variants={fadeUp} className="md:col-span-2 bg-slate-900 rounded-2xl sm:rounded-[2rem] p-6 sm:p-12 shadow-2xl relative overflow-hidden text-white border border-slate-800 group">
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl" />
      <div className="relative z-10 flex flex-col md:flex-row items-center gap-12">
        <div className="flex-1">
          <div className="text-[10px] font-bold text-emerald-400 uppercase tracking-widest mb-4 flex items-center gap-2">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
            Output Interattivo
          </div>
          <h3 className="font-oswald text-3xl sm:text-4xl uppercase tracking-tight mb-4 text-white">Un'App Mobile, <br/>Firmata Col Tuo Nome</h3>
          <p className="text-slate-400 font-medium text-sm leading-relaxed max-w-sm">Esci dall'era dei PDF e dei fogli calcolo illeggibili. Fai percepire l'esclusività del tuo servizio Premium servendo schede direttamente tramite un'interfaccia utente iper curata, incrementando retention e tassi di referral.</p>
        </div>
        <div className="w-full md:w-[45%] p-5 bg-white/5 border border-white/10 rounded-2xl backdrop-blur-sm shadow-xl relative mt-8 md:mt-0">
          <div className="absolute -left-3 top-1/2 -translate-y-1/2 w-6 h-6 bg-slate-800 rounded-full border-4 border-slate-900" />
          <div className="flex justify-between items-center mb-5">
             <div className="text-xs font-bold uppercase tracking-widest text-slate-300">Giorno 1 - Push</div>
             <ChevronDown size={16} className="text-slate-500"/>
          </div>
          {[
            { name: "Planche Lean Push Up", detail: "Protrazione att.", sets: "4x6" },
            { name: "Pseudo Planche PU", detail: "RPE 8", sets: "3x8" },
            { name: "Dip agli Anelli", detail: "Eccentrica 3s", sets: "3x10" },
          ].map((ex, i) => (
            <div key={i} className="flex items-center justify-between py-2.5 px-3 mb-2 bg-white/5 border border-white/5 rounded-lg">
              <div>
                <div className="text-xs font-bold text-white leading-tight">{ex.name}</div>
                <div className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">{ex.detail}</div>
              </div>
              <div className="text-xs font-oswald text-indigo-400 font-bold">{ex.sets}</div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  </motion.div>
);

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setError('');

    try {
      const { error: dbError } = await supabase
        .from('leads')
        .insert([{ email, created_at: new Date().toISOString() }]);

      if (dbError) throw dbError;
      setSuccess(true);
    } catch (err: any) {
      console.error('Supabase error:', err);
      setError('Qualcosa è andato storto. Riprova.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen relative overflow-x-hidden flex flex-col font-sans selection:bg-indigo-500/30 text-slate-900 bg-[#F9F7F2] transition-colors duration-300">
      
      {/* HUD HEADER */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-indigo-100 bg-white/70 shadow-sm transition-all duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="CALI.AI" className="w-9 h-9" />
            <span className="font-black text-2xl tracking-tighter text-slate-900 font-oswald relative top-0.5">
              CALI<span className="text-indigo-600">.AI</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-8 text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2 hover:text-indigo-600 transition-colors cursor-pointer"><Cpu size={14}/> PER COACH</div>
              <div className="flex items-center gap-2 text-indigo-600"><Dna size={14}/> AI ASSISTANT ATTIVO</div>
            </div>
            <button onClick={() => document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' })} className="hidden sm:block px-5 py-2.5 bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200 shadow-sm text-[10px] font-bold uppercase tracking-widest rounded-xl transition-all">
              Scopri il Sistema
            </button>
          </div>
        </div>
      </header>

      {/* === HERO SECTION CON GLASSMORPHISM === */}
      <section className="relative w-full min-h-[100svh] pt-36 xl:pt-24 flex flex-col items-center xl:items-start xl:justify-center z-10 max-w-7xl mx-auto px-4 sm:px-8 overflow-hidden xl:overflow-visible">
        <div className="absolute top-[-10%] right-[0%] w-[1000px] h-[1000px] bg-gradient-to-br from-indigo-300/30 to-purple-300/30 blur-[150px] rounded-full pointer-events-none -z-10" />

        {/* === HOLOGRAPHIC BIOMECHANICAL PULL-UP BACKGROUND (AUTO ANIMATED) === */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.30] md:opacity-[0.25] pointer-events-none overflow-hidden transition-opacity duration-1000 xl:translate-x-32">
          <svg viewBox="0 0 1000 700" className="w-[150vw] h-[150vh] min-w-[1200px] min-h-[900px] max-w-none">
            <style>
              {`
                @keyframes pullUpAction {
                  0%, 100% { transform: translateY(0); }
                  45%, 55% { transform: translateY(-80px); }
                }
                @keyframes elbowLeft {
                  0%, 100% { points: "-120,0 -130,65 -140,130"; }
                  45%, 55% { points: "-120,0 -160,80 -140,50"; }
                }
                @keyframes elbowRight {
                  0%, 100% { points: "120,0 130,65 140,130"; }
                  45%, 55% { points: "120,0 160,80 140,50"; }
                }
                @keyframes scanVertical { 0% { transform: translateY(-100px); } 100% { transform: translateY(800px); } }
                @keyframes pulseData { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }
                
                .body-group { animation: pullUpAction 5s ease-in-out infinite; }
                .arm-l { animation: elbowLeft 5s ease-in-out infinite; }
                .arm-r { animation: elbowRight 5s ease-in-out infinite; }
                .scanner-line { animation: scanVertical 4s linear infinite; }
                .data-node { animation: pulseData 2s infinite; }
              `}
            </style>

            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path d="M 50 0 L 0 0 0 50" fill="none" stroke="rgba(79,70,229,0.05)" strokeWidth="1"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#grid)" />

            <g transform="translate(500, 150)">
              <circle r="400" fill="none" stroke="rgba(79,70,229,0.06)" strokeWidth="1" strokeDasharray="4 16" />
              <circle r="300" fill="none" stroke="rgba(79,70,229,0.08)" strokeWidth="1" />
              <line x1="-350" y1="0" x2="350" y2="0" stroke="rgba(15,23,42,0.15)" strokeWidth="8" strokeLinecap="round" />
              <circle cx="-120" cy="0" r="12" fill="rgba(79,70,229,0.8)" />
              <circle cx="120" cy="0" r="12" fill="rgba(79,70,229,0.8)" />

              <g className="body-group">
                <circle cx="0" cy="70" r="35" fill="rgba(79,70,229,0.05)" stroke="rgba(79,70,229,0.7)" strokeWidth="2" />
                <line x1="-20" y1="65" x2="20" y2="65" stroke="rgba(16,185,129,0.9)" strokeWidth="4" strokeLinecap="round" />
                <polygon points="-140,130 140,130 60,350 -60,350" fill="rgba(79,70,229,0.05)" stroke="rgba(79,70,229,0.8)" strokeWidth="2" strokeLinejoin="round" />
                <path d="M -140,130 Q -155,220 -60,350" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="4" className="data-node" />
                <path d="M 140,130 Q 155,220 60,350" fill="none" stroke="rgba(16,185,129,0.6)" strokeWidth="4" className="data-node" />
                <polygon points="-60,350 60,350 40,550 -40,550" fill="rgba(15,23,42,0.03)" stroke="rgba(79,70,229,0.6)" strokeWidth="2" strokeLinejoin="round" />
                <polygon points="-40,550 40,550 20,700 -20,700" fill="rgba(15,23,42,0.03)" stroke="rgba(79,70,229,0.5)" strokeWidth="2" strokeLinejoin="round" />
                <circle cx="-140" cy="130" r="8" fill="rgba(79,70,229,1)" />
                <circle cx="140" cy="130" r="8" fill="rgba(79,70,229,1)" />
                <g className="data-node">
                  <polyline points="150,220 200,220 220,180" fill="none" stroke="rgba(16,185,129,0.8)" strokeWidth="2" strokeDasharray="4 2" />
                  <rect x="220" y="165" width="130" height="30" fill="rgba(255,255,255,0.9)" stroke="rgba(16,185,129,0.5)" strokeWidth="1" rx="4" />
                  <text x="230" y="185" fill="rgba(16,185,129,1)" fontSize="13" fontFamily="monospace" fontWeight="bold">LATS: ACTIVE</text>
                </g>
              </g>
              <polyline points="-120,0 -130,65 -140,130" fill="none" stroke="rgba(79,70,229,0.8)" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" className="arm-l" />
              <polyline points="120,0 130,65 140,130" fill="none" stroke="rgba(79,70,229,0.8)" strokeWidth="16" strokeLinejoin="round" strokeLinecap="round" className="arm-r" />
            </g>
            <line x1="0" y1="0" x2="1000" y2="0" stroke="rgba(79,70,229,0.3)" strokeWidth="2" className="scanner-line" />
            <rect x="0" y="0" width="1000" height="100" fill="url(#scanGradient)" className="scanner-line" />
            <defs>
              <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgba(79,70,229,0.08)" />
                <stop offset="100%" stopColor="transparent" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="xl:w-[55%] flex flex-col justify-center text-center xl:text-left relative z-20 bg-[#F9F7F2]/50 backdrop-blur-md md:bg-transparent md:backdrop-blur-none rounded-3xl p-6 md:p-0">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-3 px-4 py-2 bg-white border border-indigo-100/60 rounded-full text-[10px] sm:text-xs font-bold text-indigo-600 uppercase tracking-[0.2em] shadow-sm mb-6 mx-auto xl:mx-0 w-fit"
          >
            <Sparkles size={14} className="text-indigo-500" /> Il Primo AI Assistant Per L'Hi-Level Coaching
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
            className="text-[11vw] sm:text-[9vw] xl:text-[7.5rem] font-oswald uppercase tracking-tighter leading-[0.85] text-slate-900 drop-shadow-[0_2px_4px_rgba(249,247,242,0.9)]"
          >
            MOLTIPLICA IL TUO METODO <br className="hidden xl:block"/> <span className="text-indigo-600 xl:mt-2 block">NON IL TUO TEMPO</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="text-slate-600 font-medium text-sm sm:text-lg max-w-xl mt-6 sm:mt-8 normal-case tracking-normal leading-relaxed mx-auto xl:mx-0"
          >
            Passi ancora le tue serate a sistemare celle Excel? Passa i tuoi vecchi protocolli all'intelligenza artificiale, falle estrarre la tua "firma", e falle generare schede ad alto rendimento in 30 secondi netti.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
            className="w-full max-w-lg mt-8 sm:mt-12 p-1.5 bg-white/70 backdrop-blur-md border border-indigo-100/50 rounded-[1.25rem] shadow-xl hover:shadow-2xl transition-all duration-500 mx-auto xl:mx-0 group"
          >
            {success ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="p-8 text-center space-y-3 bg-white rounded-2xl">
                <ShieldAlert className="w-12 h-12 text-emerald-500 mx-auto mb-4" />
                <div className="text-lg font-bold text-slate-900 uppercase tracking-widest font-oswald">In Coda per il Beta</div>
                <p className="text-sm text-slate-500 font-medium">Ti abbiamo riservato un posto: riceverai le direttive per l'onboarding prossimamente ai tuoi contatti.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="p-2 sm:p-2.5 bg-white rounded-2xl flex flex-col sm:flex-row gap-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none" />
                <div className="relative flex-1 flex items-center z-10">
                  <span className="absolute left-4 text-indigo-400 font-black text-lg">{">"}</span>
                  <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="email@coach.it" className="w-full font-sans bg-transparent border-none py-3.5 pl-10 pr-4 text-sm text-slate-900 focus:outline-none transition-all placeholder:text-slate-400 font-medium" />
                </div>
                <button type="submit" disabled={loading} className="py-3.5 px-8 font-sans bg-indigo-600 hover:bg-indigo-700 disabled:bg-indigo-300 text-white text-[11px] sm:text-xs font-black uppercase tracking-[0.15em] rounded-xl transition-all flex items-center justify-center gap-2 shadow-md relative z-10">
                  {loading ? <Loader2 className="w-4 h-4 animate-spin" /> : <>Diventa Beta Tester <ArrowRight size={14}/></>}
                </button>
                {error && <p className="text-rose-500 text-xs font-medium text-center sm:text-left mt-2 w-full">{error}</p>}
              </form>
            )}
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="flex items-center gap-4 mt-8 mx-auto xl:mx-0 text-[10px] font-bold text-slate-400 uppercase tracking-widest"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3].map(i => (
                <div key={i} className={`w-8 h-8 rounded-full border-2 border-white bg-slate-200 flex items-center justify-center overflow-hidden z-${40-i*10}`}>
                   <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Coach" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
            <span>Oltre 50+ coach già in lista p.</span>
          </motion.div>
        </div>

        <GlassMockup />
      </section>

      <Marquee />

      <div id="platform" className="w-full flex-col relative z-20 pb-32">
        <BentoGrid />

        <motion.section 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mt-32 px-4 space-y-8 max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 border border-rose-100/50 rounded-full text-[10px] font-bold text-rose-600 uppercase tracking-[0.2em] mx-auto shadow-sm">
            <XCircle size={14} /> Posti Beta Limitati
          </div>
          <h2 className="text-5xl sm:text-6xl md:text-7xl font-oswald uppercase tracking-tighter text-slate-900 leading-[0.9]">
            Il Tuo Ecosistema <br/> Inizia Da Qui
          </h2>
          <p className="text-slate-500 font-medium text-lg max-w-lg mx-auto leading-relaxed">Chiudi con i processi obsoleti e libera il tuo tempo. Entra in lista e lascia che l'IA apprenda il tuo metodo mentre tu formi il prossimo campione.</p>
          <button onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})} className="inline-flex items-center justify-center gap-3 px-10 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-xs font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 mt-4">
            Reclama il tuo invito <ArrowRight size={16} />
          </button>
        </motion.section>
      </div>

      <footer className="w-full border-t border-indigo-100/50 bg-white py-10 relative z-20 mt-auto">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-[10px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="flex items-center gap-3 text-slate-600"><img src="/logo.png" alt="CALI.AI" className="w-6 h-6" /> CALI.AI INC.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-indigo-600 transition-colors">Termini di Servizio</a>
          </div>
          <div>EST. 2026</div>
        </div>
      </footer>
    </main>
  );
}
