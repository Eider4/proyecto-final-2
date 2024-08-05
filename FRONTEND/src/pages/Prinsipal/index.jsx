import React from "react";
import CardProductos from "../../components/CardProductos";
import { useFetch } from "../../Hooks/UseFetch";
import Subcategorias from "../../components/Header/SubCategorias";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";

export default function Principal() {
  const { data } = useFetch("https://api-productos-categorias.vercel.app/products");
  const navigate = useNavigate();

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <>
      <div className="flex flex-wrap gap-3 justify-around">
        {data.map((item, i) => (
          <div
            className="flex "
            key={i}
            onClick={() => handleProductClick(item.ID_PRODUCTO)}
          >
            <CardProductos {...item} />
          </div>
        ))}
      </div>
      {/* <Subcategorias /> */}
    </>
  );
}
