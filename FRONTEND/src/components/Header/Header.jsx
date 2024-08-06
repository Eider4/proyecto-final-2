import { useContext, useEffect, useState } from "react";
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
import UseVerificacionUsario from "../../Hooks/UseVerificacionUusario";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/Cart/CartContext";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import InputBuscador from "./InputBuscador";

const images = [
  "https://club.involves.com/es/wp-content/uploads/2020/05/estrategias-promocion.png",
  "https://simbolografico.es/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2017/12/promociones.jpeg.webp",
];

const Header = () => {
  const { data } = useFetch("http://localhost:5813/subcategorias");
  const [startIndex, setStartIndex] = useState(0);
  const [MenuCategoria, setMenuCategoria] = useState(false);
  const [CategoriaMostar, setCategoriaMostar] = useState("");
  const itemsPerPage = 5;
  const { User, registrado } = UseVerificacionUsario();
  const { cart: u } = useContext(CartContext);
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + itemsPerPage < data.length ? prevIndex + itemsPerPage : 0
    );
  };
  const cerrrarSesion = async () => {
    await signOut(auth);
  };
  const guardarCategoriaLogalStorage = (subcategoria) => {
    localStorage.setItem("subcategoria", subcategoria);
    setCategoriaMostar(subcategoria);
    setMenuCategoria(true); 
  };

  return (
    <div>
      <div className="bg-orange-500 h-10 flex justify-center">
        <h1>Promociones hasta el 50%</h1>
        <button onClick={cerrrarSesion}>cerrar sesion</button>
      </div>
      <header className=" bg-white flex justify-between p-3">
        <div>
          <img
            className="w-40"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/25/Shein-logo.png/640px-Shein-logo.png"
            alt=""
          />
        </div>
         <InputBuscador />
        <nav className="flex justify-between gap-3">
          {registrado ? (
            <>
              <User_Icon />
              <Car_icon />
              <Corazon_icon />
              <Diadema_Icon />
              <Global_icon />
            </>
          ) : (
            <Link to={"login"}>login</Link>
          )}
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
                    className="text-xs whitespace-nowrap cursor-pointer "
                    style={{ fontSize: "14px" }}
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
