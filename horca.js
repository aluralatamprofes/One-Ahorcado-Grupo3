//Selectores
let palabras = ["ALURA", "ORACLE", "ONE", "JAVASCRIPT","HTML", "CSS"];
let tablero = document.getElementById("forca").getContext("2d");
let palabraSecreta = "";

let letras = [];
let errores = 9;
//PalabraSecreta

function escojerPalabraSecreta(){
    let palabra = palabras[Math.floor(Math.random() * palabras.length)]
    palabraSecreta = palabra
    console.log(palabraSecreta)
}

function comprobarLetra(key){
    let estado = false
    if (key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)) {
      letras.push(key)  
      console.log(key)
      return estado;
    } else {
      estado = true
      console.log(key)
      return true;
    }
}

function anadirLetraIncorrecta() {
      errores -= 1
  }

//Iniciar juego
function iniciarJuego(){
    document.getElementById("iniciar-juego").style.display = "none";

    escojerPalabraSecreta()
    dibujarCanvas()
    dibujarLinea()

    document.onkeydown = (e) => {
        let letra = e.key.toUpperCase()
          if (comprobarLetra(letra) && palabraSecreta.includes(letra)) {
              for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                  escribirLetraCorrecta(i)
                }
              }
            }
            else {
              anadirLetraIncorrecta(letra)
             escribirLetraIncorrecta(letra, errores)
            }
          }

}
