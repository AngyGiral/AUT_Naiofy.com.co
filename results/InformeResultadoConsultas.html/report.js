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
  "name": "el endpoint de respuesta debe devolver \"user_id\" y no debe ser null",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String)"
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
  "name": "debe retornar una respuesta",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarUnaRespuesta()"
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
  "name": "el endpoint de respuesta debe devolver \"user_id\" y no debe ser null",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String)"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verifica la respuesta del servicio de consulta para conocer el formato del listado de usuarios",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Consultas"
    },
    {
      "name": "@ConsultaListaUsuariosValidarFormato"
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
  "name": "cada uno de los usuarios retornados deben tener el formato especificado",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.cadaUnoDeLosUsuariosRetornadosDebenTenerElFormatoEspecificado()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 6 expectations failed.\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"previous_page_link\"\n  Actual: {\"total_count\":126,\"count\":10,\"total_pages\":13,\"limit\":10,\"offset\":0,\"current_page\":1,\"page\":[{\"first_name\":\"Hernan\",\"last_name\":\"Garcia98\",\"email\":\"hernan003@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"hernan000@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h6@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"regular\",\"last_name\":\"regular\",\"email\":\"regular@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Jose Antonio\",\"last_name\":\"Bermudez\",\"email\":\"jose.beruda@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"email\":\"jperez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h7@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan01\",\"last_name\":\"Garcia\",\"email\":\"hernan0x2@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Per2ez\",\"email\":\"jperwez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Ju4an\",\"last_name\":\"Per2ez\",\"email\":\"jperwetz@wolox.com.ar\",\"role\":\"regular\"}],\"previous_page\":null,\"next_page\":2}\n\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"current_page_link\"\n  Actual: {\"total_count\":126,\"count\":10,\"total_pages\":13,\"limit\":10,\"offset\":0,\"current_page\":1,\"page\":[{\"first_name\":\"Hernan\",\"last_name\":\"Garcia98\",\"email\":\"hernan003@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"hernan000@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h6@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"regular\",\"last_name\":\"regular\",\"email\":\"regular@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Jose Antonio\",\"last_name\":\"Bermudez\",\"email\":\"jose.beruda@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"email\":\"jperez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h7@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan01\",\"last_name\":\"Garcia\",\"email\":\"hernan0x2@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Per2ez\",\"email\":\"jperwez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Ju4an\",\"last_name\":\"Per2ez\",\"email\":\"jperwetz@wolox.com.ar\",\"role\":\"regular\"}],\"previous_page\":null,\"next_page\":2}\n\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"next_page_link\"\n  Actual: {\"total_count\":126,\"count\":10,\"total_pages\":13,\"limit\":10,\"offset\":0,\"current_page\":1,\"page\":[{\"first_name\":\"Hernan\",\"last_name\":\"Garcia98\",\"email\":\"hernan003@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"hernan000@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h6@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"regular\",\"last_name\":\"regular\",\"email\":\"regular@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Jose Antonio\",\"last_name\":\"Bermudez\",\"email\":\"jose.beruda@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"email\":\"jperez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h7@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan01\",\"last_name\":\"Garcia\",\"email\":\"hernan0x2@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Per2ez\",\"email\":\"jperwez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Ju4an\",\"last_name\":\"Per2ez\",\"email\":\"jperwetz@wolox.com.ar\",\"role\":\"regular\"}],\"previous_page\":null,\"next_page\":2}\n\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"first_page_link\"\n  Actual: {\"total_count\":126,\"count\":10,\"total_pages\":13,\"limit\":10,\"offset\":0,\"current_page\":1,\"page\":[{\"first_name\":\"Hernan\",\"last_name\":\"Garcia98\",\"email\":\"hernan003@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"hernan000@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h6@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"regular\",\"last_name\":\"regular\",\"email\":\"regular@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Jose Antonio\",\"last_name\":\"Bermudez\",\"email\":\"jose.beruda@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"email\":\"jperez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h7@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan01\",\"last_name\":\"Garcia\",\"email\":\"hernan0x2@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Per2ez\",\"email\":\"jperwez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Ju4an\",\"last_name\":\"Per2ez\",\"email\":\"jperwetz@wolox.com.ar\",\"role\":\"regular\"}],\"previous_page\":null,\"next_page\":2}\n\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"last_page_link\"\n  Actual: {\"total_count\":126,\"count\":10,\"total_pages\":13,\"limit\":10,\"offset\":0,\"current_page\":1,\"page\":[{\"first_name\":\"Hernan\",\"last_name\":\"Garcia98\",\"email\":\"hernan003@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"hernan000@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h6@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"regular\",\"last_name\":\"regular\",\"email\":\"regular@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Jose Antonio\",\"last_name\":\"Bermudez\",\"email\":\"jose.beruda@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"email\":\"jperez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h7@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan01\",\"last_name\":\"Garcia\",\"email\":\"hernan0x2@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Per2ez\",\"email\":\"jperwez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Ju4an\",\"last_name\":\"Per2ez\",\"email\":\"jperwetz@wolox.com.ar\",\"role\":\"regular\"}],\"previous_page\":null,\"next_page\":2}\n\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"n_page_link\"\n  Actual: {\"total_count\":126,\"count\":10,\"total_pages\":13,\"limit\":10,\"offset\":0,\"current_page\":1,\"page\":[{\"first_name\":\"Hernan\",\"last_name\":\"Garcia98\",\"email\":\"hernan003@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"hernan000@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h6@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"regular\",\"last_name\":\"regular\",\"email\":\"regular@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Jose Antonio\",\"last_name\":\"Bermudez\",\"email\":\"jose.beruda@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Perez\",\"email\":\"jperez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan\",\"last_name\":\"Garcia\",\"email\":\"h7@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Hernan01\",\"last_name\":\"Garcia\",\"email\":\"hernan0x2@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Juan\",\"last_name\":\"Per2ez\",\"email\":\"jperwez@wolox.com.ar\",\"role\":\"regular\"},{\"first_name\":\"Ju4an\",\"last_name\":\"Per2ez\",\"email\":\"jperwetz@wolox.com.ar\",\"role\":\"regular\"}],\"previous_page\":null,\"next_page\":2}\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:98)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:238)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:293)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat Naiofy.com.co.stepdefinition.ConsumoServicioStepDefinitions.cadaUnoDeLosUsuariosRetornadosDebenTenerElFormatoEspecificado(ConsumoServicioStepDefinitions.java:69)\r\n\tat ✽.cada uno de los usuarios retornados deben tener el formato especificado(src/test/resources/feactures/ConsultaListas.feature:26)\r\n",
  "status": "failed"
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
  "name": "el endpoint de respuesta debe devolver \"user_id\" y no debe ser null",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String)"
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
  "name": "debe retornar una respuesta con el Json en formato correcto para la consulta de Albumes",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarUnaRespuestaConElJsonEnFormatoCorrectoParaLaConsultaDeAlbumes()"
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
  "name": "el endpoint de respuesta debe devolver \"user_id\" y no debe ser null",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String)"
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
  "name": "debe retornar una respuesta con formato correcto para la consulta de photos",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarUnaRespuestaConFormatoCorrectoParaLaConsultaDePhotos()"
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
  "name": "el endpoint de respuesta debe devolver \"user_id\" y no debe ser null",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String)"
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
  "name": "debe retornar una respuesta",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarUnaRespuesta()"
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
  "name": "el endpoint de respuesta debe devolver \"user_id\" y no debe ser null",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String)"
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
  "name": "debe retornar una respuesta",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarUnaRespuesta()"
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
  "name": "el endpoint de respuesta debe devolver \"user_id\" y no debe ser null",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String)"
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
  "name": "debera retornar el status code \u0027403\u0027 de la operacion del \"proceso de Consulta albumes comprados\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debe retornar una respuesta",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarUnaRespuesta()"
});
formatter.result({
  "status": "passed"
});
});