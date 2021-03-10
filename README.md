# AUT_Naiofy.com.co
Se realiza la automatización de pruebas para los servicios de la empresa Naiofy, se desea validar y verificar el correcto funcionamiento de las funciones:

o	Registro
o	Login .
o	Listado de usuarios .
o	Listado de álbumes .
o	Listado de fotos de un álbum .
o	Listado de álbumes comprados .
o	Comprar álbum .
o	Invalidar sesiones

Con este proyecto se desea realizar una automatización, con el objetivo de mejorar los tiempos de certificación de los servicios. 
para entendimiento en los reportes se utiliza BDD, Cucumber y serenity con el gestor de dependencias Maven, el consumo de los servicios se realizan con rest assured.
Pre-requisitos 
Para la ejecución de este proyecto debemos tener presente que debemos tener instalado el JDK de java y las variables de entorno, las cuales son:
1.	JAVA_HOME: Descarga el JDK de Java y adjuntamos la ruta en donde se encuentra la carpeta, en mi caso la tengo en C:\Program Files (x86)\Java\jdk1.8.0_251
2.	Configurar en las variable de entorno en el path, en el cual se debe agregar el apache-maven se adjunta la ruta en donde se encuentre la carpeta, en mi caso la tengo en D:\Maven oficial\apache-maven-3.6.3-bin\apache-maven-3.6.3\bin

Ejecutando las pruebas 
Para la ejecución del proyecto debe tener presente que la variable de entornos se encuentre bien configuradas, adicional debe tener las dependencias descargadas que se encuentra en el archivo POM.
La pruebas se pueden ejecutar por medio de las clases:

•	RegistroRuner
•	LoguinRuner
•	ConsultasListasRunner
•	ComprarAlbumRunner
•	RegresionRuner

 Los cuales estan ubicados en src/test/java/Naiofy/com/co/runners
Para observar las evidencias de las pruebas debemos ejecutar las pruebas y luego ingresar a la ruta target\site\serenity, allí  buscamos el primer archivo HTML que encontramos en la carpeta.
Adicional al reporte de serenity también genera un informe más simple en la carpeta results.
En la carpeta results una vez ejecutada la prueba automáticamente genera una carpeta correspondiente a un informe de resultados por Runner ejecutado el cual tiene un archivo index.htm, en este informe se encuentran los escenarios ejecutados y quedan marcados en color verde los pasos de las pruebas que fueron exitosos.
Los pasos que resultaron fallidos son marcados pintado de rojo.

Los endpoints de entrada que utilizan las automatizaciones para las pruebas estan ubicados en la carpeta /templates

Adicionalmete: hay una carpeta con colecciones de postman creadas inicialmente para para probar los servicios de forma manual y el correcto entendimiento de la funcionalidad. Estan ubicadas en la carpeta colecciones-TestManuales 

