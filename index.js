
const path = require('path');
const express = require('express'); 
const cors = require('cors');
const morgan = require('morgan');

const dbConnect = require('./src/BD/coneccion'); // Se importa la función de conexión a la BD.
require('dotenv').config();

//inicializaciones 
const app = express(); // Inicializando la librería express
dbConnect()


// MIDDLEWARES
app.use(cors());
app.use(morgan('dev'));
app.use(express.json())


// Directorio de archivos estáticos
app.use(express.static(path.join(__dirname, 'src/public')));

// Importando rutas
app.use(require("./src/routes/rutas_usuario"));
app.use(require("./src/routes/rutas_tareas"));
app.use(require("./src/routes/auth.routes"));





app.listen(4000,(err)=>{if(err){
    console.log("error al iniciar el servidor" + err)
}console.log("corriendo en el puerto:3000")
})
