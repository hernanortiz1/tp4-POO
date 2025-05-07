/*
 crear una clase aeropuerto con las propiedades nombreAeropuerto y lista de
aviones, esta clase deberá contener el método agregarAvion, el cual recibirá un
objeto de tipo Avión, además de un método buscarAvion el cual recibirá el nombre
de un avión y devolverá información en caso de encontrarlo, si no lo encontró
indicar con un mensaje.
Por su parte los aviones tendrán las propiedades: nombre, capacidad, destino, lista
de pasajeros. Los aviones tienen el método abordar el cual permite que un
pasajero suba al avión solo si hay capacidad disponible en el mismo, caso
contrario mostrar un mensaje que indique que el avión está lleno.
Crear un objeto de tipo aeropuerto llamado "Aeropuerto Internacional", crear 3
objetos aviones con diferentes destinos. Agregar los 3 aviones al aeropuerto,
buscar un avión y usar el método abordar.
*/

class Aeropuerto {
  #nombreAeropuerto;
  #listaAviones;

  constructor(nombreAeropuerto) {
    this.#nombreAeropuerto = nombreAeropuerto;
    this.#listaAviones = [];
  }

  get getNombreAeropuerto() {
    return this.#nombreAeropuerto;
  }

  set setNombre(nuevoNombreAeropuerto) {
    this.#nombreAeropuerto = nuevoNombreAeropuerto;
  }

  get getListadoAviones() {
    return this.#listaAviones;
  }

  agregarAvion(avion) {
    this.#listaAviones.push(avion);
  }

  buscarAvion(nombreAvion) {
    const avion = this.#listaAviones.find(
      (elemento)=>elemento.getNombreAvion === nombreAvion
    );
    if (avion) {
      document.writeln(`<h3>Avión encontrado</h3>`);
      document.writeln(`<ul>
        <li>Nombre: ${avion.getNombreAvion} </li>
        <li>Destino: ${avion.getDestino}</li>
        <li>Capacidad restante: ${avion.getCapacidad}</li>
        <li>Pasajeros: ${avion.getListaDePasajeros.join(", ")}</li>
        </ul>`);
    } else {
      document.writeln(`<p>Avión No encontrado</p>`);
    }
  }
}

class Avion {
  #nombreAvion;
  #capacidad;
  #destino;
  #listaDePasajeros;

  constructor(nombreAvion, capacidad, destino) {
    this.#nombreAvion = nombreAvion;
    this.#capacidad = capacidad;
    this.#destino = destino;
    this.#listaDePasajeros = [];
  }

  get getNombreAvion() {
    return this.#nombreAvion;
  }

  set setNombreAvion(nuevoNombreAvion) {
    this.#nombreAvion = nuevoNombreAvion;
  }

  get getCapacidad() {
    return this.#capacidad;
  }

  set setCapacidad(nuevaCapacidad) {
    this.#capacidad = nuevaCapacidad;
  }

  get getDestino() {
    return this.#destino;
  }

  set setDestino(nuevoDestino) {
    this.#destino = nuevoDestino;
  }

  get getListaDePasajeros() {
    return this.#listaDePasajeros;
  }

  abordar(pasajero) {
    if (this.#listaDePasajeros.length < this.#capacidad) {
      this.#listaDePasajeros.push(pasajero)
      document.writeln(`<p>${pasajero} ha abordado el avión ${this.#nombreAvion}.</p>`);
    } else {
      alert(`No hay más lugares disponibles en ${this.getNombreAvion}`);
    }
  }
}

const aeropuerto1 = new Aeropuerto("Aeropuerto internacional");

const avion1 = new Avion("Avion1", 2, "Miami");
const avion2 = new Avion("Avion2", 3, "Madrid");
const avion3 = new Avion("Avion3", 4, "Buenos Aires");

aeropuerto1.agregarAvion(avion1);
aeropuerto1.agregarAvion(avion2);
aeropuerto1.agregarAvion(avion3);

avion1.abordar("Hernán");
avion1.abordar("Luis");

aeropuerto1.buscarAvion("Avion1");