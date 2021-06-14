//podemos especificar de que tipo sera una variable pero puede ser con mas de una

function convertir(valor: string | number){
    //al usar el valor perdemos la propiedades que tiene cada tipo
    //pero se comparten algunas como typeOF

    if(typeof(valor) === "string"){
        valor.trim();
    }else{
        //operacion
    }
    // es una forma de tratar estas variables pero tambien se puede manejar con literasl
}
//podemos pasar un string o un number y la funcoin estara bien
convertir("asdasd");
convertir(55);

//con tipos alias
 type A ={
    uno: boolean,
    dos: boolean
 }

 type B = {
    tres: boolean
 }
//puede tener los siguientes valores
 let valor: A | B = {uno: true, dos: true};
 let valor2: A | B = {tres: false};
 //todas son aceptadas

 //debemos tomar en cuenta que la funcion no sabe especificamente que valor sera dentro de la funcion