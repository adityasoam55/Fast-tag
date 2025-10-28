import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Sidebar from "../components/layout/SideBar";
import DashboardNavbar from "../components/layout/DashboardNavbar";
import TopBanner from "../components/sections/TopBanner";
import ProvidersSectionInteractive from "../components/sections/ProvidersSectionInteractive";
import FAQ from "../components/sections/FAQ";

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
      } catch {}
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
  }, []); // eslint-disable-line

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  function handleLogout() {
    sessionStorage.clear();
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
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Dashboard Navbar */}
      <div className="block lg:hidden fixed top-0 left-0 w-full z-50">
        <DashboardNavbar
          onMenuClick={() => setMobileSidebarOpen(true)}
          onLogout={handleLogout}
        />
      </div>

      <div className="flex flex-1 max-md:pt-12">
        {" "}
        {/* space for fixed navbar */}
        {/* Sidebar */}
        <Sidebar
          onLogout={handleLogout}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />
        <main className="flex-1 p-6 overflow-auto">
          {/* TopBanner hidden on small screens */}
          <div className="hidden lg:block">
            <TopBanner balance={balance} onAddMoney={handleAddMoney} />
          </div>

          <div className="max-w-7xl mx-auto px-4">
            <ProvidersSectionInteractive />
          </div>
          <FAQ />
        </main>
      </div>
    </div>
  );
}
