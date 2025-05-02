/*
Escribe una clase Producto para crear objetos. Estos objetos, deben presentar
las propiedades código, nombre y precio, además del método imprime datos, el
cual escribe por pantalla los valores de sus propiedades.
Posteriormente, cree tres instancias de este objeto y guárdalas en un array.
Por último, utilice el método imprime datos para mostrar por pantalla los valores
de los tres objetos instanciados.
*/

class Producto {
  #codigo;
  #nombre;
  #precio;

  constructor(codigo, nombre, precio) {
    this.#codigo = codigo;
    this.#nombre = nombre;
    this.#precio = precio;
  }

  get getCodigo() {
    return this.#codigo;
  }

  set setCodigo(nuevoCodigo) {
    this.#codigo = nuevoCodigo;
  }

  get getNombre() {
    return this.#nombre;
  }

  set setNombre(nuevoNombre) {
    this.#nombre = nuevoNombre;
  }

  get getPrecio() {
    return this.#precio;
  }

  set setPrecio(nuevoPrecio) {
    this.#precio = nuevoPrecio;
  }

  mostrarResultado() {
    document.writeln(`<ul>:
            <li>Codigo: ${this.getCodigo}</li>
             <li>Nombre: ${this.getNombre}</li>
             <li>Precio: ${this.getPrecio}</li>
             </ul>`);
  }
}
