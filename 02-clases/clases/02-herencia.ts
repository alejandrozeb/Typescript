//podemos crear una jerarquia de clases como vehiculo y tendras vehiculoTerrestre, VehiculoAreo, VehiculoMaritimo que son todas tipos de vehiculos

class Vehiculo{
    fabricante: string;

    constructor(fabricante){
        this.fabricante = fabricante;
    }
    moverse(){
        console.log('El vehiculo se ha movido');
        
    }
}

class VehiculoTerrestre extends Vehiculo {
    //podemos reescribir el comportamiento
    moverse(){
        console.log('avanza');
        //con supoer nos referimos a una jerarquia arriba y entrar a sus metodos tambien a sus atributos

    }
}

class VehiculoAereo extends Vehiculo {
    private tipo: string;

    constructor(fabricante, tipo){
        super(fabricante);
        this.tipo = tipo;

    }

    moverse(){
        console.log("vuela");
        
    }
}

class VehiculoMaritimo extends Vehiculo {
    moverse(){
        console.log("Navega");
        
    }
}
 let vehiculo = new VehiculoAereo("yamaha", "rapido");
