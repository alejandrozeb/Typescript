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
    Podemos configurar el Es3 hasta el que queramos
    
    para ejecutar el js
    node hola.js <<nombre archivo>>

    Playground permite ejecutar codigo typescript en el navegador


    -------------CCLASES------
    Es una estructura con atributos y puedes afectar estos metodos con funciones o metodos

    copilar un grupo de archivos o carpeta
    para esto nos ayuda tsconfig da opcoines de copilaciones

    node_modules/.bin/tsc --init

    creamos el archivo tsconfig.json
    opciones
    target
    podemos afectar la forma en que se copila es5, es2018

    module
    que cambie el tipo de import
    jsx
    react
    out dir
    donde esta el output de la copilacion podemos decirle   ue copile en una carpeta que normalmente se llama distribucion o Dist

    y solo ejecutamos
    node_modules/.bin/tsc  para copilar todo el proyecto

    siempre debemos usar tsconfig facilita mucho el control sobre el codigo que se copila

    -------npm------
    podemos importar librerias, modulos de terceros que podemos reutilizar
    como express para servidor web
    is-what verifica las funciones
    npm i is-what 
    descarga la ultima version , en este caso esta hecho en ts
    .d.ts
    los modulos que traemos de npm significa que la libreria en js esta tipado

    en ts declare podemos declarar una funcion

    debemos verificar que las librerias que tremos de npm deben traer .d.ts por que ts no sabe trabajar solo con js.

    para usar js tenemos opciones

    1 
    en tsconfig 
    usamos allow js

    2
    @types/<nombredelpaquete>
    trae el archivo con el .d.ts con el tipado

    para generar los archivos .d.ts en tsconfig usamos la opcion
    "declaration"
    y se genera el archivo 
    
    para usar require 
    npm i @types/node --save-dev

    npm i --save-dev rimraf

    borra independientemente del SO
    ts puede identificar los tipos dentro de un json

    prueba actualiza git modules
    */