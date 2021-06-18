//genericos es una fomra de meter parametros con definiciones de tipos

interface Respuesta<Mensaje, Extra>{
    type:string,
    success: boolean,
    message: Mensaje,
    whatever: Extra
}
//T puede ser booblean, string pero debes dar de que tipo sera

let payload: Respuesta<string, number> = {
    type: 'post',
    success: true,
    message: 'sadasdasd',
    whatever: 5
}
//indicamos que el generico debe ser de tpo string

let payload2: Respuesta<boolean, string> = {
    type: 'post',
    success: true,
    message: true,
    whatever: "cualquiercosa"
}//los genericos buscan influenciar los tipos internos de una clases,interfaces, funciones

//en los genericos siempre usan letras a diferencia de otros lenguajes pueden tener mas letras