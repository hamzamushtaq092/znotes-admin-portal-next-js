"use client";

import { useState } from "react";
import {
  FaHome,
  FaUser,
  FaEnvelope,
  FaCog,
  FaSun,
  FaMoon,
} from "react-icons/fa";
import Link from "next/link";

const Sidebar = () => {
  const [isDark, setIsDark] = useState(false);
  const [isOpen, setIsOpen] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle("dark");
  };

  const menuItems = [
    { path: "/", name: "Home", icon: <FaHome /> },
    { path: "/profile", name: "Profile", icon: <FaUser /> },
    { path: "/messages", name: "Messages", icon: <FaEnvelope /> },
    { path: "/settings", name: "Settings", icon: <FaCog /> },
  ];

  return (
    <div
      className={`sidebar ${
        isOpen ? "w-64" : "w-20"
      } min-h-screen bg-white dark:bg-gray-800 transition-all duration-300 shadow-lg`}
    >
      <div className="flex flex-col h-full">
        {/* Toggle Button */}
        <button
          className="p-4 hover:bg-gray-100 dark:hover:bg-gray-700"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span className="text-gray-600 dark:text-gray-200">
            {isOpen ? "←" : "→"}
          </span>
        </button>

        {/* Menu Items */}
        <nav className="flex-1">
          {menuItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className="flex items-center p-4 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <span className="text-xl">{item.icon}</span>
              {isOpen && <span className="ml-4">{item.name}</span>}
            </Link>
          ))}
        </nav>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="flex items-center p-4 text-gray-600 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <span className="text-xl">{isDark ? <FaSun /> : <FaMoon />}</span>
          {isOpen && (
            <span className="ml-4">{isDark ? "Light Mode" : "Dark Mode"}</span>
          )}
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
