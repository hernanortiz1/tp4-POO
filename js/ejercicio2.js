/*
-Escribe un programa que cree un objeto "cuenta" con las siguientes propiedades:
● Una propiedad titular con el valor "Alex".
● Una propiedad saldo, teniendo como valor inicial 0.
● Un método ingresar() que permita añadir dinero a la cuenta, pasando la
cantidad como parámetro
● Un método extraer() que permita retirar la cantidad pasada como
parámetro.
● Un método informar() que retorne la información del estado de la cuenta.
Utiliza este objeto para mostrar la descripción, ingresar y extraer dinero y volver a
mostrar la descripción del estado de la cuenta.
*/

const cuenta = {
  titular: "Alex",
  saldo: 0,

  ingresar: function (cantidad) {
    if (cantidad > 0) {
      this.saldo += cantidad;
    } else {
      document.writeln("<p>Monto invalido</p>");
    }
  },
  extraer: function (cantidad) {
    if (cantidad > 0 && cantidad <= this.saldo) {
      this.saldo -= cantidad;
    } else {
      document.writeln(
        "<p>Monto invalido, no se puede extraer esa cantidad</p>"
      );
    }
  },
  informar: function () {
    document.writeln(`<ul>
        <li>Titular: ${this.titular}</li>
        <li>Saldo de la cuenta ${this.saldo}</li>
        </ul>`);
  },
};

let opcion;
do {
  opcion = parseInt(
    prompt(
      "Seleccione una opción: 1- información de cuenta, 2- ingresar dinero, 3- extraer dinero, 4- salir."
    )
  );

  switch (opcion) {
    case 1:
      cuenta.informar();
      break;

    case 2:
      const deposito = Number(prompt("Ingresa el monto a depositar"));
      console.log(deposito);

      cuenta.ingresar(deposito);

      document.writeln(`<p>Depositaste $${deposito}</p>`);
      cuenta.informar();
      break;

    case 3:
      const exraccion = Number(prompt("Ingresa el monto a extraer"));
      console.log(exraccion);

      cuenta.extraer(exraccion);

      document.writeln(`<p>Monto a extraer $${exraccion}</p>`);
      cuenta.informar();
      break;

    case 4:
      document.writeln("Cerrando el sistema...");
      break;

    default:
      document.writeln("Ingresaste una opción invalida");
  }
} while (opcion !== 4);
