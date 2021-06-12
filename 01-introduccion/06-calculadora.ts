//funciones

//sumar funcionamiento [datos] -->[sumar] --> [datos]

function sumar(m: number, n:number):number{
    let suma = m + n;
    console.log(`${m} + ${m} = ${suma}`); //puede ejecutar node sin problemas
    
    return suma;
}

let x: number = sumar(3,4);
//asignar al mismo
//las funciones son estructuras de primera clase que son manipulables como cualquier dato, asignamos a un identificador ademas las funciones pueden funcionar de manera independiente

let restar:(m:number, n:number) => number = function(m:number, n:number):number{
    let resta = m + n;
    return resta;
}

restar(5, 4);

//podemos  tipar una funcion al declalarla y ya es necesario hacerlo nuevamente en la implementacion
let multiplicar: (m:number, n:number) => number;
multiplicar = function(m, n){
    let multiplicacion: number = m * n;
    return multiplicacion;
}

//o podemos realizar un callback
//multiplicar = (m, n) => m * n;

/*  funcion de funcoines*/
let multiplicar2:(a:number, b:number, callback:(r:number) => void ) => void;
multiplicar2 = (a, b, callback) => callback(a*b);

multiplicar2(4,5,  function(result){
    console.log(result);
})
