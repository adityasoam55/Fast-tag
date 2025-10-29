import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import PrivateRoute from "./components/PrivateRoute";
import Home from "./pages/Home";
import DashboardHome from "./pages/DashboardHome";
import RechargeHistory from "./pages/RechargeHistory";
import WalletHistory from "./pages/WalletHistory";
import Offers from "./pages/Offers";
import HelpSupport from "./pages/HelpSupport";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Public Home Page */}
        <Route path="/" element={<Home />} />

        {/* Protected Dashboard Routes */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <Dashboard />
            </PrivateRoute>
          }
        >
          {/* Nested routes inside Dashboard */}
          <Route index element={<DashboardHome />} />
          <Route path="recharge-history" element={<RechargeHistory />} />
          <Route path="wallet-history" element={<WalletHistory />} />
          <Route path="offers" element={<Offers />} />
          <Route path="help" element={<HelpSupport />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
