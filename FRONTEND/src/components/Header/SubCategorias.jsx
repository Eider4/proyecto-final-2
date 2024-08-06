import React, { useState, useEffect } from "react";
import { useFetch } from "../../Hooks/UseFetch";
import CarProducos from "../CardProductos";
import { useNavigate } from "react-router";

const Subcategorias = ({ setCategoriaMostar, CategoriaMostar }) => {
  const { data: subcategorias } = useFetch(
    "http://localhost:5813/subcategorias"
  );
  const { data } = useFetch("https://api-productos-categorias.vercel.app/products");

  const [selectedSubcategory, setSelectedSubcategory] =
    useState(CategoriaMostar);

  useEffect(() => {
    setSelectedSubcategory(CategoriaMostar);
  }, [CategoriaMostar]);

  const handleSubcategoryChange = (nombre) => {
    setSelectedSubcategory(nombre);
    setCategoriaMostar(nombre);
  };

  const navigate = useNavigate();

  const selectedProducts = subcategorias[selectedSubcategory]?.[0] || [];
  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="flex">
      {/* Lista de Subcategorías */}
      <div className="w-1/4 p-4 border-r border-gray-300">
        <h2 className="text-lg font-bold mb-4">Subcategorías</h2>
        <ul className="space-y-2 overflow-y-auto h-80">
          {Object.keys(subcategorias).map((nombre) => (
            <li
              key={nombre}
              onClick={() => handleSubcategoryChange(nombre)}
              className={`cursor-pointer p-2 rounded-lg hover:bg-gray-200 ${
                selectedSubcategory === nombre ? "bg-gray-300" : ""
              }`}
            >
              {nombre}
            </li>
          ))}
        </ul>
      </div>

      <div className="w-3/4 p-4 overflow-y-auto h-96">
        <h2 className="text-2xl font-bold mb-4">{selectedSubcategory}</h2>
        <div className="flex flex-wrap gap-1">
          {selectedProducts.map((productoId) => (
            <div
              key={productoId}
              onClick={() => handleProductClick(data[productoId].ID_PRODUCTO)}
            >
              {data[productoId] ? (
                <img src={data[productoId].IMAGEN} alt="" className="h-40" />
              ) : (
                <p>Imagen no disponible</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Subcategorias;
