#language: es
#Autor: ingenierarangy@gmail.com
@ComprarAlbum
Característica: Validar la consultas de la lista de usuarios naiofy
  Yo como analista de calidad  del sistema naiofy 
  Deseo validar la funcionalidad de consultas de Compra de albumes,
  
    Antecedentes: Loguearse para generar Token
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinExitosoUserRegular.json"
    Entonces debera retornar el status code '200' de la operacion del "loguin."
    Y debera encontrar en el header el token de autorizacion
     Y el endpoint de respuesta debe devolver "user_id" y no debe ser null

  @ComprarAlbum
  Escenario: verifica la respuesta del servicio de compra de album 
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/albums/100" y endpoind "./templates/Vacio.json"
    Entonces debera retornar el status code '201' de la operacion del "proceso de compra de album."
    Entonces se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/147/albums" y endpoind "./templates/Vacio.json"
   	Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta albumes comprados"
  	Y debe retornar una respuesta
    
  @ComprarAlbumqueAnteriormenteComprado
  Escenario: verifica la respuesta del servicio de compra  para validar que no se permita la compra de un album que ya fue comprado
   Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/albums/9" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '401' de la operacion del "Compra de album"
	 Y debe retornar una respuesta
