import React from 'react';
import { ArrowRight, Users, CheckCircle, Activity } from 'lucide-react';

const Hero = () => {
  return (
    // Added bg-[#f8fafc] and a bottom gradient for a smooth transition
    <section className="relative pt-20 pb-32 overflow-hidden bg-gradient-to-b from-[#f0f9ff] to-white">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column: Text Content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm border border-emerald-100 px-4 py-2 rounded-full text-emerald-600 text-xs font-bold mb-8 shadow-sm">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
              Trusted by 200+ Healthcare Facilities
            </div>
            
            <h1 className="text-6xl font-extrabold text-slate-900 leading-[1.1] mb-8">
              Welcome to <br />
              <span className="text-[#00c2a8]">NextEra Code</span>
            </h1>
            
            <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-xl">
              Simplifying healthcare staffing with intelligent nurse management solutions. 
              Connect qualified nurses with hospitals seamlessly and efficiently.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-[#00c2a8] hover:bg-[#00ab94] text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all shadow-lg shadow-emerald-200/50">
                Request Nurses <ArrowRight size={20} />
              </button>
              <button className="bg-white border-2 border-slate-100 text-slate-600 px-8 py-4 rounded-2xl font-bold hover:bg-slate-50 transition-all">
                Admin Portal
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-slate-100">
              <div>
                <p className="text-3xl font-bold text-slate-900">500+</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Qualified Nurses</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">10K+</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Assignments</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-slate-900">99.8%</p>
                <p className="text-xs text-slate-400 font-medium uppercase tracking-wider mt-1">Success Rate</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Dashboard */}
          <div className="relative">
             <div className="bg-white rounded-[2.5rem] shadow-2xl p-8 border border-slate-100 relative z-10">
                <div className="flex items-center justify-between mb-8">
                  <h3 className="font-bold text-slate-800">Live Dashboard</h3>
                  <div className="flex items-center gap-2 text-[10px] font-bold text-emerald-500 bg-emerald-50 px-2 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> LIVE
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="bg-emerald-50/50 p-6 rounded-3xl border border-emerald-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-[#00c2a8] p-3 rounded-xl text-white">
                        <Users size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Available Nurses</p>
                        <p className="text-2xl font-bold text-slate-800">124</p>
                      </div>
                    </div>
                    <div className="flex gap-1">
                      {[1,2,3,4,5].map(i => (
                        <div key={i} className="w-6 h-6 rounded-full bg-cyan-400 border-2 border-white"></div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-indigo-50/50 p-6 rounded-3xl border border-indigo-50">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="bg-indigo-500 p-3 rounded-xl text-white">
                        <Activity size={20} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-500 font-medium">Today's Assignments</p>
                        <p className="text-2xl font-bold text-slate-800">43</p>
                      </div>
                    </div>
                    <div className="w-full bg-indigo-100 h-2 rounded-full overflow-hidden">
                      <div className="bg-indigo-500 h-full w-[78%] rounded-full"></div>
                    </div>
                    <p className="text-[10px] text-indigo-400 font-bold mt-2">78% CAPACITY</p>
                  </div>
                </div>
             </div>
             {/* Decorative Background Glow */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[#00c2a8]/5 blur-[120px] rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
