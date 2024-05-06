import { convertirAños, convertirMeses, convertirDias, convertirHoras, convertirMinutos, convertirSegundos } from "./conversionTiempo.js"
import { main } from "../../main.js"
import { esNumero } from "../validators/validators.js"

function mostrarMenuFinalTiempo(resultado){
    const menuTiempoFinal = ` ${resultado}
    Digite,
    1) para volver a convertir unidades de tiempo.
    2) para volver al menu principal.
    3) salir.
    `
    let opcion = parseInt(prompt(menuTiempoFinal))
    switch (opcion){
        case 1:
            tiempo()
            break
        case 2:
            main()
            break
        case 3:
            alert("Gracias por usar el programa")
            break
        default:
            alert("Ingrese un valor valido")
            mostrarMenuFinal(resultado)
            break
    }
}

function cantidadUnidades (mensajeUnidades){
    let cantidadUnidades = parseFloat(prompt(`Ingrese la cantidad de ${mensajeUnidades} a convertir`))
    return cantidadUnidades
}

export function Segundos (cantidad){
    const menuSegundos = `Digite,
    1) Segundos a Años.
    2) Segundos a Meses. 
    3) Segundos a Dias. 
    4) Segundos a Horas. 
    5) Segundos a Minutos.
    0) Para devolverse
    `
    let opcion = parseFloat(prompt(menuSegundos))
    let conversion = convertirSegundos(opcion, cantidad)
    return conversion
}

export function Minutos (cantidad){
    const menuMinutos = `Digite,
    1) Minutos a Años.
    2) Minutos a Meses. 
    3) Minutos a Dias. 
    4) Minutos a Horas. 
    5) Minutos a Segundos.
    0) Para devolverse
    `
    let opcion = parseInt(prompt(menuMinutos))
    let conversion = convertirMinutos(opcion, cantidad)
    return conversion
    
}

export function Horas (cantidad){
    const menuHoras = `Digite,
    1) Horas a Años.
    2) Horas a Meses. 
    3) Horas a Dias. 
    4) Horas a Minutos. 
    5) Horas a Segundos.
    0) Para devolverse
    `
    let opcion = parseInt(prompt(menuHoras))
    let conversion = convertirHoras(opcion, cantidad)
    return conversion
}

export function Dias (cantidad){
    const menuDias = `Digite,
    1) Dias a Años.
    2) Dias a Meses. 
    3) Dias a Horas. 
    4) Dias a Minutos. 
    5) Dias a Segundos.
    0) Para devolverse
    `
    let opcion = parseInt(prompt(menuDias))
    let conversion = convertirDias(opcion, cantidad)
    return conversion
}

export function Meses (cantidad){
    const menuMeses = `Digite,
    1) Meses a Años.
    2) Meses a Dias. 
    3) Meses a Horas. 
    4) Meses a Minutos. 
    5) Meses a Segundos.
    0) Para devolverse
    `
    let opcion = parseInt(prompt(menuMeses))
    let conversion = convertirMeses(opcion, cantidad)
    return conversion
}

export function Años (cantidad){
    const menuAños = `Digite,
    1) Años a Años.
    2) Años a Dias. 
    3) Años a Horas. 
    4) Años a Minutos. 
    5) Años a Segundos.
    0) Para devolverse
    `
    let opcion = parseInt(prompt(menuAños))
    let conversion = convertirAños(opcion, cantidad)
    return conversion
}


export function tiempo (){
    const menuTiempo = `Digite,
    1) para convertir Segundos.
    2) para convertir Minutos.
    3) para convertir Horas.
    4) para convertir Dias.
    5) para convertir Meses.
    6) para convertir Años.
    0) para devolverse
    `
    let opcion = parseFloat(prompt(menuTiempo))
    switch(opcion){
        case 0:
            main()
            break
        case 1:
            let cantidadSegundos = cantidadUnidades("Segundos")
            if (esNumero(cantidadSegundos)){
                mostrarMenuFinalTiempo(Segundos(cantidadSegundos))
                break
            }
            alert ("Ingrese un valor valido")
            tiempo()
            break
        case 2:
            let cantidadMinutos = cantidadUnidades("Minutos")
            if (esNumero(cantidadMinutos)){
                mostrarMenuFinalTiempo(Minutos(cantidadMinutos))
                break
            }
            alert ("Ingrese un valor valido")
            tiempo()
            break
        case 3:
            let cantidadHoras = cantidadUnidades("Horas")
            if (esNumero(cantidadHoras)){
                mostrarMenuFinalTiempo(Horas(cantidadHoras))
                break
            }
            alert ("Ingrese un valor valido")
            tiempo()
            break
        case 4:
            let cantidadDias = cantidadUnidades("Dias")
            if (esNumero(cantidadDias)){
                mostrarMenuFinalTiempo(Dias(cantidadDias))
                break
            }
            alert ("Ingrese un valor valido")
            tiempo()
            break
        case 5:
            let cantidadMeses = cantidadUnidades("Meses")
            if (esNumero(cantidadMeses)){
                mostrarMenuFinalTiempo(Meses(cantidadMeses))
                break
            }
            alert ("Ingrese un valor valido")
            tiempo()
            break
        case 6:
            let cantidadAños = cantidadUnidades("Años")
            if (esNumero(cantidadAños)){
                mostrarMenuFinalTiempo(Años(cantidadAños))
                break
            }
            alert ("Ingrese un valor valido")
            tiempo()
            break
        default:
            alert("Por favor ingrese un valor valido.")
            tiempo()
            break
    }
}