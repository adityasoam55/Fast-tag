import { useState } from "react";
import { FiMenu, FiX, FiUser, FiCreditCard } from "react-icons/fi";
import LoginModalEmailJS from "../auth/LoginModalEmailJS"; // path to component

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <>
      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo Section */}
            <div className="flex items-center space-x-2">
              <img
                src="/logo.png"
                alt="FASTag Logo"
                className="w-10 h-10 rounded-md"
              />
              <h1 className="text-xl font-bold text-blue-600">
                FASTag Recharge I
              </h1>
            </div>

            {/* Right Icons */}
            <div className="hidden md:flex items-center space-x-5">
              <button
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsLoginOpen(true)}
              >
                <FiCreditCard size={22} />
              </button>
              <button
                className="text-gray-600 hover:text-blue-600"
                onClick={() => setIsLoginOpen(true)}
              >
                <FiUser size={22} />
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-gray-600 hover:text-blue-600 focus:outline-none"
              >
                {isOpen ? <FiX size={26} /> : <FiMenu size={26} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg border-t">
            <div className="px-4 py-3 space-y-2">
              {/* Removed center menu links */}

              <div className="flex items-center space-x-4 pt-3">
                <button
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsOpen(false);
                  }}
                >
                  <FiCreditCard size={22} />
                </button>
                <button
                  className="text-gray-600 hover:text-blue-600"
                  onClick={() => {
                    setIsLoginOpen(true);
                    setIsOpen(false);
                  }}
                >
                  <FiUser size={22} />
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Login Modal */}
      <LoginModalEmailJS
        isOpen={isLoginOpen}
        onClose={() => setIsLoginOpen(false)}
      />
    </>
  );
}
