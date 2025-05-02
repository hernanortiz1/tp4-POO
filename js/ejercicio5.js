/*
Crea una clase llamada Persona que siga las siguientes condiciones:
Sus propiedades son: nombre, edad, DNI, sexo (H hombre, M mujer), peso y altura,
año de nacimiento. Si quieres añadir alguna propiedad extra puedes hacerlo.
Los métodos que se debe poder utilizar son:
mostrarGeneracion: este método debe mostrar un mensaje indicando a qué
generación pertenece la persona creada y cual es el rasgo característico de esta
generación.
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
    this.#nombre = nuevaEdad;
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

  mostrarGeneracion(anioNacimiento) {
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

  esMayorDeEdad(edad) {
    if (edad >= 18) {
      document.writeln(`<p>Es mayor de edad</p>`);
    } else {
      document.writeln(`<p>Es menor de edad</p>`);
    }
  }

  mostrarDatos() {
    document.writeln(`<ul>
      <li>nombre ${this.#nombre} </li>
        <li>apellido ${this.#edad} </li>
        <li>dni ${this.#sexo} </li>
        <li>email ${this.#peso} </li>
        <li>edad ${this.#altura} </li>
        <li>edad ${this.#anioNacimiento} </li>
      </ul>`);
  }

  generaDNI() {
    return Math.floor(Math.random() * 8) + 1;
  }
}
