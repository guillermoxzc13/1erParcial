const usuario = require('../model/modelo_usuario');
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

ctrlusuario.login = async(req,res)=>{

    const {nombre,contraseña} = req.body
    const usuarioo = await usuario.findOne({nombre})
    

    if(!usuarioo){
        res.json("no existe usuario")
    }
    
    const validarcontraseña = bcryt.compareSync(contraseña,usuarioo.contraseña)
    
    if (!validarcontraseña){
        res.json("contraseña incorrecta")
    }

    const token= await generarJWT({uid:usuarioo._id})
    res.json(token)


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
    res.json(actualizarusuario +"usuario actualizada")


} 

ctrlusuario.deletee = async (req, res)=>{
    const eliminarusuario = await usuario.findByIdAndDelete({_id:req.user._id})

    res.json(eliminarusuario)

}






module.exports = ctrlusuario;