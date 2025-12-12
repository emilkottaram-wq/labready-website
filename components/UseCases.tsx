import React, { useState } from 'react';
import { GraduationCap, Microscope, Building2, BookOpen } from 'lucide-react';
import { Reveal } from './ui/Reveal';

const useCases = [
  {
    id: 'academic',
    label: 'Academic Labs',
    icon: GraduationCap,
    title: "Focus on the thesis, not the logistics.",
    content: "Streamline student onboarding and ensure knowledge retention when postdocs leave. Keep your grant reporting airtight.",
    image: "https://picsum.photos/id/1/800/500"
  },
  {
    id: 'biotech',
    label: 'Biotech Startups',
    icon: Microscope,
    title: "Scale your science from Seed to Series A.",
    content: "Implement industry-standard compliance from day one. Manage inventory burn rates and investor reporting effortlessly.",
    image: "https://picsum.photos/id/201/800/500"
  },
  {
    id: 'teaching',
    label: 'Teaching Labs',
    icon: BookOpen,
    title: "Safe, structured learning at scale.",
    content: "Distribute pre-filled templates to hundreds of undergrads. Monitor safety compliance in real-time during practicals.",
    image: "https://picsum.photos/id/2/800/500"
  },
  {
    id: 'core',
    label: 'Core Facilities',
    icon: Building2,
    title: "Maximize instrument utilization.",
    content: "Automated billing and booking for shared equipment. Reduce downtime with integrated maintenance schedules.",
    image: "https://picsum.photos/id/3/800/500"
  }
];

const UseCases: React.FC = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="use-cases" className="py-24 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal className="text-center mb-16" width="100%">
          <h2 className="text-3xl font-bold text-slate-900">Built for every scientific environment</h2>
        </Reveal>

        <div className="flex flex-col md:flex-row gap-8">
          {/* Tabs */}
          <div className="flex md:flex-col gap-2 overflow-x-auto md:w-1/3 pb-4 md:pb-0">
            {useCases.map((useCase, index) => (
              <button
                key={useCase.id}
                onClick={() => setActiveTab(index)}
                className={`flex items-center gap-3 p-4 rounded-lg text-left transition-all ${
                  activeTab === index 
                    ? 'bg-white shadow-md border-l-4 border-l-science-500 text-slate-900' 
                    : 'text-slate-500 hover:bg-slate-100'
                }`}
              >
                <useCase.icon size={20} className={activeTab === index ? 'text-science-600' : ''} />
                <span className="font-medium whitespace-nowrap">{useCase.label}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="md:w-2/3">
             <div className="relative bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden min-h-[400px]">
                {useCases.map((useCase, index) => (
                  <div 
                    key={useCase.id}
                    className={`absolute inset-0 transition-opacity duration-500 p-8 flex flex-col ${
                      activeTab === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                    }`}
                  >
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-slate-900 mb-4">{useCase.title}</h3>
                      <p className="text-lg text-slate-600 mb-8">{useCase.content}</p>
                    </div>
                    <div className="h-48 md:h-64 rounded-xl overflow-hidden mt-auto">
                      <img 
                        src={`${useCase.image}?grayscale`} 
                        alt={useCase.label} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                ))}
             </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UseCases;