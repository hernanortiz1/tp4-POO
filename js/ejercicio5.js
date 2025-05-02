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
      document.writeln(`<p>Silent Generation, Austeridad</p>`);
    } else if (anioNacimiento >= 1949 && anioNacimiento <= 1968) {
      document.writeln(`<p>Baby Boom, Ambición</p>`);
    } else if (anioNacimiento >= 1969 && anioNacimiento <= 1980) {
      document.writeln(`<p>Generación X, Obsesión por el exito</p>`);
    } else if (anioNacimiento >= 1981 && anioNacimiento <= 1993) {
      document.writeln(`<p>Generación Y, Frustración</p>`);
    } else if (anioNacimiento >= 1994 && anioNacimiento <= 2010) {
      document.writeln(`<p>Generación Z, Irreverencia</p>`);
    }
  }

  esMayorDeEdad() {
    if (this.#edad >= 18) {
      document.writeln(`<p>Es mayor de edad</p>`);
    } else {
      document.writeln(`<p>Es menor de edad</p>`);
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
