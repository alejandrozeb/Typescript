// son una variedad de tipos, solo aceptan un valor
let verdadera: true = true;

//solo puede ser de valor true otros ejemplos son null o undefined

let cinco:5 = 5;

//no se aceptan tampoco decimales debe ser 5

let hola: 'hola' = 'hola';

// si dejamos que sea infiera
let permiso = true;

//aplica de tipo boolean pero si asignamos con const

const saludo = 'hola';
//saludo = 'adios';
// ya no se puede reasignar por que saludo ya es de tipo 'hola'

//esto se encuentra en interfaces y se devuelve constantes

//ejemplo si necesitamos algo de tipo login para identificar una operacion

type LoginOperation = {
    op: 'login',
    username: string,
    password: string
}

let l: LoginOperation = {
    username: 'admin',
    password: 'admin',
    op: 'login'
}

//op debe ser de tipo login o salta un error redux