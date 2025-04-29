
import {  colocarTarjetaEnContenedor, tarjetasPersonales, peliculas, series, contPersonal, contPelis, contSeries } from "./tarjetas.js";
import { cerrarMenuVertical } from "./cerrarMenuVertical.js";

let botonCerrar = document.getElementById("botonCerrar");
botonCerrar.addEventListener("click", cerrarMenuVertical);

window.addEventListener("load", colocarTarjetaEnContenedor(contPersonal, tarjetasPersonales));
window.addEventListener("load", colocarTarjetaEnContenedor(contPelis, peliculas));
window.addEventListener("load", colocarTarjetaEnContenedor(contSeries, series));