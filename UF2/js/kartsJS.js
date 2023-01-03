//. Se quiere guardar, por orden de llegada, el número de Kart, el nombre del piloto y el tiempo que ha tardado al realizar la carrera

//Creamos la clase PilotKart para crear los objetos de los pilotos
class PilotKart {
    numeroKart;
    nombrePiloto;
    tiempo;

    constructor(numero, nombre, tiempo) {
        this.numeroKart = numero;
        this.nombrePiloto = nombre;
        this.tiempo = tiempo || 0;
    }
    //Funcion set() que asigna el tiempo a cada piloto
    setTiempo(number) {
        this.tiempo=number
    }
    //Funcion get() que devuelve el nombre de cada piloto
    getNombre() {
        return this.nombrePiloto;
    }

}

//Creamos los objetos de los pilotos
let kart1 = new PilotKart(1, "Lewis Hamilton");
let kart2 = new PilotKart(2, "Jules Bianchi",);
let kart3 = new PilotKart(3, "Sebestian Vettel ");
let kart4 = new PilotKart(4, "Michael Schumacher");
let kart5 = new PilotKart(5, "Kimi Raikkonen");

//Creamos un array para los pilotos
let pilotos = [];

//Los añadimos al array
pilotos.push(kart1);
pilotos.push(kart2);
pilotos.push(kart3);
pilotos.push(kart4);
pilotos.push(kart5);

//Funcion que asigna el tiempo a cada piloto por teclado
function tiempoPilotos() {
  //Pedimos tiempo, lo parseamos a un valor float y lo agregamos a cada piloto mediante la funcion setTiempo()
  for (let i = 0; i < pilotos.length; i++) {
    let tiempo = parseFloat(
      prompt("Introduce el tiempo del piloto " + pilotos[i].getNombre())
    );
    pilotos[i].setTiempo(tiempo);
    }
    //Llamamos a las otras dos funciones para imprimir los tiempos y ordenarlos
    imprimirPilotos();
    ordenarPilotos();
}
 
//Imprimimos en pantalla los tiempos de los pilotos sin ordenar mediante un bucle foreach, y utilizamos innerHTML para imprimir en pantalla. Mediante la funcion getelmentById() obtenemos el elemento con el id "resultados" para la impresion desordenada
function imprimirPilotos() {
  let aPantalla = document.getElementById("resultados");
  pilotos.forEach((piloto) => {
    aPantalla.innerHTML +=
      piloto.getNombre() +
      " ha tardado " +
      piloto.tiempo +
      " minutos en completar la carrera <br>";
  });
}

function ordenarPilotos() {
  //Ordenamos los pilotos por tiempo mediante la funcion sort() e imrpimimos en pantalla mediante innerHTML como en la funcion anterior.Mediante la funcion getelmentById() obtenemos el elemento con el id "clasificacion" para la impresion ordenada
  pilotos.sort((a, b) => a.tiempo - b.tiempo);
  //Escribimos los tiempos, e imprimimos en pantalla los tiempos de los pilotos
  let clasificacion = document.getElementById("clasificacion");
  pilotos.forEach((piloto) => {
    clasificacion.innerHTML += `<strong> ${piloto.getNombre()}</strong> ha tardado <strong>${
      piloto.tiempo
    } minutos</strong> en completar la carrera <br>`;
      
  });
}

