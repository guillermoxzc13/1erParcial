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
},{
    versionKey:false
});

module.exports = model("tareas", TareaSchema);