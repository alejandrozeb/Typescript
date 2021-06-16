//interfaces se puden usar para declarar tipos que sean funciones

interface Comparator{
    //indicamos que es una funcion y que devuelve
    (first: string, second: string): number;
    algorithm: string;
    safe: boolean;
}

function sort(c: Comparator){
    let out = c("first", "second");
    //nos permite hacer tipos hibridos algo qeu se pude llamar y tiene atributos
    console.log('Ordenando con el criterio'+c.algorithm);
    
}

//con tipos tambien podemos tener el mismo resultado
type Comparator2 = {
    (first: string, second: string)
    algorithm: string;
}