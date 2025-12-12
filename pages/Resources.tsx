
import React from 'react';
import { FileText, Download, Video, BookOpen, ArrowRight } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

const Resources: React.FC = () => {
  return (
    <div className="pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16" width="100%">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">LabReady Resources</h1>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Guides, case studies, and whitepapers to help you run a safer, more efficient lab.
          </p>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
           {/* Resource Card 1 */}
           <Reveal delay={0.1}>
             <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-science-200 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                   <img src="https://picsum.photos/seed/res1/800/400" alt="Guide" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-slate-700 flex items-center gap-1">
                      <FileText size={12} /> GUIDE
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-science-600 transition-colors">The Modern Lab Safety Handbook</h3>
                   <p className="text-slate-600 text-sm mb-6 flex-1">A comprehensive guide to digital COSHH compliance and risk management for UK academic labs.</p>
                   <a href="#" className="inline-flex items-center gap-2 text-science-700 font-semibold text-sm hover:gap-3 transition-all">
                      Download PDF <ArrowRight size={16} />
                   </a>
                </div>
             </div>
           </Reveal>

           {/* Resource Card 2 */}
           <Reveal delay={0.2}>
             <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-science-200 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                   <img src="https://picsum.photos/seed/res2/800/400" alt="Case Study" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-slate-700 flex items-center gap-1">
                      <BookOpen size={12} /> CASE STUDY
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-science-600 transition-colors">How Oxford University cut reagent waste by 40%</h3>
                   <p className="text-slate-600 text-sm mb-6 flex-1">See how the Department of Chemistry implemented LabReady to track inventory usage.</p>
                   <a href="#" className="inline-flex items-center gap-2 text-science-700 font-semibold text-sm hover:gap-3 transition-all">
                      Read Story <ArrowRight size={16} />
                   </a>
                </div>
             </div>
           </Reveal>

           {/* Resource Card 3 */}
           <Reveal delay={0.3}>
             <div className="group bg-white rounded-xl border border-slate-200 overflow-hidden hover:shadow-xl hover:border-science-200 transition-all duration-300 h-full flex flex-col">
                <div className="h-48 bg-slate-100 relative overflow-hidden">
                   <img src="https://picsum.photos/seed/res3/800/400" alt="Webinar" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                   <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-2 py-1 rounded text-xs font-bold text-slate-700 flex items-center gap-1">
                      <Video size={12} /> WEBINAR
                   </div>
                </div>
                <div className="p-6 flex-1 flex flex-col">
                   <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-science-600 transition-colors">Digital Transformation in Biotech</h3>
                   <p className="text-slate-600 text-sm mb-6 flex-1">Panel discussion with lab managers from Genentech and Crick Institute.</p>
                   <a href="#" className="inline-flex items-center gap-2 text-science-700 font-semibold text-sm hover:gap-3 transition-all">
                      Watch Recording <ArrowRight size={16} />
                   </a>
                </div>
             </div>
           </Reveal>
        </div>

        <Reveal width="100%">
           <div className="bg-slate-900 rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-science-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-500/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
              
              <div className="relative z-10 max-w-2xl mx-auto">
                 <h2 className="text-3xl font-bold mb-4">Subscribe to our newsletter</h2>
                 <p className="text-slate-300 mb-8">Get the latest tips on lab management, safety compliance, and research productivity delivered to your inbox.</p>
                 <div className="flex flex-col sm:flex-row gap-3">
                    <input 
                      type="email" 
                      placeholder="Enter your email address" 
                      className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-slate-700 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-science-500"
                    />
                    <button className="px-6 py-3 bg-science-600 hover:bg-science-500 text-white font-bold rounded-lg transition-colors">
                       Subscribe
                    </button>
                 </div>
              </div>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Resources;
