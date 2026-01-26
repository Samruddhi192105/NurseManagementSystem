"use client";
import React, { useState } from 'react';
import { Building2, Users, Calendar, Phone, User, ClipboardList, CheckCircle2, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function HospitalForm() {
  const [submitted, setSubmitted] = useState(false);

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-xl w-full bg-white rounded-[2.5rem] shadow-xl p-12 text-center border border-slate-100">
          <div className="w-20 h-20 bg-[#00c2a8] rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg shadow-[#00c2a8]/20">
            <CheckCircle2 className="text-white" size={40} />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-4">Request Submitted!</h2>
          <p className="text-slate-500 mb-10 text-lg">Your nurse staffing request has been received and is being processed.</p>
          
          <div className="bg-[#f0f9ff] p-8 rounded-3xl text-left border border-cyan-50">
            <h4 className="font-bold text-slate-800 mb-4">What happens next?</h4>
            <ul className="space-y-4">
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#00c2a8]" size={18} /> Our admin team will review your request within 1 hour
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#00c2a8]" size={18} /> Qualified nurses will be assigned based on availability
              </li>
              <li className="flex items-center gap-3 text-sm text-slate-600">
                <CheckCircle2 className="text-[#00c2a8]" size={18} /> You'll receive a confirmation with nurse details
              </li>
            </ul>
          </div>
          <button onClick={() => setSubmitted(false)} className="mt-10 text-slate-400 hover:text-slate-600 text-sm font-medium transition-colors flex items-center justify-center gap-2 mx-auto">
            <ArrowLeft size={16} /> Back to form
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 py-12 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Form Container */}
        <div className="bg-white rounded-[2.5rem] shadow-xl overflow-hidden border border-slate-100">
          {/* Header */}
          <div className="bg-[#00a3c4] p-10 text-white flex items-center gap-6">
            <div className="bg-white/20 p-4 rounded-2xl backdrop-blur-md">
              <Building2 size={32} />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Hospital Nurse Request</h1>
              <p className="text-cyan-50 opacity-90">Submit your staffing requirements</p>
            </div>
          </div>

          <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }} className="p-10 space-y-10">
            {/* Section 1: Hospital Info */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#00a3c4] font-bold border-b border-slate-100 pb-2">
                <Building2 size={18} /> Hospital Information
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Hospital Name *</label>
                <input type="text" placeholder="Enter hospital name" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:bg-white focus:ring-2 focus:ring-[#00a3c4]/20 outline-none transition-all" required />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Contact Person</label>
                  <div className="relative">
                    <User className="absolute left-4 top-3.5 text-slate-300" size={18} />
                    <input type="text" placeholder="Contact person name" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Contact Number</label>
                  <div className="relative">
                    <Phone className="absolute left-4 top-3.5 text-slate-300" size={18} />
                    <input type="tel" placeholder="+1 (555) 000-0000" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" />
                  </div>
                </div>
              </div>
            </div>

            {/* Section 2: Staffing Requirements */}
            <div className="space-y-6">
              <div className="flex items-center gap-2 text-[#00a3c4] font-bold border-b border-slate-100 pb-2">
                <Users size={18} /> Staffing Requirements
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Department *</label>
                  <div className="relative">
                    <ClipboardList className="absolute left-4 top-3.5 text-slate-300" size={18} />
                    <input type="text" placeholder="e.g. ICU, Emergency" className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none" required />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-500 mb-2 uppercase tracking-wide">Shift *</label>
                  <div className="relative">
                    <Calendar className="absolute left-4 top-3.5 text-slate-300" size={18} />
                    <select className="w-full pl-12 pr-4 py-3 rounded-xl bg-slate-50 border border-slate-200 outline-none appearance-none cursor-pointer">
                      <option>Day Shift</option>
                      <option>Night Shift</option>
                      <option>Double Shift</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Response Badge */}
            <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-2xl flex items-center gap-3">
              <CheckCircle2 className="text-emerald-500" size={20} />
              <div className="text-xs text-emerald-800">
                <p className="font-bold uppercase tracking-wide">Quick Response Guaranteed</p>
                <p>Our team reviews and processes all requests within 1 hour during business hours.</p>
              </div>
            </div>

            <button type="submit" className="w-full bg-[#00a3c4] hover:bg-[#008ba8] text-white font-bold py-5 rounded-2xl shadow-lg shadow-[#00a3c4]/20 transition-all text-lg">
              Submit Nurse Request
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
