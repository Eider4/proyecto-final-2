const express = require("express");

const {
  getUsuarios,
  postUsuario,
} = require("../controllers/usarioControllers");

const router = express.Router();
router.get("/", getUsuarios);
router.post("/", postUsuario);

module.exports = router;
