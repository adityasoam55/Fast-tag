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
        <button className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-teal-700 hover:shadow-md">
          <FiHome className="text-xl" />
          <span className="font-medium">Home</span>
        </button>

        <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md">
          <FiClock className="text-xl" />
          <span>Recharge History</span>
        </button>

        <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md">
          <FiCreditCard className="text-xl" />
          <span>Wallet History</span>
        </button>

        <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md">
          <FiGift className="text-xl" />
          <span>Offers</span>
        </button>

        <button className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md">
          <FiHelpCircle className="text-xl" />
          <span>Help & Support</span>
        </button>
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

  // Mobile overlay (visible only when mobileOpen === true)
  const MobileOverlay = mobileOpen ? (
    <div
      className="fixed inset-0 z-50 flex"
      onMouseDown={(e) => {
        // close when clicking the backdrop area
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-black/40" />

      {/* panel */}
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
          <button
            onClick={() => {
              onClose();
            }}
            className="w-full text-left flex items-center gap-3 p-3 rounded-xl hover:bg-teal-700 hover:shadow-md"
          >
            <FiHome className="text-xl" />
            <span className="font-medium">Home</span>
          </button>

          <button
            onClick={() => onClose()}
            className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md"
          >
            <FiClock className="text-xl" />
            <span>Recharge History</span>
          </button>

          <button
            onClick={() => onClose()}
            className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md"
          >
            <FiCreditCard className="text-xl" />
            <span>Wallet History</span>
          </button>

          <button
            onClick={() => onClose()}
            className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md"
          >
            <FiGift className="text-xl" />
            <span>Offers</span>
          </button>

          <button
            onClick={() => onClose()}
            className="w-full text-left flex items-center gap-3 p-3 rounded-lg hover:bg-teal-700 hover:shadow-md"
          >
            <FiHelpCircle className="text-xl" />
            <span>Help & Support</span>
          </button>
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

      {/* empty spacer to allow clicks to close overlay (fills remainder of screen) */}
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
