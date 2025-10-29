import React from "react";
import { FiMenu, FiCreditCard } from "react-icons/fi";

export default function DashboardNavbar({
  onMenuClick,
  onLogout,
  balance,
  setBalance,
}) {
  function handleAddMoney() {
    const val = window.prompt("Enter amount to add (₹):", "100");
    if (!val) return;

    const amt = Number(val);
    if (isNaN(amt) || amt <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    const newBalance = +(Number(balance) + amt).toFixed(2);
    setBalance(newBalance);
    sessionStorage.setItem("fastag_balance", String(newBalance));

    const existing = JSON.parse(sessionStorage.getItem("fastag_txns") || "[]");
    const newTxn = {
      id: "TXN" + Date.now(),
      date: new Date().toLocaleString(),
      amount: amt,
      status: "Success",
      type: "Recharge",
    };
    existing.unshift(newTxn);
    sessionStorage.setItem("fastag_txns", JSON.stringify(existing));

    alert(`₹${amt} added successfully!`);
  }

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-4">
            <button
              onClick={onMenuClick}
              className="lg:hidden text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle sidebar"
            >
              <FiMenu size={24} className="cursor-pointer" />
            </button>
          </div>

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

          <button
            className="text-gray-600 hover:text-blue-600"
            onClick={handleAddMoney}
          >
            <FiCreditCard size={22} />
          </button>
        </div>
      </div>
    </nav>
  );
}
