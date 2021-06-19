//modulos exportar e importar

//expo34amos l6a
export type Producto = {
    sku: string,
    nombre: string,
    descripcion: string,
    precio: number,
    urlFoto: string
}

type almacen = {
    [sku: string]:{
        stock: number,
        ultimaENtrega:Date
    }
}

export function sumarTotal(productos: Producto[]){
    let precio = 0;
    for(let producto of productos){
        precio += producto.precio
    }
    return precio;
}


//solo exportamos lo que usaremos en otros archivos