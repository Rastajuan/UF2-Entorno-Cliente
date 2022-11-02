//. Se quiere guardar, por orden de llegada, el número de Kart, el nombre del piloto y el tiempo que ha tardado al realizar la carrera

class PilotKart{
    numeroKart;
    nombrePiloto;
    tiempo;

    constructor(numero, nombre, tiempo) {
        this.numeroKart = numero;
        this.nombrePiloto = nombre;
        this.tiempo = tiempo;
    }

}

const pilotos = (5);
pilotos[0] = ("numero"= 1, "nombre"="Lewis Hamilton", tiempo="");
pilotos[1] = Array(2, "Jules Bianchi", 7.01);

function imprimirPilotos() {
    for (let i = 0; i < 3; i++) {
      numero = prompt("Introduce el número de Kart: ");
      nombre = prompt("Introduce el nombre del piloto: ");
      tiempo = prompt("Introduce el tiempo final: ");
        pilotos[i] = [numero, nombre, tiempo];
      
    }
    
  
   
    document.write(pilotos + "<br>");
    
    
}



const kart1 = new PilotKart(1, "Lewis Hamilton", 9.01);
const kart2 = new PilotKart(2, "Jules Bianchi", 7.01);
const kart3 = new PilotKart(3, "Sebestian Vettel ", 8.79);
const kart4 = new PilotKart(4, "Michael Schumacher", 12.01);
const kart5 = new PilotKart     (5, "Kimi Raikkonen", 6.11);