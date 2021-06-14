//son tipos compuestos de otros tipos, se puede declarar tipos que se corresponde a la vez con multiples tipos, una variable de este tipo debera cumplir todas las condicones de los tipos
type Coordenada = [x: number, y:number]
type Vector = [x: number, y:number]

type Posicionable = {
    posicion: Coordenada
}

type Movible = {
    velocidad: Vector;
    aceleracion: Vector
}

type MovibleYPosicionable = Posicionable & Movible;

let obj: MovibleYPosicionable = {
    posicion: [5, 5],
    velocidad: [4, 4],
    aceleracion: [1, 1]
}

// se parece a la heerencia de objetos e juntan la claves y se crea uno nuevo que tiene todos los campos