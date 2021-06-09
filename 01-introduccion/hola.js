//console.log("Hola mundo");
//funcion si se tiene errores el copilador te avisa los errores
function saludar(nombre) {
    return "Hola " + nombre.toUpperCase();
    //tampoco podemos devolver un valor que sea string
    //return 1;
}
console.log(saludar("alejandro"));
//podemos tener errores de tipo saludar espera un string
//console.log(saludar({name: "alejandro"}));
