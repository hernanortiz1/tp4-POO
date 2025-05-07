/*
Crea una clase llamada "Animal" que tenga las propiedades "nombre" y "edad", y
el método "emitirSonido". Luego, crea dos clases hijas llamadas "Perro" y "Gato"
que hereden de "Animal" y tengan su propio método "emitirSonido". Finalmente,
crea dos objetos, uno de la clase "Perro" y otro de la clase "Gato", y llama a sus
métodos "emitirSonido" para verificar que cada animal emite el sonido adecuado.
*/

class Animal{
    #nombre
    #edad

    constructor(nombre, edad){
        this.#nombre = nombre
        this.#edad = edad
    }

    get getNombre(){
        return this.#nombre;
    }

    set setNombre(nuevoNombre){
        this.#nombre = nuevoNombre;
    }

    get getEdad(){
        return this.#edad;
    }

    set setEdad(nuevaEdad){
        this.#edad = nuevaEdad;
    }

    emitirSonido(){
        document.writeln(`<p>${this.getNombre} hacer un sonido</p>`)
    }
}

class Perro extends Animal{
    emitirSonido(){
        document.writeln(`<p>${this.getNombre} edad ${this.getEdad} dice GUAU!</p>`)
    }
}

class Gato extends Animal{
    emitirSonido(){
        document.writeln(`<p>${this.getNombre} edad ${this.getEdad} dice MIAU!</p>`)
    }
}

const perro = new Perro("Firulais", 9)
const gato = new Gato("Michi", 7)

perro.emitirSonido();
gato.emitirSonido();
