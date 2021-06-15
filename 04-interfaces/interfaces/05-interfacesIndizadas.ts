//interfaces indizadas
// perculiaridades de interfaces
// text accesors, indices como arrays y objetos 

let vector: number [] = [];
//puedo ingresar al array mediante un numero - indice

let object: any = {
    displayName: 'foo',
    rpDisplayName: 'foo',
    id: '1'
}

//puedo ingresar  alos valuos con un indice
object['id'];

//podemos hacer interfaces para que el ingreso a la informacion sea de esta forma

interface Indizable{
    //indice 
    [index: number]: boolean;
}

let indexable: Indizable = {};

let k = indexable[7];
//k es de tipo boolean, especificamos el return
