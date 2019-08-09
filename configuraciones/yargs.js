/*En este archivo se crean los comandos para ingresar parámetros por terminal*/
const opcionesComandos = {
    base: {
        demand: true,
        alias: "b"
    },

    limite: {
        default: 10,
        alias: "l"             
    }
}

const argumentos = require("yargs")
    .command("listar", "Imprime la tabla de multiplicar.", opcionesComandos)
    .command("crear", "Crear un archivo .txt con la tabla según los valores ingresados", opcionesComandos)
    .argv;

module.exports = {
    argumentos
}