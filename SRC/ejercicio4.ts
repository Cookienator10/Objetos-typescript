
  // Ejercicio 4: Clase FiguraGeometrica
  abstract class FiguraGeometrica {
    abstract area(): number;
  }
  
  class Triangulo extends FiguraGeometrica {
    base: number;
    altura: number;
  
    constructor(base: number, altura: number) {
      super();
      this.base = base;
      this.altura = altura;
    }
  
    area() {
      return (this.base * this.altura) / 2;
    }
  }
  
  class Circulo extends FiguraGeometrica {
    radio: number;
  
    constructor(radio: number) {
      super();
      this.radio = radio;
    }
  
    area() {
      return Math.PI * Math.pow(this.radio, 2);
    }
  }
  
  class Cuadrado extends FiguraGeometrica {
    lado: number;
  
    constructor(lado: number) {
      super();
      this.lado = lado;
    }
  
    area() {
      return Math.pow(this.lado, 2);
    }
  }
  
  // Crear objetos de las subclases FiguraGeometrica
  const triangulo = new Triangulo(5, 8);
  const circulo = new Circulo(3);
  const cuadrado = new Cuadrado(4);
  
  // Calcular áreas de los objetos FiguraGeometrica
  console.log(triangulo.area()); // 20
  console.log(circulo.area()); // 28.274333882308138
  console.log(cuadrado.area()); // 16
  