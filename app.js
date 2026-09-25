// Sistema de registro de estudiantes 

//Registro de estudaintes//
/*let Cantidad = Number(prompt("Cantidad de estudiantes a registrar"));
let aprobados = 0;
let reprobados = 0;
let suma = 0;
let mayor = 0;
let menor = 100;

for (let i = 1; i <= Cantidad; i++) {

    let calificacion = Number(prompt("Ingrese la calificación del estudiante " + i));

    while (calificacion < 0 || calificacion > 100) {
     calificacion = Number(prompt("Calificación inválida. Ingrese una calificación entre 0 y 100"));
    }

    if (calificacion >= 60) {
        aprobados++;
    } else {
        reprobados++;
    }

    suma = suma + calificacion;

    if (calificacion > mayor) {
        mayor = calificacion;
    }
    }

let promedio = suma / Cantidad;

document.write("Cantidad total de estudiantes: " + Cantidad + "<br>");
document.write("Cantidad de estudiantes aprobados: " + aprobados + "<br>");
document.write("Cantidad de estudiantes reprobados: " + reprobados + "<br>");
document.write("Promedio general del grupo: " + promedio + "<br>");
document.write("Calificación más alta: " + mayor + "<br>");
document.write("Calificación más baja: " + menor);
*/

// Ejercicio de Cajero Automatico 

/*
let saldo = 1000;
let depositos = 0;
let retiros = 0;
let opcion;

do {

));
    opcion = Number(prompt(
        `1:Consultar saldo
        2:Depositar dinero
        3:Retirar dinero
        4:Salir`
    ));

    if(opcion === 1){

        alert("Su saldo actual es: Q" + saldo);

    }

    if(opcion === 2){

        let cantidad = Number(prompt("Ingrese la cantidad que desea depositar"));

        while(cantidad <= 0){
            cantidad = Number(prompt("Cantidad inválida. Ingrese una cantidad mayor que 0"));
        }

        saldo = saldo + cantidad;
        depositos++;

        alert("Depósito realizado correctamente");

    }

    if(opcion === 3){

        let cantidad = Number(prompt("Ingrese la cantidad que desea retirar"));

        while(cantidad <= 0){
            cantidad = Number(prompt("Cantidad inválida. Ingrese una cantidad mayor que 0"));
        }

        while(cantidad > saldo){
            cantidad = Number(prompt("No tiene saldo suficiente. Ingrese otra cantidad"));
        }

        saldo = saldo - cantidad;
        retiros++;

        alert("Retiro realizado correctamente");

    }

} while(opcion !== 4);


document.write("Saldo final: Q" + saldo + "<br>");
document.write("Cantidad de depósitos: " + depositos + "<br>");
document.write("Cantidad de retiros: " + retiros + "<br>");
document.write("Gracias por utilizar nuestro cajero.");
*/

/*
// Tienda de tecnologia

let nombre = prompt("Ingrese el nombre del cliente:");
let edad = Number(prompt("Ingrese la edad del cliente:"));

let tipo = Number(prompt(
    `Seleccione el tipo de cliente:
    1. Estudiante
    2. Empleado
    3. Cliente general`
));

let subtotal = 0;
let productos = 0;
let continuar;

do {
    let nombre_producto = prompt("Ingrese el nombre del producto:");
    let precio = Number(prompt("Ingrese el precio del producto:"));
    let cantidad = Number(prompt("Ingrese la cantidad comprada:"));

    while (precio <= 0) {
        precio = Number(prompt(
            "Precio inválido. Ingrese un precio mayor que 0:"
        ));
    }

    while (cantidad <= 0) {
        cantidad = Number(prompt(
            "Cantidad inválida. Ingrese una cantidad mayor que 0:"
        ));
    }

    let costo = precio * cantidad;

    subtotal = subtotal + costo;
    productos++;

    continuar = Number(prompt(
        `¿Desea agregar otro producto?
        1. Sí
        2. No`
    ));

} while (continuar == 1);


let descuento_tipo = 0;

if (tipo == 1) {
    descuento_tipo = subtotal * 0.05;
} else if (tipo == 2) {
    descuento_tipo = subtotal * 0.10;
} else {
    descuento_tipo = 0;
}


let descuento_monto = 0;

if (subtotal > 1000) {
    descuento_monto = subtotal * 0.10;
} else if (subtotal > 500) {
    descuento_monto = subtotal * 0.05;
}

let descuentos = descuento_tipo + descuento_monto;
let total = subtotal - descuentos;


document.write("Nombre del cliente: " + nombre + "<br>");

if (tipo == 1) {
    document.write("Tipo de cliente: Estudiante<br>");
} else if (tipo == 2) {
    document.write("Tipo de cliente: Empleado<br>");
} else {
    document.write("Tipo de cliente: Cliente general<br>");
}

document.write("Cantidad de productos: " + productos + "<br>");
document.write("Subtotal: Q" + subtotal + "<br>");
document.write("Descuento por tipo: Q" + descuento_tipo + "<br>");
document.write("Descuento por monto: Q" + descuento_monto + "<br>");
document.write("Total de descuentos: Q" + descuentos + "<br>");
document.write("Total a pagar: Q" + total + "<br>");
document.write("Gracias por su compra:" + nombre );
*/