package Naiofy.com.co.models;

public class Autorizacion {
	
	public String Token;
	public int StatusCode;

	public String getToken() {
		return Token;
	}

	public void setToken(String token) {
		this.Token = token;
	}

	public int getStatusCode() {
		return StatusCode;
	}

	public void setStatusCode(int statusCode) {
		this.StatusCode = statusCode;
	}

}
