"use client";

import { useState } from "react";
import { Lock, Eye, EyeOff, Mail, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { signIn } from "@/lib/supabase/auth"; // Only import signIn
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const router = useRouter();
  const [show, setShow] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Invalid email";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be 6+ characters";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

const handleSubmit = async (e) => {
  e.preventDefault();
  setErrors({});
  if (!validateForm()) return;

  setLoading(true);

  try {
    const result = await signIn(formData.email, formData.password);
    
    console.log("Login result:", result); // DEBUG

    if (result.success) {
      console.log("Saving user:", result.nurse); // DEBUG
      localStorage.setItem("user", JSON.stringify(result.nurse));
      console.log("Redirecting to dashboard..."); // DEBUG
      window.location.href = "/dashboard";
    } else {
      setErrors({
        general: result.error || "Invalid email or password",
      });
    }
  } catch (error) {
    console.error("Login error:", error); // DEBUG
    setErrors({
      general: "An error occurred. Please try again.",
    });
  } finally {
    setLoading(false);
  }
};
  return (
    <motion.div
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="bg-white rounded-2xl shadow-xl p-8 lg:p-10 border border-gray-100 max-w-md w-full mx-auto"
    >
      {/* Lock Icon */}
      <motion.div
        initial={{ scale: 0.6, rotate: -10 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ type: "spring", stiffness: 180, damping: 14 }}
        className="flex justify-center mb-6"
      >
        <motion.div
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-lg"
          style={{
            background:
              "linear-gradient(90deg, #2FAF86 0%, #1E9E73 45%, #177A6E 100%)",
          }}
        >
          <Lock className="text-white w-8 h-8" />
        </motion.div>
      </motion.div>

      {/* Title */}
      <h2 className="text-2xl font-bold text-center mb-2">Sign In</h2>
      <p className="text-center text-gray-600 text-sm mb-8">
        Enter your credentials to continue
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              placeholder="admin@nexteracode.com"
              className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
              style={{ boxShadow: "0 0 0 2px #1E9E73 inset" }}
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Password
          </label>
          <div className="relative">
            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type={show ? "text" : "password"}
              value={formData.password}
              onChange={(e) =>
                setFormData({ ...formData, password: e.target.value })
              }
              placeholder="Enter your password"
              className="w-full pl-10 pr-12 py-3 border rounded-lg outline-none"
              style={{ boxShadow: "0 0 0 2px #1E9E73 inset" }}
            />
            <button
              type="button"
              onClick={() => setShow(!show)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
            >
              {show ? <EyeOff /> : <Eye />}
            </button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500 mt-1">{errors.password}</p>
          )}
        </div>

        {/* GENERAL LOGIN ERROR */}
        {errors.general && (
          <p className="text-sm text-red-500 text-center">{errors.general}</p>
        )}

        {/* Forgot Password */}
        <div className="text-right -mt-2">
          <a
            href="/forget-password"
            className="text-sm font-medium hover:underline"
            style={{ color: "#1E9E73" }}
          >
            Forgot password?
          </a>
        </div>

        {/* Sign In Button */}
        <motion.button
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.94 }}
          disabled={loading}
          type="submit"
          className="w-full text-white py-3 rounded-lg font-semibold flex justify-center gap-2"
          style={{
            background:
              "linear-gradient(90deg, #2FAF86 0%, #1E9E73 45%, #177A6E 100%)",
          }}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Signing In...
            </>
          ) : (
            "Sign In to Dashboard"
          )}
        </motion.button>
      </form>

      {/* Sign Up Button */}
      <div className="mt-6 text-center">
        <a
          href="/signup"
          className="block w-full border-2 rounded-lg py-2.5 font-semibold transition"
          style={{
            borderColor: "#1E9E73",
            color: "#1E9E73",
          }}
        >
          Sign Up
        </a>
      </div>
    </motion.div>
  );
}