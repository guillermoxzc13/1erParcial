const { takeCoverage } = require('v8');
const Tareas = require('../model/modelo_tareas');
ctrlTareas = {};

ctrlTareas.post = async (req, res) => {
    const { titulo, descripcion } = req.body;

    const NuevaTareas = new Tareas({
        titulo,
        descripcion,
        userId:req.user._id
    });
    await NuevaTareas.save()
   res.json("tarea creada")
}

    ctrlTareas.get = async (req, res) =>{
        const obterTareas = await Tareas.find({userId:req.user._id})
        res.json(obterTareas)
    }

    ctrlTareas.put = async (req, res) =>{
        const id = req.params.id
        const {titulo, descripcion} = req.body 
        const actualizarTarea = await Tareas.updateOne({_id:id,userId:req.user._id},{
            
            $set: {
                titulo, descripcion
            }
        });
        res.json("tarea actualizada")
    

    } 

    ctrlTareas.Delete =  async (req,res) =>{
        const id = req.params.id;

        const eliminarTarea = await Tareas.deleteOne({_id:id,userId:req.user._id})
    
        res.json(eliminarTarea + "tarea eliminada")
    }

    ctrlTareas.completo = async(req,res)=>{

        const id = req.params.id;
        const completartarea = await Tareas.updateOne({_id:id,userId:req.user._id}, {isdone: true})

        res.status(200).json(completartarea)
    }
    

module.exports = ctrlTareas;

