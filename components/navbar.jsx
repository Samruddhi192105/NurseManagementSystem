import React from 'react';
import Link from 'next/link';
import { HeartPulse } from 'lucide-react';

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="bg-[#00c2a8] p-1.5 rounded-lg text-white">
            <HeartPulse size={20} />
          </div>
          <div>
            <span className="text-lg font-bold text-slate-900 block leading-none">NextEra Code</span>
            <span className="text-[10px] text-slate-500 font-medium tracking-tight">Healthcare Staffing</span>
          </div>
        </Link>

        {/* Links & CTA */}
        <div className="flex items-center gap-8">
          <div className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-500">
            <Link href="#about" className="hover:text-[#00c2a8] transition-colors">About</Link>
            <Link href="#features" className="hover:text-[#00c2a8] transition-colors">Features</Link>
            <Link href="#contact" className="hover:text-[#00c2a8] transition-colors">Contact</Link>
          </div>
          
          <div className="flex items-center gap-3">
            <Link href="/hospital_form">
              <button className="bg-[#00c2a8] hover:bg-[#00ab94] text-white px-4 py-2 rounded-lg text-sm font-bold transition-all">
                Request Nurses
              </button>
            </Link>
            <button className="bg-slate-100 hover:bg-slate-200 text-slate-600 px-4 py-2 rounded-lg text-sm font-bold transition-all">
              Admin
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
