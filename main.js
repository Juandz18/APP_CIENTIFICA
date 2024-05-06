import { aritmetica } from "./services/aritmetica/aritmetica.js"
import { longitud } from "./services/longitud/longitud.js"
import { tiempo } from "./services/tiempo/tiempo.js"


export function main (){
    const menuPrincipal = `
    Bienvenid@ a nuestra aplicacion cientifica:
    Digite,
    1) para convertir unidades de longitud.
    2) para operaciones aritmeticas.
    3) para convertir unidades de tiempo.
    
    0) para salir.
    `
    let eleccion = parseInt(prompt(menuPrincipal))
    switch (eleccion){
        case 0:
            alert("El programa ha finalizado")
            break
        case 1:
            longitud()
            break;
        case 2:
            aritmetica()
            break
        case 3:
            tiempo()
            break
        default:
            alert("Por favor ingrese un valor valido")
            main()
            break;
    }
}

main();