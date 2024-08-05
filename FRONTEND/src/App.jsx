import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header/Header";
import Principal from "./pages/Prinsipal";
import ProductDetail from "./pages/ProductDetail/ProductDetail";
import Login from "./pages/Login/Login";
import CarritoCompras from "./pages/Carrito/CarritoCompras";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Principal />
            </>
          }
        />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Carrito-Compras" element={<CarritoCompras />} />
      </Routes>
    </BrowserRouter>
  );
}
