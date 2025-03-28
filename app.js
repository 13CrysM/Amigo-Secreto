// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaraciòn de variables.
let lista = [];

// Funciones
// Agrega un nombre a la lista
function agregarAmigo() {
    //Obtiene el valor (nombre) del input
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
    // Borra el contenido del input
    document.getElementById('amigo').value = '';
}

// Actualiza la lista de nombres agregados
function enlistarAmigos () {
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    // Ciclo para alimentar la nueva lista de nombres agregados
    for (let i = 0; i < lista.length; i++){
        let li = document.createElement('li');
        li.textContent = lista[i];
        listaAmigos.appendChild(li);
    }
}

// Realiza el sorteo de los nombres para crear los pares de amigos secretos.
function sortearAmigo(){
    // Verificamos que la lista tenga por lo menos dos elementos
    if (lista.length < 2) {
        alert('Debes de agregar por lo menos dos nombres.');
        return;
    }
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';
    let copiaLista; 
    let intentos = 0; // Añadimos un contador de intentos

    
    // Ciclo para crear los emparejamientos
    for (let i = 0; i < lista.length; i++) {
        let receptor;

        // Asegurarse de que el receptor no sea el mismo que el emisor
        do {
            copiaLista = [...lista]; //cambios 3/02/2025
            copiaLista.sort(() => Math.random() - 0.5); //3/02/2025
            receptor = copiaLista[(i + 1) % copiaLista.length];
        } while (receptor === lista[i]);

        // Asignación de amigos secretos
        let li = document.createElement('li');
        li.textContent = `${lista[i]} -> ${receptor}`;
        resultado.appendChild(li);
    }

    console.log("Sorteando amigo");
}

function reiniciar() {
    // Borrar la lista de amigos
    lista = [];

    // Limpiar el contenido de la interfaz
    let listaAmigos = document.getElementById('listaAmigos');
    listaAmigos.innerHTML = '';

    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    // Limpiar el campo de entrada (input)
    document.getElementById('amigo').value = '';
}