import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { CartProvaider } from "./context/Cart/CartProvaider.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <CartProvaider>
      <App />
    </CartProvaider>
  </React.StrictMode>
);
