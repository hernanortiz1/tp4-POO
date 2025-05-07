/*
 Crear una clase Libro que contenga al menos las siguientes propiedades:
● ISBN
● Título
● Autor
● Número de páginas
Crear sus respectivos métodos get y set correspondientes para cada propiedad.
Crear el método mostrarLibro() para mostrar la información relativa al libro con el
siguiente formato:
“El libro xxx con ISBN xxx creado por el autor xxx tiene páginas xxx”
Crear al menos 2 objetos libros y utilizar el método mostrarLibro();
Por último, indicar cuál de los 2 objetos “libros” tiene más página
*/

class Libro {
  #isbn;
  #titulo;
  #autor;
  #numeroDePaginas;

  constructor(isbn, titulo, autor, numeroDePaginas) {
    this.#isbn = isbn;
    this.#titulo = titulo;
    this.#autor = autor;
    this.#numeroDePaginas = numeroDePaginas;
  }

  get getIsbn() {
    return this.#isbn;
  }

  set setIsbn(nuevoIsbn) {
    this.#isbn = nuevoIsbn;
  }

  get getTitulo() {
    return this.#titulo;
  }

  set setTitulo(nuevoTitulo) {
    this.#titulo = nuevoTitulo;
  }
  get getAutor() {
    return this.#autor;
  }

  set setAutor(nuevoAutor) {
    this.#autor = nuevoAutor;
  }
  get getNumeroDePaginas() {
    return this.#numeroDePaginas;
  }

  set setNumeroDePaginas(nuevoNumDePaginas) {
    this.#numeroDePaginas = nuevoNumDePaginas;
  }

  mostrarLibro() {
    document.writeln(`<p>El libro ${this.getTitulo} con ISBN ${this.getIsbn}
        creado por el autor ${this.getAutor} tiene páginas ${this.getNumeroDePaginas}</p>`);
  }

}

const libros = [
  new Libro("978", "Cien años de soledad", "Gabriel García Márquez", 417),
  new Libro("979", "1984", "George Orwell", 528),
  new Libro("980", "Don Quijote", "Miguel de Cervantes", 863),
  new Libro("981", "El Principito", "Antoine de Saint-Exupéry", 96),
];

for (let i = 0; i < libros.length; i++) {
  libros[i].mostrarLibro();
}

let libroConMasPaginas = libros[0];

for (let i = 1; i < libros.length; i++) {
  if (libros[i].getNumeroDePaginas > libroConMasPaginas.getNumeroDePaginas) {
    libroConMasPaginas = libros[i];
  }
}

document.writeln(
  `<p>El libro con más páginas es "${libroConMasPaginas.getTitulo}" del autor ${libroConMasPaginas.getAutor}, 
  con ${libroConMasPaginas.getNumeroDePaginas} páginas.</p>`
);
