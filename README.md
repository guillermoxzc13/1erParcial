## 1erParcial

#  Servidor p/ 1er Parcial: Programación II

# Para ejecutar se debe tener instalado Node.js y npm.

Para Instalar las dependencias:

`npm i`

Para ejecutar el proyecto en modo Desarrollo, ejecutar el siguiente comando:

`npm run dev`

## Usos 

`primero se registra como usuario`

# HTTP: POST :http://localhost:4000/registro
En el body debe seguir la siguiente estructura. 

			{
			nombre:nombrequedesee,
			email:correoquedesee,
			contraseña:contraseñaquedesee
			}`
			
luego debe Iniciar Sesión  con el usuario anteriormente creado

 # HTTP: POST :http://localhost:4000/login
En el body debe seguir la siguiente estructura.
		
			{nombre:nombre,
			contraseña:contraseña
			

  
  # Una vez reciba el Token, cópielo y uselo como header token en su cliente y así acceder a las funciones:
  
  # HTTP: PUT: http://localhost:4000/actualizar
  En el body debe seguir la siguiente estructura 
   
 		 	{
			"nombre":"",
			"contraseña":"",
    			"email":""
			}
	
  
  # HTTP: GET: http://localhost:4000/get
  
  `sirve para ver los usuarios registrados que esten activos` 
  
  # funciones de tareas con el token validado 
  
  # HTTP: GET http://localhost:4000/tareas
  `sirve para ver todas las tareas el usuario logeado`
  
  # HTTP: POST: http://localhost:4000/tareas
  
  En el body se  requiere la siguiente estructura para crear una tarea
  
  			{
			"titulo":"nombredeltitulo"
  			"descripcion":"descripcion"
			
  # HTTP: PUT: http://localhost:4000/tareas/id(de la tarea creada)
  	
	`sirve para actualizar las tareas`
  
  # HTTP: PUT: http://localhost:4000/completar/id(de la tarea)
  	
	`sirve para marcar como completa la tarea`
  
  # HTTP: DELETE: http://localhost:4000/tareas/id(de la tarea que desea eliminar)
  	
	`sirve para eliminar la tarea`


  
  
