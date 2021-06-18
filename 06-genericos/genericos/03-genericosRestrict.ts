interface Post{
    id: number
}

interface Nota2 extends Post{
    mensaje: string;
}

interface NotaColorida2 extends Nota2{
    color: string;
}
interface Foto2 extends Post{
    url: string;
}

interface Video2 extends Foto2{
    duracion: string;
}

function subir2<Publicacion extends Post, Extra>(p:Publicacion, e?: Extra): Publicacion{
    return p;
}

let post2: Nota = {mensaje: "hola mundo"};
