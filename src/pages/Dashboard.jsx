import React, { useEffect, useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import Sidebar from "../components/layout/SideBar";
import DashboardNavbar from "../components/layout/DashboardNavbar";

export default function Dashboard() {
  const navigate = useNavigate();
  const emailFromSession = sessionStorage.getItem("fastag_user_email");
  const [email] = useState(emailFromSession || "");
  const [balance, setBalance] = useState(() => {
    const b = sessionStorage.getItem("fastag_balance");
    return b ? Number(b) : 0.0;
  });

  useEffect(() => {
    if (!emailFromSession) navigate("/", { replace: true });
  }, [emailFromSession, navigate]);

  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);

  function handleLogout() {
    sessionStorage.clear();
    navigate("/", { replace: true });
  }

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Navbar for mobile */}
      <div className="block lg:hidden fixed top-0 left-0 w-full z-50">
        <DashboardNavbar
          onMenuClick={() => setMobileSidebarOpen(true)}
          onLogout={handleLogout}
        />
      </div>

      <div className="flex flex-1 max-md:pt-12">
        {/* Sidebar */}
        <Sidebar
          onLogout={handleLogout}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
        />

        {/* Dynamic page content */}
        <main className="flex-1 p-6 overflow-auto">
          <Outlet context={{ balance, setBalance }} />
        </main>
      </div>
    </div>
  );
}
