/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
esMayorDeEdad: indica si es mayor de edad, devuelve un mensaje indicando que la
persona es mayor de edad.
mostrarDatos: devuelve toda la información del objeto.
generaDNI(): genera un número aleatorio de 8 cifras.
*/

class Persona {
  #nombre;
  #edad;
  #dni;
  #sexo;
  #peso;
  #altura;
  #anioNacimiento;

  constructor(nombre, edad, dni, sexo, peso, altura, anioNacimiento) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#dni = dni;
    this.#sexo = sexo;
    this.#peso = peso;
    this.#altura = altura;
    this.#anioNacimiento = anioNacimiento;
  }

  get getNombre() {
    return this.#nombre;
  }

  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get getEdad() {
    return this.#edad;
  }

  set setEdad(nuevaEdad) {
    this.#edad = nuevaEdad;
  }

  get getDni() {
    return this.#dni;
  }

  set setDni(nuevoDni) {
    this.#dni = nuevoDni;
  }

  get getSexo() {
    return this.#sexo;
  }

  set setSexo(nuevoSexo) {
    this.#sexo = nuevoSexo;
  }

  get getPeso() {
    return this.#peso;
  }

  set setPeso(nuevoPeso) {
    this.#peso = nuevoPeso;
  }

  get getAltura() {
    return this.#altura;
  }

  set setAltura(nuevaAltura) {
    this.#altura = nuevaAltura;
  }

  get getAnioNacimiento() {
    return this.#anioNacimiento;
  }

  set setAnioNacimiento(nuevoAnioNacimiento) {
    this.#anioNacimiento = nuevoAnioNacimiento;
  }

  mostrarGeneracion() {
    const anioNacimiento = this.#anioNacimiento;
    if (anioNacimiento >= 1930 && anioNacimiento <= 1948) {
      document.writeln(`<p>${this.#nombre} pertenece a Silent Generation, Caracteristica: Austeridad</p>`);
    } else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
      document.writeln(`<p>${this.#nombre} pertenece a Baby Boom, Caracteristica: Ambición</p>`);
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
      document.writeln(`<p>${this.#nombre} pertenece a Generación X, Caracteristica: Obsesión por el exito</p>`);
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
      document.writeln(`<p>${this.#nombre} pertenece a Generación Y, Caracteristica: Frustración</p>`);
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
      document.writeln(`<p>${this.#nombre} pertenece a Generación Z, Caracteristica: Irreverencia</p>`);
    }
  }

  esMayorDeEdad() {
    if (this.#edad >= 18) {
      document.writeln(`<p> ${this.#nombre} Es mayor de edad</p>`);
    } else {
      document.writeln(`<p>${this.#nombre} Es menor de edad</p>`);
    }
  }

  mostrarDatos() {
    document.writeln(`<ul>
      <li>Nombre ${this.#nombre} </li>
        <li>Edad ${this.#edad} </li>
        <li>Sexo ${this.#sexo} </li>
        <li>Peso ${this.#peso} </li>
        <li>Altura ${this.#altura} </li>
        <li>Año de nacimiento ${this.#anioNacimiento} </li>
      </ul>`);
  }

  generaDNI() {
    return Math.floor(10000000 + Math.random() * 90000000);
  }
}

const persona1 = new Persona("Hernán", 27, "4118", "H", 70, 170, 1998);
const persona2 = new Persona("Luis", 78, "1234", "H", 70, 180, 1947);
const persona3 = new Persona("Franco", 58, "4567", "H", 80, 170, 1967);
const persona4 = new Persona("Juan", 46, "1234", "H", 70, 180, 1979);
const persona5 = new Persona("Carlos", 33, "1234", "H", 70, 180, 1992);

persona1.mostrarDatos();
persona2.mostrarDatos();
persona3.mostrarDatos();
persona4.mostrarDatos();
persona5.mostrarDatos();

persona1.esMayorDeEdad();
persona2.esMayorDeEdad();
persona3.esMayorDeEdad();
persona4.esMayorDeEdad();
persona5.esMayorDeEdad();

persona1.mostrarGeneracion();
persona2.mostrarGeneracion();
persona3.mostrarGeneracion();
persona4.mostrarGeneracion();
persona5.mostrarGeneracion();

document.writeln(
  `<p>Nuevo DNI generado(${persona1.getNombre}): ${persona1.generaDNI()}</p>`
);
document.writeln(
  `<p>Nuevo DNI generado(${persona2.getNombre}): ${persona2.generaDNI()}</p>`
);
document.writeln(
  `<p>Nuevo DNI generado(${persona3.getNombre}): ${persona3.generaDNI()}</p>`
);
document.writeln(
  `<p>Nuevo DNI generado(${persona4.getNombre}): ${persona4.generaDNI()}</p>`
);
document.writeln(
  `<p>Nuevo DNI generado(${persona5.getNombre}): ${persona5.generaDNI()}</p>`
);
