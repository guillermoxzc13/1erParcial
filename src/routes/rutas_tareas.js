const router = require('express').Router();
const {post,get,put,Delete}= require('../controllers/Control_tareas');
const validarJWT = require('../middlewares/validartoken');

router.post("/Tareas",validarJWT, post)
router.get("/tareas",get)
router.put("/tareas/:id",put)
router.delete("/tareas/:id", Delete)






module.exports = router;