const express = require("express");
const cors = require("cors");
const { Poll } = require("pg");

const app = express();
const port = 1777;

// const pool = new Poll({
//   user: "eider",
//   pass,
// });

app.get("/", async (req, res) => {
  res.send("hola mundo");
});

app.listen(port, () => {
  console.log(`servidor ejecutando en http://localhost:${port}`);
});
