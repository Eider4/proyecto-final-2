import React, { useEffect, useState } from "react";
import UseVerificacionUsario from "../../Hooks/UseVerificacionUusario";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase/credenciales";
import { useNavigate } from "react-router";

export default function Login() {
  const { User, registrado } = UseVerificacionUsario();
  const [registrar, setRegistrar] = useState(false);
  const [correo, setCorreo] = useState("");
  const [contrasena, setContrasena] = useState("");
  console.log(User);
  const onSubmitRegistrar = async (e) => {
    try {
      await createUserWithEmailAndPassword(auth, correo, contrasena);
    } catch (error) {
      console.log("error al Registrar cuenta");
    }
  };
  const navigate = useNavigate();

  const onSubmitIngresar = async (e) => {
    try {
      await signInWithEmailAndPassword(auth, correo, contrasena);
      navigate(`/`);
    } catch (error) {
      console.log("error al Ingresar cuenta");
    }
  };

  const Yalogeado = async () => {
    console.log(User);
    try {
      console.log("cargando...");
      await fetch("http://localhost:1777/usuarios", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({ email: correo, uid_usuario: User.uid }),
      });
      console.log("se pudo al enviar datos a la base de datos");
    } catch (error) {
      console.log("error al enviar datos a la base de datos", error);
    }
  };
  useEffect(() => {
    if (User) {
      Yalogeado();
      navigate(`/`);
    }
  }, [User]);

  return (
    <div>
      {!registrado && (
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-red-400 to-pink-400">
          <div className="w-full max-w-md bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
              {registrar ? "Regístrate" : "Iniciar sesión"}
            </h2>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                registrar ? onSubmitRegistrar() : onSubmitIngresar();
              }}
            >
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Correo Electrónico
                </label>
                <input
                  onChange={(e) => setCorreo(e.target.value)}
                  value={correo}
                  id="email"
                  type="email"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  placeholder="nombre@ejemplo.com"
                />
              </div>

              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Contraseña
                </label>
                <input
                  onChange={(e) => setContrasena(e.target.value)}
                  value={contrasena}
                  id="password"
                  type="password"
                  className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-gray-500"
                  placeholder="********"
                />
              </div>
              {!registrar && (
                <div className="flex justify-between items-center mb-4">
                  <label className="inline-flex items-center">
                    <input
                      type="checkbox"
                      className="form-checkbox h-4 w-4 text-gray-600"
                    />
                    <span className="ml-2 text-sm text-gray-600">
                      Recuérdame
                    </span>
                  </label>
                  <p href="#" className="text-sm text-blue-500 hover:underline">
                    ¿Olvidaste tu contraseña?
                  </p>
                </div>
              )}

              <button
                type="submit"
                className="w-full py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition duration-300 mb-4"
              >
                {registrar ? "Regístrate" : "Iniciar sesión"}
              </button>

              <div className="flex items-center justify-center mb-6">
                <span className="w-full border-t border-gray-300"></span>
                <span className="px-3 text-gray-500">O</span>
                <span className="w-full border-t border-gray-300"></span>
              </div>

              <button
                type="button"
                className="w-full py-3 bg-white border border-gray-300 text-gray-700 font-semibold rounded-md shadow-sm hover:bg-gray-50 transition duration-300 flex items-center justify-center"
              >
                <img
                  src="https://www.svgrepo.com/show/355037/google.svg"
                  alt="Google"
                  className="w-5 h-5 mr-2"
                />
                Ingresar con Google
              </button>
            </form>

            <p className="mt-6 text-center text-sm text-gray-600">
              {registrar ? "¿Ya tienes una cuenta?" : "¿No tienes una cuenta?"}{" "}
              <button
                onClick={() => setRegistrar(!registrar)}
                className="text-blue-500 hover:underline"
              >
                {registrar ? "Inicia sesión" : "Regístrate"}
              </button>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
