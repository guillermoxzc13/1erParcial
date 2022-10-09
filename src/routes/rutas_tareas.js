const router = require('express').Router();
const {post,get,put,Delete}= require('../controllers/Control_tareas');

router.post("/Tareas",post)
router.get("/tareas",get)
router.put("/tareas/:id",put)
router.delete("/tareas/:id", Delete)






module.exports = router;