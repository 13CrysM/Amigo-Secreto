// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaraciòn de variables.
let lista = [];

// Funciones
function agregarAmigo() {
    //Obtiene el valor (nombre) del imput
    let nombre = document.getElementById('amigo').value;
    // Valida si el input contiene datos
    if (nombre === ""){
        // Si no se ha puesto nada en el input manda aviso
        alert('Ingresa un nombre valido, no puede estar en blanco.');
    }else if (lista.includes(nombre)){
        alert('Este nombre ya se encuentra registrado');
    } else {
        //console.log('variable nombre ' + nombre)
        lista.push(nombre);
        //console.log(lista);
        enlistarAmigos();
    }
    document.getElementById('amigo').value = '';
}

function enlistarAmigos () {
    console.log('impresion de enlistar:' + lista)
}

function sortearAmigo(){
    console.log("Sorteando amigo")
}

//document.getElementById('agregar').addEventListener('click', agregarAmigo);