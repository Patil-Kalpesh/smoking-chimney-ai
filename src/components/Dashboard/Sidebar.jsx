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

export default function Sidebar({isOpen,toggleSidebar }) {
  const pathname = usePathname();
  const [IsMenu, setIsMenu] = useState(false);

  // const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <>
      {/* Sidebar */}
      <div className={`bg-white text-black w-64 min-h-screen  md:relative absolute inset-y-0 left-0 transform shadow-sm ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 transition duration-200 ease-in-out z-20`}
      >
        <div className="flex justify-between items-center mb-6 p-4">
          <h2 className="text-2xl font-semibold text-black"><Link href={'/'}>SCS.AI</Link></h2>
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
                  className={`flex items-center py-3 px-4 gap-3  hover:border-orange-500/90  hover:bg-gray-100/90 transition-colors ${
                    pathname === item.href ? "border-r-4 md:border-r-[6px] bg-orange-600/10 border-orange-500/90" : ""
                  }`}
                  onClick={() => setIsMenu(false)}
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
