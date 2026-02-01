"use client";

import { Users, ClipboardList, CalendarCheck, Lock } from "lucide-react";
import { motion } from "framer-motion";

export default function FeatureCards() {
  const features = [
    {
      title: "Manage Nurses",
      description: "Add, edit, and manage nurse profiles with department alignments",
      icon: <Users className="w-6 h-6" />,
      bgColor: "bg-[#E6F9F7]",
      iconColor: "text-[#00AFA0]",
    },
    {
      title: "Process Requests",
      description: "Review and assign nurses to hospital staffing requests",
      icon: <ClipboardList className="w-6 h-6" />,
      bgColor: "bg-[#E6F9F7]",
      iconColor: "text-[#00AFA0]",
    },
    {
      title: "Track Assignments",
      description: "View daily schedules and monitor all active assignments",
      icon: <CalendarCheck className="w-6 h-6" />,
      bgColor: "bg-[#E6F9F7]",
      iconColor: "text-[#00AFA0]",
    },
  ];

  const container = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } },
  };

  const item = {
    hidden: { opacity: 0, y: 18 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="space-y-6"
    >
      {/* Secure Admin Access */}
      <motion.div
        variants={item}
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="inline-flex items-center gap-2 px-4 py-2 rounded-lg border border-[#00AFA0] bg-[#E6F9F7] shadow-[-6px_0_16px_rgba(0,175,160,0.25)]"
      >
        <Lock className="w-4 h-4 text-[#00AFA0]" />
        <span className="text-sm font-medium text-[#007F7A]">
          Secure Admin Access
        </span>
      </motion.div>

      <motion.div variants={item}>
        <h1 className="text-4xl font-bold text-gray-900 mb-3">
          Admin Portal
        </h1>
        <p className="text-gray-600">
          Access the comprehensive nurse staffing management dashboard to manage nurses, handle hospital requests, and coordinate assignments efficiently.
        </p>
      </motion.div>

      <div className="space-y-4 mt-8">
        {features.map((f, i) => (
          <motion.div
            key={i}
            variants={item}
            whileHover={{ y: -4 }}
            transition={{ type: "spring", stiffness: 250, damping: 22 }}
            className="flex gap-4 p-5 bg-white rounded-xl border border-gray-200 hover:border-[#00AFA0] hover:shadow-md transition-all duration-300"
          >
            <motion.div
              whileHover={{ rotate: -3, scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className={`w-12 h-12 ${f.bgColor} rounded-xl flex items-center justify-center ${f.iconColor} shadow-[-4px_0_12px_rgba(0,175,160,0.25)]`}
            >
              {f.icon}
            </motion.div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-1">
                {f.title}
              </h3>
              <p className="text-sm text-gray-600">
                {f.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}