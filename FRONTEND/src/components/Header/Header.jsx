import { useEffect, useState } from "react";
import { useFetch } from "../../Hooks/UseFetch";
import {
  Car_icon,
  Corazon_icon,
  Diadema_Icon,
  Global_icon,
  Lupa_icon,
  User_Icon,
} from "../../assets/Icons";
import CarouselComponent from "./Carrusel";
import Subcategorias from "./SubCategorias";

const images = [
  "https://club.involves.com/es/wp-content/uploads/2020/05/estrategias-promocion.png",
  "https://simbolografico.es/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/12/promociones.jpeg.webp",
];

const Header = () => {
  const { data } = useFetch("http://localhost:5843/subcategorias");
  const [startIndex, setStartIndex] = useState(0);
  const [MenuCategoria, setMenuCategoria] = useState(false);
  const [CategoriaMostar, setCategoriaMostar] = useState("");
  const itemsPerPage = 5;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage < data.length ? prevIndex + itemsPerPage : 0
    );
  };

  const guardarCategoriaLogalStorage = (subcategoria) => {
    localStorage.setItem("subcategoria", subcategoria);
    setCategoriaMostar(subcategoria);
    setMenuCategoria(true); // Asegura que el menú se abra al seleccionar una subcategoría
  };

  return (
    <div>
      <div className="bg-orange-500 h-10 flex justify-center">
        <h1>Promociones hasta el 50%</h1>
      </div>
      <header className=" bg-white flex justify-between p-3">
        <div>
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Shein-logo.png/640px-Shein-logo.png"
            alt=""
          />
        </div>
        <div className="w-96 flex">
          <input
            className="w-[100%] border-2 border-black h-7 pt-4 pb-4 pl-2"
            type="text"
            placeholder="Buscar..."
          />
          <span>
            <Lupa_icon />
          </span>
        </div>
        <nav className="flex justify-between gap-3">
          <User_Icon />
          <Car_icon />
          <Corazon_icon />
          <Diadema_Icon />
          <Global_icon />
        </nav>
      </header>
      <div>
        <div className="flex justify-around items-center">
          <div
            className="w-[10%] flex justify-center cursor-pointer"
            onClick={() => setMenuCategoria(!MenuCategoria)}
          >
            <p>Categorías</p>
          </div>
          <div className="flex flex-row w-[80%] justify-center">
            {data
              .slice(startIndex, startIndex + itemsPerPage)
              .map((item, i) => (
                <div key={i} className="pl-1 pr-1 h-7 w-auto flex items-center">
                  <p
                    className="text-xs whitespace-nowrap cursor-pointer"
                    onClick={() => guardarCategoriaLogalStorage(item)}
                  >
                    {item}
                  </p>
                </div>
              ))}
          </div>
          <div className="w-[10%] flex justify-center">
            <button onClick={handleNext}>
              <p>{"->"}</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        {MenuCategoria && (
          <div>
            <Subcategorias
              setCategoriaMostar={setCategoriaMostar}
              CategoriaMostar={CategoriaMostar}
            />
          </div>
        )}
      </div>
      <CarouselComponent images={images} />
    </div>
  );
};

export default Header;
