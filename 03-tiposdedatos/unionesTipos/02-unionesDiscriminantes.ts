// son especiales de uniones, podemos diferencias entre tipos

type OperacionSuma = {
    sumando1: number,
    sumando2: number,
    tipo: 'suma'
}

type OperacionMultiplicar = {
    operando1: number,
    operando2: number,
    tipo: 'multiplicar'
}

//podemos crear una operacion de dos tipos

type Operacion = OperacionSuma | OperacionMultiplicar;

function operar(o: Operacion){
    //comparten tipo pero si usamos tipeof siemrpe sera de tipo object

    if(o.tipo == 'suma'){
        //entiende que es de tipo suma que es el literal, entonces en este if reconoce las variables de tipo suma
        return o.sumando1 + o.sumando2
    }else if(o.tipo == 'multiplicar'){
        return o.operando1 * o.operando2;
    }
}


//redux discrjs usan este tipo de datos para diferenciar tipos, tambien al enviar a mensajes en discord