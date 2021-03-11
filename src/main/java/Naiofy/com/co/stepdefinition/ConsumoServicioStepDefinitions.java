package Naiofy.com.co.stepdefinition;

import static io.restassured.RestAssured.given;
import static org.hamcrest.Matchers.is;
import static org.hamcrest.Matchers.*;
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

	@Entonces("^debe retornar el una respuesta$")
	public void debeRetornarElUnaRespuesta() {
		String repJoson=Respuesta.asString();
		System.out.println("este es el Json de respuesta : " +repJoson);
	}
	
	@Entonces("^debe retornar una respuesta$")
	public void debeRetornarUnaRespuesta() {
		String repJoson=Respuesta.asString();
		System.out.println("este es el Json de respuesta : " +repJoson);
	}

	@Entonces("^el endpoint de respuesta debe devolver \"([^\"]*)\" y no debe ser null$")
	public void elEndpointDeRespuestaDebeDevolverYNoDebeSerNull(String parametro) {
		Respuesta.then().body(parametro,is(notNullValue()));
	}

	@Entonces("^cada uno de los usuarios retornados deben tener el formato especificado$")
	public void cadaUnoDeLosUsuariosRetornadosDebenTenerElFormatoEspecificado() {
		Respuesta.then().body(containsString("first_name"),containsString("last_name"),containsString("email"),
				containsString("role"),containsString("count"),containsString("limit"),containsString("offset"),
				containsString("total_pages"),containsString("total_count"),containsString("previous_page"),containsString("current_page"),
				containsString("next_page"),containsString("previous_page_link"),containsString("current_page_link"),containsString("next_page_link"),
				containsString("first_page_link"),containsString("last_page_link"),containsString("n_page_link"));
	}
	
	@Entonces("^debe retornar una respuesta con el Json en formato correcto para la consulta de Albumes$")
	public void debeRetornarUnaRespuestaConElJsonEnFormatoCorrectoParaLaConsultaDeAlbumes() {
		Respuesta.then().body(containsString("user_id"),containsString("id"),containsString("title"));
	}

	@Entonces("^debe retornar una respuesta con formato correcto para la consulta de photos$")
	public void debeRetornarUnaRespuestaConFormatoCorrectoParaLaConsultaDePhotos() {
		Respuesta.then().body(containsString("album_id"),containsString("id"),containsString("title"),containsString("url"),containsString("thumbnail_url"));
	}
	
	@Entonces("^debe retornar el formato de respuesta correcto para errores$")
	public void debeRetornarElFormatoDeRespuestaCorrectoParaErrores() {
		Respuesta.then().body(containsString("errors"),containsString("code"),containsString("message"),
				containsString("origin"),containsString("stack_trace"),containsString("timestamp")).and().body("message",is(notNullValue()));;
	}
	
	@Entonces("^debera retornar el mensaje  \"([^\"]*)\"$")
	public void deberaRetornarElMensaje(String mensaje) {
		Respuesta.then().body("errors.message",containsString(mensaje));
	}
	
	@Entonces("^debe retornar un Json de respuesta con el formato correcto por compras de album$")
	public void debeRetornarUnJsonDeRespuestaConElFormatoCorrectoPorComprasDeAlbum() {
		Respuesta.then().body(containsString("user_id"),containsString("album"),containsString("title"),containsString("created_at"));
	}
}
