//Se crea una clase a la cual se le pasan 7 parametros a un constructor
class Biblioteca{
    //constructor es utilizada para crear objetos e inicializar las propiedades del objeto
    constructor(nombre, autor, codigo, año_p, cantidad, precio, costo){
        //This se usa para hacer referencia a las variables.
        this.nombre = nombre || " ";  //Si no se asigna un valor imprimirá una cadena vacia
        this.autor = autor || " ";
        this.codigo = codigo || " ";
        this.año_p = año_p || 0;      //Si no se asigna un valor imprimirá 0
        this.cantidad = cantidad || 0;
        this.precio = precio || 0;
        this.costo = costo || 0;
    }

    //Metodo que almacena y calcula el precio menos costo
    ganancia(){
        return this.precio - this.costo;
    }

}

// Un array que guarda los objetos que estan dentro de la clase Biblioteca
const libros = [
    new Biblioteca(
    "Harry Potter y la piedra filosofal",
    "J.K Rowling",
    "HPJK1997",
    1997,
    90,
    10000,
    8500
    ),

    new Biblioteca(
    "Los juegos del hambre",
    "Suzane Collins",
    "JHSC2008",
    2008,
    150,
    45000,
    9000
    ),

    new Biblioteca(
    "El Hobbit",
    "J.R.R. Tolkien",
    "EHJR1937",
    1937,
    200,
    25000,
    19000
    ),

    new Biblioteca(
    "Hamlet",
    "William Shakespeare",
    "HWS1589",
    1589,
    20,
    15000,
    1300
    ),
];

//Una variable que almacena las condiciones a usar usando metodo find, para que busque en el arreglo un libro que cumplas las condiciones
let libroVender = libros.find((libro) => libro.cantidad >= 100 && libro.ganancia() > 14000);

if(libroVender){
    console.log(`el libro ${libroVender.nombre} escrito por ${libroVender.autor} en el año ${libroVender.año_p} con el codigo ${libroVender.codigo} y precio de ${libroVender.precio} es la mejor opción a vender`);
} else{
    console.log("Ninguno de los libros es la mejor opción");
}