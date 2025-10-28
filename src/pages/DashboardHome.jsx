// src/pages/DashboardHome.jsx
import React from "react";
import TopBanner from "../components/sections/TopBanner";
import ProvidersSectionInteractive from "../components/sections/ProvidersSectionInteractive";
import FAQ from "../components/sections/FAQ";

/**
 * DashboardHome - main dashboard content (TopBanner, Providers grid, FAQ)
 *
 * Props:
 * - balance: number
 * - onAddMoney: function
 */
export default function DashboardHome({ balance = 0, onAddMoney = () => {} }) {
  return (
    <div>
      {/* TopBanner: hidden on small screens, visible at lg and above */}
      <div className="hidden lg:block">
        <TopBanner balance={balance} onAddMoney={onAddMoney} />
      </div>

      {/* Providers / content area */}
      <div className="max-w-7xl mx-auto px-4">
        <ProvidersSectionInteractive />
      </div>

      {/* FAQ section */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <FAQ />
      </div>
    </div>
  );
}
