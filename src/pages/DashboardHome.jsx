// src/pages/DashboardHome.jsx
import React from "react";
import TopBanner from "../components/sections/TopBanner";
import ProvidersSectionInteractive from "../components/sections/ProvidersSectionInteractive";
import FAQ from "../components/sections/FAQ";
import { useOutletContext } from "react-router-dom";

export default function DashboardHome() {
  const { balance, setBalance } = useOutletContext();

  function handleAddMoney() {
    const val = window.prompt("Enter amount to add (₹):", "100");
    if (!val) return;

    const amt = Number(val);
    if (isNaN(amt) || amt <= 0) {
      alert("Please enter a valid amount.");
      return;
    }

    // ✅ Update balance
    const newBalance = +(Number(balance) + amt).toFixed(2);
    setBalance(newBalance);
    sessionStorage.setItem("fastag_balance", String(newBalance));

    // ✅ Save transaction to sessionStorage
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
    <div>
      <div className="hidden lg:block">
        <TopBanner balance={balance} onAddMoney={handleAddMoney} />
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <ProvidersSectionInteractive />
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-8">
        <FAQ />
      </div>
    </div>
  );
}
