const usuario = require('../model/modelo_usuario');
ctrlusuario = {};

ctrlusuario.post = async(req, res)=>{
    const {Nombre, contraseña}= req.body

    const nuevoUsuario = new usuario({
        Nombre,
        contraseña
    })     

    await nuevoUsuario.save()

    res.json("usuario creado")
}






module.exports = ctrlusuario;