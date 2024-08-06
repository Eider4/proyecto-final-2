const express = require("express");
const cors = require("cors");
// const { Pool } = require("pg");
const usuarioRoutes = require("./routes/usuarios");

const app = express();
const port = 1777;
app.use(express.json());
app.use(cors()); // Habilita CORS

app.get("/", async (req, res) => {
  res.send("hola mundo");
});
app.use("/usuarios", usuarioRoutes);
app.listen(port, () => {
  console.log(`servidor ejecutando en http://localhost:${port}`);
});
