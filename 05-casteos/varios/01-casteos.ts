//

interface Geometria{
    lados:number;
    pintar(): void;
}

interface Triangulo extends Geometria{
    base: number;
    altura: number;
}

interface Cuadrado extends Geometria{
    lado:number
}
//procesar procesa cualquier figura
function procesar(g: Geometria){
    g.pintar();
    if(g.lados == 4){
        //casteas a tipo cuadrado
        let cuadrado = g as Cuadrado;
        //tenemos el atributo que usa cuadrado
        cuadrado.lado;
    }else if(g.lados == 3){
        let triangulo = g as Triangulo;
        triangulo.altura;
    }
}
//discord js todos los mensajes derivan de la interface mensaje

//alternativa
//(<Cuadrado> g) 
// tiene limitaciones no es compatible por jsx
//ademas evitas confuciones