/*const validarEdad = (edad) => edad >= 18



let edad = parseInt(prompt("ingrese su edad para verificar si eres mayor o menor a 18 años"))

while(edad <= 18){
if (validarEdad(edad)){
    console.log("bienvenidos a coder entradas esto son los artistas disponibles")
    for (let i = 0; i <evento.length; i ++){
        console.log(`${i + 1}. ${evento[i]}`)
    }
}else{
    console.log("lo sentimos eres menor")
    
}


}

const evento = ["las pastillas del abuelo", "duki","oasis", "qlokura", "airbag", "slash"]

evento.sort()



const continuar = () => prompt("¿eres mayor deseas seguir adelante? (si/no)").toLowerCase() !== "no";


    if (continuar()) {
        console.log("precio y fechas")
        const artista1 = { nombre: "las pastillas del abuelo", fecha: "20 de febrero del 2025", precio: "$45.000" }
        const artista2 = { nombre: "duki", fecha: "10 de marzo del 2025", precio: "$40000" }
        const artista3 = { nombre: "oasis", fecha: "04 de abril del 2025", precio: "$190000" }
        const artista4 = { nombre: "qlokura", fecha: "25 de febrero del 2025", precio: "$10000" }
        const artista5 = { nombre: "airbag", fecha: "09 de junio del 2025", precio: "$50000" }
        const artista6 = { nombre: "slash", fecha: "09 de septiembre del 2025", precio: "$70000" }
        const artistas = [artista1, artista2, artista3, artista4, artista5, artista6]
        for (const artista of artistas) {
            console.log("artista: " + artista.nombre + " precio: " + artista.precio)
        }
    } else {
        console.log("Gracias por visitarnos.");
}
   */     

/*

let recargo = 20

const precioRecargo = (a, recargo) => a + recargo
console.log(precioRecargo(70000, recargo)) 


*/

/*const evento = ["las pastillas del abuelo", "duki","oasis", "qlokura", "airbag", "slash"];
evento.sort();

const validarEdad = (edad) => edad >= 18;

let edad = parseInt(prompt("Ingrese su edad para verificar si eres mayor o menor a 18 años"));

while (!validarEdad(edad)) {
    console.log("Lo sentimos, eres menor.");
    edad = parseInt(prompt("Ingrese su edad de nuevo:"));
    if (!validarEdad(edad)) {
    console.log("Lo sentimos, no puedes acceder al contenido.");
    process.exit(); // Cierra el programa
    }
}

console.log("Bienvenidos a Coder Entradas. Estos son los artistas disponibles:");
for (let i = 0; i < evento.length; i++) {
    console.log(`${i + 1}. ${evento[i]}`);
}

const continuar = () => prompt("¿Deseas seguir adelante? (si/no)").toLowerCase() !== "no";

if (continuar()) {
    console.log("Precio y fechas");

    const artista1 = { nombre: "las pastillas del abuelo", fecha: "20 de febrero del 2025", precio: "$45.000" };
    const artista2 = { nombre: "duki", fecha: "10 de marzo del 2025", precio: "$40000" };
    const artista3 = { nombre: "oasis", fecha: "04 de abril del 2025", precio: "$190000" };
    const artista4 = { nombre: "qlokura", fecha: "25 de febrero del 2025", precio: "$10000" };
    const artista5 = { nombre: "airbag", fecha: "09 de junio del 2025", precio: "$50000" };
    const artista6 = { nombre: "slash", fecha: "09 de septiembre del 2025", precio: "$70000" };

    const artistas = [artista1, artista2, artista3, artista4, artista5, artista6];

    for (const artista of artistas) {
    console.log(`Artista: ${artista.nombre} - Precio: ${artista.precio}`);
    }
} else {
    console.log("Gracias por visitarnos.");
}
*/

const evento = ["las pastillas del abuelo", "duki","oasis", "qlokura", "airbag", "slash"];
evento.sort();

const validarEdad = (edad) => edad >= 18;

let edad = parseInt(prompt("Ingrese su edad para verificar si eres mayor o menor a 18 años"));

while (!validarEdad(edad)) {
  console.log("Lo sentimos, eres menor.");
  edad = parseInt(prompt("Ingrese su edad de nuevo:"));
  if (!validarEdad(edad)) {
    console.log("Lo sentimos, no puedes acceder al contenido.");
    process.exit(); // Cierra el programa
  }
}

console.log("Bienvenidos a Coder Entradas. Estos son los artistas disponibles:");
for (let i = 0; i < evento.length; i++) {
  console.log(`${i + 1}. ${evento[i]}`);
}

const continuar = () => prompt("¿Deseas seguir adelante? (si/no)").toLowerCase() !== "no";

if (continuar()) {
  console.log("Precio y fechas");

  const artista1 = { nombre: "las pastillas del abuelo", fecha: "20 de febrero del 2025", precio: "$45.000" };
  const artista2 = { nombre: "duki", fecha: "10 de marzo del 2025", precio: "$40000" };
  const artista3 = { nombre: "oasis", fecha: "04 de abril del 2025", precio: "$190000" };
  const artista4 = { nombre: "qlokura", fecha: "25 de febrero del 2025", precio: "$10000" };
  const artista5 = { nombre: "airbag", fecha: "09 de junio del 2025", precio: "$50000" };
  const artista6 = { nombre: "slash", fecha: "09 de septiembre del 2025", precio: "$70000" };

  const artistas = [
    artista1,
    artista2,
    artista3,
    artista4,
    artista5,
    artista6
  ];

  for (const artista of artistas) {
    console.log(`Artista: ${artista.nombre} - Precio: ${artista.precio}`);
  }

  let seleccion = prompt("Ingrese el número del artista que desea ver (1-6):");
  let artistaSeleccionado = artistas[seleccion - 1];

  if (artistaSeleccionado) {
    console.log(`Artista: ${artistaSeleccionado.nombre}`);
    console.log(`Fecha: ${artistaSeleccionado.fecha}`);
    console.log(`Precio: ${artistaSeleccionado.precio}`);
  } else {
    console.log("Lo sentimos, no se encontró el artista seleccionado.");
  }
} else {
  console.log("Gracias por visitarnos.");
}