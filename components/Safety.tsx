import React from 'react';
import { Shield, Lock, FileCheck, AlertOctagon, ShieldCheck } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const Safety: React.FC = () => {
  return (
    <section id="safety" className="py-24 bg-white border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center gap-16">
        
        <div className="flex-1">
          <Reveal>
            <div className="inline-block px-3 py-1 bg-green-50 text-green-700 text-xs font-bold rounded-full mb-6 border border-green-200">
              AUDIT READY
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-6">Compliance isn't an afterthought. It's the foundation.</h2>
            <p className="text-lg text-slate-600 mb-8">
              LabReady is built with safety officers in mind. We integrate HSE guidelines directly into the experimental workflow, ensuring nothing falls through the cracks.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="flex gap-3">
                 <Shield className="text-science-600 shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-900">Auto-COSHH</h4>
                   <p className="text-sm text-slate-600">Forms generate automatically based on chemical inputs.</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <AlertOctagon className="text-science-600 shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-900">Risk Matrix</h4>
                   <p className="text-sm text-slate-600">Visual risk scoring for every procedure.</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <FileCheck className="text-science-600 shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-900">SDS Library</h4>
                   <p className="text-sm text-slate-600">Centralized, searchable, and always up to date.</p>
                 </div>
               </div>
               <div className="flex gap-3">
                 <Lock className="text-science-600 shrink-0" />
                 <div>
                   <h4 className="font-bold text-slate-900">Role Control</h4>
                   <p className="text-sm text-slate-600">Granular permissions for students vs. PIs.</p>
                 </div>
               </div>
            </div>
          </Reveal>
        </div>

        <div className="flex-1 w-full relative">
           <Reveal width="100%" delay={0.2}>
              {/* Abstract Safety Shield UI */}
              <div className="relative bg-slate-900 rounded-2xl p-8 shadow-2xl text-white overflow-hidden border border-slate-700">
                 <div className="absolute top-0 right-0 w-64 h-64 bg-green-500/20 blur-3xl rounded-full"></div>
                 
                 <div className="relative z-10 space-y-6">
                    <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                       <span className="font-mono text-green-400">STATUS: COMPLIANT</span>
                       <ShieldCheck className="text-green-500" />
                    </div>
                    
                    <div className="space-y-3">
                       <div className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
                          <span className="text-sm font-medium">Benzene Handling Protocol</span>
                          <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Approved</span>
                       </div>
                       <div className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
                          <span className="text-sm font-medium">Cryogenic Storage Access</span>
                          <span className="text-xs bg-green-900 text-green-300 px-2 py-1 rounded">Valid</span>
                       </div>
                       <div className="flex items-center justify-between p-3 bg-slate-800 rounded border border-slate-700">
                          <span className="text-sm font-medium">Waste Disposal Log</span>
                          <span className="text-xs bg-yellow-900 text-yellow-300 px-2 py-1 rounded">Action Required</span>
                       </div>
                    </div>

                    <div className="pt-4">
                       <div className="text-xs text-slate-500 mb-2">RISK ASSESSMENT SCORE</div>
                       <div className="h-2 w-full bg-slate-800 rounded overflow-hidden">
                          <div className="h-full bg-gradient-to-r from-green-500 to-science-500 w-[92%]"></div>
                       </div>
                    </div>
                 </div>
              </div>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Safety;