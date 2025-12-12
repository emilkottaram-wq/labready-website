
import React from 'react';
import { ShieldAlert, FileText, History, Database, Microscope, GraduationCap, Book } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { useRouter } from './Router';

const featuresList = [
  {
    icon: ShieldAlert,
    title: "Risk Assessment Builder",
    desc: "Create dynamic, interconnected risk assessments. When you add a chemical to an experiment, LabReady automatically pulls hazard data and suggests control measures.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: FileText,
    title: "COSHH Integration",
    desc: "Seamlessly compliant. Generate HSE-aligned COSHH forms instantly. Linking substances, quantities, and handling procedures into a single approved document.",
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: History,
    title: "Audit Trail & Version History",
    desc: "Never lose track of a change. Every edit, approval, and execution is time-stamped and logged. Restore previous versions of SOPs with one click.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Database,
    title: "Chemical Inventory Manager",
    desc: "Track every mg. Barcode scanning for check-in/out. Structure search (SMILES/InChI). Automated low-stock alerts and location tracking down to the shelf.",
    image: "https://images.unsplash.com/photo-1605648916361-9bc12ad6a569?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Microscope,
    title: "Equipment Monitoring",
    desc: "Maximize uptime. Schedule usage, track maintenance logs, and store calibration certificates. Prevent conflicts with a unified lab calendar.",
    image: "https://images.unsplash.com/photo-1582719508461-905c673771fd?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: GraduationCap,
    title: "Staff Training & Competency",
    desc: "Ensure everyone is qualified. Track training records, method sign-offs, and expiry dates. Restrict equipment access to trained personnel only.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800"
  },
  {
    icon: Book,
    title: "Lab SOP Library",
    desc: "A living repository for your methods. Digitize standard operating procedures, embed videos, and link directly to risk assessments.",
    image: "https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?auto=format&fit=crop&q=80&w=800"
  }
];

const Features: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 bg-white">
      {/* Hero */}
      <div className="max-w-7xl mx-auto px-6 mb-24 text-center">
         <Reveal>
           <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">The Complete Lab Operating System</h1>
           <p className="text-xl text-slate-600 max-w-3xl mx-auto">
             LabReady isn't just a LIMS or an ELN. It's a unified platform built to handle the complexity of modern scientific operations.
           </p>
         </Reveal>
      </div>

      {/* Feature Blocks */}
      <div className="max-w-7xl mx-auto px-6 space-y-32">
        {featuresList.map((feature, index) => (
          <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'md:flex-row-reverse' : 'md:flex-row'} items-center gap-16`}>
             <div className="flex-1">
                <Reveal>
                   <div className="w-14 h-14 bg-science-50 rounded-xl flex items-center justify-center text-science-700 mb-6">
                      <feature.icon size={32} />
                   </div>
                   <h2 className="text-3xl font-bold text-slate-900 mb-4">{feature.title}</h2>
                   <p className="text-lg text-slate-600 leading-relaxed mb-8">{feature.desc}</p>
                   <div className="h-1 w-20 bg-science-200 rounded"></div>
                </Reveal>
             </div>
             
             <div className="flex-1 w-full">
                <Reveal delay={0.2} width="100%">
                   <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 aspect-[4/3] group">
                      <div className="absolute inset-0 bg-slate-900/5 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                      <img 
                        src={feature.image} 
                        alt={feature.title} 
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                   </div>
                </Reveal>
             </div>
          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-32 bg-slate-900 py-20 text-center">
         <div className="max-w-4xl mx-auto px-6">
            <Reveal>
               <h2 className="text-3xl font-bold text-white mb-6">See these features in action</h2>
               <p className="text-slate-400 mb-10 text-lg">Book a personalized demo to see how LabReady fits your specific workflow.</p>
               <button 
                 onClick={() => navigate('/book-demo')}
                 className="px-8 py-4 bg-science-600 hover:bg-science-500 text-white font-bold rounded-lg transition-colors"
               >
                 Book Live Demo
               </button>
            </Reveal>
         </div>
      </div>
    </div>
  );
};

export default Features;
