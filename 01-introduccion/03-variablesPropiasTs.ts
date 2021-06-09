//no cambia en codigo que genera sirven para agregar mas tipos al codigo

//any 
//representa cualquier cosa no se deberia usar nunca pero se los usa cuando se quiere excluir el tipado a una variable, funcion, metodo

let cualquiera: any = "una cadena";
cualquiera = false;

//cuando portemos de js a ts podemos usar any y evitarnos problemas de compatibilidad tambien se usan cuando se usan librerias de terceros.

//null
//representa nada
let nada: null = null;
//se usan cuando enviemos argumentos, ademas no podemos asignar en un string o int 

//undefined
//no definido,cumple las mismas reglas que null
let indefinido: undefined = undefined;


//void
//representa la nada, indica que una funcion no devuelve nada(se convierte en un metodo)
function nada4():void{
    console.log(nada);
}
//se usa especificamente para metodos no para variables
