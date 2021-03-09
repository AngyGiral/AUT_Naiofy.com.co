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
    Y debe retornar el body de respuesta con el formato correcto
    Y el endpoint de respuesta debe devolver  el user_id

  @ConsultaExitosaListaUsuarios
  Escenario: verifica la respuesta del servicio de consulta para conocer el listado de usuarios
    Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/" y endpoind "./templates/Vacio.json"
    Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta lista de usuarios."
    Y debe retornar el body de respuesta con el formato correcto
    
  @ConsultaExitosaAlbumes
   Escenario: verifica la respuesta del servicio de consulta para conocer el listado de albumes
    Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/albums" y endpoind "./templates/Vacio.json"
    Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta lista de albumes."
    Y debe retornar el body de respuesta con el formato correcto

  @ConsultaExitosaListadoFotosAlbum
  Escenario: Verifica la respuesta del servicio de consulta exitosa de listado de fotos por album
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/albums/3/photos" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta de lista de fotos por album"
   Y debe retornar el body de respuesta con el formato correcto
   
  @ConsultaListadoFotosAlbumNoExistente
  Escenario: Verifica la respuesta del servicio de consulta de listado de fotos de un album no existente
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/albums/200/photos" y endpoind "./templates/Vacio.json"
   Entonces debera retornar un status code totalmente diferente a '200' de la operacion del "proceso de Consulta de lista de fotos por album"
   Y debe retornar el body de respuesta con el formato correcto

  @ConsultaExitosaAlbumesCompradosUsuario
   Escenario: Verifica la respuesta del servicio de consulta de albumes comprados por usuario
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/147/albums" y endpoind "./templates/Vacio.json"
   Entonces debera retornar el status code '200' de la operacion del "proceso de Consulta albumes comprados"
   Y debe retornar el body de respuesta con el formato correcto
   
   @ConsultaAlbumesCompradosUsuarioNoExistente
   Escenario: Verifica la respuesta del servicio de consulta de albumes comprados usuario no existente
   Cuando se consume el servicio Get con url "https://nodejs-qa-training.herokuapp.com/users/1000/albums" y endpoind "./templates/Vacio.json"
   Entonces debera retornar un status code totalmente diferente a '200' de la operacion del "proceso de Consulta albumes comprados"
   Y debe retornar el body de respuesta con el formato correcto
   
  
 