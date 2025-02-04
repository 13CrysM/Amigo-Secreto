// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
// Declaraciòn de variables.
let lista = [];

// Funciones
// Agrega un nombre a la lista
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
    //Verificamos que la lista tenga por lo menos dos elementos
    if (lista.length < 2) {
        alert('Debes de agregar por lo menos dos nombres.');
        return;
    }

    let amigos = [...lista];
    console.log(amigos)
    let resultado = document.getElementById('resultado');
    resultado.innerHTML = '';

    let sorteo = [];
    while (amigos.length > 0) {
        let indexAmigo = Math.floor(Math.random() * amigos.length);
        console.log(indexAmigo)
        let amigo = amigos.splice(indexAmigo, 1)[0];
        console.log(amigo)

        if (sorteo.length === lista.length - 1 && lista[lista.length - 1] === amigo) {
            // Caso especial: Si queda solo un amigo en la lista y es el mismo, hacemos un intercambio
            let intercambio = sorteo[sorteo.length - 1];
            sorteo[sorteo.length - 1] = amigo;
            amigo = intercambio;
        }

        sorteo.push(amigo);
    }

    for (let i = 0; i < lista.length; i++) {
        let li = document.createElement('li');
        li.textContent = `${lista[i]} ➡️ ${sorteo[i]}`;
        resultado.appendChild(li);
    }

    console.log("Sorteando amigo")
}