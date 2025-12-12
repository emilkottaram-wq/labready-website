
import React from 'react';
import { ArrowRight, PlayCircle, ShieldCheck } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { useRouter } from './Router';

const Hero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20"></div>
      <div className="absolute top-0 right-0 w-1/3 h-1/2 bg-gradient-to-b from-science-100 to-transparent opacity-50 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-indigo-100 to-transparent opacity-50 blur-3xl rounded-full -translate-x-1/2 translate-y-1/2"></div>
      
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <Reveal>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-science-50 border border-science-200 text-science-700 text-xs font-semibold mb-8 uppercase tracking-wide">
            <span className="w-2 h-2 rounded-full bg-science-500 animate-pulse"></span>
            v2.0 is now live for Academic Labs
          </div>
        </Reveal>

        <Reveal delay={0.1} width="100%">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
            Research at the <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-science-600 to-indigo-600">
              speed of thought.
            </span>
          </h1>
        </Reveal>

        <Reveal delay={0.2}>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
            LabReady unifies experiments, inventory, COSHH, and scheduling into one intuitive OS. 
            Built for breakthrough science, not paperwork.
          </p>
        </Reveal>

        <Reveal delay={0.3}>
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
            <button 
              onClick={() => navigate('/book-demo')}
              className="px-8 py-3.5 rounded-full bg-slate-900 text-white font-medium hover:bg-slate-800 transition-transform hover:scale-105 flex items-center gap-2 shadow-lg shadow-slate-900/20"
            >
              Book a Demo <ArrowRight size={18} />
            </button>
            <button 
              onClick={() => navigate('/product-tour')}
              className="px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 font-medium hover:bg-slate-50 transition-colors flex items-center gap-2"
            >
              <PlayCircle size={18} /> Watch Product Tour
            </button>
          </div>
        </Reveal>

        {/* Hero Visual - Tilted Interface */}
        <Reveal delay={0.4} width="100%">
          <div className="relative mx-auto max-w-5xl perspective-1000 group">
            <div className="relative rounded-xl bg-slate-900 p-1 shadow-2xl transition-transform duration-700 ease-out transform md:group-hover:rotate-x-2 md:rotate-x-6 md:rotate-y-0 border border-slate-800/50">
               {/* Window Controls */}
              <div className="absolute top-4 left-4 flex gap-2 z-10">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              
              {/* Inner Content */}
              <div className="bg-slate-50 rounded-lg overflow-hidden h-[400px] md:h-[600px] w-full relative">
                 <img 
                   src="https://picsum.photos/1200/800?grayscale" 
                   alt="LabReady Interface" 
                   className="w-full h-full object-cover opacity-90"
                 />
                 
                 {/* Floating UI Mockups (simulating the app interface) */}
                 <div className="absolute top-16 left-8 right-8 bottom-8 flex gap-6">
                    {/* Sidebar */}
                    <div className="hidden md:block w-64 bg-white/90 backdrop-blur rounded-lg shadow-sm border border-slate-200 p-4 flex flex-col gap-4">
                        <div className="h-8 w-24 bg-slate-200 rounded animate-pulse"></div>
                        <div className="flex flex-col gap-2">
                            {[1,2,3,4,5].map(i => (
                                <div key={i} className="h-8 w-full bg-slate-100 rounded flex items-center px-2">
                                    <div className="w-4 h-4 bg-slate-300 rounded-full mr-2"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                    
                    {/* Main Area */}
                    <div className="flex-1 bg-white/95 backdrop-blur rounded-lg shadow-lg border border-slate-200 p-6 flex flex-col">
                        <div className="flex justify-between items-center mb-8">
                            <div className="h-8 w-1/3 bg-slate-200 rounded"></div>
                            <div className="flex gap-2">
                                <div className="h-8 w-20 bg-science-100 rounded"></div>
                                <div className="h-8 w-20 bg-slate-100 rounded"></div>
                            </div>
                        </div>
                        {/* Fake Kanban Board */}
                        <div className="flex gap-4 h-full">
                             <div className="flex-1 bg-slate-50 rounded border border-slate-100 p-3">
                                <div className="text-xs font-bold text-slate-400 mb-4">TO DO</div>
                                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 mb-2">
                                    <div className="w-full h-2 bg-red-100 rounded mb-2"></div>
                                    <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                                </div>
                             </div>
                             <div className="flex-1 bg-slate-50 rounded border border-slate-100 p-3">
                                <div className="text-xs font-bold text-slate-400 mb-4">IN PROGRESS</div>
                                <div className="bg-white p-3 rounded shadow-sm border border-slate-200 mb-2 border-l-4 border-l-science-500">
                                    <div className="w-full h-2 bg-science-50 rounded mb-2"></div>
                                    <div className="w-2/3 h-2 bg-slate-100 rounded"></div>
                                </div>
                             </div>
                             <div className="flex-1 bg-slate-50 rounded border border-slate-100 p-3 opacity-50">
                                <div className="text-xs font-bold text-slate-400 mb-4">DONE</div>
                             </div>
                        </div>
                    </div>
                 </div>

                 {/* Floating Badges */}
                 <div className="absolute top-20 right-10 bg-white shadow-xl rounded-lg p-3 flex items-center gap-3 animate-bounce duration-[3000ms]">
                    <div className="bg-green-100 p-2 rounded-full text-green-600"><ShieldCheck size={16} /></div>
                    <div className="text-xs font-bold text-slate-700">COSHH Approved</div>
                 </div>
              </div>
            </div>
            
            {/* Reflection/Shadow */}
            <div className="absolute -bottom-10 left-4 right-4 h-10 bg-black blur-2xl opacity-20 rounded-[100%]"></div>
          </div>
        </Reveal>

        {/* Social Proof Logos */}
        <div className="mt-20 pt-10 border-t border-slate-200 w-full">
           <p className="text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">Trusted by innovators at</p>
           <div className="flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {/* Using text placeholders styled to look like logos for no external assets */}
              <span className="text-xl font-bold font-serif text-slate-800">OXFORD</span>
              <span className="text-xl font-black tracking-tighter text-slate-800">MIT</span>
              <span className="text-xl font-bold italic text-slate-800">Genentech</span>
              <span className="text-xl font-medium tracking-wide text-slate-800">CRICK<span className="text-science-600">.</span></span>
              <span className="text-xl font-bold text-slate-800">BioRad</span>
           </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
