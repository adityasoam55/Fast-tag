// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/SideBar";
import TopBanner from "../components/sections/TopBanner";
import ProvidersSectionInteractive from "../components/sections/ProvidersSectionInteractive";
import { FiMenu } from "react-icons/fi";

export default function Dashboard() {
  const navigate = useNavigate();
  const emailFromSession = sessionStorage.getItem("fastag_user_email");
  const [email] = useState(emailFromSession || "");
  const [balance, setBalance] = useState(() => {
    const b = sessionStorage.getItem("fastag_balance");
    return b ? Number(b) : 0.0;
  });

  const [txns, setTxns] = useState(() => {
    const saved = sessionStorage.getItem("fastag_txns");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        // ignore and fallback
      }
    }
    return [
      {
        id: "T101",
        date: "2025-10-27",
        type: "Recharge",
        amount: 200,
        status: "Success",
      },
      {
        id: "T100",
        date: "2025-10-20",
        type: "Toll Deduction",
        amount: -45,
        status: "Success",
      },
    ];
  });

  useEffect(() => {
    if (!emailFromSession) {
      navigate("/", { replace: true });
    }
    sessionStorage.setItem("fastag_balance", String(balance));
    sessionStorage.setItem("fastag_txns", JSON.stringify(txns));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // state controlling mobile overlay sidebar
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  function handleLogout() {
    sessionStorage.removeItem("fastag_user_email");
    sessionStorage.removeItem("fastag_otp");
    sessionStorage.removeItem("fastag_otp_exp");
    navigate("/", { replace: true });
  }

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
    const newTxn = {
      id: "T" + Math.floor(Math.random() * 9000 + 1000),
      date: new Date().toLocaleDateString(),
      type: "Recharge",
      amount: amt,
      status: "Success",
    };
    const updated = [newTxn, ...txns].slice(0, 50);
    setTxns(updated);
    sessionStorage.setItem("fastag_txns", JSON.stringify(updated));
  }

  return (
    <div className="min-h-screen flex bg-slate-50">
      {/* Sidebar (desktop + mobile overlay handled internally) */}
      <Sidebar
        onLogout={handleLogout}
        mobileOpen={mobileSidebarOpen}
        onClose={() => setMobileSidebarOpen(false)}
      />

      <main className="flex-1 p-6 overflow-auto">
        {/* mobile hamburger button - shows only on small screens */}
        {!mobileSidebarOpen && (
          <button
            onClick={() => setMobileSidebarOpen(true)}
            className="lg:hidden fixed top-20 left-4 z-50 p-2 bg-white/90 rounded-md shadow-md"
            aria-label="Open menu"
          >
            <FiMenu size={20} />
          </button>
        )}

        {/* TopBanner: hidden on small screens, visible at lg and above */}
        <div className="hidden lg:block">
          <TopBanner balance={balance} onAddMoney={handleAddMoney} />
        </div>

        <div className="max-w-7xl mx-auto px-4">
          <ProvidersSectionInteractive />
        </div>
      </main>
    </div>
  );
}
