$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feactures/Login.feature");
formatter.feature({
  "name": "Validar loguin naiofy",
  "description": "  Yo como analista de calidad  del sistema naiofy \n  Deseo validar la funcionalidad de logueo en el servicio post \n  Para optener la autorizacion para consultar informacion",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@login"
    }
  ]
});
formatter.scenario({
  "name": "verifica la respuesta del servicio de autentificacion para un usuario con credenciales no existentes",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loguinUsuarioNoExistenteContrasenaErronea"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinNoExiste.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar un status code totalmente diferente a \u0027200\u0027 de la operacion del \"loguin\"",
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