let opcion = prompt("Desea jugar al piedra, paperl o tijera? (S/N)").toUpperCase()
let puntajeUsuario
let puntajeMaquina

while (opcion == "S") {
    alert("!Genial¡ Vamos a jugar a piedra, papel o tijera. Quien primero gane 3 partidas gana el juego.")
    puntajeUsuario = 0
    puntajeMaquina = 0

    while (puntajeUsuario < 3 && puntajeMaquina < 3) {
        let eleccionUsuario = prompt("¿Piedra, papel o tijera? (P/S/T)").toUpperCase()
        let eleccionMaquinaRandom = Math.floor(Math.random() * 3)
        let eleccionMaquina 
        switch (eleccionMaquinaRandom) {
            case 0:
                eleccionMaquina = "P"
                break
            case 1:
                eleccionMaquina = "T"
                break    
            case 2:
                eleccionMaquina = "S"
                break
        }

        let resultado = comprobarRonda(eleccionUsuario, eleccionMaquina)
        alert("Elegiste " + eleccionUsuario + " y la maquina eligió " + eleccionMaquina + ": " + resultado)
        puntaje(resultado)
        alert("El puntaje es: " + puntajeUsuario + " - " + puntajeMaquina)
    }
    comprobarGanador()
    opcion = prompt("¿desea volver a jugar? (S/N)").toUpperCase()

    if (opcion == "N") {
        alert("¡Gracias por jugar!")
    }
}
while (opcion != "S" && opcion != "N") {
    alert("Opción inválida. Por favor, ingrese S o N para jugar.")
    opcion = prompt("Presione S para jugar o N en caso contrario").toUpperCase
}


function comprobarRonda(Usuario, Maquina) {
    let resultado
    if (Usuario == "P" && Maquina == "S") {
        resultado = "Perdiste"
    }
    else if (Usuario == "P" && Maquina == "T") {
        resultado = "Ganaste"
    }
    else if (Usuario == "S" && Maquina == "P") {
        resultado = "Ganaste"
    }
    else if (Usuario == "S" && Maquina == "T") {
        resultado = "Perdiste"
    }
    else if (Usuario == "T" && Maquina == "P") {
        resultado = "Perdiste"
    }
    else if (Usuario == "T" && Maquina == "S") {
        resultado = "Ganaste"
    }
    else {
        resultado = "Empate"
    }
    return resultado
}

function puntaje(resultado) {
    if (resultado == "Ganaste") {
        puntajeUsuario += 1
    }
}

function comprobarGanador() {
    if (puntajeUsuario == 3) {
        alert("¡Ganaste el juego!")
    }
    else if (puntajeMaquina == 3) {
    alert("¡Perdiste el juego!")
    }
}





