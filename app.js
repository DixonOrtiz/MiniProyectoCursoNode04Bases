const {crearCarpetaTablas, crearArchivo, listarTabla} = require("./funciones/multiplicar");
const {argv} = require("./configuraciones/yargs");

/*Se importa el módulo colors para imprimir colores en la terminal*/
const colors = require('colors');
     
let comando = argv._[0];

crearCarpetaTablas();

switch(comando){
    case "listar":
        listarTabla(argv.base, argv.limite)
            .then(tabla => {
                console.log(`Tabla del ${argv.base} hasta el ${argv.limite}`.bgGreen);
                console.log(tabla.green);
            })
            .catch(err => {
                console.log(err);
            });  
        break;

    case "crear":
        crearArchivo(argv.base, argv.limite)
            .then(archivo => {
                console.log(`El archivo ${archivo} ha sido creado satisfactoriamente.`);
            })
            .catch(err => {
                console.log(err);
            });
        break;

    default:
        console.log("Comando no reconocido.");
}


 




