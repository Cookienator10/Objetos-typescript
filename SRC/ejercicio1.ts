// Ejercicio 1: Clase Persona
class Persona {
    nombre: string;
    edad: number;
    documentoIdentidad: string;
  
    constructor(nombre: string, edad: number, documentoIdentidad: string) {
      this.nombre = nombre;
      this.edad = edad;
      this.documentoIdentidad = documentoIdentidad;
    }
  
    caminar() {
      console.log(`${this.nombre} está caminando.`);
    }
  
    hablar() {
      console.log(`${this.nombre} está hablando.`);
    }
  
    comer() {
      console.log(`${this.nombre} está comiendo.`);
    }
  }
  
  // Crear objetos Persona
  const persona1 = new Persona("Santiago", 25, "123456789");
  const persona2 = new Persona("María", 30, "987654321");
  
  // Interactuar con las propiedades y métodos de los objetos Persona
  console.log(persona1.nombre); // Santiago
  console.log(persona2.edad); // 30
  persona1.caminar(); // Santiago está caminando.
  persona2.hablar(); // María está hablando.
  persona1.comer(); // Santiago está comiendo.
  
  