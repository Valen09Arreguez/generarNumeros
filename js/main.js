let max = 100;
let min = 999;
function pedirCantidad() {
    let cantidad = prompt("Ingresar un valor (mayor a 5)");
    cantidad = parseInt(cantidad);
    return cantidad
}

function generarArray(cantidadUsuarios) {
    const arrayAleatorio = [];
    for (let i = 0; i < cantidadUsuarios; i++) {
        arrayAleatorio.push(Math.floor((Math.random()*(max-min + 1) + min)));
    }
    return arrayAleatorio;    
}

function mostrarArray(arrayMostrar) {
    for (let i = 0; i < arrayMostrar.length; i++) {
        console.log(arrayMostrar[i]);
    }
}
function saludosDespedida(nombre) {
    return console.log("Se termino la clase Chau " + nombre + "!!!!");
}


let arrayAleatorio = [];
const cantidadUsuarios = pedirCantidad();
arrayAleatorio = generarArray(cantidadUsuarios);
mostrarArray(arrayAleatorio)
console.log("Ascendente");
mostrarArray(arrayAleatorio.sort());
console.log("Descendente");
mostrarArray(arrayAleatorio.sort((a, b) => b - a));
saludosDespedida("Farias");


