//genericos con funciones
type Nota = {mensaje: string};
type NotaColorida = Nota & {color: string}
type Foto = {url:string}
type Video = {duration: number}

type Publicacion = Nota | NotaColorida | Foto | Video;
//HTTP POST /upload

function subir<Publicacion>(p:Publicacion): Publicacion{
    return p;
}
let post: Nota = {mensaje: 'hola mundo'};
let x = subir(post);
//devulve de tipo nota