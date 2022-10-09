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

},{
    versionKey:false
});

module.exports = model("tareas", TareaSchema);