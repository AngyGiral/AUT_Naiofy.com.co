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
  "name": "verifica la respuesta del servicio de autentificacion para un usuario regular",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loguinExitosoUsuarioRegular"
    }
  ]
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
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin\"",
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
  "name": "verifica la respuesta del servicio de autentificacion para un usuario administrador",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loguinExitosoUsuarioAdministrador"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinExitosoUserAdmin.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027200\u0027 de la operacion del \"loguin\"",
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
  "name": "debera retornar el status code \u0027422\u0027 de la operacion del \"loguin\"",
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
formatter.scenario({
  "name": "verifica la respuesta del servicio de autentificacion con usuario correcto y contrasena erronea",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loguinEmailCorrectoContrasenaErronea"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinPassworIncorrecto.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027422\u0027 de la operacion del \"loguin\"",
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
formatter.step({
  "name": "debe retornar el formato de respuesta correcto para errores",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElFormatoDeRespuestaCorrectoParaErrores()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 2 expectations failed.\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"origin\"\n  Actual: {\"errors\":[{\"code\":\"validation_error\",\"message\":\"Password format invalid\"}],\"timestamp\":\"2021-03-10T18:39:17.108Z\"}\n\nResponse body doesn\u0027t match expectation.\nExpected: a string containing \"stack_trace\"\n  Actual: {\"errors\":[{\"code\":\"validation_error\",\"message\":\"Password format invalid\"}],\"timestamp\":\"2021-03-10T18:39:17.108Z\"}\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.body(ResponseSpecificationImpl.groovy:98)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.body(ValidatableResponseOptionsImpl.java:238)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$body(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy:293)\r\n\tat io.restassured.internal.ValidatableResponseImpl.body(ValidatableResponseImpl.groovy)\r\n\tat Naiofy.com.co.stepdefinition.ConsumoServicioStepDefinitions.debeRetornarElFormatoDeRespuestaCorrectoParaErrores(ConsumoServicioStepDefinitions.java:81)\r\n\tat ✽.debe retornar el formato de respuesta correcto para errores(src/test/resources/feactures/Login.feature:34)\r\n",
  "status": "failed"
});
formatter.scenario({
  "name": "verifica la respuesta del servicio de autentificacion cuando se las credenciales estan vacias",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loguinCredencialesVacias"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinVacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027400\u0027 de la operacion del \"loguin\"",
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
formatter.scenario({
  "name": "verifica la respuesta del servicio de autentificacion cuando el email esta vacio y el pasword diligenciado",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@login"
    },
    {
      "name": "@loguinEmailVacioPasswordDiligenciado"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/sessions\" y endpoind \"./templates/PostLoguinEmailVacioPassOk.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027400\u0027 de la operacion del \"loguin\"",
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