/*
Nos piden realizar una agenda telefónica de contactos.
Un contacto está definido por un nombre y un teléfono. Se considera que un
contacto es igual a otro cuando sus nombres son iguales.
Una agenda de contactos está formada por un conjunto de contactos. Se podrá
crear de dos formas, indicando nosotros el tamaño o con un tamaño por defecto
(10).
Los métodos de la agenda serán los siguientes:
● aniadirContacto(Contacto): Añade un contacto a la agenda, sino la agenda
no puede almacenar más contactos indicar por pantalla.
● existeContacto(Contacto): indica si el contacto pasado existe o no.
● listarContactos(): Lista toda la agenda
● buscarContacto(nombre): busca un contacto por su nombre y muestra su
teléfono.
● eliminarContacto(Contacto c): elimina el contacto de la agenda, indica si se
ha eliminado o no por pantalla
● agendaLlena(): indica si la agenda está llena.
● huecosLibres(): indica cuántos contactos más podemos ingresar.
Crea un menú con opciones que serán seleccionadas por el usuario usando un
prompt, las salidas de las operaciones seleccionadas por el usuario se pueden
mostrar en pantalla y por consola.
*/

class Contacto {
  #nombre;
  #telefono;

  constructor(nombre, telefono) {
    this.#nombre = nombre;
    this.#telefono = telefono;
  }

  get getNombre() {
    return this.#nombre;
  }

  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get getTelefono() {
    return this.#telefono;
  }

  set setTelefono(nuevoTelefono) {
    this.#telefono = nuevoTelefono;
  }
}

class Agenda {
  constructor(tamanio = 10){
    this.tamanio = tamanio;
    this.contactos = []
  }

  aniadirContacto(contacto){
    if(this.contactos.length >= this.tamanio){
      alert("Agenda llena");
      console.log("Agenda llena");
      return;
    }
    if (this.contactos.some(c => c.getNombre() === contacto.getNombre())) {
      alert("El contacto ya existe");
    } else {
      this.contactos.push(contacto);
      alert("Contacto añadido.");
    }
  }

  listarContacto(nombre){
    const contacto = this.contactos.find(c => c.getNombre() === nombre);
    if (contacto) {
      alert(`Teléfono: ${contacto.getTelefono()}`);
    } else {
      alert("Contacto no encontrado.");
    }
  }

  eliminarContacto(nombre){
    const index = this.contactos.findIndex(c => c.getNombre() === nombre);
    if (index !== -1) {
      this.contactos.splice(index, 1);
      alert("Contacto eliminado.");
    } else {
      alert("Contacto no encontrado.");
    }
  }
}

const tamanioAgenda = parseInt(
  prompt(
    `Seleccione una opción:
    1. Crear agenda (indicar tamaño)
    2. Crear agenda por defecto (Tamaño: 10 contactos)`
  )
);

if(tamanioAgenda === 1){
  const tamanio = parseInt(prompt("Ingrese tamaño de la agenda:"));
  agenda = new Agenda(tamanio);
} else {
  agenda = new Agenda(); // por defecto 10 1
}
  
let opcion;
  do{
    const opcion = parseInt(
      prompt(
        `Seleccione una opción:
        1. Añadir contacto
        2. Listar contactos
        3. Buscar contacto
        4. Eliminar contacto
        5. Salir`
      )
    );
    
    switch (opcion) {
      case 1:
      const nombre= prompt(`Ingrese nombre: `)
      const telefono = parseInt(prompt(`Ingrese teléfono: `))
      const nuevo = new Contacto(nombre, telefono);
      agenda.aniadirContacto(nuevo);

      break;
    
      case 2:
      
      
      break;
    
      case 3:
       
      break;
    
      case 4:
        
      break;

      case 5:
          document.writeln("Cerrando sistema");
        break;
      default:
        document.writeln("opcion invalida");
    }
  
  }while(confirm("¿Ingresar otra opcion?"))


