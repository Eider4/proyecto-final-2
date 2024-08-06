import React, { useEffect, useState } from "react";
import { Lupa_icon } from "../../assets/Icons";
import { useFetch } from "../../Hooks/UseFetch";
import CarProducos from "../CardProductos";

export default function InputBuscador() {
  const { data } = useFetch("http://localhost:3001/products");
  const [anos, setAnos] = useState([]);
  const [Año, setAño] = useState("");
  const [Mes, setMes] = useState("");
  const [anoSeleccionado, setAnoSeleccionado] = useState([]);
  useEffect(() => {
    if (data) {
      const anosUnicos = new Set();
      data.forEach((item) => {
        const ano = item.FECHA_DE_LANZAMIENTO.split("-")[0];
        const mes = item.FECHA_DE_LANZAMIENTO.split("-")[1];
        anosUnicos.add({ ano, mes, id: item.ID_PRODUCTO });
      });
      setAnos([...anosUnicos]);
    }
  }, [data]);

  const filtrado = () => {
    const ProductosSeleccionados = anos.filter(
      (item) => item.ano == Año && item.mes === Mes
    );
    setAnoSeleccionado(ProductosSeleccionados);
  };
  const producto = (item) => {
    const p = data.find((e) => e.ID_PRODUCTO == item.id);
    return p;
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 flex flex-col space-y-4">
      <div className="flex space-x-4">
        <select
          onChange={(e) => setAño(e.target.value)}
          name="Ano"
          id="AnoCalendarioAno"
          value={Año}
          className="p-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">Año</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          <option value="2022">2022</option>
          <option value="2021">2021</option>
          <option value="2020">2020</option>
          <option value="2019">2019</option>
          <option value="2018">2018</option>
          <option value="2017">2017</option>
          <option value="2016">2016</option>
          <option value="2015">2015</option>
          <option value="2014">2014</option>
          <option value="2013">2013</option>
          <option value="2012">2012</option>
          <option value="2013">2011</option>
          <option value="2012">2010</option>
        </select>
        {Año != "" && (
          <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded-md">
            <button
              onClick={() => setAño("")}
              className="text-red-500 font-bold"
            >
              x
            </button>
            <p>{Año}</p>
          </div>
        )}
        <select
          value={Mes}
          onChange={(e) => {
            setMes(e.target.value);
            filtrado();
          }}
          name="Mes"
          id="MesCalendario"
          className="p-2 border border-gray-300 rounded-md shadow-sm"
        >
          <option value="">Mes</option>
          <option value="01">Enero</option>
          <option value="02">Febrero</option>
          <option value="03">Marzo</option>
          <option value="04">Abril</option>
          <option value="05">Mayo</option>
          <option value="06">Junio</option>
          <option value="07">Julio</option>
          <option value="08">Agosto</option>
          <option value="09">Septiempre</option>
          <option value="10">Octubre</option>
          <option value="11">Noviembre</option>
          <option value="12">Diciembre</option>
        </select>

        {Mes && (
          <div className="flex items-center space-x-2 bg-gray-200 p-2 rounded-md">
            <button
              onClick={() => setMes("")}
              className="text-red-500 font-bold"
            >
              x
            </button>
            <p>{Mes}</p>
          </div>
        )}

        <div className="relative flex-1">
          <input
            className="w-full border-2 border-gray-300 h-10 p-2 rounded-md shadow-sm"
            type="text"
            placeholder="Buscar..."
          />
          <span
            onClick={filtrado}
            className="absolute top-1/2 right-2 transform -translate-y-1/2 cursor-pointer"
          >
            <Lupa_icon />
          </span>
        </div>
      </div>

      {anoSeleccionado.length > 0 ? (
        <div className="flex flex-row space-x-4 overflow-x-auto flex-nowrap h-[470px] py-4">
          {anoSeleccionado.map((item, i) => (
            <div
              key={i}
              className="border  p-4 h-full min-w-[470px] rounded-md shadow-sm flex-shrink-0"
            >
              <CarProducos {...producto(item)} />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center p-4">
          {Año && Mes && <p>No hay productos que coincidan</p>}
        </div>
      )}
    </div>
  );
}
