// src/components/PrivateRoute.jsx
import React from "react";
import { Navigate } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const logged = sessionStorage.getItem("fastag_user_email");
  return logged ? children : <Navigate to="/" replace />;
}
