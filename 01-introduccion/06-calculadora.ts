//funciones

//sumar funcionamiento [datos] -->[sumar] --> [datos]

function sumar(m: number, n:number):number{
    let suma = m + n;
    console.log(`${m} + ${m} = ${suma}`); //puede ejecutar node sin problemas
    
    return suma;
}

let x: number = sumar(3,4);
//asignar al mismo