const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    
    nombre: {
        type: String,
        required: true,
    },
    contraseña: {
        type: String,
        required: true
    },
    email:{
        type:String,
        require: true
    }
   
},{
    versionKey:false
});

module.exports = model('usuarios', usuarioSchema);