// Número aleatorio entre 1 y 100
let numeroAleatorio = Math.floor(Math.random() * 100) + 1;

const intentos = document.querySelector(".intentos");
const ultimoResultado = document.querySelector(".ultimoResultado");
const loBajoOAlto = document.querySelector(".loBajoOAlto");

const envioAdivinar = document.querySelector(".envioAdivinar");
const campoAdivinar = document.querySelector(".campoAdivinar");

let contadorAdivinar = 1;
let botonReinicio;
campoAdivinar.focus();

function revisarAdivinanza() {
  const adivinanzaUsuario = Number(campoAdivinar.value);

  if (!adivinanzaUsuario || adivinanzaUsuario < 1 || adivinanzaUsuario > 100) {
    loBajoOAlto.textContent = "Escribe un número válido entre 1 y 100.";
    return;
  }

  if (contadorAdivinar === 1) {
    intentos.textContent = "Intentos previos: ";
  }
  intentos.textContent += adivinanzaUsuario + " ";

  if (adivinanzaUsuario === numeroAleatorio) {
    ultimoResultado.textContent = "¡Felicidades! ¡Lo adivinaste!";
    ultimoResultado.style.backgroundColor = "#2e7d32";
    loBajoOAlto.textContent = "";
    finDelJuego();
  } else if (contadorAdivinar === 10) {
    ultimoResultado.textContent = "¡¡¡FIN DEL JUEGO!!! El número era " + numeroAleatorio;
    ultimoResultado.style.backgroundColor = "#c62828";
    loBajoOAlto.textContent = "";
    finDelJuego();
  } else {
    ultimoResultado.textContent = "¡Incorrecto!";
    ultimoResultado.style.backgroundColor = "#c62828";
    if (adivinanzaUsuario < numeroAleatorio) {
      loBajoOAlto.textContent = "Te quedaste corto.";
    } else {
      loBajoOAlto.textContent = "Te pasaste.";
    }
  }

  contadorAdivinar++;
  campoAdivinar.value = "";
  campoAdivinar.focus();
}

envioAdivinar.addEventListener("click", revisarAdivinanza);
campoAdivinar.addEventListener("keydown", (e) => {
  if (e.key === "Enter") revisarAdivinanza();
});

function finDelJuego() {
  campoAdivinar.disabled = true;
  envioAdivinar.disabled = true;
  botonReinicio = document.createElement("button");
  botonReinicio.textContent = "Volver a jugar";
  botonReinicio.className = "botonReinicio";
  document.querySelector("main").append(botonReinicio);
  botonReinicio.addEventListener("click", reiniciarJuego);
}

function reiniciarJuego() {
  contadorAdivinar = 1;
  document.querySelectorAll(".resultados p").forEach((p) => (p.textContent = ""));
  botonReinicio.remove();

  campoAdivinar.disabled = false;
  envioAdivinar.disabled = false;
  campoAdivinar.value = "";
  campoAdivinar.focus();

  ultimoResultado.style.backgroundColor = "";
  numeroAleatorio = Math.floor(Math.random() * 100) + 1;
}
