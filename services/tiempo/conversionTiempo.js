import { esNumero } from "../validators/validators.js"
import { Años, Dias, Horas, Meses, Minutos, Segundos, tiempo } from "./tiempo.js"

export function convertirSegundos (opcion, UnidadesTiempo){
    switch(opcion){
        case 0:
            return tiempo()
        case 1:
            return `${UnidadesTiempo} Segundos, son ${UnidadesTiempo / 31536000} Años`
        case 2:
            return `${UnidadesTiempo} Segundos, son ${UnidadesTiempo / 2592000} Meses`
        case 3:
            return `${UnidadesTiempo} Segundos, son ${UnidadesTiempo / 86400} Dias`
        case 4:
            return `${UnidadesTiempo} Segundos, son ${UnidadesTiempo / 3600} Horas`
        case 5:
            return `${UnidadesTiempo} Segundos, son ${UnidadesTiempo / 60} Minutos`
        default:
            alert("Por favor ingrese un valor valido")
            return Segundos(UnidadesTiempo)
            
    }
}

export function convertirMinutos (opcion, UnidadesTiempo){
    switch(opcion){
        case 0:
            return tiempo()
        case 1:
            return `${UnidadesTiempo} Minutos, son ${UnidadesTiempo / 525600} Años`
        case 2:
            return `${UnidadesTiempo} Minutos, son ${UnidadesTiempo / 43200} Meses`
        case 3:
            return `${UnidadesTiempo} Minutos, son ${UnidadesTiempo / 1440} Dias`
        case 4:
            return `${UnidadesTiempo} Minutos, son ${UnidadesTiempo / 60} Horas`
        case 5:
            return `${UnidadesTiempo} Minutos, son ${UnidadesTiempo * 60} Segundos`
        default:
            alert("Por favor ingrese un valor valido")
            return Minutos(UnidadesTiempo)
            
    }
}

export function convertirHoras (opcion, UnidadesTiempo){
    switch(opcion){
        case 0:
            return tiempo()
        case 1:
            return `${UnidadesTiempo} Horas, son ${UnidadesTiempo / 8760} Años`
        case 2:
            return `${UnidadesTiempo} Horas, son ${UnidadesTiempo / 720} Meses`
        case 3:
            return `${UnidadesTiempo} Horas, son ${UnidadesTiempo / 24} Dias`
        case 4:
            return `${UnidadesTiempo} Horas, son ${UnidadesTiempo * 60} Minutos`
        case 5:
            return `${UnidadesTiempo} Horas, son ${UnidadesTiempo * 3600} Segundos`
        default:
            alert("Por favor ingrese un valor valido")
            return Horas(UnidadesTiempo)
            
    }
}

export function convertirDias (opcion, UnidadesTiempo){
    switch(opcion){
        case 0:
            return tiempo()
        case 1:
            return `${UnidadesTiempo} Dias, son ${UnidadesTiempo / 365} Años`
        case 2:
            return `${UnidadesTiempo} Dias, son ${UnidadesTiempo / 30} Meses`
        case 3:
            return `${UnidadesTiempo} Dias, son ${UnidadesTiempo * 24} Horas`
        case 4:
            return `${UnidadesTiempo} Dias, son ${UnidadesTiempo * 1440} Minutos`
        case 5:
            return `${UnidadesTiempo} Dias, son ${UnidadesTiempo * 86400} Segundos`
        default:
            alert("Por favor ingrese un valor valido")
            return Dias(UnidadesTiempo)
            
    }
}

export function convertirMeses (opcion, UnidadesTiempo){
    switch(opcion){
        case 0:
            return tiempo()
        case 1:
            return `${UnidadesTiempo} Meses, son ${UnidadesTiempo / 12} Años`
        case 2:
            return `${UnidadesTiempo} Meses, son ${UnidadesTiempo * 30} Dias`
        case 3:
            return `${UnidadesTiempo} Meses, son ${UnidadesTiempo * 720} Horas`
        case 4:
            return `${UnidadesTiempo} Meses, son ${UnidadesTiempo * 43200} Minutos`
        case 5:
            return `${UnidadesTiempo} Meses, son ${UnidadesTiempo * 2592000} Segundos`
        default:
            alert("Por favor ingrese un valor valido")
            return Meses(UnidadesTiempo)
            
    }
}

export function convertirAños (opcion, UnidadesTiempo){
    switch(opcion){
        case 0:
            return tiempo()
        case 1:
            return `${UnidadesTiempo} Años, son ${UnidadesTiempo * 12} Meses`
        case 2:
            return `${UnidadesTiempo} Años, son ${UnidadesTiempo * 365} Dias`
        case 3:
            return `${UnidadesTiempo} Años, son ${UnidadesTiempo * 8760} Horas`
        case 4:
            return `${UnidadesTiempo} Años, son ${UnidadesTiempo * 525600} Minutos`
        case 5:
            return `${UnidadesTiempo} Años, son ${UnidadesTiempo * 31536000} Segundos`
        default:
            alert("Por favor ingrese un valor valido")
            return Años(UnidadesTiempo)
            
    }
}