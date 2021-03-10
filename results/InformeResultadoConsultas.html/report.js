$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feactures/ComprarAlbum.feature");
formatter.feature({
  "name": "Validar la consultas de la lista de usuarios naiofy",
  "description": "  Yo como analista de calidad  del sistema naiofy \n  Deseo validar la funcionalidad de consultas de Compra de albumes,",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@ComprarAlbum"
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
  "name": "verifica la respuesta del servicio de compra de album",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@ComprarAlbum"
    },
    {
      "name": "@ComprarAlbum"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/albums/101\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027201\u0027 de la operacion del \"proceso de compra de album.\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c401\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat Naiofy.com.co.stepdefinition.ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(ConsumoServicioStepDefinitions.java:47)\r\n\tat ✽.debera retornar el status code \u0027201\u0027 de la operacion del \"proceso de compra de album.\"(src/test/resources/feactures/ComprarAlbum.feature:17)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "se consume el servicio Get con url \"https://nodejs-qa-training.herokuapp.com/users/147/albums\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioGetConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"proceso de Consulta albumes comprados\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "debe retornar una respuesta",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarUnaRespuesta()"
});
formatter.result({
  "status": "skipped"
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
  "name": "verifica la respuesta del servicio de compra  para validar que no se permita la compra de un album que ya fue comprado",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@ComprarAlbum"
    },
    {
      "name": "@ComprarAlbumqueAnteriormenteComprado"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/albums/9\" y endpoind \"./templates/Vacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027401\u0027 de la operacion del \"Compra de album\"",
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