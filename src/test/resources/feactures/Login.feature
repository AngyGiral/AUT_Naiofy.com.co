#language: es
#Autor: ingenierarangy@gmail.com
@login
Característica: Validar loguin naiofy
  Yo como analista de calidad  del sistema naiofy 
  Deseo validar la funcionalidad de logueo en el servicio post 
  Para optener la autorizacion para consultar informacion

  @loguinExitosoUsuarioRegular
  Escenario: verifica la respuesta del servicio de autentificacion para un usuario regular
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinExitosoUserRegular.json"
    Entonces debera retornar el status code '200' de la operacion del "loguin"
    Y debera encontrar en el header el token de autorizacion
    Y el endpoint de respuesta debe devolver "user_id" y no debe ser null

  @loguinExitosoUsuarioAdministrador
  Escenario: verifica la respuesta del servicio de autentificacion para un usuario administrador
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinExitosoUserAdmin.json"
    Entonces debera retornar el status code '200' de la operacion del "loguin"
    Y debera encontrar en el header el token de autorizacion
    Y el endpoint de respuesta debe devolver "user_id" y no debe ser null
    
  @loguinUsuarioNoExistenteContrasenaErronea
  Escenario: verifica la respuesta del servicio de autentificacion para un usuario con credenciales no existentes
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinNoExiste.json"
		Entonces debera retornar el status code '422' de la operacion del "loguin"
    Y debe retornar una respuesta

 @loguinEmailCorrectoContrasenaErronea
  Escenario: verifica la respuesta del servicio de autentificacion con usuario correcto y contrasena erronea
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinPassworIncorrecto.json"
 		Entonces debera retornar el status code '422' de la operacion del "loguin"
    Y debe retornar una respuesta
    Y debe retornar el formato de respuesta correcto para errores 

 @loguinCredencialesVacias
  Escenario: verifica la respuesta del servicio de autentificacion cuando se las credenciales estan vacias
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinVacio.json"
		Entonces debera retornar el status code '400' de la operacion del "loguin"
    Y debe retornar una respuesta
 
 @loguinEmailVacioPasswordDiligenciado
  Escenario: verifica la respuesta del servicio de autentificacion cuando el email esta vacio y el pasword diligenciado
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinEmailVacioPassOk.json"
	  Entonces debera retornar el status code '400' de la operacion del "loguin"
     Y debe retornar una respuesta

    
    