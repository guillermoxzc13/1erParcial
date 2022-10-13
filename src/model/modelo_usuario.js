const { model, Schema } = require('mongoose');

const usuarioSchema = new Schema({
    
    nombre: {
        type: String,
        required: true,
        
    },
    apellido:{
        type: String,
        require: true,
    },
    contraseña: {
        type: String,
        required: true
    },
    email:{
        type:String,
        require: true
    },
    isactive:{
        type: Boolean,
        default: true
    }
},{
    versionKey:false
});

usuarioSchema.methods.toJSON = function() {
    const { contraseña, _id, ...user } = this.toObject();
    user.uid = _id;

    return user;
}

module.exports = model('usuarios', usuarioSchema);