#language: es
#Autor: ingenierarangy@gmail.com
@Registro
Característica: Validar el registro de usuarios en el sistema naiofy
  Yo como analista de calidad  del sistema naiofy 
  Deseo validar la funcionalidad del servicio post de registro

 @RegistroExitosoUsuarioRegular
  Escenario: Registrar un usuario regular de forma exitosa con email de dominio "@wolox.com.ar"
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/" y endpoind "./templates/PostRegistroExitoso.json"
    Entonces debera retornar el status code '201' de la operacion del "Registo"
     Y el endpoint de respuesta debe devolver "user_id" y no debe ser null
   
 @RegistroUsuarioExistente
  Escenario: Registrar un usuario que ya esta registrado
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/" y endpoind "./templates/PostRegistroExistente.json"
    Entonces debera retornar el status code '422' de la operacion del "Registo"
    Y debe retornar una respuesta
    Y debe retornar el formato de respuesta correcto para errores 
    
   
@RegistroValidarformatoErrorUsuarioDatosVacios
  Escenario: Registrar un usuario regular  con formatos de datos incorrectos, con el objetivo de  validar formato de respuesta de error email de dominio diferente a "@wolox.com.ar"
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users" y endpoind "./templates/PostRegistroEmailIncorrecto.json"
    Entonces debera retornar el status code '422' de la operacion del "Registo"
    Y debe retornar una respuesta
    Y debe retornar el formato de respuesta correcto para errores 
   
 @RegistroIncorrectoUsuarioRegular
  Escenario: Registrar un usuario regular  con formatos de datos incorrectos, email de dominio diferente a "@wolox.com.ar", password menor  8 caracteres y firsname y lastname con numeros
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users" y endpoind "./templates/PostRegistroIncorrecto.json"
    Entonces debera retornar el status code '422' de la operacion del "Registo"
    Y debe retornar una respuesta
   



    
   