//sintaxis 

class Rectangulo{
    ancho: number;
    alto:number;
    //debemostener un contructor o no vamos a poder instanciar un objeto

    constructor(ancho, alto){
        this.ancho = ancho;
        this.alto = alto;
    }

    area(){
        return this.ancho * this.alto;
    }

    perimetro(){
        return this.ancho * 2 + this.alto * 2;
    }
}
//se tipa para que pueda reconocer los atributos del objeto
//instanciar

let r1 = new Rectangulo(4,3);
let r2 = new Rectangulo(5,3);
console.log(r1.area());
console.log(r2.perimetro());
