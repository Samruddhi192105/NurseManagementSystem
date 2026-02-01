"use client";

import { motion } from "framer-motion";

export default function SignupSideInfo() {
  return (
    <motion.div
      initial={{ opacity: 0, x: -40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      <h1 className="text-4xl font-bold text-gray-900 mb-4">
        Create Your Account
      </h1>
      <p className="text-gray-600 text-lg leading-relaxed">
        Join{" "}
        <span className="font-semibold text-[#00AFA0]">
          NextEra Code
        </span>{" "}
        and start managing healthcare staffing efficiently and securely.
      </p>
    </motion.div>
  );
}