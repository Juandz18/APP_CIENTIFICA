import { 
    convertirKilometro,
    convertirHectometro,
    convertirDecametro,
    convertirMetros,
    convertirDecimetro,
    convertirCentimetro, 
    convertirMilimetro
} from "./unidadesMedidaLong.js"

import { main } from "../../main.js"
import { esNumero, esNumeroPositivo } from "../validators/validators.js"


export function mostrarMenuFinal(resultado){
    const menuFinal = `${resultado}
    Digite,
    1) volver a convertir unidades de longitud.
    2) volver al menu principal.
    3) salir.
    `
    let eleccion = parseInt(prompt(menuFinal))
    switch (eleccion){
        case 1:
            longitud()
            break
        case 2:
            main()
            break
        case 3:
            alert("Gracias por usar nuestro programa")
            break
        default:
            alert("Por favor ingrese un valor valido")
            mostrarMenuFinal(resultado)
            break
    }
}

export function kilometros (cantidad){
    const menuKilometros = `Digite,
    1) Kilometros a Hectometro.
    2) Kilometros a Decametros.
    3) Kilometros a Metros.
    4) Kilometros a Decimetros.
    5) Kilometros a Centimetros.
    6) Kilometros a Milimetros.
    0) para devolver.
    `
    let opcion = parseInt(prompt(menuKilometros))
    if (esNumero(opcion) && opcion >= 0 && opcion <=5){
        let conversion = convertirKilometro(cantidad, opcion)
        return conversion
    }
    return kilometros(cantidad)
}

export function hectometros (cantidad){
    const menuHectometros = `Digite,
    1) Hectometors a Kilometros.
    2) Hectometors a Decametros.
    3) Hectometors a Metros.
    4) Hectometors a Decimetros.
    5) Hectometors a Centimetros.
    6) Hectometors a Milimetros.
    0) para devolver.
    `
    let opcion = parseInt(prompt(menuHectometros))
    if (esNumero(opcion) && opcion >= 0 && opcion <=5){
        let conversion = convertirHectometro(cantidad, opcion)
        return conversion
    }
    return hectometros(cantidad)
}

export function decametro (cantidad){
    const menuDecametro = `Digite,
    1) Decametros a Kilometros.
    2) Decametros a Hectometros.
    3) Decametros a Metros.
    4) Decametros a Decimetros.
    5) Decametros a Centimetros.
    6) Decametros a Milimetros.
    0) para devolver.
    `
    let opcion = parseInt(prompt(menuDecametro))
    if (esNumero(opcion) && opcion >= 0 && opcion <=5){
        let conversion = convertirDecametro(cantidad, opcion)
        return conversion
    }
    return decametro(cantidad)
}

export function metro (cantidad){
    const menuMetros = `Digite,
    1) Metros a Kilometros.
    2) Metros a Hectometros.
    3) Metros a Decametros.
    4) Metros a Decimetros.
    5) Metros a Centimetros.
    6) Metros a Milimetros.
    0) para devolver.
    `
    let opcion = parseInt(prompt(menuMetros))
    if (esNumero(opcion) && opcion >= 0 && opcion <=5){
        let conversion = convertirMetros(cantidad, opcion)
        return conversion
    }
    return metro(cantidad)
}

export function decimetro (cantidad){
    const menuDecimetro = `Digite,
    1) Centimetros a Kilometros.
    2) Centimetros a Hectometros.
    3) Centimetros a Decametros.
    4) Centimetros a Metros.
    5) Centimetros a Centimetros.
    6) Centimetros a Milimetros.
    0) para devolver.
    `
    let opcion = parseInt(prompt(menuDecimetro))
    if (esNumero(opcion) && opcion >= 0 && opcion <=5){
        let conversion = convertirDecimetro(cantidad, opcion)
        return conversion
    }
    return decametro(cantidad)
}

export function centimetro (cantidad){
    const menuCentimetros = `Digite,
    1) Centimetros a Kilometros.
    2) Centimetros a Hectometros.
    3) Centimetros a Decametros.
    4) Centimetros a Metros.
    5) Centimetros a Decimetros.
    6) Centimetros a Milimetros.
    0) para devolver.
    `
    let opcion = parseInt(prompt(menuCentimetros))
    if (esNumero(opcion) && opcion >= 0 && opcion <=5){
        let conversion = convertirCentimetro(cantidad, opcion)
        return conversion
    }
    return centimetro(cantidad)
}

export function milimetros (cantidad){
    const menuCentimetros = `Digite,
    1) Centimetros a Kilometros.
    2) Centimetros a Hectometros.
    3) Centimetros a Decametros.
    4) Centimetros a Metros.
    5) Centimetros a Decimetros.
    6) Centimetros a Centimetros.
    0) para devolver.
    `
    let opcion = parseInt(prompt(menuCentimetros))
    if (esNumero(opcion) && opcion >= 0 && opcion <=5){
        let conversion = convertirMilimetro(cantidad, opcion)
        return conversion
    }
    return milimetros(cantidad)
}

export function longitud(){
    const menuLongitud = `Digite,
    1) para convertir kilometros.
    2) para convertir hectometros.
    3) para convertir decametro.
    4) para convertir metro.
    5) para convertir decimetros
    6) para convertir centimetro.
    7) para convertir milimetros
    0) para devolverse
    `
    let eleccion = parseInt(prompt(menuLongitud))
    switch(eleccion){
        case 0:
            main()
            break
        case 1:
            let cantidadKilometros = parseFloat(prompt("Ingrese la cantidad de kilometros a convertir"))
            if (esNumeroPositivo(cantidadKilometros)){
                mostrarMenuFinal(kilometros(cantidadKilometros))
                break;
            }
            alert("Por favor ingrese un valor valido")
            longitud()
            break
        case 2: 
            let cantidadHectometros = parseFloat(prompt("Ingrese la cantidad de Hectometros a convertir"))
            if(esNumeroPositivo(cantidadHectometros)){
                mostrarMenuFinal(hectometros(cantidadHectometros))
                break;
            }
            alert("Por favor ingrese un valor valido")
            longitud()
            break
        case 3:
            let cantidadDecametros = parseFloat(prompt("Ingrese la cantidad de Decametros a convertir"))
            if (esNumeroPositivo(cantidadDecametros)){
                mostrarMenuFinal(decametro(cantidadDecametros))
                break
            }
            alert("Por favor ingrese un valor valido")
            longitud()
            break
        case 4: 
            let cantidaMetros = parseFloat(prompt("Ingrese la cantidad de Metros a convertir"))
            if(esNumeroPositivo(cantidaMetros)){
                mostrarMenuFinal(metro(cantidaMetros))
                break
            }
            alert("Por favor ingrese un valor valido")
            longitud()
            break
        case 5:
            let cantidadDecimetros = parseFloat(prompt("Ingrese la cantidad de Decimetros a convertir"))
            if (esNumeroPositivo(cantidadDecimetros)){
                mostrarMenuFinal(decametro(cantidadDecimetros))
                break
            }
            alert("Por favor ingrese un valor valido")
            longitud()
            break
        case 6:
            let cantidadCentimetros = parseFloat(prompt("Ingrese la cantidad de Centimetros a convertir"))
            if (esNumeroPositivo(cantidadCentimetros)){
                mostrarMenuFinal(centimetro(cantidadCentimetros))
                break
            }
            alert("Por favor ingrese un valor valido")
            longitud()
            break
        case 7:
            let cantidadMilitros = parseFloat(prompt("Ingrese la cantidad de Milimetros a convertir"))
            if ( esNumeroPositivo(cantidadMilitros)){
                mostrarMenuFinal(milimetros(cantidadMilitros))
                break
            }
            alert("Por favor ingrese un valor valido")
            longitud()
            break
        default:
            alert("Por favor ingrese un valor valido")
            longitud()
            break;
    }
}