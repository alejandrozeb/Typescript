//para permisos
enum permisos{
    EscribirMensajes = 1,
    Reaccionar = EscribirMensajes * 2,
    EnviarEnlaces = Reaccionar * 2,
    ConectarAlCanalDeVoz = EnviarEnlaces *2,
}

//mascaras de bits 2,4,8 asi podemos sumar 2 + 4 = 6 y damos dos permisos

//enumerados con valores computados por que se estan operando ts lo copila manualmente
// los enumerados no son muy usados en redux se puede usar mas que en otros frameworks