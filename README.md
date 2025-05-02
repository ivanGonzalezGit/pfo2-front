
CSS

1- Se arregló el comportamiento responsive del nav, cambiándole el eje principal del flexbox para que lo muestre en vertical al pasar a pantalla de celular.

2- Se cambiaron las medidas expresadas en px con las que se establecieron las dimensiones de los elementos de la página por medidas relativas rem, para poder disminuir el tamaño de los elementos al pasar a una pantalla chica, manteniendo la relación de los objetos y cambiando solo el valor del tamaño de la letra de la pseudoclase :root.

3- Se agregó un transform que agranda la tarjeta un 5% con un retardo de 0.3 segundos, para dar un efecto de movimiento.

4- Se cambió la tabla por una grilla de estructura Grid.


JS

1- Se agregaron las tarjetas dinámicamente. Se eligió esta modalidad para simplificar el código HTML evitando repeticiones de una misma estructura. 

    En primer lugar se generaron objetos JS con los datos correspondientes a cada tarjeta: el nombre, la ubicación de la foto y el contenido del párrafo de descripción.

    Para generar las tarjetas, se tomó una de las estructuras de html con las que se estableció la forma de las mismas y se creó en JS un nuevo elemento HTML mediante createElement() copiando esta forma.

    Se capturó el contenedor de tarjetas y se le agregó mediante el método appendChild las tarjetas creadas en el párrafo anterior.

    Para individualizar cada tarjeta, se le pasó a cada una los datos guardados en los objetos del primer punto, mediante la sintaxis `${objeto.valor}` que permite ingresar dinámicamente valores de propiedades de un objeto a una estructura html. Este procedimiento se repitió hasta completar todas las tarjetas, mediante un bucle.

2- Se cambiaron los estilos de las tarjetas cambiando las clases. Esto se hizo para poder arreglar el comportamiento anterior realizado con la pseudoclase :hover, que cuando pasaba el mouse por encima cambiaba los colores de las tarjetas de a partes, según el elemento que señalaba el mouse. Para que JS interprete al elemento tarjeta tomando como referencia al div padre, se tuvo que tomar al objeto Element con la siguiente línea de código: let tarjeta = event.currentTarget;

3- Se agregó un botón cerrarMenu para sacar el menú vertical de la página. Mediante javascript se agregó un evento de escucha de click al elemento cerrarMenú y la funcionalidad que se le dio fue la de cambiar la propiedad display del contenedor al valor 'none'.

4- Se generaron las comprobaciones de los campos del formulario mediante JS. Esto se logró tomando el valor de los campos del formulario, asignándole esos valores a variables y pasando estas variables como argumentos de las funciones de filtro. otra función evalúa si todos los filtros son verdaderos, permite el evento submit, pero si por lo menos una validación es falsa, elimina el comportamiento del botón submit, para que no envíe los datos.

5- Se agregó un pop-up de envío de formulario.

nota:
Se agregó la carpeta script con los archivos .js importados. Para que funcione en la etiqueta script del archivo index.html hay que agregar el atributo type="module".