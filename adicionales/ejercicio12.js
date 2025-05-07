/*
Crea un array de objetos, donde cada objeto represente a un estudiante con propiedades nombre y nota. 
Luego, escribe una función que reciba este array y calcule la nota media de los estudiantes. 
Usa un bucle para recorrer el array. Usa prompt para ingresar los datos de los estudiantes.
*/

const estudiante = {
  nombre: "",
  nota: 0,

  get getNombre() {
    return this.nombre;
  },

  set setNombre(nuevoNombre) {
    if (nuevoNombre && nuevoNombre.trim() !== "") {
      this.nombre = nuevoNombre;
    } else {
      document.writeln("El campo NOMBRE esta vacio");
      console.log("El campo NOMBRE esta vacio");
    }
  },

  get getNota() {
    return this.nota;
  },

  set setNota(NuevaNota) {
    if (!isNaN(NuevaNota) && NuevaNota >= 0 && NuevaNota <= 10) {
      this.nota = NuevaNota;
    } else {
      document.writeln("La nota debe ser un número entre 0 y 10");
      console.log("La nota debe ser un número entre 0 y 10");
    }
  },

  calcularNotaMedia: function (estudiantes) {
    let sumaNotas = 0;
    for (let i = 0; i < estudiantes.length; i++) {
      sumaNotas += estudiantes[i].getNota;
    }
    const media = sumaNotas / estudiantes.length;
    return media;
  },
};

const estudiantes = [];
do {
  const nombre = prompt("Ingrese nombre");
  const nota = parseFloat(prompt("Ingrese nota"));
  if (nombre && !isNaN(nota) && nota >= 0 && nota <= 10) {
    const nuevoEstudiante = Object.create(estudiante);
    nuevoEstudiante.setNombre = nombre;
    nuevoEstudiante.setNota = nota;
    estudiantes.push(nuevoEstudiante);
  } else {
    document.writeln("Datos no válidos");
  }
} while (confirm("¿Agregar más datos?"));

if (estudiantes.length > 0) {
    const notaMedia = estudiante.calcularNotaMedia(estudiantes); 
    document.writeln(`<h3>La nota media de los estudiantes es: ${notaMedia.toFixed(2)}</h3>`);
  } else {
    document.writeln("No se ingresaron estudiantes.");
  }
