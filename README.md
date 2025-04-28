CSS
1- Se arregló el comportamiento responsive del nav, cambiándole el eje principal del flexbox para que lo muestre en vertical.

2- Se agregó un transform que agranda la tarjeta un 5% con un retardo de 0.3 segundos

JS
1- Se agregaron las tarjetas dinámicamente. Se eligió esta modalidad para simplificar el código HTML evitando repeticiones de una misma estructura.

2- Se cambiaron los estilos de las tarjetas cambiando las clases. Esto se hizo para poder arreglar el comportamiento anterior realizado con la pseudoclase :hover, que cuando pasaba el mouse por encima cambiaba los colores de las tarjetas de a partes, según el elemento que señalaba el mouse. Para que JS interprete al elemento tarjeta tomando como referencia al div padre, se tuvo que tomar al objeto Element con la siguiente línea de código: let tarjeta = event.currentTarget;


Agregar boton ver trailer que dispare un div que tenga el video como background y un encabezado con el nombre de la pelicula y un boton para cerrar el trailer y los botones de control de video.

Se agregó la carpeta script con los archivos .js importados. Para que funcione en la etiqueta script del archivo index.html hay que agregar el atributo type="module".