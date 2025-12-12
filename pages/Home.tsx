
import React from 'react';
import { ArrowRight, PlayCircle, ShieldCheck, Activity, Layers, CheckCircle } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { useRouter } from '../components/Router';

const Home: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden bg-white">
        <div className="absolute inset-0 -z-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-gradient-to-b from-science-50 to-transparent opacity-70 blur-3xl rounded-full translate-x-1/2 -translate-y-1/2"></div>
        
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
          <Reveal>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-100 border border-slate-200 text-slate-700 text-xs font-bold mb-8 uppercase tracking-widest">
              ISO 17025 COMPLIANT WORKFLOWS
            </div>
          </Reveal>

          <Reveal delay={0.1} width="100%">
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 mb-6 leading-[1.1]">
              Precision. Compliance. <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-science-700 to-science-500">
                Absolute Control.
              </span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
              The comprehensive digital operating system for modern laboratories. 
              LabReady unifies risk assessment, inventory, and audit trails into one 
              seamless, secure platform.
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col sm:flex-row gap-4 items-center justify-center mb-20">
              <button 
                onClick={() => navigate('/book-demo')}
                className="px-8 py-4 rounded-lg bg-science-950 text-white font-semibold hover:bg-science-900 transition-all flex items-center gap-2 shadow-xl shadow-science-900/20"
              >
                Book a Demo <ArrowRight size={18} />
              </button>
              <button 
                onClick={() => navigate('/product-tour')}
                className="px-8 py-4 rounded-lg bg-white border border-slate-200 text-slate-700 font-semibold hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                <PlayCircle size={18} /> Watch Product Tour
              </button>
            </div>
          </Reveal>

          {/* Hero Visual - Floating Molecule & Interface */}
          <Reveal delay={0.4} width="100%">
            <div className="relative mx-auto max-w-6xl">
              <div className="relative rounded-t-2xl bg-slate-900 p-2 shadow-2xl border border-slate-800 overflow-hidden">
                 <div className="bg-slate-50 rounded-t-lg overflow-hidden h-[400px] md:h-[600px] w-full relative group">
                   <img 
                     src="https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=2000&ixlib=rb-4.0.3" 
                     alt="Laboratory Interface Context" 
                     className="w-full h-full object-cover opacity-90 transition-transform duration-[20s] ease-linear group-hover:scale-105"
                   />
                   
                   {/* Overlay UI Mockup */}
                   <div className="absolute inset-0 bg-slate-900/10 backdrop-blur-[2px] flex items-center justify-center">
                      <div className="w-[90%] h-[80%] bg-white rounded-xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col">
                        {/* Header */}
                        <div className="h-14 border-b border-slate-100 flex items-center px-6 justify-between bg-white">
                           <div className="flex gap-2">
                              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                              <div className="w-3 h-3 rounded-full bg-slate-200"></div>
                           </div>
                           <div className="h-2 w-32 bg-slate-100 rounded-full"></div>
                        </div>
                        {/* Body */}
                        <div className="flex-1 flex">
                           <div className="w-64 border-r border-slate-100 bg-slate-50 p-4 space-y-3 hidden md:block">
                              {[1,2,3,4].map(i => (
                                <div key={i} className="h-10 w-full bg-white rounded border border-slate-100"></div>
                              ))}
                           </div>
                           <div className="flex-1 p-8">
                              <div className="flex justify-between items-end mb-8">
                                <div>
                                  <div className="text-xs font-bold text-science-600 mb-1">PROJECT ALPHA-7</div>
                                  <div className="text-2xl font-bold text-slate-900">Synthesis Protocol 4.2</div>
                                </div>
                                <div className="px-3 py-1 bg-green-50 text-green-700 text-xs font-bold border border-green-200 rounded">APPROVED</div>
                              </div>
                              <div className="grid grid-cols-3 gap-4 mb-8">
                                 <div className="h-24 bg-slate-50 border border-slate-100 rounded-lg p-4">
                                    <div className="text-xs text-slate-400 font-bold mb-2">RISK SCORE</div>
                                    <div className="text-2xl font-bold text-slate-900">Low</div>
                                 </div>
                                 <div className="h-24 bg-slate-50 border border-slate-100 rounded-lg p-4">
                                    <div className="text-xs text-slate-400 font-bold mb-2">REAGENTS</div>
                                    <div className="text-2xl font-bold text-slate-900">12/12</div>
                                 </div>
                                 <div className="h-24 bg-slate-50 border border-slate-100 rounded-lg p-4">
                                    <div className="text-xs text-slate-400 font-bold mb-2">TIMELINE</div>
                                    <div className="text-2xl font-bold text-slate-900">On Track</div>
                                 </div>
                              </div>
                              <div className="h-4 w-full bg-slate-100 rounded mb-2"></div>
                              <div className="h-4 w-2/3 bg-slate-100 rounded mb-2"></div>
                              <div className="h-4 w-3/4 bg-slate-100 rounded"></div>
                           </div>
                        </div>
                      </div>
                   </div>
                 </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* KEY VALUE PILLARS */}
      <section className="py-24 bg-slate-50 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Reveal>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">The Standard for Modern Science</h2>
              <p className="text-slate-600 max-w-2xl mx-auto">
                LabReady replaces fragmented tools with a cohesive operating system designed for regulatory rigor.
              </p>
            </Reveal>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Reveal delay={0.1}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 h-full hover:border-science-300 transition-colors">
                <div className="w-12 h-12 bg-science-50 text-science-700 rounded-lg flex items-center justify-center mb-6">
                  <ShieldCheck size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Uncompromised Safety</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Real-time risk assessments linked directly to chemical inventory. Automatic COSHH generation ensures no experiment starts without approval.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 h-full hover:border-science-300 transition-colors">
                <div className="w-12 h-12 bg-indigo-50 text-indigo-700 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Audit Readiness</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Every action is logged. Version-controlled SOPs and immutable data trails make ISO 17025 and GLP audits effortless.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.3}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 h-full hover:border-science-300 transition-colors">
                <div className="w-12 h-12 bg-teal-50 text-teal-700 rounded-lg flex items-center justify-center mb-6">
                  <Activity size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Operational Efficiency</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  Reduce administrative burden by 40%. Automated reordering, instrument scheduling, and competency tracking in one view.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.4}>
              <div className="bg-white p-8 rounded-xl border border-slate-200 h-full hover:border-science-300 transition-colors">
                <div className="w-12 h-12 bg-blue-50 text-blue-700 rounded-lg flex items-center justify-center mb-6">
                  <Layers size={24} />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">Data Accuracy</h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A single source of truth. Connect results to protocols to reagents used, eliminating transcription errors and data silos.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* WORKFLOW ILLUSTRATION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
           <Reveal className="mb-16">
             <div className="flex flex-col md:flex-row justify-between items-end gap-6 border-b border-slate-100 pb-8">
                <div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-2">End-to-End Traceability</h2>
                   <p className="text-slate-600">From stock arrival to experimental conclusion.</p>
                </div>
                <button onClick={() => navigate('/features')} className="text-science-700 font-semibold flex items-center gap-2 hover:gap-3 transition-all">
                   Explore Features <ArrowRight size={16} />
                </button>
             </div>
           </Reveal>

           <Reveal width="100%">
              <div className="relative bg-slate-50 rounded-2xl p-10 border border-slate-200 overflow-hidden">
                 {/* Decorative background lines */}
                 <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-200 -translate-y-1/2 hidden md:block z-0"></div>
                 
                 <div className="grid md:grid-cols-4 gap-8 relative z-10">
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center relative group">
                       <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg ring-4 ring-slate-50">1</div>
                       <h4 className="font-bold text-slate-900 mb-2">Intake</h4>
                       <p className="text-xs text-slate-500">Scan barcode. Assign to cabinet. Auto-fetch SDS.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center relative group">
                       <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg ring-4 ring-slate-50">2</div>
                       <h4 className="font-bold text-slate-900 mb-2">Plan</h4>
                       <p className="text-xs text-slate-500">Select protocol. Link reagents. Auto-generate risk assessment.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center relative group">
                       <div className="w-10 h-10 bg-science-600 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg ring-4 ring-slate-50">3</div>
                       <h4 className="font-bold text-slate-900 mb-2">Execute</h4>
                       <p className="text-xs text-slate-500">Step-by-step guidance. Data capture. Usage deduction.</p>
                    </div>
                    
                    <div className="bg-white p-6 rounded-lg shadow-sm border border-slate-100 text-center relative group">
                       <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-sm font-bold shadow-lg ring-4 ring-slate-50">4</div>
                       <h4 className="font-bold text-slate-900 mb-2">Review</h4>
                       <p className="text-xs text-slate-500">Sign-off results. Audit trail logged. Report generated.</p>
                    </div>
                 </div>
              </div>
           </Reveal>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
           <Reveal className="text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Trusted by the Scientific Community</h2>
              <p className="text-slate-400">Powering discovery at leading institutions worldwide.</p>
           </Reveal>

           <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={0.1}>
                 <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="flex text-science-400 mb-4">★★★★★</div>
                    <p className="text-slate-300 italic mb-6 leading-relaxed">
                       "LabReady transformed our compliance culture. We went from frantic pre-audit preparation to being audit-ready every single day."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs">EL</div>
                       <div>
                          <div className="font-bold text-white text-sm">Dr. Elena Lin</div>
                          <div className="text-xs text-slate-500">Lab Manager, BioTech Solutions</div>
                       </div>
                    </div>
                 </div>
              </Reveal>

              <Reveal delay={0.2}>
                 <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="flex text-science-400 mb-4">★★★★★</div>
                    <p className="text-slate-300 italic mb-6 leading-relaxed">
                       "The inventory tracking alone saved us 15% on reagent costs in the first year. It's the most intuitive LIMS I've used."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs">JP</div>
                       <div>
                          <div className="font-bold text-white text-sm">James Peterson</div>
                          <div className="text-xs text-slate-500">Operations Lead, Oxford Uni</div>
                       </div>
                    </div>
                 </div>
              </Reveal>

              <Reveal delay={0.3}>
                 <div className="bg-slate-800 p-8 rounded-xl border border-slate-700">
                    <div className="flex text-science-400 mb-4">★★★★★</div>
                    <p className="text-slate-300 italic mb-6 leading-relaxed">
                       "Finally, a system that understands safety isn't just a checklist. The integration between risk assessments and experiments is seamless."
                    </p>
                    <div className="flex items-center gap-4">
                       <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center font-bold text-xs">SK</div>
                       <div>
                          <div className="font-bold text-white text-sm">Sarah Khan</div>
                          <div className="text-xs text-slate-500">Safety Officer, Apex Pharma</div>
                       </div>
                    </div>
                 </div>
              </Reveal>
           </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-20 bg-white border-t border-slate-200">
         <div className="max-w-4xl mx-auto px-6 text-center">
            <Reveal>
               <h2 className="text-4xl font-bold text-slate-900 mb-6">Ready to upgrade your lab?</h2>
               <p className="text-xl text-slate-600 mb-10">Join 500+ top-tier labs streamlining operations with LabReady.</p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <button 
                   onClick={() => navigate('/book-demo')}
                   className="px-10 py-4 bg-science-600 text-white font-bold rounded-lg hover:bg-science-700 transition-all shadow-lg shadow-science-500/30"
                 >
                   Schedule Demo
                 </button>
                 <button 
                   onClick={() => navigate('/contact')}
                   className="px-10 py-4 bg-slate-100 text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors"
                 >
                   Contact Sales
                 </button>
               </div>
            </Reveal>
         </div>
      </section>
    </>
  );
};

export default Home;
