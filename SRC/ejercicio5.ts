// Ejercicio 5: Clase Electrodoméstico
class Electrodomestico {
  precio: number;
  color: string;

  constructor(precio: number, color: string) {
    this.precio = precio;
    this.color = color;
  }
}

class Televisor extends Electrodomestico {
  // Propiedades y métodos específicos de Televisor
}

class Nevera extends Electrodomestico {
  // Propiedades y métodos específicos de Nevera
}

class Lavadora extends Electrodomestico {
  // Propiedades y métodos específicos de Lavadora
}

// Crear objetos de las subclases Electrodomestico
const televisor = new Televisor(1000, "Negro");
const nevera = new Nevera(1500, "Blanco");
const lavadora = new Lavadora(1200, "Gris");

// Interactuar con las propiedades de los objetos Electrodomestico
console.log(televisor.precio); // 1000
console.log(nevera.color); // Blanco
console.log(lavadora.precio); // 1200
