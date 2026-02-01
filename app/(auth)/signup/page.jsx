"use client";

import AdminHeader from "@/components/auth/AdminHeader";
import SignupLayout from "@/components/auth/SignupLayout";
import SignupSideInfo from "@/components/auth/SignupSideInfo";
import SignupForm from "@/components/auth/SignupForm";
export default function SignupPage() {
  return (
    <SignupLayout>
      <AdminHeader />
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          <SignupSideInfo />
          <SignupForm />
        </div>
      </div>
    </SignupLayout>
  );
}