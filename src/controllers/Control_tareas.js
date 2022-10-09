const { takeCoverage } = require('v8');
const Tareas = require('../model/modelo_tareas');
ctrlTareas = {};

ctrlTareas.post = async (req, res) => {
    const { titulo, descripcion } = req.body;

    const NuevaTareas = new Tareas({
        titulo,
        descripcion,
        
    });
    await NuevaTareas.save()
   res.json("tarea creada")
}

    ctrlTareas.get = async (req, res) =>{
        const obterTareas = await Tareas.find()
        res.json(obterTareas)
    }

    ctrlTareas.put = async (req, res) =>{
        const id = req.params.id
        const {titulo, descripcion} = req.body 
        const actualizarTarea = await Tareas.updateOne({_id:id},{
            
            $set: {
                titulo, descripcion
            }
        });
        res.json(actualizarTarea +"tarea actualizada")
    

    } 

    ctrlTareas.Delete =  async (req,res) =>{
        const id = req.params.id;
        const {titulo,descripcion} = req.body
        const eliminarTarea = await Tareas.deleteOne({_id:id})
    
        res.json(eliminarTarea + "tarea eliminada")
    }
    

module.exports = ctrlTareas;

