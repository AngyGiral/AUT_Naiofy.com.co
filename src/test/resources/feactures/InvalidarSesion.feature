#language: es
#Autor: ingenierarangy@gmail.com

Característica: Verificar si la sesiones quedaron invalidas,
  
    Antecedentes: Loguearse para generar Token
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinExitosoUserRegular.json"
    Entonces debera retornar el status code '200' de la operacion del "loguin."
    Y debera encontrar en el header el token de autorizacion
    Y el endpoint de respuesta debe devolver "user_id" y no debe ser null
   
  @Invalidarsesion
  Escenario: verifica la respuesta del servicio de invalidar session
   Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions/invalidate_all" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '200' de la operacion del "proceso de invalidar sesion"
	 Y debe retornar una respuesta
