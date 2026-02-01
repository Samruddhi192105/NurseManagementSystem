"use client";

import Link from "next/link";
import { Stethoscope } from "lucide-react";

export default function AdminHeader() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-[#00AFA0] rounded-xl flex items-center justify-center shadow-[-6px_0_20px_rgba(0,175,160,0.35)]">
              <Stethoscope className="text-white w-6 h-6" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">NextEra Code</h1>
              <p className="text-xs text-gray-500">Healthcare Staffing</p>
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex items-center gap-6">

            {/* ✅ Home → goes to Home page */}
            <Link
              href="/"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>

            {/* unchanged */}
            <Link
              href="/hospital_form"
              className="text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
            >
              Request Nurses
            </Link>

            {/* unchanged */}
            <span className="bg-[#00AFA0] hover:bg-[#008F87] text-white px-6 py-2 rounded-lg text-sm font-medium transition-colors cursor-pointer shadow-[-6px_0_18px_rgba(0,175,160,0.3)]">
              Admin
            </span>

          </nav>

        </div>
      </div>
    </header>
  );
}