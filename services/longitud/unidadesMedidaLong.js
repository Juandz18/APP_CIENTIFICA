import { main } from "../../main.js";
import { centimetro, decametro, decimetro, hectometros, kilometros, metro, milimetros } from "./longitud.js";

export function convertirMetros(medida, unidad){
    let resultado = 0 
    switch(unidad){
        case 0:
            main()
            break
        case 1:
            resultado = medida / 1000
            return `${medida}M SON ${resultado}KM`
        case 2:
            resultado = medida / 100
            return `${medida}M SON ${resultado}HM`
        case 3: 
            resultado = medida / 10
            return `${medida}M SON ${resultado}DAM`
        case 4:
            resultado = medida * 10
            return `${medida}M SON ${resultado}DM`
        case 5:
            resultado = medida / 100
            return `${medida}M SON ${resultado}CM`
        case 6: 
            resultado = medida / 1000
            return `${medida}M SON ${resultado}MM`
        default:
            alert("Por favor ingrese un valor valido")
            return metro(medida)
    }
}

export function convertirKilometro(medida, unidad){
    let resultado = 0 
    switch(unidad){
        case 0:
            main()
            break
        case 1:
            resultado = medida * 10
            return `${medida}KM SON ${resultado}HM`
        case 2:
            resultado = medida * 100
            return `${medida}KM SON ${resultado}DAM`
        case 3: 
            resultado = medida * 1000
            return `${medida}KM SON ${resultado}M`
        case 4:
            resultado = medida * 10000
            return `${medida}KM SON ${resultado}DM`
        case 5:
            resultado = medida * 100000
            return `${medida}KM SON ${resultado}CM`
        case 6: 
            resultado = medida * 1000000
            return `${medida}KM SON ${resultado}MM`
        default:
            alert("Por favor ingrese un valor valido")
            return kilometros(medida)
    }
}

export function convertirHectometro(medida, unidad){
    let resultado = 0 
    switch(unidad){
        case 0:
            main()
            break
        case 1:
            resultado = medida / 10
            return `${medida}HM SON ${resultado}kM`
        case 2:
            resultado = medida * 10
            return `${medida}HM SON ${resultado}DAM`
        case 3: 
            resultado = medida * 100
            return `${medida}HM SON ${resultado}M`
        case 4:
            resultado = medida * 1000
            return `${medida}HM SON ${resultado}DM`
        case 5:
            resultado = medida * 10000
            return `${medida}HM SON ${resultado}CM`
        case 6: 
            resultado = medida * 100000
            return `${medida}HM SON ${resultado}MM`
        default:
            alert("Por favor ingrese un valor valido")
            return hectometros(medida)
    }
}

export function convertirDecametro(medida, unidad){
    let resultado = 0 
    switch(unidad){
        case 0:
            main()
            break
        case 1:
            resultado = medida / 100
            return `${medida}DAM SON ${resultado}kM`
        case 2:
            resultado = medida / 10
            return `${medida}DAM SON ${resultado}HM`
        case 3: 
            resultado = medida * 10
            return `${medida}DAM SON ${resultado}M`
        case 4:
            resultado = medida * 100
            return `${medida}DAM SON ${resultado}DM`
        case 5:
            resultado = medida * 1000
            return `${medida}DAM SON ${resultado}CM`
        case 6: 
            resultado = medida * 10000
            return `${medida}DAM SON ${resultado}MM`
        default:
            alert("Por favor ingrese un valor valido")
            return decametro(medida)
    }
}

export function convertirDecimetro(medida, unidad){
    let resultado = 0 
    switch(unidad){
        case 0:
            main()
            break
        case 1:
            resultado = medida / 10000
            return `${medida}DM SON ${resultado}kM`
        case 2:
            resultado = medida / 1000
            return `${medida}DM SON ${resultado}HM`
        case 3: 
            resultado = medida / 100
            return `${medida}DM SON ${resultado}DAM`
        case 4:
            resultado = medida / 10
            return `${medida}DM SON ${resultado}M`
        case 5:
            resultado = medida * 10
            return `${medida}DM SON ${resultado}CM`
        case 6: 
            resultado = medida * 100
            return `${medida}DM SON ${resultado}MM`
        default:
            alert("Por favor ingrese un valor valido")
            return decimetro(medida)
    }
}

export function convertirCentimetro(medida, unidad){
    let resultado = 0 
    switch(unidad){
        case 0:
            main()
            break
        case 1:
            resultado = medida / 100000
            return `${medida}CM SON ${resultado}kM`
        case 2:
            resultado = medida / 10000
            return `${medida}CM SON ${resultado}HM`
        case 3: 
            resultado = medida / 1000
            return `${medida}CM SON ${resultado}DAM`
        case 4:
            resultado = medida / 100
            return `${medida}CM SON ${resultado}M`
        case 5:
            resultado = medida / 10
            return `${medida}CM SON ${resultado}DM`
        case 6: 
            resultado = medida * 10
            return `${medida}CM SON ${resultado}MM`
        default:
            alert("Por favor ingrese un valor valido")
            return centimetro(medida)
    }
}

export function convertirMilimetro(medida, unidad){
    let resultado = 0 
    switch(unidad){
        case 0:
            main()
            break
        case 1:
            resultado = medida / 1000000
            return `${medida}MM SON ${resultado}kM`
        case 2:
            resultado = medida / 100000
            return `${medida}MM SON ${resultado}HM`
        case 3: 
            resultado = medida / 10000
            return `${medida}MM SON ${resultado}DAM`
        case 4:
            resultado = medida / 1000
            return `${medida}MM SON ${resultado}M`
        case 5:
            resultado = medida / 100
            return `${medida}MM SON ${resultado}DM`
        case 6: 
            resultado = medida / 10
            return `${medida}MM SON ${resultado}CM`
        default:
            alert("Por favor ingrese un valor valido")
            return milimetros(medida)
    }
}
