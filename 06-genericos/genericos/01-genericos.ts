//genericos es una fomra de meter parametros con definiciones de tipos

interface Respuesta<T>{
    type:string,
    success: boolean,
    message: T
}
//T puede ser booblean, string pero debes dar de que tipo sera

let payload: Respuesta<string> = {
    type: 'post',
    success: true,
    message: 'sadasdasd'  
}
//indicamos que el generico debe ser de tpo string

let payload2: Respuesta<boolean> = {
    type: 'post',
    success: true,
    message: true
}
//los genericos buscan influenciar los tipos internos de una clases,interfaces, funciones