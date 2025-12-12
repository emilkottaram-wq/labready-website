import React from 'react';
import { FlaskConical, Twitter, Linkedin, Github, Download } from 'lucide-react';

const Footer: React.FC = () => {
  const downloadLogo = (e: React.MouseEvent) => {
    e.preventDefault();
    
    // SVG Content that matches the website design
    const svgContent = `
<svg xmlns="http://www.w3.org/2000/svg" width="220" height="60" viewBox="0 0 220 60">
  <defs>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@700&display=swap');
    </style>
  </defs>
  
  <!-- Icon Background -->
  <rect x="0" y="10" width="40" height="40" rx="8" fill="#042f2e" />
  
  <!-- Flask Icon (Lucide FlaskConical) -->
  <g transform="translate(8, 18)">
    <path d="M10 2v7.527a2 2 0 0 1-.211.896L4.72 20.55a1 1 0 0 0 .9 1.45h12.76a1 1 0 0 0 .9-1.45l-5.069-10.127A2 2 0 0 1 14 9.527V2" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
    <path d="M8.5 2h7" stroke="white" stroke-width="2.5" fill="none" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
  
  <!-- Text -->
  <text x="55" y="40" font-family="'Inter', sans-serif" font-weight="bold" font-size="28" fill="#0f172a" letter-spacing="-1">LabReady</text>
</svg>`.trim();

    const blob = new Blob([svgContent], { type: 'image/svg+xml' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'labready-logo.svg';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <footer className="bg-slate-50 pt-20 pb-10 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-16">
          <div className="col-span-2 md:col-span-1">
             <div className="flex items-center gap-2 mb-6">
               <div className="bg-science-950 text-white p-1.5 rounded-lg">
                 <FlaskConical size={20} strokeWidth={2.5} />
               </div>
               <span className="font-bold text-xl tracking-tight text-slate-900">LabReady</span>
             </div>
             <p className="text-sm text-slate-500 leading-relaxed">
               The operating system for modern science. Accelerating discovery through better workflow.
             </p>
          </div>
          
          <div>
            <h4 className="font-bold text-slate-900 mb-4">Product</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-science-600">Features</a></li>
              <li><a href="#" className="hover:text-science-600">Integrations</a></li>
              <li><a href="#" className="hover:text-science-600">Pricing</a></li>
              <li><a href="#" className="hover:text-science-600">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Company</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-science-600">About</a></li>
              <li><a href="#" className="hover:text-science-600">Blog</a></li>
              <li><a href="#" className="hover:text-science-600">Careers</a></li>
              <li><a href="#" className="hover:text-science-600">Contact</a></li>
              <li>
                <button 
                  onClick={downloadLogo} 
                  className="hover:text-science-600 flex items-center gap-1 text-left"
                  title="Download Logo SVG"
                >
                  Brand Assets <Download size={12} />
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-slate-900 mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-600">
              <li><a href="#" className="hover:text-science-600">Privacy</a></li>
              <li><a href="#" className="hover:text-science-600">Terms</a></li>
              <li><a href="#" className="hover:text-science-600">Security</a></li>
              <li><a href="#" className="hover:text-science-600">COSHH</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-slate-400">© 2024 LabReady Inc. All rights reserved.</p>
          <div className="flex gap-6 text-slate-400">
            <a href="#" className="hover:text-slate-900 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-slate-900 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-slate-900 transition-colors"><Github size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;