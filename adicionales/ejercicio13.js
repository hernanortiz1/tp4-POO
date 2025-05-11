/*
Crea un objeto libro que tenga propiedades título, autor, año y género. 
Luego, escribe una función que reciba un array de libros y un género y
 devuelva un array con los libros de ese género usando filter. Usa prompt para ingresar los 
 datos de los libros y el género.
*/

const libro = {
  titulo: "",
  autor: "",
  anio: 0,
  genero: "",
};

const libros = [];
do {
  const titulo = prompt("Ingrese titulo");
  const autor = prompt("Ingrese autor");
  const anio = parseInt(prompt("Ingrese año"));
  const genero = prompt("Ingrese género").toLowerCase();

  if (titulo && autor && !isNaN(anio) && genero) {
    libros.push({ titulo, autor, anio, genero });
  } else {
    alert("Datos inválidos, intenta nuevamente.");
  }
} while (confirm("¿Agregar otro libro?"));

const filtroGeneroLibro = () => {};
