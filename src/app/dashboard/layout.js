"use client";
import Sidebar from "@/components/Dashboard/Sidebar";
import { useState } from "react";

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="flex-1">
        <header className="p-4 bg-gray-200">
          <button
            onClick={() => setSidebarOpen(!isSidebarOpen)}
            className="bg-blue-500 text-white p-2 rounded-md"
          >
            Toggle Menu
          </button>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
}
