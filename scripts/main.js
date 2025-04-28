
import {  colocarTarjetaEnContenedor, tarjetasPersonales, peliculas, series, contPersonal, contPelis, contSeries } from "./tarjetas.js";

window.addEventListener("load", colocarTarjetaEnContenedor(contPersonal, tarjetasPersonales));
window.addEventListener("load", colocarTarjetaEnContenedor(contPelis, peliculas));
window.addEventListener("load", colocarTarjetaEnContenedor(contSeries, series));