"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Mail, Loader2, Eye, EyeOff } from "lucide-react";

export default function ForgotPassword() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [otpSent, setOtpSent] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);

  const [otp, setOtp] = useState(new Array(6).fill(""));
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const validateEmail = (email) => {
    const pattern = /^[a-z0-9]+([._]?[a-z0-9]+)*@[a-z0-9]+\.[a-z]{2,}$/i;
    return pattern.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors("");
    setMessage("");

    if (!validateEmail(email)) {
      setErrors("Please Enter a Valid Email Address.");
      return;
    }

    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setMessage("An OTP has been sent to your email address.");
      setOtpSent(true);
    }, 1500);
  };

  const handleOtpChange = (e, index) => {
    const value = e.target.value;
    if (/^[0-9]?$/.test(value)) {
      const newOtp = [...otp];
      newOtp[index] = value;
      setOtp(newOtp);

      // ✅ FIXED focus ID
      if (value && index < 5) {
        document.getElementById(`otp-${index + 1}`)?.focus();
      }
    }
  };

  const verifyOtp = () => {
    if (otp.join("").length < 6) {
      setErrors("Please enter complete OTP.");
      return;
    }
    setErrors("");
    setOtpVerified(true);
  };

  const resetPassword = () => {
    setErrors("");
    setSuccessMessage("");

    if (newPassword.length < 6) {
      setErrors("Password must be at least 6 characters.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setErrors("Passwords do not match.");
      return;
    }

    setSuccessMessage("Password reset successfully!");

    setTimeout(() => {
      router.push("/login");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white rounded-2xl shadow-xl p-8 max-w-md w-full">
        <h2 className="text-2xl font-bold text-center mb-2">
          {otpVerified ? "Reset Password" : "Forgot Password"}
        </h2>

        {/* EMAIL SCREEN */}
        {!otpSent && (
          <>
            <p className="text-center text-gray-600 text-sm mb-6">
              Enter your email address to receive a one-time password (OTP).
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full pl-10 pr-4 py-3 border rounded-lg outline-none"
                  style={{ boxShadow: "0 0 0 2px #1E9E73 inset" }}
                />
              </div>

              {errors && <p className="text-sm text-red-500">{errors}</p>}
              {message && <p className="text-sm text-green-600">{message}</p>}

              {/* ✅ BUTTON FIXED (TEXT NEVER DISAPPEARS) */}
              <button
                type="submit"
                disabled={loading}
                className="w-full text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2"
                style={{
                  background:
                    "linear-gradient(90deg, #2FAF86 0%, #1E9E73 45%, #177A6E 100%)",
                }}
              >
                {loading && <Loader2 className="animate-spin w-4 h-4" />}
                <span>Send OTP</span>
              </button>
            </form>
          </>
        )}

        {/* OTP SCREEN */}
        {otpSent && !otpVerified && (
          <>
            <p className="text-center text-gray-600 text-sm mb-6">
              Enter the verification code sent to your email.
            </p>

            <div className="flex justify-between gap-2 mb-5">
              {otp.map((data, index) => (
                <input
                  key={index}
                  id={`otp-${index}`}
                  type="text"
                  maxLength={1}
                  value={data}
                  onChange={(e) => handleOtpChange(e, index)}
                  className="w-12 h-12 text-center border rounded-lg text-lg"
                  style={{ boxShadow: "0 0 0 2px #1E9E73 inset" }}
                />
              ))}
            </div>

            {errors && <p className="text-sm text-red-500 mb-3">{errors}</p>}

            <button
              onClick={verifyOtp}
              className="w-full text-white py-3 rounded-lg font-semibold"
              style={{
                background:
                  "linear-gradient(90deg, #2FAF86 0%, #1E9E73 45%, #177A6E 100%)",
              }}
            >
              Verify OTP
            </button>
          </>
        )}

        {/* RESET PASSWORD SCREEN */}
        {otpVerified && (
          <>
            <p className="text-center text-gray-600 text-sm mb-6">
              Enter your new password below.
            </p>

            <div className="space-y-4">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="New Password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                className="w-full py-3 px-4 border rounded-lg"
                style={{ boxShadow: "0 0 0 2px #1E9E73 inset" }}
              />

              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full py-3 px-4 border rounded-lg"
                  style={{ boxShadow: "0 0 0 2px #1E9E73 inset" }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2"
                >
                  {showPassword ? <EyeOff /> : <Eye />}
                </button>
              </div>

              {errors && <p className="text-sm text-red-500">{errors}</p>}
              {successMessage && (
                <p className="text-sm text-green-600 text-center font-medium">
                  {successMessage}
                </p>
              )}

              <button
                onClick={resetPassword}
                disabled={!!successMessage}
                className="w-full text-white py-3 rounded-lg font-semibold disabled:opacity-60"
                style={{
                  background:
                    "linear-gradient(90deg, #2FAF86 0%, #1E9E73 45%, #177A6E 100%)",
                }}
              >
                Reset Password
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}