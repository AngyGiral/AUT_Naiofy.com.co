$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/feactures/Registro.feature");
formatter.feature({
  "name": "Validar el registro de usuarios en el sistema naiofy",
  "description": "  Yo como analista de calidad  del sistema naiofy \n  Deseo validar la funcionalidad del servicio post de registro",
  "keyword": "Característica",
  "tags": [
    {
      "name": "@Registro"
    }
  ]
});
formatter.scenario({
  "name": "Registrar un usuario regular de forma exitosa con email de dominio \"@wolox.com.ar\"",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroExitosoUsuarioRegular"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/\" y endpoind \"./templates/PostRegistroExitoso.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar el status code \u0027201\u0027 de la operacion del \"Registo\"",
  "keyword": "Entonces "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(int,String)"
});
formatter.result({
  "error_message": "java.lang.AssertionError: 1 expectation failed.\nExpected status code \u003c201\u003e but was \u003c422\u003e.\n\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(Unknown Source)\r\n\tat java.lang.reflect.Constructor.newInstance(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.invoke(CachedConstructor.java:72)\r\n\tat org.codehaus.groovy.reflection.CachedConstructor.doConstructorInvoke(CachedConstructor.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.ConstructorSite$ConstructorSiteNoUnwrap.callConstructor(ConstructorSite.java:84)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallConstructor(CallSiteArray.java:59)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:263)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callConstructor(AbstractCallSite.java:277)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure.validate(ResponseSpecificationImpl.groovy:493)\r\n\tat io.restassured.internal.ResponseSpecificationImpl$HamcrestAssertionClosure$validate$1.call(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCall(CallSiteArray.java:47)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:125)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.call(AbstractCallSite.java:139)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.validateResponseIfRequired(ResponseSpecificationImpl.groovy:674)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.PlainObjectMetaMethodSite.doInvoke(PlainObjectMetaMethodSite.java:43)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite$PogoCachedMethodSiteNoUnwrapNoCoerce.invoke(PogoMetaMethodSite.java:193)\r\n\tat org.codehaus.groovy.runtime.callsite.PogoMetaMethodSite.callCurrent(PogoMetaMethodSite.java:61)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:126)\r\n\tat io.restassured.specification.ResponseSpecification$statusCode$0.callCurrent(Unknown Source)\r\n\tat org.codehaus.groovy.runtime.callsite.CallSiteArray.defaultCallCurrent(CallSiteArray.java:51)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:171)\r\n\tat org.codehaus.groovy.runtime.callsite.AbstractCallSite.callCurrent(AbstractCallSite.java:185)\r\n\tat io.restassured.internal.ResponseSpecificationImpl.statusCode(ResponseSpecificationImpl.groovy:134)\r\n\tat io.restassured.internal.ValidatableResponseOptionsImpl.statusCode(ValidatableResponseOptionsImpl.java:89)\r\n\tat io.restassured.internal.ValidatableResponseImpl.super$2$statusCode(ValidatableResponseImpl.groovy)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat sun.reflect.NativeMethodAccessorImpl.invoke(Unknown Source)\r\n\tat sun.reflect.DelegatingMethodAccessorImpl.invoke(Unknown Source)\r\n\tat java.lang.reflect.Method.invoke(Unknown Source)\r\n\tat org.codehaus.groovy.reflection.CachedMethod.invoke(CachedMethod.java:107)\r\n\tat groovy.lang.MetaMethod.doMethodInvoke(MetaMethod.java:323)\r\n\tat groovy.lang.MetaClassImpl.invokeMethod(MetaClassImpl.java:1268)\r\n\tat org.codehaus.groovy.runtime.ScriptBytecodeAdapter.invokeMethodOnSuperN(ScriptBytecodeAdapter.java:144)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy:142)\r\n\tat io.restassured.internal.ValidatableResponseImpl.statusCode(ValidatableResponseImpl.groovy)\r\n\tat Naiofy.com.co.stepdefinition.ConsumoServicioStepDefinitions.deberaRetornarElStatusCodeDeLaOperacionDel(ConsumoServicioStepDefinitions.java:47)\r\n\tat ✽.debera retornar el status code \u0027201\u0027 de la operacion del \"Registo\"(src/test/resources/feactures/Registro.feature:11)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "debe retornar el body de respuesta con el formato correcto",
  "keyword": "Y "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.debeRetornarElBodyDeRespuestaConElFormatoCorrecto()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Registrar un usuario que ya esta registrado",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroUsuarioExistente"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users/\" y endpoind \"./templates/PostRegistroExistente.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar un status code totalmente diferente a \u0027201\u0027 de la operacion del \"Registo\"",
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
formatter.scenario({
  "name": "Registrar un usuario regular  con formatos de datos incorrectos, email de dominio diferente a \"@wolox.com.ar\", password menor  8 caracteres y firsname y lastname con numeros",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroIncorrectoUsuarioRegular"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users\" y endpoind \"./templates/PostRegistroIncorrecto.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar un status code totalmente diferente a \u0027201\u0027 de la operacion del \"Registo\"",
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
formatter.scenario({
  "name": "Registrar un usuario regular con datos vacios",
  "description": "",
  "keyword": "Escenario",
  "tags": [
    {
      "name": "@Registro"
    },
    {
      "name": "@RegistroUsuarioDatosVacios"
    }
  ]
});
formatter.step({
  "name": "se consume el servicio Post con url \"https://nodejs-qa-training.herokuapp.com/users\" y endpoind \"./templates/PostRegistroVacio.json\"",
  "keyword": "Cuando "
});
formatter.match({
  "location": "ConsumoServicioStepDefinitions.seConsumeElServicioPostConUrlYEndpoind(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "debera retornar un status code totalmente diferente a \u0027201\u0027 de la operacion del \"Registo\"",
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