// con tipos podemos hacer casi todo de interfaces
interface X {
    a:string
}
interface X {
    b:string
}
interface X {
    c:string
}
//se puede extender solo con el nombre de la interfaz, si la implementamos las tres interfaces se juntan dentro de la funcion
function use(x: X){
}

//si queremos usar una variable global con window
interface Window{
    accountID: number;
}

function use2(w:Window){
    //la interface se une o fusiona a window
    w.accountID;
}



//las varialbles golobales forman parte del objeto window