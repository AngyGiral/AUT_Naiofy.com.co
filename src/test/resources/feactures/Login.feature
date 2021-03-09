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
    Y debe retornar el body de respuesta con el formato correcto
    Y el endpoint de respuesta debe devolver  el user_id

  @loguinExitosoUsuarioAdministrador
  Escenario: verifica la respuesta del servicio de autentificacion para un usuario administrador
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinExitosoUserAdmin.json"
    Entonces debera retornar el status code '200' de la operacion del "loguin"
    Y debera encontrar en el header el token de autorizacion
    Y debe retornar el body de respuesta con el formato correcto
    Y el endpoint de respuesta debe devolver  el user_id
    
  @loguinUsuarioNoExistenteContrasenaErronea
  Escenario: verifica la respuesta del servicio de autentificacion para un usuario con credenciales no existentes
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinNoExiste.json"
    Entonces debera retornar un status code totalmente diferente a '200' de la operacion del "loguin"
    Y debe retornar el body de respuesta con el formato correcto

 @loguinEmailCorrectoContrasenaErronea
  Escenario: verifica la respuesta del servicio de autentificacion con usuario correcto y contrasena erronea
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinPassworIncorrecto.json"
    Entonces debera retornar un status code totalmente diferente a '200' de la operacion del "loguin"
    Y debe retornar el body de respuesta con el formato correcto

    
 @loguinCredencialesVacias
  Escenario: verifica la respuesta del servicio de autentificacion cuando se las credenciales estan vacias
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinVacio.json"
    Entonces debera retornar un status code totalmente diferente a '200' de la operacion del "loguin"
    Y debe retornar el body de respuesta con el formato correcto
 
    
 @loguinEmailVacioPasswordDiligenciad
  Escenario: verifica la respuesta del servicio de autentificacion cuando el email esta vacio y el pasword diligenciado
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinEmailVacioPassOk.json"
    Entonces debera retornar un status code totalmente diferente a '200' de la operacion del "loguin"
    Y debe retornar el body de respuesta con el formato correcto

    
    