const router = require("express").Router()

const { post } = require('../controllers/Control_usuario');


router.post("/registro", post)

module.exports= router;
