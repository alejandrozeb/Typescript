//tipos no primitivos
//asociamos a una variable multiples datos como objetos, vectores o arrays

//arrays
let arreglo: string[]= ["h","o","l", "a"];
let number: number[] = [1, 2, 3, 4, 5];
//los arrays estan tipados pero tambien puede inferir de que tipo sera
let arregloString = ["lunes", "martes", 1, true, null];
//podemos agregar diferentes tipos de variables o lo tipamos como any
//podemos ingresar a los elementos con el index
console.log(arreglo[0]);

//tuplas
//son una especializacion es ts de arrays tiene una semantica mas dura, estrucutra de datos

let db:[[string, number, string, boolean]] = [
    ["alejandro", 2, "Bolivia", true]
];
//es legal darle un apodo a la columna desde ts 4
let db1:[nombre: string,edad: number,pais: string,premium: boolean] = ["alejandro", 2, "Bolivia", true];