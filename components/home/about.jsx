import React from 'react';
import { Target, Sparkles, ShieldCheck, Zap, HeartPulse } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-white px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-600 px-4 py-1 rounded-full text-xs font-bold mb-6 tracking-wide uppercase">
            <HeartPulse size={14} /> About Us
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-6">Healthcare Staffing Made Simple</h2>
          <p className="text-slate-500 text-lg max-w-3xl mx-auto leading-relaxed">
            We're on a mission to transform how hospitals and nurses connect, making healthcare staffing effortless, reliable, and human-centered.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column: Our Story */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Story</h3>
              <p className="text-slate-600 leading-relaxed mb-6">
                Founded in 2024, NextEra Code emerged from a simple observation: healthcare facilities struggled with last-minute staffing needs, while qualified nurses faced challenges finding consistent, meaningful work.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Today, we've built a platform that brings peace of mind to both hospitals and nursing professionals, ensuring patients receive the care they deserve.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-2xl border border-emerald-100">
                <Target className="text-emerald-500 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">Our Mission</h4>
                <p className="text-sm text-slate-600">Ensuring every hospital has the nursing staff they need, exactly when they need it.</p>
              </div>
              <div className="bg-indigo-50 p-6 rounded-2xl border border-indigo-100">
                <Sparkles className="text-indigo-500 mb-4" size={24} />
                <h4 className="font-bold text-slate-900 mb-2">Our Vision</h4>
                <p className="text-sm text-slate-600">A world where healthcare staffing is never a barrier to patient care.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Feature Cards */}
          <div className="space-y-6">
            <div className="flex gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                <ShieldCheck className="text-emerald-500" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Verified Excellence</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Every nurse is thoroughly verified with background checks, license validation, and experience confirmation.</p>
              </div>
            </div>

            <div className="flex gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-indigo-50 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                <Zap className="text-indigo-500" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Instant Matching</h4>
                <p className="text-slate-500 text-sm leading-relaxed">Our intelligent system matches nurses to requests in seconds, considering expertise, availability, and preferences.</p>
              </div>
            </div>

            <div className="flex gap-6 bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="bg-emerald-50 w-14 h-14 rounded-xl flex items-center justify-center shrink-0">
                <HeartPulse className="text-emerald-500" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 mb-2">Human-Centered</h4>
                <p className="text-slate-500 text-sm leading-relaxed">We prioritize the well-being of nurses and the quality of patient care in every decision we make.</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
