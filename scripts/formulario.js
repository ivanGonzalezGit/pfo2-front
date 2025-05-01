
export function borrarContenidoParrafo(id)
{
    let parrafo = document.getElementById(id);
    parrafo.innerHTML = "";
}

export function respuestaErrorString(id, campo, tipo)
{
    let parrafo = document.getElementById(id);

    if(!validarString(campo))
    {
        parrafo.innerHTML= `El ${tipo} ingresado es inválido`;
    }
}

function validarString(texto)
{
    let campoUsuario = texto.toLowerCase().trim();
    let arrCampoUsuario = Array.from(campoUsuario);
    if(campoUsuario==="") return false;
    return arrCampoUsuario.every((letra)=>(letra>='a' && letra<='z'));
}

export function respuestaErrorTelefono(id, textoTelefono, tipo)
{
    let parrafo = document.getElementById(id);

    if(!validarTelefono(textoTelefono))
    {
        parrafo.innerHTML= `El ${tipo} ingresado es inválido`;
    }
}

export function validarTelefono(textoNumero)
{
    let campoUsuario = textoNumero;
    let arrCampoUsuario = Array.from(campoUsuario);
    if(arrCampoUsuario.length!=10) return false;
    return arrCampoUsuario.every((digito)=>(digito>='0' && digito<='9'));
}

export function respuestaErrorMail(id, textoMail, tipo)
{
    let parrafo = document.getElementById(id);
    if(!validarMail(textoMail))
    {
        parrafo.innerHTML= `El ${tipo} ingresado es inválido`;
    }
}

export function validarMail(campo)
{
    return campo.includes('@') && campo.endsWith(".com");
}

export function enviarFormulario(e)
{
    let datoNombre = document.getElementById("nombre");
    let datoApellido = document.getElementById("apellido");
    let datoTelefono = document.getElementById("telefono");
    let datoMail = document.getElementById("mail");

    if(!(validarString(datoNombre.value)&&
        validarString(datoApellido.value)
        &&validarTelefono(datoTelefono.value)&&
        validarMail(datoMail.value)))
    {
        e.preventDefault();
        alert ("datos inválidos");
    }
}