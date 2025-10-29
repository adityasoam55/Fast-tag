import React from "react";
import { FiMenu, FiLogOut } from "react-icons/fi";

export default function DashboardNavbar({ onMenuClick, onLogout }) {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Right section */}
          <div className="flex items-center space-x-4">
            {/* Hamburger for mobile */}
            <button
              onClick={onMenuClick}
              className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle sidebar"
            >
              <FiMenu size={24} className="cursor-pointer" />
            </button>
          </div>

          {/* Logo / Brand */}
          <div className="flex items-center space-x-2">
            <img
              src="/logo.png"
              alt="FASTag Logo"
              className="w-10 h-10 rounded-md"
            />
            <h1 className="text-xl font-bold text-blue-600">
              FASTag Dashboard
            </h1>
          </div>
        </div>
      </div>
    </nav>
  );
}
