/**
 * Ejercicio 9
 * Dia de la semana
 */

let dia = prompt("Ingresa día de la semana");

if( dia == "sabado" || dia == "domingo") {
    console.log('Es fin de semana');

}else {
    if(
        dia=="lunes" ||
        dia=="martes" ||
        dia=="miercoles" ||
        dia=="jueves" ||
        dia=="viernes"
        
        
    ) {
        console.log('Entre semana');
        
    }else {
        console.log('Ingrese un día válido');
        
    }
}

// switch (dia) {
//     case null:
//         console.log('Porfavor ingrese un día de la semana válido');
        
//         break;
//     case "sabado":
        
//     break;

//     default:
//         break;
// }