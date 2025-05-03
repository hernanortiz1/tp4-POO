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
        creado por el autor ${this.getAutor} tiene páginas ${this.getNumeroDePaginas}</p>`)
  }

  static mayorCantidadDePaginas(libro1, libro2){
    if(libro1.getNumeroDePaginas > libro2.getNumeroDePaginas){
        document.writeln(`<p>El libro ${libro1.getTitulo} tiene más páginas (${libro1.getNumeroDePaginas})</p>`)
    }else if(libro2.getNumeroDePaginas > libro1.getNumeroDePaginas){
        document.writeln(`<p>El libro ${libro2.getTitulo} tiene más páginas (${libro2.getNumeroDePaginas})</p>`)
    }else {
        document.writeln(`<p>Misma cantidad de páginas</p>`)
    }
  }
}

const libro1 = new Libro("978", "tiulo de libro 1", "Gabriel García Márquez", 417);
const libro2 = new Libro("979", "tiulo de libro 2", "George Orwel", 528);
libro1.mostrarLibro();
libro2.mostrarLibro();

Libro.mayorCantidadDePaginas(libro1, libro2)
