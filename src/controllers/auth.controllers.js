const User = require("../model/modelo_usuario");
const generarJWT = require("../helpers/generartoken");
const bcrypt = require('bcrypt');


const ctrlAuth = {};

ctrlAuth.iniciarSesion = async (req, res) => {

    const { nombre, contraseña } = req.body;

    try {
        
        const usuarios = await User.findOne({ nombre });

        if (!usuarios) {
            return res.json('Usuario no encontrado')
            
        }

        if (!usuarios.isactive) {
            return res.json('Usuario inactivo')
            
        }

        // Verificar la contraseña
        const validcontraseña = bcrypt.compareSync(contraseña, usuarios.contraseña);

        if (!validcontraseña) {
            return res.json ('Contraseña incorrecta')
            
        }

        // Generar el token
        const token = await generarJWT({ uid: usuarios._id })

        return res.json({ token });
    } catch (error) {
        return res.json({ msg: 'Error al iniciar sesión' });
    }
};

module.exports = ctrlAuth;