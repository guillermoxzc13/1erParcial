
const jwt = require('jsonwebtoken');
const User = require('../model/modelo_usuario');

const validarJWT = async (req, res, next) => {
    
    let token = req.headers.token;

    
    if (!token) {
        return res.json('Error de autenticación - No hay token en la petición') 
    };


    try {
        
        const { uid } = await jwt.verify(token, process.env.SECRET)

        
        const usuario = await User.findById(uid)

        if (!usuario) {
            return res.json ('Token no válido - usuario no existe en BD')
        }

        req.user = usuario;

        
        next();
    } catch (error) {
        console.log(error);
        res.json ('Error de autenticación - Token no válido')
    }
}

module.exports = validarJWT