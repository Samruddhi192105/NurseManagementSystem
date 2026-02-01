"use client";
import { useState } from "react";
import { signUp } from "@/lib/supabase/auth";
import { useRouter } from "next/navigation";
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  Loader2,
  User,
  Phone,
  BadgeCheck,
} from "lucide-react";
import { motion } from "framer-motion";

export default function SignupForm() {
  const router = useRouter(); // Add this line!
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    empId: "",
    password: "",
    confirmPassword: "",
    agree: false,
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Full name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.empId) newErrors.empId = "Employee ID is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (formData.password !== formData.confirmPassword)
      newErrors.confirmPassword = "Passwords do not match";
    if (!formData.agree) newErrors.agree = "You must confirm authorization";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});

    if (!validateForm()) return;

    setLoading(true);

    try {
      const result = await signUp(formData);

      if (result.success) {
        alert("Account created successfully! You can now login.");
        router.push("/login");
      } else {
        setErrors({ general: result.error });
      }
    } catch (error) {
      setErrors({ general: "An error occurred during signup" });
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
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          className="w-16 h-16 rounded-2xl flex items-center justify-center shadow-[-6px_0_20px_rgba(0,175,160,0.35)]"
          style={{ background: "#00AFA0" }}
        >
          <Lock className="text-white w-8 h-8" />
        </motion.div>
      </motion.div>

      <h2 className="text-2xl font-bold text-center mb-2">Sign Up</h2>
      <p className="text-center text-gray-600 text-sm mb-8">
        Create your admin account
      </p>

      <form onSubmit={handleSubmit} className="space-y-5">
        {/* Full Name */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Full Name
          </label>
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
              style={{ boxShadow: "0 0 0 2px #00AFA0 inset" }}
              placeholder="Enter full name"
            />
          </div>
          {errors.name && (
            <p className="text-sm text-red-500 mt-1">{errors.name}</p>
          )}
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Email Address
          </label>
          <div className="relative">
            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
              style={{ boxShadow: "0 0 0 2px #00AFA0 inset" }}
              placeholder="admin@nexteracode.com"
            />
          </div>
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email}</p>
          )}
        </div>

        {/* Phone */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Phone Number
          </label>
          <div className="relative">
            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={formData.phone}
              onChange={(e) =>
                setFormData({ ...formData, phone: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
              style={{ boxShadow: "0 0 0 2px #00AFA0 inset" }}
              placeholder="10-digit mobile number"
            />
          </div>
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone}</p>
          )}
        </div>

        {/* Employee ID */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Employee ID
          </label>
          <div className="relative">
            <BadgeCheck className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              value={formData.empId}
              onChange={(e) =>
                setFormData({ ...formData, empId: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
              style={{ boxShadow: "0 0 0 2px #00AFA0 inset" }}
              placeholder="Company employee ID"
            />
          </div>
          {errors.empId && (
            <p className="text-sm text-red-500 mt-1">{errors.empId}</p>
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
              className="w-full pl-10 pr-12 py-3 border rounded-lg outline-none"
              style={{ boxShadow: "0 0 0 2px #00AFA0 inset" }}
              placeholder="Create password"
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

        {/* Confirm Password */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Confirm Password
          </label>
          <input
            type="password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="w-full px-4 py-3 border rounded-lg outline-none"
            style={{ boxShadow: "0 0 0 2px #00AFA0 inset" }}
            placeholder="Repeat password"
          />
          {errors.confirmPassword && (
            <p className="text-sm text-red-500 mt-1">
              {errors.confirmPassword}
            </p>
          )}
        </div>

        {/* Authorization */}
        <div className="flex items-start gap-2">
          <input
            type="checkbox"
            checked={formData.agree}
            onChange={(e) =>
              setFormData({ ...formData, agree: e.target.checked })
            }
            className="mt-1 accent-[#00AFA0]"
          />
          <p className="text-sm text-gray-600">
            I confirm that I am an authorized employee of the organization and
            the information provided above is accurate and verifiable.
          </p>
        </div>
        {errors.agree && (
          <p className="text-sm text-red-500">{errors.agree}</p>
        )}

        {/* General Error */}
        {errors.general && (
          <p className="text-sm text-red-500 text-center">{errors.general}</p>
        )}

        {/* Submit */}
        <motion.button
          type="submit"
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.95 }}
          disabled={loading}
          className="w-full text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 shadow-[-6px_0_18px_rgba(0,175,160,0.3)]"
          style={{ background: "#00AFA0" }}
        >
          {loading ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin" />
              Creating Account...
            </>
          ) : (
            "Create Account"
          )}
        </motion.button>
      </form>

      <p className="mt-6 text-center text-sm text-gray-600">
        Already have an account?{" "}
        <a href="/login" className="font-semibold text-[#00AFA0] hover:text-[#008F87]">
          Sign In
        </a>
      </p>
    </motion.div>
  );
}