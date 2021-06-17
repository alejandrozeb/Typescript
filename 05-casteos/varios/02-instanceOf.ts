//comprobar tipos dos opciones
interface Coche{
    fabricante: string;
}

class CocheConcreto implements Coche{
    fabricante = 'honda';
}


//no funcona interfaces por que no son implementadas
let c = new CocheConcreto();
console.log(c instanceof CocheConcreto);


interface Geometria2{
    lados:number;
    pintar(): void;
}

interface Triangulo2 extends Geometria2{
    base: number;
    altura: number;
}

interface Cuadrado2 extends Geometria2{
    lado:number
}

//guardas con funciones de tipo booleanas
function esUnCuadrado(x:any): x is Cuadrado2{
    //comprobamos los tipos en tiempo de ejecucion
    //return x.lados && x.lados == 4 && x.pintar && x.lado;

    //refactor
    return esUnaGeometrica(x) && (x as any).lado
}

function esUnTriangulo(x: any): x is Triangulo{
    return esUnaGeometrica(x) && (x as any).base && (x as any).altura;
}

function esUnaGeometrica(x: any): x is Geometria2{
    return x.lados && x.pintar;
}
//formas de casteo con guardas

function procesar2(g: Geometria2){
    if(esUnCuadrado(g)){
        g.lado
    }else if(esUnTriangulo(g)){
        g.altura;
    }
}
