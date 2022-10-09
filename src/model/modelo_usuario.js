const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    
    Nombre: {
        type: String,
        required: true,
    },
    contraseña: {
        type: String,
        required: true
    },
   
},{
    versionKey:false
});

module.exports = model('usuarios', usuarioSchema);