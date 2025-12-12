
import React from 'react';
import { Play, ArrowRight, Laptop, Tablet, Smartphone } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { useRouter } from '../components/Router';

const ProductTour: React.FC = () => {
  const { navigate } = useRouter();
  
  return (
    <div className="pt-32 pb-24 bg-slate-900 text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16" width="100%">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-science-400 text-xs font-semibold mb-6 uppercase tracking-wide">
            Product Walkthrough
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">See LabReady in Action</h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Discover how our platform simplifies complex workflows, from inventory intake to final reporting.
          </p>
        </Reveal>

        {/* Video Section */}
        <Reveal width="100%" className="mb-24">
          <div className="relative aspect-video w-full bg-slate-800 rounded-2xl shadow-2xl overflow-hidden border border-slate-700 group cursor-pointer">
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 to-slate-800 opacity-80"></div>
            {/* Mock Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
               <div className="w-20 h-20 rounded-full bg-white/10 backdrop-blur border border-white/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Play size={32} className="text-white fill-white ml-1" />
               </div>
            </div>
            <div className="absolute bottom-8 left-8">
               <h3 className="text-xl font-bold">Full Platform Overview</h3>
               <p className="text-slate-400 text-sm">Duration: 3:45</p>
            </div>
          </div>
        </Reveal>

        {/* Workflow Slides */}
        <div className="grid md:grid-cols-2 gap-16 items-center mb-24">
           <Reveal>
             <h2 className="text-3xl font-bold mb-6">Designed for every device</h2>
             <p className="text-slate-400 mb-8 leading-relaxed">
               LabReady works where you do. Design experiments in the office, execute them on a tablet at the bench, and approve requests on your phone.
             </p>
             <ul className="space-y-6">
                <li className="flex gap-4 items-center">
                   <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-science-400">
                      <Laptop size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold">Desktop Dashboard</h4>
                      <p className="text-sm text-slate-500">For deep planning, inventory management, and analytics.</p>
                   </div>
                </li>
                <li className="flex gap-4 items-center">
                   <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-science-400">
                      <Tablet size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold">Bench Mode</h4>
                      <p className="text-sm text-slate-500">Step-by-step guidance with large touch targets for gloved hands.</p>
                   </div>
                </li>
                <li className="flex gap-4 items-center">
                   <div className="w-12 h-12 rounded-lg bg-slate-800 flex items-center justify-center text-science-400">
                      <Smartphone size={24} />
                   </div>
                   <div>
                      <h4 className="font-bold">Mobile Companion</h4>
                      <p className="text-sm text-slate-500">Quick approvals, barcode scanning, and notifications.</p>
                   </div>
                </li>
             </ul>
           </Reveal>
           <Reveal delay={0.2}>
              <div className="relative">
                 {/* Abstract Device Composition */}
                 <div className="bg-slate-800 rounded-xl p-2 border border-slate-700 shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                    <img src="https://images.unsplash.com/photo-1555421689-d68471e189f2?auto=format&fit=crop&q=80&w=800" className="rounded-lg opacity-80" alt="Dashboard" />
                 </div>
              </div>
           </Reveal>
        </div>

        <Reveal className="text-center bg-science-900 rounded-2xl p-16 border border-science-800">
           <h2 className="text-3xl font-bold mb-6">Experience it yourself</h2>
           <p className="text-science-100 mb-8 max-w-xl mx-auto">
             Get a personalized walkthrough with one of our scientific application specialists.
           </p>
           <button 
             onClick={() => navigate('/book-demo')}
             className="px-8 py-4 bg-white text-science-900 font-bold rounded-lg hover:bg-science-50 transition-colors inline-flex items-center gap-2"
           >
             Book Live Demo <ArrowRight size={18} />
           </button>
        </Reveal>
      </div>
    </div>
  );
};

export default ProductTour;
