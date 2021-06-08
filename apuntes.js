/* apuntes curso tipescript 
    typescript es un superconjunto de js
    es JS con mas cosas. TS  incorpora hergonomia el trabajo es mas facil, mas facil de debbugear
    seguridad frente a errores de tipo que se tiene en js.
    errores surgen en js al momento del deploy.
    
    tenemos sistema de tipos o tipado ademas depedndiendo del id vamos identificando que errores surgen en funciones o metodos.

    Ademas TS es transpilado (o copilado, el transpilado es cuando va directo a maquina) con babel o tscopiler esto nos permite transpilar a js con emac3 hasta el que queramos.
    herramientas
    node 12.18.3
    npm 6.14.6

    podemos instalar typescipt de manera global pero al momento de desarrollar en equipo se debe manejar el la version que queramos.

    instalando typescript como depdendencia
    npm init
    npm i --save-dev typescript

    en typescript usaremos la version 4
    tsc es un copilador de typpescript

    Visual studio ode esta construido en TS

    TS y JS son compatibles 
    Typescript
    tambien podemos usar un require o un import de ts a js o de js a ts

    Los tipos de datos son los de js

    para copilar 
    en consola
    .\node_modules\.bin\tsc hola.ts

    pero configuraremos en package json un script
    npm run build
    para ejecute el build de manera local
*/