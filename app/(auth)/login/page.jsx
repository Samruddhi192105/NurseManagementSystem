"use client";

import AdminPortalLayout from '@/components/auth/AdminPortalLayout';
import AdminHeader from '@/components/auth/AdminHeader';
import FeatureCards from '@/components/auth/FeatureCards';
import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <AdminPortalLayout>
      <AdminHeader />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <FeatureCards />
          <LoginForm />
        </div>
      </div>
      <footer className="text-center py-8 text-gray-500 text-sm border-t border-gray-200">
        <p>© 2026 NextEra Code. All rights reserved</p>
        <p className="text-xs mt-1 text-gray-400">Empowering Healthcare Through Technology</p>
      </footer>
    </AdminPortalLayout>
  );
}