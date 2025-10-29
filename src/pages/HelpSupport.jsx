import React from "react";

export default function HelpSupport() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold text-teal-700 mb-6">Help & Support</h1>
      <div className="bg-white p-6 rounded-xl shadow-md">
        <p className="mb-4">
          For any queries related to your FASTag account or transactions, you
          can reach out to our support team.
        </p>
        <ul className="space-y-2">
          <li>
            📧 Email:{" "}
            <span className="font-medium">support@fastagservice.com</span>
          </li>
          <li>
            📞 Helpline: <span className="font-medium">1800-123-FASTAG</span>
          </li>
          <li>🕒 Timing: Monday to Saturday, 9 AM - 6 PM</li>
        </ul>
      </div>
    </div>
  );
}
