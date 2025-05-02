/*
Escribe una clase que permita crear distintos objetos “rectángulos”, con las
propiedades de alto y ancho, mas los métodos necesarios para modificar y
mostrar sus propiedades, calcular el perímetro y el área
*/

class Rectangulo {
  #base;
  #altura;

  constructor(base, altura) {
    this.#base = base;
    this.#altura = altura;
  }

  get getBase() {
    return this.#base;
  }

  set setBase(nuevaBase) {
    this.#base = nuevaBase;
  }

  get getAltura() {
    return this.#altura;
  }

  set setAltura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }

  calcularPerimetro() {
    return 2 * (this.#base + this.#altura);
  }

  calcularArea() {
    return this.#base * this.#altura;
  }

  mostrarResultado() {
    document.writeln(
      `<p>Perimetro: ${this.calcularPerimetro()} Area: ${this.calcularArea()}</p>`
    );
  }
}

let rectangulo1;
do {
  const base = parseInt(prompt("Ingrese base"));
  const altura = parseInt(prompt("Ingrese altura"));

  if (!isNaN(base) && !isNaN(altura)) {
    rectangulo1 = new Rectangulo(base, altura);
    rectangulo1.mostrarResultado();
  } else {
    document.writeln("<p>Ingrese valores validos</p>");
  }
} while (confirm("¿ingresar nuevamente datos?"));

