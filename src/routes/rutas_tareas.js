const router = require('express').Router();
const {post,get,put,Delete}= require('../controllers/Control_tareas');
const validarJWT = require('../middlewares/validartoken');

router.post("/Tareas",validarJWT, post)
router.get("/tareas",validarJWT,get)
router.put("/tareas/:id",validarJWT,put)
router.delete("/tareas/:id",validarJWT, Delete)






module.exports = router;