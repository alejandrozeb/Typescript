//herencia y espelizacion
// es un proceso donde una interface que pdeclara cierta informacion

interface Vehiculo{
    fabricante: string;
    arrancarMotor(): void;
    repostar(): void;
    detenerMotor(): void;
}

interface VehiculoTerrestre extends Vehiculo{
    conducir():void;
}

interface VehiculoMaritimo extends Vehiculo{
    sonarSirena(): void;
    encenderChimenea(): void;
    detenerChimenea(): void;
}

class OpelCorsa implements VehiculoTerrestre{
    fabricante: string= "opel";
    
    conducir(): void {
        console.log('conduciendo');        
    }
    
    arrancarMotor(): void {
        console.log('conduciendo');
    }
    repostar(): void {
        console.log('conduciendo');
    }
    detenerMotor(): void {
        console.log('conduciendo');
    }
    //no interesa estas 
    abrirMaletero():void{

    }

}

//tenemos unajerarquia de clases, Vehiculo esta arriba podemos ocultar informacion pero que oculten informacion

function procesar(v:Vehiculo){
    v.arrancarMotor();
    //aca su comportamietno sera un vehiculo
}

procesar(new OpelCorsa());

//estas interfaces son la aplicacion de types en TS