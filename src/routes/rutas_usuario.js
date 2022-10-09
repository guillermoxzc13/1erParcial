const router = require("express").Router()

const { registro,login,put, deletee } = require('../controllers/Control_usuario');
const validarJWT = require("../middlewares/validartoken");

router.post("/registro", registro)
router.post("/login",login)
router.put("/actualizar",validarJWT,put)
router.delete("/eliminar",validarJWT, deletee)
module.exports= router;
