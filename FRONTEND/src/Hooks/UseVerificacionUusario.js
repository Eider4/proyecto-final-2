import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/credenciales";
import { useEffect, useState } from "react";

export default function UseVerificacionUsario() {
  const [User, setUser] = useState(null);
  const [registrado, setRegistrado] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (usuario) => {
      if (usuario) {
        const u = usuario;
        setUser(u);
        setRegistrado(true);
      } else {
        console.log("no hay usuario logeado");
        setRegistrado(false);
      }
    });
  }, []);

  return { User, registrado };
}
