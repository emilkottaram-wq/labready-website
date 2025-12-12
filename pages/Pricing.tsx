
import React from 'react';
import { Check, X } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';
import { useRouter } from '../components/Router';

const Pricing: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <div className="pt-32 pb-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16" width="100%">
           <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">Transparent Enterprise Pricing</h1>
           <p className="text-xl text-slate-600 max-w-2xl mx-auto">
             Flexible plans for labs of all sizes. All prices in GBP (£).
           </p>
        </Reveal>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-24">
           {/* Starter */}
           <Reveal delay={0.1}>
             <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-lg transition-all h-full flex flex-col">
                <h3 className="text-xl font-bold text-slate-900 mb-2">Starter</h3>
                <p className="text-sm text-slate-500 mb-6">For small academic labs & pilot projects.</p>
                <div className="mb-8">
                   <span className="text-4xl font-bold text-slate-900">£45</span>
                   <span className="text-slate-500"> /user/month</span>
                </div>
                <button onClick={() => navigate('/book-demo')} className="w-full py-3 border-2 border-slate-200 rounded-lg font-bold text-slate-700 hover:border-slate-400 transition-colors mb-8">
                   Get Started
                </button>
                <ul className="space-y-4 text-sm text-slate-600 flex-1">
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Digital Experiment Templates</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Basic Inventory (500 items)</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Standard COSHH Forms</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Email Support</li>
                </ul>
             </div>
           </Reveal>

           {/* Professional */}
           <Reveal delay={0.2}>
             <div className="bg-white p-8 rounded-2xl border-2 border-science-500 shadow-xl relative h-full flex flex-col transform md:-translate-y-4">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-science-500 text-white px-3 py-1 rounded-full text-xs font-bold uppercase">
                   Most Popular
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Professional</h3>
                <p className="text-sm text-slate-500 mb-6">For growing biotech & commercial labs.</p>
                <div className="mb-8">
                   <span className="text-4xl font-bold text-slate-900">£85</span>
                   <span className="text-slate-500"> /user/month</span>
                </div>
                <button onClick={() => navigate('/book-demo')} className="w-full py-3 bg-science-600 rounded-lg font-bold text-white hover:bg-science-700 transition-colors mb-8">
                   Book Demo
                </button>
                <ul className="space-y-4 text-sm text-slate-600 flex-1">
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Everything in Starter</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Advanced Inventory & Barcoding</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Equipment Scheduling</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Audit Trails & Versioning</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-600" /> Priority Support</li>
                </ul>
             </div>
           </Reveal>

           {/* Enterprise */}
           <Reveal delay={0.3}>
             <div className="bg-slate-900 p-8 rounded-2xl border border-slate-800 shadow-sm text-white h-full flex flex-col">
                <h3 className="text-xl font-bold text-white mb-2">Enterprise</h3>
                <p className="text-sm text-slate-400 mb-6">For large institutions & universities.</p>
                <div className="mb-8">
                   <span className="text-4xl font-bold text-white">Custom</span>
                </div>
                <button onClick={() => navigate('/contact')} className="w-full py-3 bg-white text-slate-900 rounded-lg font-bold hover:bg-slate-100 transition-colors mb-8">
                   Contact Sales
                </button>
                <ul className="space-y-4 text-sm text-slate-300 flex-1">
                   <li className="flex gap-3"><Check size={18} className="text-science-400" /> Full API Access</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-400" /> SSO & SAML Integration</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-400" /> On-premise Deployment Option</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-400" /> Dedicated Success Manager</li>
                   <li className="flex gap-3"><Check size={18} className="text-science-400" /> Custom ERP Integrations</li>
                </ul>
             </div>
           </Reveal>
        </div>

        {/* Comparison Table */}
        <Reveal width="100%">
           <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="p-6 bg-slate-50 border-b border-slate-200">
                 <h3 className="font-bold text-slate-900">Feature Comparison</h3>
              </div>
              <table className="w-full text-left text-sm">
                 <thead>
                    <tr className="border-b border-slate-100">
                       <th className="p-4 text-slate-500 font-medium">Feature</th>
                       <th className="p-4 text-slate-900 font-bold text-center">Starter</th>
                       <th className="p-4 text-science-700 font-bold text-center">Professional</th>
                       <th className="p-4 text-slate-900 font-bold text-center">Enterprise</th>
                    </tr>
                 </thead>
                 <tbody>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                       <td className="p-4 text-slate-700">Storage</td>
                       <td className="p-4 text-center text-slate-600">10GB</td>
                       <td className="p-4 text-center text-slate-600">1TB</td>
                       <td className="p-4 text-center text-slate-600">Unlimited</td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                       <td className="p-4 text-slate-700">Audit Logs</td>
                       <td className="p-4 text-center"><X size={16} className="mx-auto text-slate-300" /></td>
                       <td className="p-4 text-center"><Check size={16} className="mx-auto text-science-600" /></td>
                       <td className="p-4 text-center"><Check size={16} className="mx-auto text-science-600" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                       <td className="p-4 text-slate-700">SSO</td>
                       <td className="p-4 text-center"><X size={16} className="mx-auto text-slate-300" /></td>
                       <td className="p-4 text-center"><X size={16} className="mx-auto text-slate-300" /></td>
                       <td className="p-4 text-center"><Check size={16} className="mx-auto text-science-600" /></td>
                    </tr>
                    <tr className="border-b border-slate-100 hover:bg-slate-50">
                       <td className="p-4 text-slate-700">Support SLA</td>
                       <td className="p-4 text-center text-slate-600">Standard</td>
                       <td className="p-4 text-center text-slate-600">Priority</td>
                       <td className="p-4 text-center text-slate-600">24/7 Dedicated</td>
                    </tr>
                 </tbody>
              </table>
           </div>
        </Reveal>
      </div>
    </div>
  );
};

export default Pricing;
