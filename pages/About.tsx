
import React from 'react';
import { Target, Heart, Award } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

const About: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
       {/* Hero */}
       <div className="max-w-7xl mx-auto px-6 mb-24">
          <Reveal className="text-center max-w-4xl mx-auto">
             <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">Science deserves better software.</h1>
             <p className="text-xl text-slate-600 leading-relaxed">
               We founded LabReady to bridge the gap between rigorous scientific standards and modern user experience. 
               Our mission is to make labs safer, more compliant, and ultimately more productive.
             </p>
          </Reveal>
       </div>

       {/* Values */}
       <div className="bg-slate-50 py-24 mb-24">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-12">
             <Reveal>
                <div className="flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-science-600 shadow-sm mb-6">
                      <Target size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">Precision First</h3>
                   <p className="text-slate-600">We believe software should be as precise as the pipettes you use. No ambiguity, just clear data.</p>
                </div>
             </Reveal>
             <Reveal delay={0.1}>
                <div className="flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-science-600 shadow-sm mb-6">
                      <Heart size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">Safety Culture</h3>
                   <p className="text-slate-600">Compliance isn't a box to check. It's about ensuring every researcher goes home safe every day.</p>
                </div>
             </Reveal>
             <Reveal delay={0.2}>
                <div className="flex flex-col items-center text-center">
                   <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-science-600 shadow-sm mb-6">
                      <Award size={32} />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900 mb-4">Audit Confidence</h3>
                   <p className="text-slate-600">We build systems that make you look forward to audits, knowing your data trail is impeccable.</p>
                </div>
             </Reveal>
          </div>
       </div>

       {/* Leadership */}
       <div className="max-w-7xl mx-auto px-6">
          <Reveal className="mb-16">
             <h2 className="text-3xl font-bold text-slate-900 mb-4">Leadership</h2>
             <p className="text-slate-600">Built by scientists, for scientists.</p>
          </Reveal>
          
          <div className="grid md:grid-cols-3 gap-8">
             <Reveal>
                <div className="group">
                   <div className="h-80 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="CEO" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900">Dr. James Alistair</h3>
                   <p className="text-science-700 font-medium mb-2">Co-Founder & CEO</p>
                   <p className="text-sm text-slate-500">Former PI at Oxford University. 15 years in molecular biology.</p>
                </div>
             </Reveal>
             <Reveal delay={0.1}>
                <div className="group">
                   <div className="h-80 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="CTO" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900">Sarah Chen</h3>
                   <p className="text-science-700 font-medium mb-2">Co-Founder & CTO</p>
                   <p className="text-sm text-slate-500">Ex-Google Engineer. Specialist in secure data infrastructure.</p>
                </div>
             </Reveal>
             <Reveal delay={0.2}>
                <div className="group">
                   <div className="h-80 bg-slate-200 rounded-xl mb-6 overflow-hidden">
                      <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" alt="CSO" />
                   </div>
                   <h3 className="text-xl font-bold text-slate-900">Dr. Marcus Weber</h3>
                   <p className="text-science-700 font-medium mb-2">Chief Scientific Officer</p>
                   <p className="text-sm text-slate-500">Expert in ISO 17025 accreditation and GLP compliance.</p>
                </div>
             </Reveal>
          </div>
       </div>
    </div>
  );
};

export default About;
