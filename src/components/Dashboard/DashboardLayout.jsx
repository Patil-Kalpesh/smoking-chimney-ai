"use client";

import { useState, useEffect } from "react";
import Sidebar from "@/components/Dashboard/Sidebar";
import { FaBars, FaUser } from "react-icons/fa";
import { Menu, MenuButton, MenuItems, MenuItem } from "@headlessui/react";
import Link from "next/link";
import LogoutButton from "../login/LogoutButton";
// import { signOut } from "next-auth/react";

export default function DashboardLayout({ children, title = "Dashboard" }) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isClient, setIsClient] = useState(false); 

  useEffect(() => {
    setIsClient(true); 
  }, []);

  if (!isClient) {
    return null; 
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <Sidebar isOpen={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      <div className="flex-1 flex flex-col overflow-hidden">
        {/* Header */}
        <div className="bg-gray-100 shadow-sm z-10">
          <div className="max-w-7xl mx-auto py-4 px-2 sm:px-6 lg:ps-4 lg:pe-8 flex justify-between items-center">
            <h1 className="text-xl font-normal text-blue-400">{title}</h1>
            <div className="flex items-center gap-4">
              {/* Toggle Sidebar Button */}
              <button
                onClick={() => setSidebarOpen(true)}
                className="md:hidden p-2 rounded-md text-white hover:bg-[#ED5729] focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              >
                <FaBars className="h-6 w-6 text-slate-400" />
              </button>

              {/* User Profile Dropdown */}
              <Menu as="div" className="relative">
                <MenuButton className="p-2 rounded-full bg-gray-200 text-gray-600 hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white">
                  <FaUser className="h-5 w-5" />
                </MenuButton>
                <MenuItems className="absolute right-0 w-48 mt-2 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="py-1">
                    <MenuItem>
                      {({ active }) => (
                        <Link
                          href="/profile"
                          className={`block px-4 py-2 text-sm text-gray-700 ${
                            active ? "bg-gray-100" : ""
                          }`}
                        >
                          View Profile
                        </Link>
                      )}
                    </MenuItem>
                    <MenuItem>
                      <LogoutButton />
                    </MenuItem>
                  </div>
                </MenuItems>
              </Menu>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto p-2 md:p-2 bg-gray-50">
          {children}
        </div>
      </div>
    </div>
  );
}
