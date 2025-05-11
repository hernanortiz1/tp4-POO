/*
Crea un objeto alumno con propiedades nombre, curso y calificaciones (un array de números). 
Escribe una función que reciba un objeto alumno y un número, y que añada la calificación 
al array de calificaciones del alumno. 
Usa un bucle para calcular la calificación más alta del alumno
 y un switch para clasificar al alumno según su calificación más alta (A para 9-10, B para 7-8, 
 C para 5-6, D para 0-4).
*/

const alumno = {
  nombre: "",
  curso: "",
  calificaciones: [],
};

const agregarNota = (alumno, nota) => {
  if (!isNaN(nota) && nota >= 0 && nota <= 10) {
    alumno.calificaciones.push(nota);
  } else {
    alert("Nota inválida. Debe ser un número entre 0 y 10.");
  }
};

alumno.nombre = prompt("Ingrese nombre");
alumno.curso = prompt("Ingrese curso");

do {
  const nota = parseInt(prompt("Ingrese nota del alumno:"));
  agregarNota(alumno, nota);
} while (confirm("¿Ingresar otra nota al alumno?"));

let notaMaxima = 0;
for (let i = 0; i < alumno.calificaciones.length; i++) {
  if (alumno.calificaciones[i] > notaMaxima) {
    notaMaxima = alumno.calificaciones[i];
  }
}

