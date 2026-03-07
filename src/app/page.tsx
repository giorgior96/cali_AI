"use client";

import { useState, useEffect } from 'react';
import { useTheme } from "next-themes";
import { Loader2, Cpu, Dna, ShieldAlert, Sparkles, TerminalSquare, Send, Target, Users, Database, BrainCircuit, Activity, CheckSquare, Layers, XCircle, ArrowRight, ChevronDown, Sun, Moon } from 'lucide-react';

export default function LandingPage() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [typedTitle, setTypedTitle] = useState('');
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  
  const fullTitle = "CALISTHENICS";

  useEffect(() => {
    setMounted(true);
    let i = 0;
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        setTypedTitle(fullTitle.substring(0, i + 1));
        i++;
        if (i >= fullTitle.length) clearInterval(interval);
      }, 150);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  // Intersection Observer for scroll animations
  useEffect(() => {
    if (!mounted) return;
    
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.reveal-on-scroll');
    elements.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, [mounted]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 1500);
  };

  const scrollToContent = () => {
    document.getElementById('platform')?.scrollIntoView({ behavior: 'smooth' });
  };

  if (!mounted) return null;

  return (
    <main className="min-h-screen relative overflow-x-hidden flex flex-col font-mono selection:bg-indigo-500/30 text-slate-900 dark:text-slate-100 bg-[#F9F7F2] dark:bg-[#050505] transition-colors duration-300">
      
      {/* BACKGROUND EFFECTS */}
      <div className="fixed inset-0 pointer-events-none transition-opacity duration-1000 z-0">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-indigo-400/10 dark:bg-indigo-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      </div>

      {/* HUD HEADER */}
      <header className="fixed top-0 z-50 w-full backdrop-blur-xl border-b border-indigo-100 dark:border-white/10 bg-white/60 dark:bg-black/60 shadow-sm transition-colors duration-300">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-8 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <TerminalSquare className="text-indigo-600 dark:text-indigo-400 w-6 h-6 animate-pulse" />
            <span className="font-black text-2xl tracking-tighter text-slate-900 dark:text-white">
              CALI<span className="text-indigo-600 dark:text-indigo-400">.AI</span>
            </span>
          </div>
          
          <div className="flex items-center gap-6">
            <div className="hidden md:flex gap-6 text-[11px] font-bold text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
              <div className="flex items-center gap-2"><Cpu size={14}/> B2B SYSTEM</div>
              <div className="flex items-center gap-2 text-indigo-600 dark:text-indigo-400"><Dna size={14}/> AI CORE ACTIVE</div>
            </div>
            
            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="p-2 rounded-xl border border-indigo-100 dark:border-white/10 hover:bg-indigo-50 dark:hover:bg-white/5 text-indigo-600 dark:text-indigo-400 transition-colors"
              aria-label="Cambia tema"
            >
              {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
            </button>

            <a href="#waitlist" className="px-4 py-2 bg-indigo-600 text-white shadow-md text-xs font-bold uppercase tracking-widest rounded-lg hover:bg-indigo-700 transition-colors">
              Richiedi Invito
            </a>
          </div>
        </div>
      </header>

      {/* === MASSIVE INTRO HERO === */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center z-10 overflow-hidden">
        
        {/* === HOLOGRAPHIC BIOMECHANICAL PULL-UP BACKGROUND (AUTO ANIMATED) === */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-[0.2] md:opacity-[0.25] pointer-events-none overflow-hidden transition-opacity duration-1000">
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
              <line x1="-350" y1="0" x2="350" y2="0" stroke={theme === 'dark' ? "rgba(255,255,255,0.2)" : "rgba(15,23,42,0.2)"} strokeWidth="8" strokeLinecap="round" />
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
                  <rect x="220" y="165" width="130" height="30" fill={theme === 'dark' ? "rgba(0,0,0,0.8)" : "rgba(255,255,255,0.9)"} stroke="rgba(16,185,129,0.5)" strokeWidth="1" rx="4" />
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

        {/* HERO CONTENT */}
        <div className="text-center flex flex-col items-center gap-4 mt-16 px-4 z-10 backdrop-blur-sm p-8 rounded-3xl bg-white/30 dark:bg-black/30 border border-white/40 dark:border-white/10 shadow-xl shadow-indigo-500/5 transition-colors duration-300">
          <div className="inline-flex items-center gap-3 px-5 py-2 bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-500/30 rounded-full text-xs sm:text-sm font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.3em] animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-300">
            <BrainCircuit size={16} className="text-indigo-600 dark:text-indigo-400 animate-pulse" />
            Il futuro del coaching è qui
          </div>
          
          <h1 className="text-[12vw] sm:text-[10vw] md:text-[9vw] lg:text-[140px] font-black uppercase tracking-tighter leading-none flex items-center justify-center relative mt-4">
            {typedTitle.split('').map((char, index) => {
              const isAI = index === 1 || index === 3;
              return (
                <span key={index} className={isAI ? "text-indigo-600 dark:text-indigo-400 drop-shadow-[0_0_15px_rgba(99,102,241,0.5)] mx-0.5" : "text-slate-900 dark:text-white inline-block"}>
                  {char}
                </span>
              );
            })}
            <span className="inline-block w-[2vw] lg:w-5 h-[10vw] lg:h-28 bg-indigo-500 ml-2 md:ml-6 animate-pulse"></span>
          </h1>

          <div className="text-slate-600 dark:text-slate-400 font-medium text-sm sm:text-lg lg:text-xl max-w-2xl mt-8 text-center uppercase tracking-widest leading-relaxed animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-700">
            Intelligenza <span className="text-indigo-600 dark:text-indigo-400 font-black">A</span>rtif<span className="text-indigo-600 dark:text-indigo-400 font-black">I</span>ciale applicata all'Evidence-Based Training.
          </div>
        </div>

        <button onClick={scrollToContent} className="absolute bottom-12 flex flex-col items-center gap-2 text-indigo-500 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors animate-bounce cursor-pointer group z-20">
          <span className="text-[10px] font-bold uppercase tracking-widest group-hover:opacity-100 opacity-60">Inizia Protocollo</span>
          <ChevronDown size={24} />
        </button>
      </section>

      <div id="platform" className="w-full max-w-7xl mx-auto p-4 sm:p-8 z-10 space-y-32 pb-32 relative">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center pt-16 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="lg:col-span-6 space-y-8">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-slate-900 dark:text-white uppercase tracking-tighter leading-[1.05]">
              Scala il tuo <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-600">Coaching</span>
            </h2>
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed max-w-lg font-medium">
              Smetti di perdere ore davanti a fogli Excel. CALI.AI genera schede di allenamento scientifiche in 30 secondi per decine di atleti. Tu decidi la strategia, l'IA calcola i volumi perfetti.
            </p>
            <div className="p-1 max-w-md bg-white dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-2xl shadow-xl shadow-indigo-500/5 relative hover:-translate-y-1 transition-all duration-500">
              <div className="absolute -top-3 -right-3 p-2 bg-indigo-50 dark:bg-indigo-900/50 rounded-lg border border-indigo-100 dark:border-indigo-500/30 text-indigo-600 dark:text-indigo-400 shadow-sm">
                <Target size={18} />
              </div>
              {success ? (
                <div className="p-6 text-center space-y-3">
                  <ShieldAlert className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                  <div className="text-base font-bold text-slate-900 dark:text-white uppercase tracking-widest">Credenziali Ricevute</div>
                  <p className="text-xs text-slate-500 dark:text-slate-400">Il tuo profilo coach è in lista d'attesa prioritaria. Ti contatteremo presto.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="p-5 space-y-4">
                  <label className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest flex items-center gap-2"><TerminalSquare size={14}/> Inserisci la tua Email</label>
                  <div className="relative flex items-center">
                    <span className="absolute left-4 text-indigo-500 font-black text-lg">{">"}</span>
                    <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} placeholder="coach@calisthenics.it" className="w-full bg-slate-50 dark:bg-black/20 border border-indigo-100 dark:border-white/10 rounded-xl py-4 pl-10 pr-4 text-base text-slate-900 dark:text-white focus:outline-none focus:border-indigo-500 dark:focus:border-indigo-400 transition-all placeholder:text-slate-400" />
                  </div>
                  <button type="submit" disabled={loading} className="w-full py-4 bg-indigo-600 hover:bg-indigo-700 disabled:bg-slate-300 dark:disabled:bg-white/10 text-white text-sm font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-md hover:shadow-xl hover:shadow-indigo-500/20 flex items-center justify-center gap-3 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <><span>Richiedi Accesso Anticipato</span><Send size={16}/></>}
                  </button>
                </form>
              )}
            </div>
          </div>
          <div className="lg:col-span-6 relative">
            <div className="absolute -inset-4 bg-gradient-to-tr from-indigo-500/10 to-purple-500/10 rounded-[2rem] blur-2xl transform rotate-6"></div>
            <div className="bg-white/90 dark:bg-black/80 border border-indigo-100 dark:border-white/10 rounded-3xl p-6 relative shadow-2xl shadow-indigo-500/10 dark:shadow-none overflow-hidden flex flex-col h-[500px] backdrop-blur-xl">
              <div className="flex items-center justify-between border-b border-indigo-50 dark:border-white/5 pb-4 mb-6">
                <div className="flex items-center gap-4">
                  <div className="w-3 h-3 bg-indigo-500 rounded-full animate-pulse shadow-[0_0_8px_rgba(99,102,241,0.5)]"></div>
                  <h3 className="text-sm font-black uppercase tracking-[0.3em] text-slate-900 dark:text-white">Console di Generazione</h3>
                </div>
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-white/10"></div>
                  <div className="w-3 h-3 rounded-full bg-slate-200 dark:bg-white/10"></div>
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex flex-col gap-5">
                <div className="p-5 bg-indigo-50/50 dark:bg-indigo-500/5 border border-indigo-100 dark:border-indigo-500/20 rounded-xl flex items-center justify-between">
                  <div>
                    <div className="text-xs font-bold text-indigo-600 dark:text-indigo-400 uppercase tracking-widest mb-1">Target Allievo: Luca</div>
                    <div className="text-base font-black text-slate-900 dark:text-slate-200">Muscle Up + Ipertrofia</div>
                  </div>
                  <div className="px-3 py-1.5 bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-100 dark:border-emerald-500/20 text-xs font-black rounded uppercase">Calcolato</div>
                </div>
                <div className="space-y-4 flex-1 overflow-auto pr-2 custom-scrollbar">
                  {[
                    { title: "High Pull-ups Esplosivi", desc: "Trazione al petto", sets: "5x", reps: "3-4" },
                    { title: "Pull-ups Zavorrati", desc: "RPE 8 - Pausa 120s", sets: "4x", reps: "5-6" },
                    { title: "Dip agli Anelli", desc: "Controllo eccentrico", sets: "3x", reps: "8-10" },
                    { title: "Hollow Body Holds", desc: "Tensionamento core", sets: "3x", reps: "15s" }
                  ].map((ex, i) => (
                    <div key={i} className="p-4 bg-slate-50/50 dark:bg-white/5 border border-indigo-50 dark:border-white/5 rounded-xl flex items-center justify-between hover:border-indigo-300 dark:hover:border-indigo-500/30 transition-all">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-black text-indigo-600 dark:text-indigo-400 bg-indigo-100 dark:bg-indigo-500/10 px-2 py-1 rounded">0{i+1}</span>
                        <div><div className="text-sm font-bold text-slate-900 dark:text-slate-200 uppercase">{ex.title}</div><div className="text-xs text-slate-500 mt-0.5">{ex.desc}</div></div>
                      </div>
                      <div className="text-right"><div className="text-lg font-black text-indigo-600 dark:text-indigo-400">{ex.sets}</div><div className="text-xs font-bold text-slate-400 dark:text-slate-600 uppercase">{ex.reps}</div></div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="mt-5 pt-5 border-t border-indigo-50 dark:border-white/5 flex justify-between items-center">
                <div className="text-xs font-bold text-slate-500 dark:text-slate-500 uppercase tracking-widest flex items-center gap-2"><CheckSquare size={14} className="text-emerald-500" /> Dati Biomeccanici</div>
                <button className="px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-black text-xs font-black uppercase rounded-lg hover:opacity-80 transition-colors">Invia all'Allievo</button>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white/50 dark:bg-white/5 border border-indigo-100 dark:border-white/10 rounded-3xl p-8 lg:p-16 shadow-sm reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">Il Metodo Tradizionale è Rotto</h2>
            <p className="text-lg text-slate-500 dark:text-slate-400 mt-4 max-w-2xl mx-auto">I PT passano più tempo su Excel che a correggere la tecnica. È ora di evolversi.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="p-8 bg-rose-50 dark:bg-rose-900/10 border border-rose-100 dark:border-rose-500/20 rounded-2xl space-y-6 hover:shadow-lg transition-all">
              <div className="flex items-center gap-3 text-rose-600 dark:text-rose-400 mb-6 border-b border-rose-100 dark:border-rose-500/20 pb-4"><XCircle size={24} /><h3 className="text-xl font-bold text-rose-900 dark:text-rose-300 uppercase tracking-widest">Oggi</h3></div>
              <ul className="space-y-4 text-sm text-rose-900/80 dark:text-rose-200/70">
                <li className="flex gap-3"><span className="text-rose-500 font-bold">×</span> Perdi 40 minuti per una singola scheda.</li>
                <li className="flex gap-3"><span className="text-rose-500 font-bold">×</span> Calcoli i volumi a mente, rischio sovrallenamento.</li>
                <li className="flex gap-3"><span className="text-rose-500 font-bold">×</span> Formattazione Excel poco professionale.</li>
              </ul>
            </div>
            <div className="p-8 bg-indigo-50 dark:bg-indigo-900/10 border border-indigo-100 dark:border-indigo-500/20 rounded-2xl space-y-6 relative overflow-hidden hover:shadow-lg transition-all">
              <div className="absolute top-0 right-0 w-32 h-32 bg-indigo-200/20 blur-2xl"></div>
              <div className="flex items-center gap-3 text-indigo-600 dark:text-indigo-400 mb-6 border-b border-indigo-100 dark:border-indigo-500/20 pb-4"><CheckSquare size={24} /><h3 className="text-xl font-bold text-indigo-900 dark:text-white uppercase tracking-widest">Domani</h3></div>
              <ul className="space-y-4 text-sm text-indigo-900/80 dark:text-indigo-100 font-medium">
                <li className="flex gap-3"><span className="text-indigo-400 font-bold">✓</span> IA crea la base in 30 secondi.</li>
                <li className="flex gap-3"><span className="text-indigo-400 font-bold">✓</span> Algoritmo che previene infortuni.</li>
                <li className="flex gap-3"><span className="text-indigo-400 font-bold">✓</span> Output visivo perfetto per allievo.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="relative py-12 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="text-center mb-20 space-y-4"><h2 className="text-xs font-black text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.4em] flex items-center justify-center gap-2"><Layers size={18} /> Workflow Ottimizzato</h2><h3 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Come funziona</h3></div>
          <div className="grid md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-[40px] left-[20%] right-[20%] h-px bg-indigo-100 dark:bg-white/10 border-t border-dashed border-indigo-200 z-0"></div>
            {['Inserisci i Dati', 'Calcolo Neurale', 'Revisione'].map((step, idx) => (
              <div key={idx} className="relative z-10 bg-white dark:bg-white/5 p-8 rounded-3xl border border-indigo-100 dark:border-white/10 shadow-lg hover:border-indigo-300 transition-all group">
                <div className="w-16 h-16 rounded-2xl bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-100 dark:border-indigo-500/30 flex items-center justify-center mb-8 text-indigo-600 dark:text-indigo-400 group-hover:bg-indigo-600 group-hover:text-white transition-all shadow-sm"><Database size={28} /></div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase tracking-wider mb-3 flex items-center gap-2"><span className="text-indigo-500 dark:text-indigo-400 text-sm">0{idx+1}.</span> {step}</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed font-medium">Automatizza il processo caricando il profilo dell'allievo.</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-white dark:bg-black/20 border border-indigo-100 dark:border-white/10 rounded-[2.5rem] p-8 lg:p-16 relative overflow-hidden shadow-xl reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="grid lg:grid-cols-2 gap-16 relative z-10 items-center">
            <div className="space-y-10">
              <h2 className="text-3xl lg:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight mb-6 leading-tight">Il Coach Neurale</h2>
              <p className="text-base text-slate-600 dark:text-slate-400 font-medium">CALI.AI non genera schede a caso. È Evidence-Based.</p>
              <div className="space-y-8">
                <div className="flex gap-5 items-start"><div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/30 shrink-0 text-indigo-600 dark:text-indigo-400"><ShieldAlert size={20} /></div><div><h4 className="text-base font-black text-slate-900 dark:text-white uppercase">Tutela Articolazioni</h4></div></div>
                <div className="flex gap-5 items-start"><div className="p-3 bg-indigo-50 dark:bg-indigo-500/10 rounded-xl border border-indigo-100 dark:border-indigo-500/30 shrink-0 text-indigo-600 dark:text-indigo-400"><Users size={20} /></div><div><h4 className="text-base font-black text-slate-900 dark:text-white uppercase">Multi-Obiettivo</h4></div></div>
              </div>
            </div>
            <div className="bg-slate-950 border border-slate-800 rounded-2xl p-6 font-mono text-[11px] sm:text-xs text-indigo-200 shadow-2xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-50"></div>
              <div className="flex gap-2 mb-6 border-b border-slate-800 pb-3"><div className="w-3 h-3 rounded-full bg-rose-500"></div><div className="w-3 h-3 rounded-full bg-amber-500"></div><div className="w-3 h-3 rounded-full bg-emerald-500"></div></div>
              <div className="space-y-4 font-bold tracking-wide">
                <p><span className="text-indigo-400">{">"}</span> ANALISI_RICHIESTA</p>
                <p className="text-amber-400 pl-4 animate-pulse">ATTENZIONE: Fatica SNC rilevata.</p>
                <div className="pl-4 border-l-2 border-emerald-500/50 mt-2 space-y-1"><p className="text-emerald-400">[SUCCESS] Rischio ridotto del 32%</p><p className="text-emerald-400">[SUCCESS] Scheda pronta.</p></div>
              </div>
            </div>
          </div>
        </section>

        <section className="text-center py-16 space-y-8 reveal-on-scroll opacity-0 translate-y-12 transition-all duration-1000 ease-out">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-rose-50 dark:bg-rose-900/20 border border-rose-100 dark:border-rose-500/30 rounded-full text-xs font-bold text-rose-600 dark:text-rose-400 uppercase tracking-widest mx-auto"><XCircle size={14} /> Posti Beta Limitati</div>
          <h2 className="text-4xl sm:text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">Pronto a fare il salto?</h2>
          <a href="#waitlist" className="inline-flex items-center justify-center gap-3 px-8 py-5 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-black uppercase tracking-[0.2em] rounded-xl transition-all shadow-lg hover:shadow-indigo-500/30 hover:scale-105">Richiedi Accesso Ora <ArrowRight size={18} /></a>
        </section>
      </div>

      <footer className="w-full border-t border-indigo-100 dark:border-white/10 bg-white dark:bg-black py-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-xs font-bold text-slate-500 dark:text-slate-600 uppercase tracking-widest">
          <div className="flex items-center gap-3"><TerminalSquare size={16} /> CALI.AI INC.</div>
          <div className="flex gap-6"><a href="#" className="hover:text-indigo-600 transition-colors">Privacy</a><a href="#" className="hover:text-indigo-600 transition-colors">Termini</a></div>
          <div>EST. 2026</div>
        </div>
      </footer>

      <style jsx global>{`
        .reveal-on-scroll.is-visible { opacity: 1 !important; transform: translateY(0) !important; }
        @keyframes scan { 0% { transform: translateY(0); } 100% { transform: translateY(100vh); } }
        .animate-scan { animation: scan 4s linear infinite; }
        .custom-scrollbar::-webkit-scrollbar { width: 6px; }
        .custom-scrollbar::-webkit-scrollbar-track { background: rgba(0,0,0,0.05); border-radius: 10px; }
        .custom-scrollbar::-webkit-scrollbar-thumb { background: rgba(79, 70, 229, 0.2); border-radius: 10px; }
        .custom-scrollbar:hover::-webkit-scrollbar-thumb { background: rgba(79, 70, 229, 0.5); }
      `}</style>
    </main>
  );
}

function Lock(props: any) {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
  )
}
