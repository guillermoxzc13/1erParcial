const usuario = require('../model/modelo_usuario');
const tareas = require("../model/modelo_tareas")
ctrlusuario = {};

const bcryt = require("bcrypt");

const generarJWT = require('../helpers/generartoken');

ctrlusuario.registro = async(req, res)=>{
    const {nombre,email,contraseña} = req.body
    const nuevacontraseña = bcryt.hashSync(contraseña, 10)
    const nuevousuario = new usuario({
        
        nombre,
        contraseña: nuevacontraseña,
        email
    })
    
      const guardarusuario = await  nuevousuario.save()
      
    res.json(guardarusuario)
}

ctrlusuario.get = async (req,res)=>{
    try {
        const users = await usuario.find({isactive: true})
    return res.json({
        msg: 'Usuarios registrados',
        users
    })
    } catch (error) {
        console.log(error)
        return res.json({
            msg: 'Error al encontrar el usuario'
        })
    }
}

ctrlusuario.put = async (req, res) =>{

    const {nombre, email,contraseña} = req.body 

    const nuevacontraseña = bcryt.hashSync(contraseña,10)
    const actualizarusuario = await usuario.updateOne({_id:req.user._id},{
        
        $set: {
            nombre,
            email,
            contraseña:nuevacontraseña
        }
    });
    res.json(200).json(actualizarusuario +"usuario actualizada")


} 

ctrlusuario.deletee = async (req, res)=>{
    await tareas.updateMany({userId:req.user._id},{isactive:false})
    const eliminarusuario = await usuario.findByIdAndUpdate({_id:req.user._id}, {isactive: false})

    res.json(200).json("usuario eliminado ")

}






module.exports = ctrlusuario;