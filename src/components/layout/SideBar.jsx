import React from "react";
import {
  FiHome,
  FiClock,
  FiCreditCard,
  FiGift,
  FiHelpCircle,
  FiLogOut,
  FiX,
} from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

/**
 * Props:
 * - onLogout(): function called when logout clicked
 * - mobileOpen: boolean (if true, show mobile overlay)
 * - onClose(): function to close mobile overlay
 */
export default function Sidebar({
  onLogout,
  mobileOpen = false,
  onClose = () => {},
}) {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const navLinks = [
    { name: "Home", icon: <FiHome className="text-xl" />, path: "/dashboard" },
    {
      name: "Recharge History",
      icon: <FiClock className="text-xl" />,
      path: "/dashboard/recharge-history",
    },
    {
      name: "Wallet History",
      icon: <FiCreditCard className="text-xl" />,
      path: "/dashboard/wallet-history",
    },
    {
      name: "Offers",
      icon: <FiGift className="text-xl" />,
      path: "/dashboard/offers",
    },
    {
      name: "Help & Support",
      icon: <FiHelpCircle className="text-xl" />,
      path: "/dashboard/help",
    },
  ];

  const DesktopSidebar = (
    <aside className="hidden lg:flex flex-col w-72 bg-teal-800 text-white min-h-screen p-6 sticky top-0">
      <div className="flex items-center gap-3 mb-6">
        <img
          src="/avatar.jpg"
          alt="avatar"
          className="w-12 h-12 rounded-full border-2 border-teal-600"
        />
        <div>
          <p className="text-sm text-teal-200">Member</p>
        </div>
      </div>

      <nav className="flex-1 space-y-3">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.path}
            className={`w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-teal-700 hover:shadow-md ${
              isActive(link.path) ? "bg-teal-700 shadow-md" : ""
            }`}
          >
            {link.icon}
            <span className="font-medium">{link.name}</span>
          </Link>
        ))}
      </nav>

      <div className="mt-6">
        <button
          onClick={onLogout}
          className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md"
        >
          <FiLogOut />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );

  const MobileOverlay = mobileOpen ? (
    <div
      className="fixed inset-0 z-50 flex"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="absolute inset-0 bg-black/40" />

      <div className="relative w-72 bg-teal-800 text-white min-h-screen p-6 transform transition-transform duration-300">
        <button
          onClick={onClose}
          aria-label="Close sidebar"
          className="absolute top-4 right-4 text-white/90 hover:text-white"
        >
          <FiX size={22} className="cursor-pointer" />
        </button>

        <div className="flex items-center gap-3 mb-6">
          <img
            src="/avatar.jpg"
            alt="avatar"
            className="w-12 h-12 rounded-full border-2 border-teal-600"
          />
          <div>
            <p className="text-sm text-teal-200">Member</p>
          </div>
        </div>

        <nav className="flex-1 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={onClose}
              className={`w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-teal-700 hover:shadow-md ${
                isActive(link.path) ? "bg-teal-700 shadow-md" : ""
              }`}
            >
              {link.icon}
              <span className="font-medium">{link.name}</span>
            </Link>
          ))}
        </nav>

        <div className="mt-6">
          <button
            onClick={() => {
              onLogout();
              onClose();
            }}
            className="w-full flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md"
          >
            <FiLogOut />
            <span>Logout</span>
          </button>
        </div>
      </div>

      <div className="flex-1" />
    </div>
  ) : null;

  return (
    <>
      {DesktopSidebar}
      {MobileOverlay}
    </>
  );
}
