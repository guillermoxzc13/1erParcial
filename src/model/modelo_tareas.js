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
    isdone:{
        type:Boolean,
        default:false
    },
    userId: {
        type: Schema.Types.ObjectId, ref: 'Users'
    },
},
{
    versionKey:false
});

TareaSchema.methods.toJSON = function() {
    const { _id, ...Tareas } = this.toObject();
    Tareas.uid = _id;

    return Tareas;
}


module.exports = model("tareas", TareaSchema);