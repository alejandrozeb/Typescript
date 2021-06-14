//alias o tipy alias es una funcion que pertmite crear tipos y ademas puedes corresponder a otro

//permite reasignar nombres que mejora la legibilidad

type Numero = number;
//reasignamos a number como numero

let n: Numero = 5;


type LoginCredencials = {
    username: string,
    password: string
}

function login(data: LoginCredencials){

}

login({
    username: 'admin',
    password: 'admin'
})

//nos permite encapsular información, ocultar la informacion permite que la parte publica de la API no va a determinar de que tipo son las variables