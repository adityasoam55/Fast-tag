import React from "react";

export default function RechargeHistory() {
  const txns = JSON.parse(sessionStorage.getItem("fastag_txns") || "[]");
  const recharges = txns.filter((t) => t.type === "Recharge");

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-teal-700 mb-6">
        Recharge History
      </h1>
      {recharges.length === 0 ? (
        <p>No recharge history available.</p>
      ) : (
        <table className="w-full border-collapse border border-gray-200 bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-teal-600 text-white">
              <th className="p-3 text-left">ID</th>
              <th className="p-3 text-left">Date</th>
              <th className="p-3 text-left">Amount (₹)</th>
              <th className="p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {recharges.map((txn) => (
              <tr key={txn.id} className="border-t hover:bg-gray-50">
                <td className="p-3">{txn.id}</td>
                <td className="p-3">{txn.date}</td>
                <td className="p-3">{txn.amount}</td>
                <td className="p-3 text-green-600 font-semibold">
                  {txn.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
