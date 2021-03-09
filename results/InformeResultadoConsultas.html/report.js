$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feactures/ConsultaListas.feature");
formatter.feature({
  "name": "Validar la consultas de la lista de usuarios naiofy",
  "description": "  Yo como analista de calidad  del sistema naiofy \n  Deseo validar la funcionalidad de consultas de usuarios, lista de albumes,\n  listados de fotos, listado de almbumes comprados en el servicio Get ",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@Consultas"
    }
  ]
});
formatter.background({
  "name": "Loguearse para generar Token",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinExitosoUserRegular.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera encontrar en el header el token de autorizacion",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaEncontrarEnElHeaderElTokenDeAutorizacion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el endpoint de respuesta debe devolver  el user_id",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverElUser_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifica la respuesta del servicio de consulta para conocer el listado de usuarios",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Consultas"
    },
    {
      "name": "@ConsultaExitosaListaUsuarios"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Get con url \"https://nodejs-qa-training.herokuapp.com/users/\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioGetConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"proceso de Consulta lista de usuarios.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Loguearse para generar Token",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinExitosoUserRegular.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera encontrar en el header el token de autorizacion",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaEncontrarEnElHeaderElTokenDeAutorizacion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el endpoint de respuesta debe devolver  el user_id",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverElUser_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifica la respuesta del servicio de consulta para conocer el listado de albumes",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Consultas"
    },
    {
      "name": "@ConsultaExitosaAlbumes"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Get con url \"https://nodejs-qa-training.herokuapp.com/albums\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioGetConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"proceso de Consulta lista de albumes.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Loguearse para generar Token",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinExitosoUserRegular.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera encontrar en el header el token de autorizacion",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaEncontrarEnElHeaderElTokenDeAutorizacion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el endpoint de respuesta debe devolver  el user_id",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverElUser_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifica la respuesta del servicio de consulta exitosa de listado de fotos por album",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Consultas"
    },
    {
      "name": "@ConsultaExitosaListadoFotosAlbum"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Get con url \"https://nodejs-qa-training.herokuapp.com/albums/3/photos\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioGetConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"proceso de Consulta de lista de fotos por album\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Loguearse para generar Token",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinExitosoUserRegular.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera encontrar en el header el token de autorizacion",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaEncontrarEnElHeaderElTokenDeAutorizacion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el endpoint de respuesta debe devolver  el user_id",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverElUser_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifica la respuesta del servicio de consulta de listado de fotos de un album no existente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Consultas"
    },
    {
      "name": "@ConsultaListadoFotosAlbumNoExistente"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Get con url \"https://nodejs-qa-training.herokuapp.com/albums/200/photos\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioGetConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar un status code totalmente diferente a \u0027200\u0027 de la operacion del \"proceso de Consulta de lista de fotos por album\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarUnStatusCodeTotalmenteDiferenteADeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Loguearse para generar Token",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinExitosoUserRegular.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera encontrar en el header el token de autorizacion",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaEncontrarEnElHeaderElTokenDeAutorizacion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el endpoint de respuesta debe devolver  el user_id",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverElUser_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifica la respuesta del servicio de consulta de albumes comprados por usuario",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Consultas"
    },
    {
      "name": "@ConsultaExitosaAlbumesCompradosUsuario"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Get con url \"https://nodejs-qa-training.herokuapp.com/users/147/albums\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioGetConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"proceso de Consulta albumes comprados\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.background({
  "name": "Loguearse para generar Token",
  "description": "",
  "keyword": "Antecedentes"
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinExitosoUserRegular.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera encontrar en el header el token de autorizacion",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaEncontrarEnElHeaderElTokenDeAutorizacion()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "el endpoint de respuesta debe devolver  el user_id",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverElUser_id()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verifica la respuesta del servicio de consulta de albumes comprados usuario no existente",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Consultas"
    },
    {
      "name": "@ConsultaAlbumesCompradosUsuarioNoExistente"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Get con url \"https://nodejs-qa-training.herokuapp.com/users/1000/albums\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioGetConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar un status code totalmente diferente a \u0027200\u0027 de la operacion del \"proceso de Consulta albumes comprados\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarUnStatusCodeTotalmenteDiferenteADeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "passed"
});
});