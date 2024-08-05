import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCSSvdr_ghgP5RjPxTfCHlucXRZeXTebmU",
  authDomain: "proyecto-final-ayte-2.firebaseapp.com",
  projectId: "proyecto-final-ayte-2",
  storageBucket: "proyecto-final-ayte-2.appspot.com",
  messagingSenderId: "155867495190",
  appId: "1:155867495190:web:8b1240f3cbe649b79bee37",
  measurementId: "G-QM6JMEQFMG",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const providerGoogle = new GoogleAuthProvider();

export { auth, providerGoogle, app };
