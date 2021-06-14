//interfaces
// es una especificacion (contrato) creamos un tipo con su nombre donde declaramos que queremos que tiene los objetos que implementen estos objetos
// se compara a type alias

interface UserData{
    username: string,
    created_at: Date,
    superuser: boolean
}

function login(): UserData{
    return {
        username: 'admin',
        created_at: new Date(),
        superuser: true
    }
}
//login es de tipo UserData, es restrictivo se debe imlemetnar todo los de la clase, ademas no se debe implementar algo mas de la interface
let data: UserData = login();

//interfaces para tipar, de debe implementar todo lo que pide