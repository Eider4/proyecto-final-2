const { Pool } = require("pg");
require("dotenv").config();

const pool = new Pool({
  host: 'localhost',
  user: 'eider',
  password: '12345678',
  database:'BD_PROYECTO_AYTE',
  port: 5432,
});

pool.connect((err, client, release) => {
    if (err) {
      return console.error("Error al conectar con la base de datos:", err.stack);
    }
    console.log("Conexión a la base de datos exitosa");
    release();
  });
  
module.exports = { pool };
