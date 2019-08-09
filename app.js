const {crearCarpetaTablas, crearArchivo, listarTabla} = require("./funciones/multiplicar");
const {argumentos} = require("./configuraciones/yargs");
const colors = require('colors'); //Se importa el módulo colors para imprimir colores en la terminal

     
let comando = argumentos._[0]; //Se obtiene el comando ingresado por consola

crearCarpetaTablas();

switch(comando){
    case "listar":
        listarTabla(argumentos.base, argumentos.limite)
            .then(tabla => {
                console.log(`Tabla del ${argumentos.base} hasta el ${argumentos.limite}`.bgGreen);
                console.log(tabla.green);
            })
            .catch(err => {
                console.log(err);
            });  
        break;

    case "crear":
        crearArchivo(argumentos.base, argumentos.limite)
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


 




