import { respuestaErrorString, 
        respuestaErrorTelefono, 
        respuestaErrorMail,
        borrarContenidoParrafo, 
        enviarFormulario} from "./formulario.js";
import {  colocarTarjetaEnContenedor, tarjetasPersonales, peliculas, series, contPersonal, contPelis, contSeries } from "./tarjetas.js";
import { cerrarMenuVertical } from "./cerrarMenuVertical.js";

let botonCerrar = document.getElementById("botonCerrar");
botonCerrar.addEventListener("click", cerrarMenuVertical);

/* ERROR
formNombre.addEventListener("blur", respuestaErrorString(formNombre.value));//blur se dispara solo en el elemento que pierde el foco, focusout se dispara en el contenedor también
El problema sigue siendo el mismo: estás ejecutando la función inmediatamente al pasarla al addEventListener
*/

let formNombre = document.getElementById("nombre");
formNombre.addEventListener("focus", () => {borrarContenidoParrafo("error0")});
formNombre.addEventListener("blur", () => {respuestaErrorString("error0", formNombre.value, "nombre")}); //en addEvent listener se pasa una anónima o una flecha con una referencia a la funcion, no la función directa

let formApellido = document.getElementById("apellido");
formApellido.addEventListener("focus", () => {borrarContenidoParrafo("error1")});
formApellido.addEventListener("blur", () => {respuestaErrorString("error1", formApellido.value,"apellido")});

let formTelefono = document.getElementById("telefono");
formTelefono.addEventListener("focus", () => {borrarContenidoParrafo("error2")});
formTelefono.addEventListener("blur", () => {respuestaErrorTelefono("error2", formTelefono.value, "teléfono")});

let formMail = document.getElementById("mail");
formMail.addEventListener("focus", () => {borrarContenidoParrafo("error3")});
formMail.addEventListener("blur", () => {respuestaErrorMail("error3", formMail.value, "mail")});


let botonReset = document.getElementById("reset");
botonReset.addEventListener("click", () => {for (let i=0; i<4; i++) borrarContenidoParrafo(`error${i}`)});

let botonEnviar = document.getElementById("submit");
botonEnviar.addEventListener("click", (e)=>{enviarFormulario(e)});


window.addEventListener("load", colocarTarjetaEnContenedor(contPersonal, tarjetasPersonales));
window.addEventListener("load", colocarTarjetaEnContenedor(contPelis, peliculas));
window.addEventListener("load", colocarTarjetaEnContenedor(contSeries, series));