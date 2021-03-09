package Naiofy.com.co.stepdefinition;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.notNullValue;

import java.io.File;
import java.util.Arrays;
import java.util.List;

import Naiofy.com.co.models.Autorizacion;
import cucumber.api.java.ast.Cuando;
import cucumber.api.java.es.Entonces;
import io.restassured.http.ContentType;
import io.restassured.http.Headers;
import io.restassured.response.Response;


public class ConsumoServicioStepDefinitions {
	public Response  Respuesta;	
	Autorizacion autorizacion = new Autorizacion();
	int statusCode;


	@Cuando("^se consume el servicio Post con url \"([^\"]*)\" y endpoind \"([^\"]*)\"$")
	public void seConsumeElServicioPostConUrlYEndpoind(String url, String enpoind) {
		Respuesta=  given().body(new  File(enpoind)).contentType(ContentType.JSON).
				post(url);
	}
	
	@Cuando("^se consume el servicio Get con url \"([^\"]*)\" y endpoind \"([^\"]*)\"$")
	public void seConsumeElServicioGetConUrlYEndpoind(String url, String enpoind) {
		Respuesta=given().body(new  File(enpoind)).contentType(ContentType.JSON).header("Authorization",autorizacion.getToken()).get(url);
	}
	
	@Entonces("^debera encontrar en el header el token de autorizacion$")
	public void deberaEncontrarEnElHeaderElTokenDeAutorizacion() {
		Headers headers=Respuesta.getHeaders();
		String TokenAuthorization = headers.get("Authorization").toString();
		List<String> lTokenAuthorization= Arrays.asList(TokenAuthorization.split("="));
		autorizacion.setToken(lTokenAuthorization.get(1));
		System.out.println("El token de autorizacion es :  "+ autorizacion.getToken());
	}

	@Entonces("^debera retornar el status code '(\\d+)' de la operacion del \"([^\"]*)\"$")
	public void deberaRetornarElStatusCodeDeLaOperacionDel(int StatusCodigoEsperado, String operacion) {
		Respuesta.then().statusCode(StatusCodigoEsperado);
		statusCode=Respuesta.statusCode();
		autorizacion.setStatusCode(statusCode);
		System.out.println("La operacion : "+operacion +" retorno el status code : "+ autorizacion.getStatusCode() );
	}
	
	@Entonces("^debera retornar un status code totalmente diferente a '(\\d+)' de la operacion del \"([^\"]*)\"$")
	public void deberaRetornarUnStatusCodeTotalmenteDiferenteADeLaOperacionDel(int StatusCodigoEsperado, String operacion) {
		statusCode=Respuesta.statusCode();
		autorizacion.setStatusCode(statusCode);
		System.out.println("La operacion : "+operacion +" retorno el status code : "+ autorizacion.getStatusCode() );
	}
	
	@Entonces("^debe retornar el body de respuesta con el formato correcto$")
	public void debeRetornarElBodyDeRespuestaConElFormatoCorrecto() {
		String repJoson=Respuesta.asString();
		System.out.println("este es el Json de respuesta : " +repJoson);
	}

	
	@Entonces("^el endpoint de respuesta debe devolver  el user_id$")
	public void elEndpointDeRespuestaDebeDevolverElUser_id() {
		Respuesta.then().body("user_id",is(notNullValue()));
	}
		
	@Entonces("^debera retornar el mensaje \"([^\"]*)\"$")
	public void deberaRetornarElMensaje(String mensaje) {
		Respuesta.then().body("message",is(mensaje));
	}

}
