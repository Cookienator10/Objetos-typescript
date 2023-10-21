// Ejercicio 7: Clase Película y CatalogoPeliculas
class Pelicula {
    titulo: string;
    duracion: number;
    director: string;
  
    constructor(titulo: string, duracion: number, director: string) {
      this.titulo = titulo;
      this.duracion = duracion;
      this.director = director;
    }
  }
  
  class CatalogoPeliculas {
    peliculas: Pelicula[];
  
    constructor() {
      this.peliculas = [];
    }
  
    agregarPelicula(pelicula: Pelicula) {
      this.peliculas.push(pelicula);
    }
  
    buscarPorTitulo(titulo: string) {
      const pelicula = this.peliculas.find(p => p.titulo === titulo);
      if (pelicula) {
        console.log(`Se encontró la película "${titulo}".`);
      } else {
        console.log(`No se encontró la película "${titulo}".`);
      }
    }
  
    filtrarPorDirector(director: string) {
      const peliculasDirector = this.peliculas.filter(p => p.director === director);
      if (peliculasDirector.length > 0) {
        console.log(`Películas dirigidas por ${director}:`);
        peliculasDirector.forEach(p => console.log(p.titulo));
      } else {
        console.log(`No se encontraron películas dirigidas por ${director}.`);
      }
    }
  }
  
  // Crear objetos Pelicula y CatalogoPeliculas
  const pelicula1 = new Pelicula("Pelicula 1", 120, "Director A");
  const pelicula2 = new Pelicula("Pelicula 2", 90, "Director B");
  const pelicula3 = new Pelicula("Pelicula 3", 105, "Director A");
  
  const catalogo = new CatalogoPeliculas();
  
  // Agregar películas al catálogo
  catalogo.agregarPelicula(pelicula1);
  catalogo.agregarPelicula(pelicula2);
  catalogo.agregarPelicula(pelicula3);
  
  // Buscar películas por título y filtrar por director
  catalogo.buscarPorTitulo("Pelicula 1"); // Se encontró la película "Pelicula 1".
  catalogo.buscarPorTitulo("Pelicula 4"); // No se encontró la película "Pelicula 4".
  catalogo.filtrarPorDirector("Director A"); // Películas dirigidas por Director A: Pelicula 1, Pelicula 3
  catalogo.filtrarPorDirector("Director C"); // No se encontraron películas dirigidas por Director C.