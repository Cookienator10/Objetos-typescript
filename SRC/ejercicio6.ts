// Ejercicio 6: Clase Hotel
class Hotel {
    nombre: string;
    ubicacion: string;
    habitaciones: Habitacion[];
  
    constructor(nombre: string, ubicacion: string) {
      this.nombre = nombre;
      this.ubicacion = ubicacion;
      this.habitaciones = [];
    }
  
    agregarHabitacion(habitacion: Habitacion) {
      this.habitaciones.push(habitacion);
    }
  
    reservarHabitacion(numeroHabitacion: number) {
      const habitacion = this.habitaciones.find(h => h.numero === numeroHabitacion);
      if (habitacion) {
        if (habitacion.estado === "Disponible") {
          habitacion.estado = "Reservada";
          console.log(`Se ha reservado la habitación ${numeroHabitacion}.`);
        } else {
          console.log(`La habitación ${numeroHabitacion} no está disponible.`);
        }
      } else {
        console.log(`La habitación ${numeroHabitacion} no existe.`);
      }
    }
  
    liberarHabitacion(numeroHabitacion: number) {
      const habitacion = this.habitaciones.find(h => h.numero === numeroHabitacion);
      if (habitacion) {
        if (habitacion.estado === "Reservada") {
          habitacion.estado = "Disponible";
          console.log(`Se ha liberado la habitación ${numeroHabitacion}.`);
        } else {
          console.log(`La habitación ${numeroHabitacion} no está reservada.`);
        }
      } else {
        console.log(`La habitación ${numeroHabitacion} no existe.`);
      }
    }
  }
  
  class Habitacion {
    numero: number;
    precio: number;
    estado: string;
  
    constructor(numero: number, precio: number) {
      this.numero = numero;
      this.precio = precio;
      this.estado = "Disponible";
    }
  }
  
  // Crear objetos Hotel y Habitacion
  const hotel1 = new Hotel("Hotel A", "Ciudad A");
  const habitacion1 = new Habitacion(101, 100);
  const habitacion2 = new Habitacion(102, 150);
  
  // Agregar habitaciones al hotel
  hotel1.agregarHabitacion(habitacion1);
  hotel1.agregarHabitacion(habitacion2);
  
  // Interactuar con las habitaciones del hotel
  hotel1.reservarHabitacion(101); // Se ha reservado la habitación 101.
  hotel1.reservarHabitacion(102); // Se ha reservado la habitación 102.
  hotel1.liberarHabitacion(101); // Se ha liberado la habitación 101.
  
  