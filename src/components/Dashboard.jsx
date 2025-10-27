// src/pages/Dashboard.jsx
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const navigate = useNavigate();
  const emailFromSession = sessionStorage.getItem("fastag_user_email");
  const [email, setEmail] = useState(emailFromSession || "");
  const [balance, setBalance] = useState(249.5); // demo starting balance
  const [txns, setTxns] = useState([
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
  ]);

  useEffect(() => {
    if (!emailFromSession) {
      // not logged in -> redirect to home/login
      navigate("/", { replace: true });
    }
  }, [emailFromSession, navigate]);

  function handleLogout() {
    sessionStorage.removeItem("fastag_user_email");
    // optionally clear other demo keys
    sessionStorage.removeItem("fastag_otp");
    sessionStorage.removeItem("fastag_otp_exp");
    navigate("/", { replace: true });
  }

  function handleQuickRecharge() {
    const val = window.prompt("Enter recharge amount (₹):", "100");
    if (!val) return;
    const amt = Number(val);
    if (Number.isNaN(amt) || amt <= 0) {
      alert("Please enter a valid amount.");
      return;
    }
    // update balance and push a transaction (demo)
    setBalance((b) => +(b + amt).toFixed(2));
    const newTxn = {
      id: "T" + Math.floor(Math.random() * 9000 + 1000),
      date: new Date().toLocaleDateString(),
      type: "Recharge",
      amount: amt,
      status: "Success",
    };
    setTxns((t) => [newTxn, ...t].slice(0, 10));
  }

  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back{email ? `, ${email.split("@")[0]}` : ""}!
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              Your FASTag dashboard — quick actions and recent activity.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleQuickRecharge}
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md font-medium shadow"
            >
              Quick Recharge
            </button>

            <button
              onClick={handleLogout}
              className="border border-gray-200 bg-white text-gray-700 px-3 py-2 rounded-md hover:bg-gray-50"
            >
              Logout
            </button>
          </div>
        </div>

        {/* Main grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left: Balance / Summary */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500">Wallet Balance</p>
                  <p className="text-3xl font-semibold text-gray-900 mt-2">
                    ₹{balance.toFixed(2)}
                  </p>
                </div>
                <div className="text-sm text-gray-500">
                  <p>Account</p>
                  <p className="font-medium text-gray-700 mt-1">
                    {email || "—"}
                  </p>
                </div>
              </div>

              <div className="mt-6 flex gap-2">
                <button
                  onClick={handleQuickRecharge}
                  className="flex-1 bg-blue-600 text-white rounded-md py-2 font-medium hover:bg-blue-700"
                >
                  Recharge
                </button>
                <button
                  onClick={() => alert("Transactions history - demo")}
                  className="px-4 py-2 rounded-md border bg-white"
                >
                  History
                </button>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-4 shadow-sm border">
              <h3 className="text-sm font-semibold text-gray-800 mb-3">
                Quick Actions
              </h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex justify-between">
                  <span>Auto-recharge</span>
                  <span className="text-gray-500">Off</span>
                </li>
                <li className="flex justify-between">
                  <span>Manage Vehicles</span>
                  <button className="text-blue-600">Open</button>
                </li>
                <li className="flex justify-between">
                  <span>Offers</span>
                  <button className="text-blue-600">View</button>
                </li>
              </ul>
            </div>
          </div>

          {/* Right: Transactions (full width on small screens) */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl p-6 shadow-sm border">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-semibold text-gray-900">
                  Recent Transactions
                </h3>
                <button
                  onClick={() => alert("Export - demo")}
                  className="text-sm text-gray-600 hover:text-gray-800"
                >
                  Export
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="text-sm text-gray-500 border-b">
                      <th className="py-2">Ref</th>
                      <th>Date</th>
                      <th>Type</th>
                      <th>Amount</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {txns.length === 0 && (
                      <tr>
                        <td
                          colSpan={5}
                          className="py-6 text-center text-gray-500"
                        >
                          No transactions yet.
                        </td>
                      </tr>
                    )}
                    {txns.map((t) => (
                      <tr
                        key={t.id}
                        className="text-sm text-gray-700 border-b last:border-b-0"
                      >
                        <td className="py-3">{t.id}</td>
                        <td>{t.date}</td>
                        <td>{t.type}</td>
                        <td
                          className={
                            t.amount < 0 ? "text-red-600" : "text-green-600"
                          }
                        >
                          {t.amount < 0 ? "−" : ""}₹
                          {Math.abs(t.amount).toFixed(2)}
                        </td>
                        <td>{t.status}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <div className="mt-4 text-sm text-gray-500">
                Tip: Use <strong>Quick Recharge</strong> to simulate adding
                funds during testing.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
