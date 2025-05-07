/*
Crea un objeto persona que contenga las propiedades nombre, edad 
y hobbies (los hobbies son un array de strings). Luego, escribe una función 
que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la 
persona y el nuevo hobby.
*/

const persona = {
  nombre: "",
  edad: 0,
  hobbies: [],

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

  get getEdad() {
    return this.edad;
  },

  set setEdad(NuevaEdad) {
    if (!isNaN(NuevaEdad) && NuevaEdad > 0) {
      this.edad = NuevaEdad;
    } else {
      document.writeln("La edad debe ser un número positivo");
      console.log("La edad debe ser un número positivo");
    }
  },

  get getHobbies() {
    return this.hobbies;
  },

  agregarHobbie: function (elemento) {
    this.hobbies.push(elemento);
  },

  mostrarHobbies: function () {
    document.writeln(`<h3>Lista de hobbies:</h3>`);
    for (let i = 0; i < this.hobbies.length; i++) {
      document.writeln(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>Hobbie: ${this.hobbies[i]}</li>
        </ul>`);
    }
  },
};

persona.setNombre = prompt("Ingrese nombre");
persona.setEdad = parseInt(prompt("Ingrese edad"));
persona.agregarHobbie(prompt("Ingrese hobbie"));

do {
  const entrada = prompt("Ingrese un nuevo hobbie (o 'cancelar' para salir):");
  if (entrada === null || entrada.trim() === "") {
    break;
  }
  persona.agregarHobbie(entrada);
} while (confirm("¿Agregar más hobbies?"));

persona.mostrarHobbies();
