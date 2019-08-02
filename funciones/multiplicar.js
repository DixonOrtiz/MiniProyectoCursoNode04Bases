/*Se importa el módulo File Sytem para trabajar con archivos.*/
const fs = require("fs");

/*En caso de que no existe el directorio tablas éste se crea */
let crearCarpetaTablas = () => {
    let dir = './tablas';

    if (!fs.existsSync(dir)){
        fs.mkdirSync(dir);
    }    
}

/*Funcón que crea una tabla de multiplicar en función de una base y un límite. Por ejemplo
  la tabla del 3 hasta el 20.*/
let crearArchivo = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base) || !Number(limite)){
            reject(`La base: '${base}', o el límite: '${limite}' no es/son un número.`);
            return;
        }
        
        let tablaMultiplicar = "";
        
        for(let i = 1; i <= limite; i++){
            tablaMultiplicar += `${base} * ${i} = ${base * i}\n`;
        }
        
        fs.writeFile(`./tablas/tabla-del-${base}-hasta-el-${limite}.txt`, tablaMultiplicar, (err) => {
            if(err){
                reject(err);
            }
            else{
                resolve(`tabla-del-${base}-hasta-el-${limite}.txt`);
            }         
          });
    });
}

/*Función que imprime por consola una tabla de multiplicar en función de una base y un límite.*/
let listarTabla = (base, limite) => {
    return new Promise((resolve, reject) => {
        if(!Number(base) || !Number(limite)){
            reject(`La base: '${base}', o el límite: '${limite}' no es/son un número.`);
            return;
        }

        else{
            let tablaMultiplicar = "";
            for(let i = 1; i <= limite; i++){
                tablaMultiplicar += `${base}*${i} = ${base * i}\n`;
            }

            resolve(tablaMultiplicar);
        }
    });
}

module.exports = {
    crearCarpetaTablas,
    crearArchivo,
    listarTabla
}   