# Métodos de las peticiones HTTP

HTTP define un conjunto de métodos de petición para indicar la acción que se desea realizar para un recurso determinado. Aunque estos también pueden ser sustantivos, estos métodos de solicitud a veces son llamados HTTP verbs. Cada uno de ellos implementan una semántica diferente, pero algunas características similares son compartidas por un grupo de ellos: ej. un request method puede ser safe, idempotent (en-US), o cacheable.

## Metodos HTTP

| Metodo | Descripcion |
|---|---|
| GET | El método **GET** solicita una representación de un recurso específico. Las peticiones que usan el método **GET** sólo deben recuperar datos. |
| HEAD | El método **HEAD** pide una respuesta idéntica a la de una petición GET, pero sin el cuerpo de la respuesta. |
| POST | El método **POST** se utiliza para enviar una entidad a un recurso en específico, causando a menudo un cambio en el estado o efectos secundarios en el servidor. |
| PUT | El modo **PUT** reemplaza todas las representaciones actuales del recurso de destino con la carga útil de la petición. |
| DELETE | El método **DELETE** borra un recurso en específico. |
| CONNECT | El método **CONNECT** establece un túnel hacia el servidor identificado por el recurso. |
| OPTIONS | El método **OPTIONS** es utilizado para describir las opciones de comunicación para el recurso de destino. |
| TRACE | El método **TRACE** realiza una prueba de bucle de retorno de mensaje a lo largo de la ruta al recurso de destino. |
| PATCH | El método **PATCH** es utilizado para aplicar modificaciones parciales a un recurso. |

## ¿Qué son los códigos de estado HTTP?
Cada vez que se hace clic en un enlace o se escribe una URL, el navegador envía una petición al servidor web del sitio al que se esta intentando acceder. El servidor recibe y procesa la solicitud, y luego devuelve los recursos relevantes junto con un encabezado HTTP.

Los códigos de estado HTTP se dividen en 5 «tipos». Se trata de agrupaciones de respuestas que tienen significados similares o relacionados. Saber qué son puede ayudarte a determinar rápidamente la sustancia general de un código de estado antes de que vayas a buscar su significado específico.

Las cinco clases incluyen:

- 100s: Códigos informativos que indican que la solicitud iniciada por el navegador continúa.
- 200s: Los códigos con éxito regresaron cuando la solicitud del navegador fue recibida, entendida y procesada por el servidor.
- 300s: Códigos de redireccionamiento devueltos cuando un nuevo recurso ha sido sustituido por el recurso solicitado.
- 400s: Códigos de error del cliente que indican que hubo un problema con la solicitud.
- 500s: Códigos de error del servidor que indican que la solicitud fue aceptada, pero que un error en el servidor impidió que se cumpliera.

Dentro de cada una de estas tipos, existe una variedad de códigos de servidor y pueden ser devueltos por el servidor. Cada código individual tiene un significado específico y único, que cubriremos en la lista más detallada a continuación.