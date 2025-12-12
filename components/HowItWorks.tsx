import React from 'react';
import { Reveal } from './ui/Reveal';

const steps = [
  {
    num: "01",
    title: "Plan & Assess",
    desc: "Design your experiment using templates. LabReady automatically pulls in SDS data and flags safety risks for approval."
  },
  {
    num: "02",
    title: "Execute & Track",
    desc: "Run the protocol at the bench. Log weights, times, and observations in real-time on tablet or mobile."
  },
  {
    num: "03",
    title: "Analyze & Share",
    desc: "Generate clean reports. Data is structured and searchable, making handover and publication effortless."
  }
];

const HowItWorks: React.FC = () => {
  return (
    <section className="py-32 bg-slate-900 text-white relative overflow-hidden">
       {/* Background Grid */}
       <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10"></div>
       
       <div className="max-w-7xl mx-auto px-6 relative z-10">
         <Reveal className="mb-20 text-center" width="100%">
           <h2 className="text-3xl md:text-4xl font-bold mb-4">From Hypothesis to Result</h2>
           <p className="text-slate-400 max-w-xl mx-auto">A seamless flow designed for the scientific method.</p>
         </Reveal>

         <div className="grid md:grid-cols-3 gap-12 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-slate-800 -z-10"></div>
            
            {steps.map((step, i) => (
              <Reveal key={i} delay={i * 0.2} className="flex flex-col items-center text-center group">
                 <div className="w-24 h-24 rounded-full bg-slate-800 border-4 border-slate-900 flex items-center justify-center text-3xl font-bold text-science-400 mb-8 relative z-10 group-hover:border-science-500 transition-colors duration-500 shadow-2xl">
                    {step.num}
                 </div>
                 <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                 <p className="text-slate-400 leading-relaxed px-4">
                   {step.desc}
                 </p>
              </Reveal>
            ))}
         </div>
       </div>
    </section>
  );
};

export default HowItWorks;