
import React from 'react';
import { Calendar, ShieldCheck, Globe } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

const BookDemo: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
           {/* Copy */}
           <div>
              <Reveal>
                <div className="inline-block px-3 py-1 bg-slate-100 text-slate-600 text-xs font-bold rounded-full mb-6 uppercase tracking-wide">
                   Sales Team
                </div>
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Transform your lab's efficiency.</h1>
                <p className="text-xl text-slate-600 mb-10 leading-relaxed">
                   Book a consultation with our scientific team. We’ll discuss your current compliance challenges and show you how LabReady can help.
                </p>
                
                <div className="space-y-8 mb-12">
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-science-50 rounded-xl flex items-center justify-center text-science-700 shrink-0">
                         <Globe size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-900 text-lg">Global Compliance Expertise</h3>
                         <p className="text-slate-600">Our team understands FDA, MHRA, and ISO 17025 requirements.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-science-50 rounded-xl flex items-center justify-center text-science-700 shrink-0">
                         <ShieldCheck size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-900 text-lg">Secure & Private</h3>
                         <p className="text-slate-600">We sign NDAs before discussing your proprietary workflows.</p>
                      </div>
                   </div>
                   <div className="flex gap-4">
                      <div className="w-12 h-12 bg-science-50 rounded-xl flex items-center justify-center text-science-700 shrink-0">
                         <Calendar size={24} />
                      </div>
                      <div>
                         <h3 className="font-bold text-slate-900 text-lg">Tailored Walkthrough</h3>
                         <p className="text-slate-600">See features relevant to your specific lab type (Academic, Biotech, or CRO).</p>
                      </div>
                   </div>
                </div>
              </Reveal>
           </div>

           {/* Form */}
           <Reveal delay={0.2} className="h-full">
              <div className="bg-slate-50 p-8 md:p-10 rounded-2xl border border-slate-200 h-full">
                 <h3 className="text-2xl font-bold text-slate-900 mb-6">Request a Demo</h3>
                 <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                    <div className="grid grid-cols-2 gap-5">
                       <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">First Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none" placeholder="Jane" />
                       </div>
                       <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Last Name</label>
                          <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none" placeholder="Doe" />
                       </div>
                    </div>

                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-2">Work Email</label>
                       <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none" placeholder="jane.doe@company.com" />
                    </div>

                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-2">Organization / Lab</label>
                       <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none" placeholder="Company Name" />
                    </div>

                    <div className="grid grid-cols-2 gap-5">
                       <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Country</label>
                          <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none bg-white">
                             <option>United Kingdom</option>
                             <option>United States</option>
                             <option>Germany</option>
                             <option>France</option>
                             <option>Other</option>
                          </select>
                       </div>
                       <div>
                          <label className="block text-sm font-semibold text-slate-700 mb-2">Lab Type</label>
                          <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none bg-white">
                             <option>Academic Research</option>
                             <option>Biotech Startup</option>
                             <option>Pharmaceutical</option>
                             <option>CRO</option>
                             <option>Industrial / QA</option>
                          </select>
                       </div>
                    </div>

                    <div>
                       <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Timeframe</label>
                       <select className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none bg-white">
                          <option>As soon as possible</option>
                          <option>This week</option>
                          <option>Next week</option>
                       </select>
                    </div>

                    <button type="submit" className="w-full py-4 bg-science-900 hover:bg-science-800 text-white font-bold rounded-lg shadow-lg transition-all mt-4">
                       Submit Request
                    </button>
                    
                    <p className="text-xs text-center text-slate-400 mt-4">
                       Your data is secure. We never sell your information.
                    </p>
                 </form>
              </div>
           </Reveal>
        </div>
      </div>
    </div>
  );
};

export default BookDemo;
