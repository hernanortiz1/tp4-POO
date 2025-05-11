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
    alert("Nota inválida. Debe ser entre 0 y 10.");
  }
};

const obtenerNotaMaxima = (calificaciones) => {
  let max = 0;
  for (let i = 0; i < calificaciones.length; i++) {
    if (calificaciones[i] > max) {
      max = calificaciones[i];
    }
  }
  return max;
};

const clasificarNota = (nota) => {
  switch (true) {
    case nota >= 9:
      return "A";
    case nota >= 7:
      return "B";
    case nota >= 5:
      return "C";
    case nota >= 0:
      return "D";
    default:
      return "Sin clasificar";
  }
};

const alumnos = [];

do {
  const alumno = {
    nombre: prompt("Ingrese el nombre del alumno:"),
    curso: prompt("Ingrese el curso del alumno:"),
    calificaciones: [],
  };

  do {
    const nota = parseFloat(
      prompt(`Ingrese una calificación para ${alumno.nombre}:`)
    );
    agregarNota(alumno, nota);
  } while (confirm("¿Ingresar otra calificación para este alumno?"));

  alumnos.push(alumno);
} while (confirm("¿Ingresar otro alumno?"));

alumnos.forEach((alumno) => {
  const notaMax = obtenerNotaMaxima(alumno.calificaciones);
  const clasificacion = clasificarNota(notaMax);

  document.writeln(`<ul>
    <li>Alumno: ${alumno.nombre}</li>
    <li>Curso: ${alumno.curso}</li>
    <li>Nota: ${alumno.calificaciones.join(", ")}</li>
    <li>Nota más alta: ${notaMax}</li>
    <li>Nota: ${clasificacion}</li>
    </ul>`);
});
