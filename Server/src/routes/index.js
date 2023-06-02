//al ser una ruta no ncesita un return, solo lleva y trae informacion
const express = require("express");
const router = express.Router();

const getCharById = require("../controllers/getCharById");
const login = require("../controllers/login");
const postFav = require("../controllers/postFav");
const postUser = require("../controllers/postUser.js");
const deleteFav = require("../controllers/deleteFav");

router.get("/login", login);
router.post("/login", postUser);
router.post("/fav", postFav);
router.delete("/fav/:id", deleteFav);
router.get("/character/:id", getCharById);

module.exports = router;
