let opcion = prompt("Queres jugar a piedra, papel o tijera? (S/N)").toUpperCase()
let punUsuario
let punMaquina



    while (opcion == "S") {
        alert("OK, a jugar. Quien primero gane 3 partidas gana el juego.")
        punUsuario = 0
        punMaquina = 0

        while (punUsuario < 3 && punMaquina < 3) {
            let eUsuario = prompt("¿Piedra, papel o tijera? (P/A/T)").toUpperCase()
            let eMaquinaRandom = Math.floor(Math.random() * 3)
            let eMaquina 
            switch (eMaquinaRandom) {
                case 0:
                    eMaquina = "P"
                    break
                case 1:
                    eMaquina = "T"
                    break    
                case 2:
                    eMaquina = "A"
                    break
            }

            let resultado = comprobarRonda(eUsuario, eMaquina)
            alert("Elegiste " + eUsuario + " y la maquina eligió " + eMaquina + ": " + resultado)
            puntaje(resultado)
            alert("El puntaje es: " + punUsuario + " - " + punMaquina)
        }
        comprobarGanador()
        opcion = prompt("¿Desea volver a jugar? (S/N)").toUpperCase()
        

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
    if (Usuario == "P" && Maquina == "A") {
        resultado = "Perdiste"
    }
    else if (Usuario == "P" && Maquina == "T") {
        resultado = "Ganaste"
    }
    else if (Usuario == "A" && Maquina == "P") {
        resultado = "Ganaste"
    }
    else if (Usuario == "A" && Maquina == "T") {
        resultado = "Perdiste"
    }
    else if (Usuario == "T" && Maquina == "P") {
        resultado = "Perdiste"
    }
    else if (Usuario == "T" && Maquina == "A") {
        resultado = "Ganaste"
    }
    else {
        resultado = "Empate"
    }
    return resultado
}

function puntaje(resultado) {
    if (resultado == "Ganaste") {
        punUsuario += 1
    }
    else if (resultado == "Perdiste") {
        punMaquina += 1
    }
}

function comprobarGanador() {
    if (punUsuario == 3) {
        alert("¡Ganaste el juego!")
    }
    else if (punMaquina == 3) {
    alert("¡Perdiste el juego!")
    }
}





