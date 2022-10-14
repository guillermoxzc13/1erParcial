# 1erParcial

# Servidor p/ 1er Parcial: Programación II

#Para ejecutar se debe tener instalado Node.js y npm.

*Para Instalar las dependencias:
`npm i`

*Para ejecutar el proyecto en modo Desarrollo, ejecutar el siguiente comando:
`npm run dev`

#Usos

*primero se registra como usuario

#HTTP: POST :http://localhost:4000/registro

*en el body debe seguir la siguiente estructura 
`{nombre:nombrequedesee,
  email:correoquedesee,
  contraseña:contraseñaquedesee}`
  
  *luego debe logearse con el usuario anteriormente creado
  
  ##HTTP: POST :http://localhost:4000/login

*en el body debe seguir la siguiente estructura
  `nombre:sunombre,
  contraseña:sucontraseña`
  
  #Una vez reciba el Token, cópielo y uselo como header token en su cliente y así acceder a las funciones:
  
  *HTTP: PUT: http://localhost:4000/actualizar
  *en el body debe seguir la siguiente estructura 
  ` {
		 "nombre":"",
		 "contraseña":"",
     "email":""
	 }`
  
  *HTTP: GET: http://localhost:4000/get
  
  `sirve para ver los usuarios registrados que esten activos` 
  
  #funciones de tareas con el token validado 
  
  *HTTP: GET http://localhost:4000/task
  `sirve para ver todas las tareas el usuario logeado`
  
  
  
