const edadInput = document.getElementById("edad");
const edadValor = document.getElementById("edadValor");
const relleno = document.getElementById("relleno");
const meta = document.getElementById("meta");
const veredicto = document.getElementById("veredicto");
const detalle = document.getElementById("detalle");
const confeti = document.getElementById("confeti");
const consignas = { parte1, parte2, bonus };
let estabaJubilado = false;

function generoElegido() {
  return document.querySelector('input[name="genero"]:checked').value;
}

function puedeJubilarse(genero, edad) {
  return (genero === "mujer" && edad >= 60) || (genero === "hombre" && edad >= 65);
}

function lanzarConfeti() {
  const colores = ["#ff2fb3", "#ffb800", "#00e5ff", "#ff6b35", "#ffffff"];
  for (let i = 0; i < 80; i++) {
    const pieza = document.createElement("span");
    pieza.style.left = `${Math.random() * 100}%`;
    pieza.style.background = colores[i % colores.length];
    pieza.style.animationDelay = `${Math.random() * 0.4}s`;
    pieza.style.setProperty("--giro", `${Math.random() * 720 - 360}deg`);
    pieza.style.setProperty("--x", `${Math.random() * 200 - 100}px`);
    confeti.appendChild(pieza);
    setTimeout(() => pieza.remove(), 3200);
  }
}

function actualizar() {
  const genero = generoElegido();
  const edad = Number(edadInput.value);
  const limite = genero === "mujer" ? 60 : 65;
  const puede = puedeJubilarse(genero, edad);

  edadValor.textContent = edad;
  meta.textContent = limite;
  relleno.style.width = `${Math.min(edad / limite, 1) * 100}%`;
  document.body.classList.toggle("jubilado", puede);

  veredicto.textContent = puede ? "¡Sí! Ya podés jubilarte 🏖️" : "Todavía no 💼";
  detalle.textContent = puede
    ? `Superaste los ${limite} años hace ${edad - limite} año${edad - limite === 1 ? "" : "s"}. Es hora de disfrutar.`
    : `Te falta${limite - edad === 1 ? "" : "n"} ${limite - edad} año${limite - edad === 1 ? "" : "s"} para llegar a los ${limite}.`;

  if (puede && !estabaJubilado) lanzarConfeti();
  estabaJubilado = puede;
}

edadInput.addEventListener("input", actualizar);
document.querySelectorAll('input[name="genero"]').forEach((radio) => radio.addEventListener("change", actualizar));
document.querySelectorAll("[data-parte]").forEach((boton) => {
  boton.addEventListener("click", () => consignas[boton.dataset.parte]());
});

actualizar();
