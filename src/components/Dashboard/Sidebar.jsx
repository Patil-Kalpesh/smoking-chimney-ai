"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaChartBar, FaBlog, FaPlus, FaList, FaTimes } from "react-icons/fa";
import { useState } from "react";

const menuItems = [
  { name: "Dashboard", icon: FaChartBar, href: "/dashboard" },
  { name: "Blogs", icon: FaBlog, href: "/dashboard/blogs" },
  { name: "Add Blog", icon: FaPlus, href: "/dashboard/blogs/add" },
  { name: "Categories", icon: FaList, href: "/dashboard/categories" },
  { name: "Add Category", icon: FaPlus, href: "/dashboard/categories/add" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Sidebar */}
      <div
        className={`bg-orange-100 text-orange-950 w-64 min-h-screen p-4 md:relative absolute inset-y-0 left-0 transform shadow-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out z-20`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-orange-950">Menu</h2>
          <button onClick={toggleSidebar} className="md:hidden">
            <FaTimes className="h-6 w-6" />
          </button>
        </div>
        <nav>
          <ul>
            {menuItems.map((item) => (
              <li key={item.name} className="mb-2">
                <Link
                  href={item.href}
                  className={`flex items-center p-2 rounded-lg hover:bg-[#FF7F32] hover:text-white transition-colors ${
                    pathname === item.href ? "bg-[#FF7F32] text-white" : ""
                  }`}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="mr-3" />
                  <span>{item.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-10 md:hidden"
          onClick={toggleSidebar}
        ></div>
      )}
    </>
  );
}
