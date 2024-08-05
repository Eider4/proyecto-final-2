import React, { useState } from "react";
import { useFetch } from "../../Hooks/UseFetch";
import CarProducos from "../CardProductos";

const Subcategorias = () => {
  const { data: subcategorias } = useFetch(
    "http://localhost:3002/subcategorias"
  );
  const { data } = useFetch("http://localhost:3001/products");

  const [selectedSubcategory, setSelectedSubcategory] = useState(
    Object.keys(subcategorias)[0]
  );

  const handleSubcategoryChange = (event) => {
    setSelectedSubcategory(event.target.value);
  };

  const selectedProducts = subcategorias[selectedSubcategory]?.[0] || [];

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4">
        <label htmlFor="subcategory" className="block text-lg font-bold mb-2">
          Selecciona una subcategoría:
        </label>
        <select
          id="subcategory"
          value={selectedSubcategory}
          onChange={handleSubcategoryChange}
          className="bg-white border border-gray-300 rounded-lg p-2 w-full"
        >
          {Object.keys(subcategorias).map((nombre) => (
            <option key={nombre} value={nombre}>
              {nombre}
            </option>
          ))}
        </select>
      </div>
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {selectedSubcategory}
        </h2>
        <ProductCarousel productos={selectedProducts} data={data} />
      </div>
    </div>
  );
};

const ProductCarousel = ({ productos, data }) => {
  const [scrollIndex, setScrollIndex] = useState(0);
  const itemsPerPage = 3;
  const totalItems = productos.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === 0 ? totalPages - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setScrollIndex((prevIndex) =>
      prevIndex === totalPages - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative overflow-hidden">
      <div
        className="flex space-x-4 transition-transform duration-300 ease-in-out"
        style={{ transform: `translateX(-${scrollIndex * 100}%)` }}
      >
        {productos.map((productoId) => (
          <div key={productoId} className="flex-none w-1/3 px-2">
            <CarProducos
              TITULO={data[productoId]?.TITULO || "Producto Desconocido"}
              PRECIO={data[productoId]?.PRECIO || "N/A"}
              IMAGEN={
                data[productoId]?.IMAGEN || "https://via.placeholder.com/150"
              }
            />
          </div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10094;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-700 text-white p-2 rounded-full"
      >
        &#10095;
      </button>
    </div>
  );
};

export default Subcategorias;
const categorias = [
  "Mochilas",
  "Camisas",
  "Chaquetas",
  "Camisetas",
  "Joyas",
  "Zapatillas",
  "Gafas y Auriculares",
  "Relojes",
  "Electrodomésticos",
  "Teléfonos y Cámaras",
  "Tablets y Laptops",
  "Muebles de Oficina",
  "Muebles y Decoración",
  "Deportes y Actividad Física",
  "Ropa Casual",
  "Ropa Formal",
  "Electrónica de Consumo",
  "Decoración del Hogar",
  "Accesorios de Moda",
  "Ropa Deportiva",
  "Ropa de Invierno",
  "Electrodomésticos de Cocina",
  "Electrodomésticos de Limpieza",
  "Ropa de Oficina",
  "Electrónica de Entretenimiento",
  "Electrónica Personal",
  "Ropa de Noche",
  "Muebles para el Hogar",
  "Tecnología de Alta Gama",
  "Ropa Casual de Verano",
  "Ropa Casual de Invierno",
  "Electrodomésticos de Cocina Avanzados",
  "Electrodomésticos de Cocina Básicos",
  "Electrodomésticos para el Hogar",
];
