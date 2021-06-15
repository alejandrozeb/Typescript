//una calse puede ser encapsulada por interfaces
interface Shape{
    readonly sides: number;
    
    area():number;
    perimeter():number;
}

///////////////////
//clase para expresar una forma geometrica

class Rectangle implements Shape{
    readonly width: number;
    readonly height: number;

    constructor(width, height){
        this.width = width;
        this.height = height
    }
    sides: number = 4;
    area(): number {
        return this.width * this.height;
    }
    perimeter(): number {
        return this.width + 2 * this.height;
    }

    //visual te ayuda a implementar la interfaz
}
//podemos implementar mas mas de una interfaz
function process(s: Shape){
    //do something
    //solo usara lo que se implementa en shape
    console.log(s.area());
    
}
let r = new Rectangle(5,5);
// se debe implementar el shape
process(r);
