const router = require("express").Router()

const { registro,get,put, deletee } = require('../controllers/Control_usuario');
const validarJWT = require("../middlewares/validartoken");

router.get("/get",validarJWT,get)
router.post("/registro", registro)
router.put("/actualizar",validarJWT,put)
router.put("/eliminar",validarJWT, deletee)
module.exports= router;
