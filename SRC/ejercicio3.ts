// Ejercicio 3: Clase Vehículo
class Vehiculo {
    desplazarse() {
      console.log("El vehículo se está desplazando.");
    }
  }
  
  class Coche extends Vehiculo {
    desplazarse() {
      console.log("El coche se está desplazando por tierra.");
    }
  }
  
  class Barco extends Vehiculo {
    desplazarse() {
      console.log("El barco se está desplazando por agua.");
    }
  }
  
  class Avion extends Vehiculo {
    desplazarse() {
      console.log("El avión se está desplazando por aire.");
    }
  }
  
  // Crear objetos de las subclases Vehículo
  const coche = new Coche();
  const barco = new Barco();
  const avion = new Avion();
  
  // Probar los métodos de los objetos Vehículo
  coche.desplazarse(); // El coche se está desplazando por tierra.
  barco.desplazarse(); // El barco se está desplazando por agua.
  avion.desplazarse(); // El avión se está desplazando por aire.
  
  