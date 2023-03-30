class biblioteca{
    nombre;
    autor;
    codigo;
    año_p;
    cantidad;
    precio;
    costo;

    constructor(){
        this.nombre = "";
        this.autor = "";
        this.codigo = "";
        this.año_p = 0;
        this.cantidad = 0;
        this.precio = 0;
        this.costo = 0;
    }

    libroN(){ //Libro Nombre
        return this.nombre;
    }
    libroA(){ //Libro Autor
        return this.autor;
    }
    libroC(){ //Libro Cantidad
        return this.codigo;
    }
    libroAp(){ //Libro Año de publicacion
        return this.año_p;
    }
    libroP(){ //Libro Precio
        return this.precio;
    }
    libroCosto(){ //Libro costo
        return this.costo;
    }

}

let libro1 = new biblioteca();
libro1.nombre = "Harry Potter y la piedra filosofal";
libro1.autor = "J.K Rowling";
libro1.codigo = "HPJK1997";
libro1.año_p = 1997;
libro1.cantidad = 200;
libro1.precio = 25000;
libro1.costo = 9000;

let libro2 = new biblioteca();
libro2.nombre = "Los juegos del hambre";
libro2.autor = "Suzane Collins";
libro2.codigo = "JHSC2008";
libro2.año_p = 2008;
libro2.cantidad = 20;
libro2.precio = 27000;
libro2.costo = 12000;

let libro3 = new biblioteca();
libro3.nombre = "El Hobbit";
libro3.autor = "J.R.R. Tolkien";
libro3.codigo = "EHJR1937";
libro3.año_p = 1937;
libro3.cantidad = 100;
libro3.precio = 35000;
libro3.costo = 15000;

let libro4 = new biblioteca();
libro4.nombre = "Hamlet";
libro4.autor = "William Shakespeare";
libro4.codigo = "HWS1589";
libro4.año_p = 1589;
libro4.cantidad = 20;
libro4.precio = 26000;
libro4.costo = 13000;

let ganancia1 = (libro1.precio - libro1.costo);
let ganancia2 = (libro2.precio - libro2.costo);
let ganancia3 = (libro3.precio - libro3.costo);
let ganancia4 = (libro4.precio - libro4.costo);

// Harry Potter y la piedra filosofal
if(libro1.cantidad >= 100 && ganancia1 > 14000){
    let nombreLibro = libro1.libroN();
    let autorLibro = libro1.libroA();
    let codigoLibro = libro1.libroC();
    let añoLibro = libro1.libroAp();
    let precioLibro = libro1.libroP();
    console.log(`el libro ${nombreLibro} escrito por ${autorLibro} en el año ${añoLibro} con el codigo ${codigoLibro} y precio de ${precioLibro} es la mejor opción a vender`);
}
//Los juegos del hambre
else if(libro2.cantidad >= 100 && ganancia2 > 14000){
    let nombreLibro = libro2.libroN();
    let autorLibro = libro2.libroA();
    let codigoLibro = libro2.libroC();
    let añoLibro = libro2.libroAp();
    let precioLibro = libro2.libroP();
    console.log(`el libro ${nombreLibro} escrito por ${autorLibro} en el año ${añoLibro} con el codigo ${codigoLibro} y precio de ${precioLibro} es la mejor opción a vender`);
}
//El Hobbit
else if(libro3.cantidad >= 100 && ganancia3 > 14000){
    let nombreLibro = libro3.libroN();
    let autorLibro = libro3.libroA();
    let codigoLibro = libro3.libroC();
    let añoLibro = libro3.libroAp();
    let precioLibro = libro3.libroP();
    console.log(`el libro ${nombreLibro} escrito por ${autorLibro} en el año ${añoLibro} con el codigo ${codigoLibro} y precio de ${precioLibro} es la mejor opción a vender`);
}
//Hamlet
else if(libro4.cantidad >= 100 && ganancia4 > 14000){
    let nombreLibro = libro4.libroN();
    let autorLibro = libro4.libroA();
    let codigoLibro = libro4.libroC();
    let añoLibro = libro4.libroAp();
    let precioLibro = libro4.libroP();
    console.log(`el libro ${nombreLibro} escrito por ${autorLibro} en el año ${añoLibro} con el codigo ${codigoLibro} y precio de ${precioLibro} es la mejor opción a vender`);
} else{
    console.log("Ninguno de los libros es la mejor opción");
}
