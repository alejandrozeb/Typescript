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

/* 
utility types integrados con ts

partial es un tipo para crear interfaces parciales
, no suelta errores si no llenas toda la interfaz

ver el hankbook
*/