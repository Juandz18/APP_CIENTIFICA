import { main } from "../../main.js";
import { NoEsCero, esNumero } from "../validators/validators.js";

/*
Mensaje final de la operación aritmética.

@type {string}
*/
const MENSAJE_FINAL_ARITMETICA = `
1) para realizar otra operación aritmética
2) para volver al menú principal
3) para salir`;

/*
Menú para las operaciones aritméticas.

@type {string}
*/
const MENU_ARITMETICA = `Digite,
1) para Sumar
2) para Restar
3) para Multiplicar
4) para dividir
0) para devolverse
`;

/*
Realiza la suma de dos números.

@param {number} a - El primer valor numérico.
@param {number} b - El segundo valor numérico.
@returns {string} El mensaje personalizado con el resultado de la suma.
*/

function suma(a, b) {
    return `El resultado de la suma es ${a + b}`;
}

/*
Realiza la resta de dos números.

@param {number} a - El primer valor numérico.
@param {number} b - El segundo valor numérico.
@returns {string} El mensaje personalizado con el resultado de la resta.
*/

function resta(a, b) {
    return `El resultado de la resta es ${a - b}`;
}



/*
Realiza la multiplicación de dos números.

@param {number} a - El primer valor numérico.
@param {number} b - El segundo valor numérico.
@returns {string} El mensaje personalizado con el resultado de la multiplicación.

*/

function multiplicacion(a, b) {
    return `El resultado de la multiplicación es ${a * b}`;
}

/*
Realiza la división de dos números.

@param {number} a - El primer valor numérico.
@param {number} b - El segundo valor numérico.
@returns {string} El mensaje personalizado con el resultado de la división.

*/
function division(a, b) {
    if (NoEsCero(b)) {
        return `El resultado de la división es ${a / b}`;
    }
    return `${b} no se puede dividir por 0 o no es un valor válido`;
}

/*
Muestra el menú final de operaciones aritméticas.
@param {string} respuesta - El resultado de la operación aritmética.
*/
function mostrarMenuFinalAritmetica(respuesta) {
    let menuFinalAritmetica= `${respuesta}
    ${MENSAJE_FINAL_ARITMETICA}`;
    let eleccion = parseInt(prompt(menuFinalAritmetica));
    switch (eleccion) {
        case 1:
            aritmetica();
            break;
        case 2:
            main();
            break;
        case 3:
            alert("Gracias por usar nuestros programa");
            break;
        default:
            alert("Por favor ingrese un valor valido");
            mostrarMenuFinalAritmetica(respuesta);
            break;
    }
}

/*
Función principal para realizar operaciones aritméticas.
*/
export function aritmetica() {
    let eleccion = parseInt(prompt(MENU_ARITMETICA));
    if (eleccion === 0) {
        main();
    } else if (!isNaN(eleccion) && eleccion > 0 && eleccion < 5) {
        let numero1 = parseFloat(prompt("Ingrese el primer valor"));
        let numero2 = parseFloat(prompt("Ingrese el segundo valor"));
        let respuesta;
        if (esNumero(numero1) && esNumero(numero2)){
            switch (eleccion) {
                case 1:
                    respuesta = suma(numero1, numero2);
                    break;
                case 2:
                    respuesta = resta(numero1, numero2);
                    break;
                case 3:
                    respuesta = multiplicacion(numero1, numero2);
                    break;
                case 4:
                    respuesta = division(numero1, numero2);
                    break;
                default:
                    alert("Por favor ingrese un valor valido");
                    aritmetica();
                    break;
            }
            mostrarMenuFinalAritmetica(respuesta)
        }else{
            alert("Favor ingrese valores numericos")
            aritmetica();
        }
    } else {
        alert("Por favor ingrese valores validos");
        aritmetica();
    }
}
