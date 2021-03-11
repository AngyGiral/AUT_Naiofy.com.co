#language: es
#Autor: ingenierarangy@gmail.com
@Consultas
Característica: Validar la consultas de la lista de usuarios naiofy
  Yo como analista de calidad  del sistema naiofy 
  Deseo validar la funcionalidad de consultas de usuarios, lista de albumes,
  listados de fotos, listado de almbumes comprados en el servicio Get 
  
    Antecedentes: Loguearse para generar Token
    Cuando se consume el servicio Post con url "https://nodejs-qa-training.herokuapp.com/users/sessions" y endpoind "./templates/PostLoguinExitosoUserRegular.json"
    Entonces debera retornar el status code '200' de la operacion del "loguin."
    Y debera encontrar en el header el token de autorizacion
    Y el endpoint de respuesta debe devolver "user_id" y no debe ser null
 

  @ConsultaExitosaListaUsuarios
  Escenario: verifica la respuesta del servicio de consulta para conocer el listado de usuarios
    Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/" y endpoind "./templates/Vacio.json"
    Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta lista de usuarios."
    Y debe retornar una respuesta
    
  @ConsultaListaUsuariosValidarFormato
  Escenario: verifica la respuesta del servicio de consulta para conocer el formato del listado de usuarios
    Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/" y endpoind "./templates/Vacio.json"
    Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta lista de usuarios."
    Y cada uno de los usuarios retornados deben tener el formato especificado
    
  @ConsultaExitosaAlbumes
   Escenario: verifica la respuesta del servicio de consulta para conocer el listado de albumes
    Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/albums" y endpoind "./templates/Vacio.json"
    Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta lista de albumes."
    Y debe retornar una respuesta con el Json en formato correcto para la consulta de Albumes
    
  @ConsultaExitosaListadoFotosAlbum
  Escenario: Verifica la respuesta del servicio de consulta exitosa de listado de fotos por album
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/albums/3/photos" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta de lista de fotos por album"
    Y debe retornar una respuesta con formato correcto para la consulta de photos
   
  @ConsultaListadoFotosAlbumNoExistente
  Escenario: Verifica la respuesta del servicio de consulta de listado de fotos de un album no existente
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/albums/200/photos" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta de lista de fotos por album"
    Y debe retornar una respuesta

  @ConsultaExitosaAlbumesCompradosUsuario
   Escenario: Verifica la respuesta del servicio de consulta de albumes comprados por usuario
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/147/albums" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta albumes comprados"
    Y debe retornar una respuesta
   
   @ConsultaAlbumesCompradosUsuarioNoExistente
   Escenario: Verifica la respuesta del servicio de consulta de albumes comprados usuario no existente
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/1000/albums" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '403' de la operacion del "proceso de Consulta albumes comprados"
   Y debe retornar una respuesta
    
   
  
 