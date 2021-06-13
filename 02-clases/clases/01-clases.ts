//sintaxis 

class Rectangulo{
    private ancho: number;
    private alto:number;
    //debemostener un contructor o no vamos a poder instanciar un objeto
    //otro metodo de declara una variable privada, es proximas versiones en js ya no se podra acceder
    //#area: number;
    private _nombre: string = " ";

    constructor(ancho: number, alto: number){
        this.ancho = ancho;
        this.alto = alto;
    }

    get area(){ //es una funcion por dentro pero por fuera es un atributo
        return this.ancho * this.alto;
    }

    perimetro(){
        return this.ancho * 2 + this.alto * 2;
    }

    get nombre(){
        return this._nombre;
    }

    set nombre(value: string){
        this._nombre = value;
    }

}
//se tipa para que pueda reconocer los atributos del objeto
//instanciar

let r1 = new Rectangulo(4,3);
let r2 = new Rectangulo(5,3);
console.log(r1.area);
console.log(r2.perimetro());
r1.nombre = "A";

//personalmento no recomiendo el uso de get y set en objetos solo en estrucutras de datos para profindurizar revisar clean code el capitulo de clases

//con private podemos limitar el accesso a esos atributos, metodos, funciones a solo la clase y ano desde afuera.

//readonly ts vigila si se hace un cambio en dicho atributo o funcion en java es conocido como final, no se debe mezclar con private o podemos crear atributos que nose modifican ni el propia clase

//podemos usar getters y setters es una funcion que devuelve un atributo, podemos pedir su valor y establecerlo