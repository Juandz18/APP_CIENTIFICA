export function esNumeroPositivo (a){
    return esNumero(a) && a > 0 ? true : false
}

export function esNumero (numero){
    return typeof numero == "number" && !isNaN(numero) ? true : false
}

export function NoEsCero (numero){
    return numero != 0 ? true : false 
}