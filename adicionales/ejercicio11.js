/*
Crea un objeto persona que contenga las propiedades nombre, edad 
y hobbies (los hobbies son un array de strings). Luego, escribe una función 
que reciba un objeto persona y un nuevo hobby y añada este hobby a la lista de hobbies de la persona. 
Finalmente, imprime los hobbies de la persona usando un bucle. Usa prompt para ingresar los datos de la 
persona y el nuevo hobby.
*/

const persona = {
  nombre: prompt("Ingrese su nombre:"),
  edad: parseInt(prompt("Ingrese su edad:"), 10),
  hobbies: [],

  agregarHobbie: function (elemento) {
    this.hobbies.push(elemento);
  },

  mostrarHobbies: function () {
    document.write("<h3>Lista de hobbies:</h3>");
    for (let i = 0; i < this.hobbies.length; i++) {
      document.write(`<ul>
        <li>Nombre: ${this.nombre}</li>
        <li>Edad: ${this.edad}</li>
        <li>Hobbie: ${this.hobbies[i]}</li>
        </ul>`);
    }
  },
};

do {

    
  if (entrada === null) {
    break;
  }
  if (isNaN(entrada)) {
    persona.agregarHobbie(entrada);
  }
} while (confirm("¿Agregar más datos?"));

persona.mostrarHobbies();
