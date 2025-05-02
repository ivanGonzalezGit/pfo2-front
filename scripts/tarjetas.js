
export let contPersonal = document.getElementById("tarjetas");
export let contPelis = document.getElementById('cont-pelis');
export let contSeries = document.getElementById('cont-series');

export let tarjetasPersonales = [
    {
        foto : "img/quimica.jpeg",
        nombre : "Química",
        descripcion : "Soy un apasionado de las ciencias duras, entre ellas la matemática, química y física."
    },
    {
        foto : "img/lenguajeC.jpeg",
        nombre : "Programación",
        descripcion : "Desde finales de los '80, lenguajes como Basic 2.0 y Logo despertaron mi curiosidad por la programación"
    },
    {
        foto : "img/poli.jpeg",
        nombre : "Investigación Criminal",
        descripcion : "Investigar significa seguir la huella. Es un hilo conductor transversal a todas las actividades que me interesan."
    }
];

export let peliculas = [
    {
        foto : "img/matrix.jpg",
        nombre : "Matrix",
        descripcion : "Una metáfora del sometimiento que ejerce el sistema sobre la gente común. Spoiler: Neo es un programa"
    },
    {
        foto : "img/hannibal.jpg",
        nombre : "Hannibal",
        descripcion : "Un psicópata que ayuda en la investigación criminal haciendo perfiles psicológicos. Basada en libros de perfilamiento criminal del FBI"
    },
    {
        foto : "img/eterno.jpg",
        nombre : "Eterno Resplandor",
        descripcion : "Una pareja que a pesar de borrarse la memoria siempre se van a volver a encontrar."
    }
];

export let series = [
    {
        foto : "img/mr_robot.jpeg",
        nombre : "Mr. Robot",
        descripcion : "Un programador con multiples personalidades combate el mal muñido de un teclado"
    },
    {
        foto : "img/dark.jpeg",
        nombre : "Dark",
        descripcion : "Un pueblo entero obligado a existir dento de un ciclo eterno de tiempo y espacio."
    },
    {
        foto : "img/devils.jpeg",
        nombre : "Devils",
        descripcion : "Una óptica sobre como los bancos generan crisis en los paises para aumentar sus ganancias"
    }
];

export function colocarTarjetaEnContenedor(contTarjeta, objeto)
{
    for(let i=0;i<objeto.length;i++)
    {
        let tarjeta = document.createElement('div');
        tarjeta.className="tarjeta";
        tarjeta.innerHTML= `<img src="${objeto[i].foto}" alt="${objeto[i].nombre}" class="fotos">
        <div class="parrafo-tarjeta">
            <h2>${objeto[i].nombre}</h2>
            <p>${objeto[i].descripcion}</p>
        </div>`;

        contTarjeta.appendChild(tarjeta); 

        tarjeta.addEventListener("mouseover", cambiarColor, false);
        tarjeta.addEventListener("mouseout", devolverColor);
        tarjeta.addEventListener("click", mostrarClick);

    }
}

function cambiarColor(event)
{//uso currentTarget para que los cambios hagan referencia al div entero y no a cada uno de los elementos hijos
    let tarjeta = event.currentTarget;
    tarjeta.className = "tarjeta tarjetaOscura";
}

function devolverColor(event)
{
    let tarjeta = event.currentTarget;
    tarjeta.className = "tarjeta tarjetaClara";
}

function mostrarClick(event)
{
    let tarjeta = event.currentTarget;
    alert("hiciste click");
}