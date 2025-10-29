import React from "react";

export default function Offers() {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold text-teal-700 mb-6">
        Available Offers
      </h1>
      <ul className="space-y-4">
        <li className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg">
          💸 Get ₹50 cashback on your first recharge above ₹500!
        </li>
        <li className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg">
          🛣️ 10% discount on select toll plazas this Diwali!
        </li>
        <li className="p-4 bg-white rounded-xl shadow-md hover:shadow-lg">
          🎁 Refer a friend and earn ₹100 FASTag credit.
        </li>
      </ul>
    </div>
  );
}
