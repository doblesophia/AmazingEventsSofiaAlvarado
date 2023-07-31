/**
 * 1. Crear una variable llamada miNombre y guardar en ella su primer nombre.
 */
let miNombre = "Sofía";
console.log(miNombre);

/**
 * 2Crear una variable llamada miApellido y guardar en ella su apellido.
 */
let miApellido ="Alvarado";
console.log(miApellido);

//3. Crear una variable llamada miEdad y guardar en ella su edad.
let miEdad =28;
console.log(miEdad);

//4.Crear una variable llamada miMascota y guardar en ella el nombre de su mascota.
let miMascota="Chica";
console.log(miMascota);

//5. Crear una variable llamada edadMascota y guardar en ella la edad de la mascota.
let edadMascota = 5;
console.log(edadMascota);

/**6. Visualizar todas las variables dentro de la consola del navegador escribiendo el
nombre de cada una de ellas.
 */
let nombreCompleto = miNombre + " " + miApellido;
console.log(nombreCompleto);

/*7.Crear una variable llamada nombreCompleto y guardar en ella la concatenación de
miNombre y miApellido. */
let textoPresentacion = `Hola, mi nombre es ${miNombre} ${miApellido}, tengo ${miEdad} y una perrita llamada ${miMascota}. Ella tiene ${edadMascota} años y estamos juntas desde que nació, ya que es hija de mi otra perrita, Pola.`
console.log(textoPresentacion)

/*9 Crear una variable sumaEdades, restaEdades, productoEdades, divisionEdades 
y calcular sus respectivas operaciones con las variables miEdad y edadMascota.*/
let sumaEdades = miEdad + edadMascota;
console.log(sumaEdades);

let restaEdades = miEdad - edadMascota;
console.log(restaEdades);

let productoEdades = miEdad * edadMascota;
console.log(productoEdades);

let divisionEdades = miEdad / edadMascota;
console.log(divisionEdades);

/*10.Crear un objeto llamado alumno con un mínimo de 5 propiedades, mostrar dicho
objeto utilizando console.table( ) y también mostrar cada una de las propiedades del
objeto por separado.*/

const alumno = {
    nombre: "Sofía",
    edad: 28,
    nacionalidad: "chilena",
    altura: 1.62,
    vision: "nula",
};

console.log(alumno.nombre);
console.log(alumno.edad);
console.log(alumno.nacionalidad);
console.log(alumno.altura);
console.log(alumno.vision);

/*11. Crear un objeto llamado mascota con un mínimo de 5 propiedades, mostrar dicho
objeto utilizando console.table( ) y también mostrar cada una de las propiedades del
objeto por separado.*/ 

const mascota = {
    nombre: "Chica",
    edad: 5,
    raza: "quiltro",
    pelaje: "café",
    personalidad: "no se queda quieta nunca"
};

console.table(mascota);
console.log(mascota.nombre);
console.log(mascota.edad);
console.log(mascota.raza);
console.log(mascota.pelaje);
console.log(mascota.personalidad);

/*12.Crear un array llamado frutas con un mínimo de 5 elementos y mostrar por consola el
array completo y cada uno de los elementos por separado. */
const frutas = ["pera", "manzana", "naranja", "frutilla", "plátano"];
console.log(frutas);
console.log(frutas[0]);
console.log(frutas[1]);
console.log(frutas[2]);
console.log(frutas[3]);
console.log(frutas[4]);




/*14.Crear un array llamado numeros con un mínimo de 5 elementos y mostrar por consola
14 el array completo y cada uno de los elementos por separado.*/

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
console.log(numeros[0]);
console.log(numeros[1]);
console.log(numeros[2]);
console.log(numeros[3]);
console.log(numeros[4]);

/*15. Crear un array llamado familia con un mínimo de 5 objetos y mostrar por consola el
array completo y cada uno de los elementos por separado. */

const familia = [
    {
        mama:"Rosa",
        altura: 1.57,
        nacionalidad: "chilena",
        calzado: 35
    },
    {
        hermano: "Héctor",
        altura: 1.80,
        nacionalidad: "chileno",
        calzado: 40
    },
    {
        abuela: "María",
        altura: 1.54,
        nacionalidad:"chilena",
        calzado: 35
    },
    {
        abuelo: "Germán",
        altura: 1.54,
        nacionalidad: "chileno",
        calzado: 37
    },
    {
        tio: "Víctor",
        altura:1.65,
        nacionalidad:"chileno",
        calzado: 37
    }
];
console.log(familia);
console.log(familia[0]);
console.log(familia[1]);
console.log(familia[2]);
console.log(familia[3]);
console.log(familia[4]);

console.log(familia[0].mama);
console.log(familia[0].altura);
console.log(familia[0].nacionalidad);
console.log(familia[0].calzado);

console.log(familia[1].hermano);
console.log(familia[1].altura);
console.log(familia[1].nacionalidad);
console.log(familia[1].calzado);

console.log(familia[2].abuela);
console.log(familia[2].altura);
console.log(familia[2].nacionalidad);
console.log(familia[2].calzado);

console.log(familia[3].abuelo);
console.log(familia[3].altura);
console.log(familia[3].nacionalidad);
console.log(familia[3].calzado);

console.log(familia[4].tio)
console.log(familia[4].altura)
console.log(familia[4].nacionalidad)
console.log(familia[4].calzado)

/*16.Crear una variable llamada textoAleatorio formando una frase con el segundo
elemento del array del punto 12, el cuarto elemento del punto 14 y el quinto objeto del
array del punto 15. */

const textoAleatorio = `Tengo un tío que se llama ${familia[4].tio}, mide ${familia[4].altura}, es ${familia[4].nacionalidad} y su calzado es de ${familia[4].calzado}.
Es fanático de una fruta llamada ${frutas[1]}, y se come ${numeros[3]} al día.`
console.log(textoAleatorio);

/*17.Utilizar prompt() para leer por pantalla mi edad y la edad de un compañero y mostrar
por consola los resultados de comparar los valores y guardarlos en variables llamadas
por ejemplo: edadesIguales, soyMayor, soyMenor, etc. y mostrar mensajes en consola
como los siguientes:
a. Mi edad es igual a la de mi compañero: false
b. Mi edad es mayor a la de mi compañero: true
c. Mi edad es menor a la de mi compañero: false */

let edadMia = prompt("Mi edad");

let edadCompanero = prompt("Edad de tu compañero");

let edadesIguales = edadMia === edadCompanero;
let soyMayor = edadMia > edadCompanero;
let soyMenor = edadMia < edadCompanero;

console.log("Mi edad es igual a la de mi compañero", edadesIguales);
console.log("Mi edad es mayor a la de mi compañero", soyMayor);
console.log("Mi edad es menor a la de mi compañero", soyMenor);

/*18.Introducir por pantalla la edad y la altura de una persona y guardarlas en variables
separadas y en una variable llamada puedeSubir el resultado de la operación
resultante de si la persona es mayor de 6 años y además tiene una altura mínima de
120 cm y mostrar por consola un mensaje como el siguiente: Puede subir a la
atracción y el valor de la variable resultante.*/

let edad = prompt("Edad en números");
let altura = prompt("altura en centímetros");

let puedeSubir = edad>6 && altura>= 120;
console.log("Puede subir a la atracción ", puedeSubir);

/*19. Introducir por pantalla el pase de una persona el cual puede ser “VIP”, “NORMAL” o
“LIMITADO”, el saldo que dispone y guardarlos en variables separadas. En una variable
llamada puedePasar guardar el resultado de la operación resultante de si la persona
tiene pase “VIP” o si posee un saldo mayor a 1000. Mostrando un mensaje que diga: La
persona puede pasar y el resultado de la variable. */

let pase = prompt("Ingresa tu pase");
let saldo = prompt("ingresa tu saldo");
let puedePasar = pase == "vip" || saldo >1000;
console.log("La persona puede pasar", puedePasar);


/*13.Compare su edad ingresada por pantalla con prompt( ) con el número 18 y guardarlo
en una variable llamada soyMayorDeEdad y mostrar por consola un mensaje que diga:
Soy mayor de edad y el valor de la variable. */
let edadIngresada = prompt("Ingresa tu edad");
let soyMayorDeEdad = edadIngresada>=18;
console.log("Soy mayor de edad", edadIngresada, soyMayorDeEdad)
