abstract class Vehiculo2{
    protected fabricante: string;
    //protected no puden ser accedidos desde afuera de la clase sin embargo puedo usar este atributo desde un metodo de una subclase
    constructor(fabricante){
        this.fabricante = fabricante;
    }
    moverse(){
        console.log('El vehiculo se ha movido');
        
    }

    //tambein se aplica en metodos
    protected llevarAlTaller(){
        console.log("llevando al taller");
    }

}
//podemos declara un clase como abstract no permite instanciar la clase padre solo las subclases, se necesita este tipo de implementaciones para no romper algo en la clase padre

class Vehiculo2Terrestre extends Vehiculo2 {
    
    moverse(){
        console.log('avanza');
    }

    reparar(){
        this.llevarAlTaller();
    }
}

class Vehiculo2Aereo extends Vehiculo2 {
    private tipo: string;

    constructor(fabricante, tipo){
        super(fabricante);
        this.tipo = tipo;

    }

    moverse(){
        console.log("vuela");
        
    }

    reparar(){
        console.log("un momento leyendo el manuel de: " + this.fabricante);
    }
}

class Vehiculo2Maritimo extends Vehiculo2 {
    moverse(){
        console.log("Navega");
        
    }
}
 let vehiculo2: Vehiculo2 = new Vehiculo2Aereo("yamaha", "rapido");

 //si creamos una funcion que necestite un vehiculo podemosusar este tipado y solo verifica los metodos de la clase padre
