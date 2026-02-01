"use client";
import {
  Activity,
  Bed,
  Building2,
  CalendarDays,
  CheckCircle,
  ClipboardList,
  Clock,
  FileText,
  Heart,
  LayoutDashboard,
  Stethoscope,
  UserCog,
  UserPlus,
  Users
} from "lucide-react";
import { useEffect, useState } from "react";

// Simple Card Component
function Card({ title, value, icon, bgColor }) {
  return (
    <div className={`${bgColor} p-6 rounded-xl shadow flex-1 min-w-[200px] hover:shadow-lg`}>
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-600 mb-1">{title}</p>
          <p className="text-2xl font-bold">{value}</p>
        </div>
        {icon}
      </div>
    </div>
  );
}

// Simple Progress Component
function Progress({ label, count, percent, color, icon }) {
  return (
    <div className="mb-4">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center gap-2">
          {icon}
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-xs text-gray-500">{count}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${color} h-2 rounded-full`} style={{ width: percent }}></div>
      </div>
    </div>
  );
}

// Simple Request Component
function Request({ hospital, details, icon }) {
  return (
    <div className="flex items-start gap-3 mb-4 pb-4 border-b last:border-0">
      <div className="mt-1">{icon}</div>
      <div className="flex-1">
        <p className="font-medium text-sm">{hospital}</p>
        <p className="text-xs text-gray-500">{details}</p>
      </div>
    </div>
  );
}

// Simple Action Component
function Action({ title, desc, icon }) {
  return (
    <div className="flex items-start gap-3 p-4 border rounded-lg hover:bg-gray-50 cursor-pointer flex-1 min-w-[200px]">
      <div className="mt-1">{icon}</div>
      <div>
        <p className="font-medium text-sm">{title}</p>
        <p className="text-xs text-gray-500">{desc}</p>
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Get user from localStorage
    const userData = localStorage.getItem("user");
    if (userData) {
      setUser(JSON.parse(userData));
    } else {
      // Redirect to login if no user
      window.location.href = "/login";
    }
  }, []);

  if (!user) {
    return <div className="min-h-screen flex items-center justify-center">Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      {/* Welcome part */}
      <div className="bg-teal-500 p-5 text-white rounded-xl mb-5">
        <div className="flex items-center gap-3">
          <Stethoscope className="w-8 h-8" />
          <div>
            <h1 className="font-semibold text-2xl">Welcome, {user.name}!</h1>
            <p className="text-sm">
              Manage all your nurse staffing operations efficiently.
            </p>
          </div>
        </div>
      </div>

      {/* Nav part */}
      <div className="flex flex-wrap gap-4 bg-white p-5 rounded-xl shadow-md w-full hover:shadow-lg mb-5">
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg bg-teal-50 text-teal-700 hover:bg-teal-100 transition-colors">
          <LayoutDashboard className="w-4 h-4" />
          <span className="text-sm font-medium">Overview</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <Users className="w-4 h-4" />
          <span className="text-sm">Nurses</span>
        </button>

        <button className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 transition-colors">
          <FileText className="w-4 h-4" />
          <span className="text-sm">Requests</span>
        </button>
      </div>

      {/* Cards */}
      <div className="flex flex-wrap gap-6 mb-6 w-full">
        <Card title="Active Nurses" value="12" icon={<Users className="w-6 h-6 text-teal-500" />} bgColor="bg-teal-50" />
        <Card title="Pending Requests" value="5" icon={<Clock className="w-6 h-6 text-amber-500" />} bgColor="bg-amber-50" />
        <Card title="Completed" value="28" icon={<CheckCircle className="w-6 h-6 text-green-500" />} bgColor="bg-green-50" />
        <Card title="Total Assignments" value="45" icon={<ClipboardList className="w-6 h-6 text-blue-500" />} bgColor="bg-blue-50" />
      </div>

      <div className="flex flex-wrap gap-6">
        {/* Table */}
        <div className="bg-white p-6 rounded-xl shadow flex-1 min-w-[300px] hover:shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Activity className="w-5 h-5 text-teal-500" />
            <h2 className="font-semibold">Nurses by Department</h2>
          </div>

          <Progress label="ICU" count="5 nurses" percent="40%" color="bg-red-500" icon={<Heart className="w-4 h-4 text-red-500" />} />
          <Progress label="Ward" count="4 nurses" percent="35%" color="bg-blue-500" icon={<Bed className="w-4 h-4 text-blue-500" />} />
          <Progress label="OPD" count="3 nurses" percent="25%" color="bg-green-500" icon={<Stethoscope className="w-4 h-4 text-green-500" />} />
        </div>

        {/* Requests */}
        <div className="bg-white p-6 rounded-xl shadow flex-1 min-w-[300px] hover:shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <Building2 className="w-5 h-5 text-teal-500" />
            <h2 className="font-semibold">Recent Requests</h2>
          </div>

          <Request
            hospital="City Hospital"
            details="ICU • Night • 2 nurses"
            icon={<Stethoscope className="w-4 h-4 text-green-500" />}
          />
          <Request
            hospital="General Hospital"
            details="Ward • Day • 3 nurses"
            icon={<Stethoscope className="w-4 h-4 text-green-500" />}
          />
        </div>
      </div>

      {/* Quick actions */}
      <div className="bg-white p-6 rounded-xl shadow mt-6">
        <div className="flex items-center gap-2 mb-4">
          <UserCog className="w-5 h-5 text-teal-500" />
          <h2 className="font-semibold">Quick Actions</h2>
        </div>

        <div className="flex flex-wrap gap-4">
          <Action title="Add New Nurse" desc="Register a new nurse in the system" icon={<UserPlus className="w-5 h-5 text-teal-500" />} />
          <Action title="Process Requests" desc="Assign nurses to pending requests" icon={<ClipboardList className="w-5 h-5 text-amber-500" />} />
          <Action title="View Schedule" desc="Check daily assignments" icon={<CalendarDays className="w-5 h-5 text-blue-500" />} />
        </div>
      </div>
    </div>
  );
}