
import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { Reveal } from '../components/ui/Reveal';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <Reveal className="text-center mb-16">
           <h1 className="text-4xl font-bold text-slate-900 mb-6">Contact Us</h1>
           <p className="text-xl text-slate-600">We're here to help with sales inquiries, support, and partnerships.</p>
        </Reveal>

        <div className="grid md:grid-cols-2 gap-16">
           <Reveal>
              <div className="bg-slate-50 p-10 rounded-2xl border border-slate-200 h-full">
                 <h3 className="text-2xl font-bold text-slate-900 mb-8">Get in touch</h3>
                 <div className="space-y-8">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-science-600 shadow-sm border border-slate-200">
                          <Mail size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900">Email</h4>
                          <p className="text-slate-600 mb-1">General: hello@labready.com</p>
                          <p className="text-slate-600">Support: help@labready.com</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-science-600 shadow-sm border border-slate-200">
                          <Phone size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900">Phone</h4>
                          <p className="text-slate-600">+44 (0) 20 1234 5678</p>
                          <p className="text-xs text-slate-500 mt-1">Mon-Fri, 9am - 5pm GMT</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center text-science-600 shadow-sm border border-slate-200">
                          <MapPin size={24} />
                       </div>
                       <div>
                          <h4 className="font-bold text-slate-900">Office</h4>
                          <p className="text-slate-600">
                             LabReady HQ<br />
                             Scale Space, Imperial College<br />
                             White City, London<br />
                             W12 7RZ, UK
                          </p>
                       </div>
                    </div>
                 </div>
              </div>
           </Reveal>

           <Reveal delay={0.2}>
              <form className="space-y-6">
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none" placeholder="Your name" />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Email</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none" placeholder="you@company.com" />
                 </div>
                 <div>
                    <label className="block text-sm font-bold text-slate-700 mb-2">Message</label>
                    <textarea className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-science-500 outline-none h-32 resize-none" placeholder="How can we help?"></textarea>
                 </div>
                 <button className="w-full py-4 bg-slate-900 text-white font-bold rounded-lg hover:bg-slate-800 transition-colors">
                    Send Message
                 </button>
              </form>
           </Reveal>
        </div>
      </div>
    </div>
  );
};

export default Contact;
