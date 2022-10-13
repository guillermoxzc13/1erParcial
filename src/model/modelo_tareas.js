const { model, Schema } = require('mongoose');

const TareaSchema = new Schema({
    
    titulo: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'Users'
    },
},
{
    versionKey:false
});

TareaSchema.methods.toJSON = function() {
    const { _id, ...user } = this.toObject();
    user.uid = _id;

    return user;
}


module.exports = model("tareas", TareaSchema);