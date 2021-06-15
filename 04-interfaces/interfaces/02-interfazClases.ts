//las clases implementan interfaces que determnan el comportamiento de estas

interface UserData2{
    readonly username: string,
    //puede estar o no
    readonly created_at?: Date,

    readonly superuser: boolean |undefined ,
    //solo aplica a persona no a name y string
    readonly personal: {
        name: string,
        email: string
    }

    //metodo dos formas de declararlas
    logout(): void;
    rename: (username: string) => void;
    //la implementacion se realiza en la clase
}
//login3 implementa userdata2
function login3(): UserData2{
    return {
        username: 'admin',
        created_at: new Date(),
        superuser: true,
        personal:{
            name: "alejandro",
            email: "@correo.com"
        },
         logout(){
            console.log('adios');
        },
        //no te obliga el tipado por que esta een la interface
        rename(username){
            console.log('TODO: Rename Account');
            
        }
    }
}

//modo lectura no podemos cambiar su valor
let l = login3();
console.log(l.username);

//maneras de evitar problemas cuando existe una variable

l.created_at?.toISOString();
//si no existe la variable se detiene

l.created_at!.toISOString();
//cuando estamos seguros de su existencia
