let persona:{
    nombre: string,
    edad: number,
    pais: string,
    fecha_nac: Date,
    mascota: boolean,
    laboral:{
        empresa: string,
        sector: string
    }     
} = {
    nombre: "Alejandro Zeballos",
    edad: 50,
    pais: "Bolivia",
    fecha_nac: new Date(1900,5,14),
    mascota: true,
    laboral:{
        empresa: "Google",
        sector: "Technology"
    }
}

//los objetos son de tipo objeto, las keys deben estar tipadas, ademas verifica que todas las propiedades tengan un valor tambein se pueden anidar

//podemos escapar de estas restricciones con any o de tipo object pero el problema es que no mira por dentro para el autocompletado se debe tipar

let objeto:object = {
    nombre: "Pepe Perex",
    edad: 30,
    pais: "Colombia"
}