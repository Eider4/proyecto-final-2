import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../Hooks/UseFetch";

export default function ProductDetail() {
  const { id } = useParams();
  const { data } = useFetch(`http://localhost:4000/${id -1}`);
  const [imgArray, setImgArray] = useState([]);
  const [ImgPrinsipal, setImgPrinsipal] = useState("");

  useEffect(() => {
    if (data && data.DIRECCION_IMAGEN) {
      setImgArray(data.DIRECCION_IMAGEN);
      setImgPrinsipal(data.IMAGEN);
    }
  }, [data]);

  if (!data) return <p>Cargando...</p>;

  return (
    <div className="container mx-auto p-6">
      <div className="flex flex-col lg:flex-row">
        {imgArray.length > 0 && (
          <div
            className="flex mt-6 flex-col h-96 overflow-y-auto"
            style={{ scrollbarColor: "#0000 #0000" }}
          >
            {imgArray.map((item, index) => (
              <img
                key={index}
                src={item}
                alt={`Imagen ${index + 1}`}
                width={"50px"}
                onClick={() => setImgPrinsipal(item)}
                className="object-cover shadow-md mb-3 cursor-pointer transform hover:scale-110 transition duration-300 ease-in-out"
              />
            ))}
          </div>
        )}
        <div className="lg:w-1/2 flex justify-center">
          <img
            className="w-full h-auto max-w-md object-cover rounded-lg shadow-md fade-in"
            src={ImgPrinsipal}
            alt={data.TITULO}
          />
        </div>
        <div className="lg:w-1/2 mt-4 lg:mt-0 lg:ml-6">
          <h1 className="text-3xl font-bold text-gray-800 mb-2">
            {data.TITULO}
          </h1>
          <p className="text-2xl text-red-600 font-semibold mb-4">
            ${data.PRECIO}
          </p>
          <p className="text-gray-700 mb-4">{data.DESCRIPCION}</p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Marca:</span> {data.MARCA}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Disponibilidad:</span>{" "}
            {data.DISPONIBILIDAD}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Origen:</span> {data.ORIGEN}
          </p>
          <p className="text-gray-600 mb-2">
            <span className="font-semibold">Color:</span> {data.COLOR}
          </p>
          <p className="text-gray-600 mb-4">
            <span className="font-semibold">Dimensiones:</span>{" "}
            {data.DIMENSIONES}
          </p>
          <p className="text-green-600 mb-4">{data.PROMOCION}</p>
          <button className="w-full lg:w-auto bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-blue-700 transform hover:scale-105 transition duration-300 ease-in-out">
            Añadir al carrito
          </button>
        </div>
      </div>
    </div>
  );
}
