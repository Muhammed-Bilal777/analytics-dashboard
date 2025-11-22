import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { DashboardProvider } from "./context/DashboardProvider.jsx";
import "./styles/global.css";

const root = createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <DashboardProvider>
      <App />
    </DashboardProvider>
  </React.StrictMode>
);
