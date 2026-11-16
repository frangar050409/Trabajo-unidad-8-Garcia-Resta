function parte1() {
  let edad = Number(prompt("¿Cuántos años tenés?"));
  if (edad >= 60) {
    alert("Ya estás en edad de jubilarte.");
  } else {
    alert("Todavía no estás en edad de jubilarte.");
  }
}

function parte2() {
  let genero = (prompt("¿Sos mujer u hombre?") || "").trim().toLowerCase();
  let edad = Number(prompt("¿Cuántos años tenés?"));
  if (genero === "mujer") {
    if (edad >= 60) {
      alert("Ya estás en edad de jubilarte.");
    } else {
      alert("Todavía no estás en edad de jubilarte.");
    }
  } else if (genero === "hombre") {
    if (edad >= 65) {
      alert("Ya estás en edad de jubilarte.");
    } else {
      alert("Todavía no estás en edad de jubilarte.");
    }
  } else {
    alert("Respuesta no válida. Escribí mujer u hombre.");
  }
}

function bonus() {
  let genero = (prompt("¿Sos mujer u hombre?") || "").trim().toLowerCase();
  let edad = Number(prompt("¿Cuántos años tenés?"));
  if ((genero === "mujer" && edad >= 60) || (genero === "hombre" && edad >= 65)) {
    alert("Ya estás en edad de jubilarte.");
  } else {
    alert("Todavía no estás en edad de jubilarte.");
  }
}
