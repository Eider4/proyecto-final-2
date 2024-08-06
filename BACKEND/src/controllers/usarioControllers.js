const { pool } = require("../config/database");

const getUsuarios = async (req, res) => {
  try {
    const usuarios = await pool.query("SELECT * FROM usuarios");
    res.json(usuarios.rows);
  } catch (error) {
    console.log("error al obtener los datos de usuarios", error);
    res.status(500).json({ error: "Error al obtener los datos de usuarios" });
  }
};
const postUsuario = async (req, res) => {
  try {
    const { email, uid_usuario } = req.body;
    await pool.query(
      "INSERT INTO usuarios (email, uid_usuario) VALUES ($1 ,$2) ",
      [email, uid_usuario]
    );
    res.status(201).json({ message: "Usuario creado exitosamente" });
  } catch (error) {
    res.status(500).json({ error: "erro al actualizar" });
  }
};

module.exports = { getUsuarios, postUsuario };
