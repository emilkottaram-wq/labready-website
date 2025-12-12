import React from 'react';
import { FileWarning, Clock, AlertTriangle, Search, Shuffle, CalendarX } from 'lucide-react';
import { Reveal } from './ui/Reveal';
import { PainPointType } from '../types';

const points: PainPointType[] = [
  {
    title: "The Paper Trail Nightmare",
    description: "Physical notebooks and printed SOPs that get lost, damaged, or exist in silos.",
    icon: FileWarning,
  },
  {
    title: "COSHH Compliance Gaps",
    description: "Risk assessments hidden in folders, not linked to the actual chemicals being used.",
    icon: AlertTriangle,
  },
  {
    title: "Phantom Inventory",
    description: "Running out of reagents mid-experiment because the spreadsheet wasn't updated.",
    icon: Search,
  },
  {
    title: "Reproducibility Crisis",
    description: "Inconsistent protocols leading to results that can't be replicated by peers.",
    icon: Shuffle,
  },
  {
    title: "Booking Conflicts",
    description: "Fighting over the confocal microscope because the Google Cal was ignored.",
    icon: CalendarX,
  },
  {
    title: "Admin Overload",
    description: "PhD students spending 30% of their time on procurement instead of research.",
    icon: Clock,
  },
];

const PainPoints: React.FC = () => {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal>
          <div className="mb-16 md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Science is hard enough. <br />
              <span className="text-slate-400">Your workflow shouldn't be.</span>
            </h2>
            <p className="text-lg text-slate-600">
              Modern labs are bogged down by archaic systems that slow down discovery and introduce risk.
            </p>
          </div>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {points.map((point, index) => (
            <Reveal key={index} delay={index * 0.1}>
              <div className="group p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-science-200 hover:shadow-lg hover:shadow-science-100/50 transition-all duration-300 h-full">
                <div className="w-12 h-12 bg-white rounded-xl border border-slate-200 flex items-center justify-center text-slate-400 group-hover:text-red-500 group-hover:border-red-100 transition-colors mb-6 shadow-sm">
                  <point.icon size={24} />
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{point.title}</h3>
                <p className="text-slate-600 leading-relaxed">{point.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PainPoints;