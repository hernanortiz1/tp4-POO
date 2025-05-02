/*
Crea un objeto llamado auto que tenga algunas características como el color,
marca, modelo y si está encendido o apagado. Crea los métodos necesarios para
permitir encender y apagar el auto.
*/

const Auto = {
  color: "rojo",
  marca: "Toyota",
  modelo: "2010",
  motor: "1.8",
  transmicion: "manual",
  capacidadBaul: "440 litros",
  asientos: "5",
  funcionando: false,

  encender: function () {
    if (!this.funcionando) {
      this.funcionando = true;
      document.writeln(`<p>El auto esta encendido</p>`);
    }
  },
  apagar: function () {
    if (this.funcionando) {
      this.funcionando = false;
      document.writeln(`<p>El auto esta apagado</p>`);
    } else {
      document.writeln(`<p>El auto ya estaba apagado</p>`);
    }
  },
};

while (true) {
  const entrada = prompt("ingrese: encender o apagar");

  if (entrada === null) {
    break;
  }

  if (entrada === "encender") {
    Auto.encender();
  } else if (entrada === "apagar") {
    Auto.apagar();
  } else {
    alert("ingrese un valor valido (encender o apagar)");
  }
}
