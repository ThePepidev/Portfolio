import React from "react";
import { Analytics } from "@vercel/analytics/next"
import ReactDOM from "react-dom/client";
import Portfolio from "./pages/Portfolio.js";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>
);
