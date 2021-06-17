//tipos enumerados es un tipo novedoso no exite en js simula codigo para que funcione en nodejs
//el proposito es limitar el rango de una variable

enum diasSemana{lunes, martes, miercoles, jueves, viernes, sabado, domingo};

interface CitaMedica{
    dia: diasSemana;
}
//en js se crea un objeto con campos e identificadores
//tambien se pude usar con idex de 0 hasta el rango
let p: CitaMedica = {
    dia: diasSemana.domingo
}