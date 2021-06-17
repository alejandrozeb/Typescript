//tipos enumerados es un tipo novedoso no exite en js simula codigo para que funcione en nodejs
//el proposito es limitar el rango de una variable

enum diasSemana{
    lunes = 401, 
    martes, 
    miercoles, 
    jueves = 701, 
    viernes, 
    sabado, 
    domingo
};
//se reasigna el index tabien pueden tener el mismo valor de indexado pero no es recomendable
interface CitaMedica{
    dia: diasSemana;
}
//en js se crea un objeto con campos e identificadores
//tambien se pude usar con idex de 0 hasta el rango
let p: CitaMedica = {
    dia: diasSemana.domingo
}

//cuando declaras un tipo numeros el sistema de tipos crea una serie de indices por el orden de declaracion del rango de valores, pero tambien podemos asignar un valor y los siguinentes seguiran

console.log(p);
//imprime el index no el valor


enum diasSemana2{
    lunes = "lunes", 
    martes = "Martes", 
    miercoles = "Miercoles", 
    jueves = 6,//indexa 
    viernes, 
    sabado, 
    domingo
};

//debemos declarar  las constantes como literales 
