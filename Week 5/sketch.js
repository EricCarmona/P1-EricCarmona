// ========================================== //
// Array de objetos //
// ========================================== //
let quizMonsterHunter = [
  {
    pregunta: "¿Qué variante de monstruo en Monster Hunter World: Iceborne es famosa por sus mohos mucosos volátiles, encerrarte en su arena final con barreras y volverse abrumadoramente agresivo con ataques explosivos cuando se enfurece?",
    opciones: [
      "A) Deviljho Salvaje",
      "B) Brachydios Colérico",
      "C) Nergigante Regio",
      "D) Rajang Furia"
    ],
    respuestaCorrectaIndex: 1 // B) Brachydios Colérico (0-indexed: A=0, B=1, C=2, D=3)
  },
  {
    pregunta: "En Monster Hunter World, ¿cuál de las siguientes armas destaca por su capacidad de almacenar energía en frascos para luego desatar una serie de pequeñas explosiones elementales o de estado alterado mediante sus ataques?",
    opciones: [
      "A) Hacha Espada",
      "B) Hacha Cargada",
      "C) Cornamusa",
      "D) Lanza Pistola"
    ],
    respuestaCorrectaIndex: 1 // B) Hacha Cargada
  },
  {
    pregunta: "¿Cómo se llama el nuevo tipo de entorno dinámico y peligroso introducido en Monster Hunter Wilds que altera drásticamente el comportamiento de los monstruos y el clima del mapa?",
    opciones: [
      "A) Tormenta de Ceniza / Inclemencia",
      "B) Erupción Constante",
      "C) Marea Negra",
      "D) Vórtice Abisal"
    ],
    respuestaCorrectaIndex: 0 // A) Tormenta de Ceniza / Inclemencia
  },
  {
    pregunta: "En Monster Hunter World: Iceborne, ¿qué nueva herramienta de la Eslinga (Slinger) permite engancharse directamente a la cabeza de los monstruos para debilitar partes, hacer que se estrellen contra los muros o recargar munición?",
    opciones: [
      "A) Garfio de Agarre",
      "B) Gancho Magnético",
      "C) Lanzador de Estacas",
      "D) Arpón de Caza"
    ],
    respuestaCorrectaIndex: 0 // A) Garfio de Agarre
  },
  {
    pregunta: "¿Cuál de los siguientes monstruos clásicos de la saga se caracteriza por no atacar al cazador por iniciativa propia (siendo completamente pacífico al principio) a menos que tú lo provoques directamente?",
    opciones: [
      "A) Rajang",
      "B) Barroth",
      "C) Kelbi / Aptonoth",
      "D) Bazelgeuse"
    ],
    respuestaCorrectaIndex: 2 // C) Kelbi / Aptonoth
  },
  {
    pregunta: "En Monster Hunter Wilds, ¿qué característica principal permite el nuevo Seikret (la montura oficial) durante la exploración y la caza?",
    opciones: [
      "A) Volar libremente por todo el mapa sin restricciones de estamina",
      "B) Llevar una segunda arma equipada para poder cambiar de armamento sobre la marcha en plena cacería",
      "C) Atacar automáticamente al monstruo mientras el cazador descansa",
      "D) Escupir fuego para quemar los nidos de los monstruos pequeños"
    ],
    respuestaCorrectaIndex: 1 // B) Llevar una segunda arma equipada...
  },
  {
    pregunta: "¿Qué monstruo insignia (flagship) de Monster Hunter World utiliza espinas en sus alas y cuerpo que se vuelven negras a medida que se endurecen, obligando al jugador a romperlas constantemente?",
    opciones: [
      "A) Rathalos",
      "B) Nergigante",
      "C) Velkhana",
      "D) Tigrex"
    ],
    respuestaCorrectaIndex: 1 // B) Nergigante
  },
  {
    pregunta: "En las mecánicas de daño por segundo y velocidad en Monster Hunter World, ¿cuál de estas armas suele registrar consistentemente los tiempos de cacería más rápidos en manos de jugadores expertos debido a su enorme daño de corte y movilidad?",
    opciones: [
      "A) Ballesta Ligera",
      "B) Gran Espada",
      "C) Hacha Espada",
      "D) Espada y Escudo"
    ],
    respuestaCorrectaIndex: 1 // B) Gran Espada
  },
  {
    pregunta: "¿Cuál es el nombre del dragón anciano de hielo que sirve como monstruo insignia (flagship) de la expansión Monster Hunter World: Iceborne?",
    opciones: [
      "A) Vaal Hazak",
      "B) Namielle",
      "C) Velkhana",
      "D) Shara Ishvalda"
    ],
    respuestaCorrectaIndex: 2 // C) Velkhana
  },
  {
    pregunta: "¿Qué monstruo volador en Monster Hunter World es famoso por aparecer por sorpresa en cualquier zona del mapa lanzando bombas con forma de piña (escamas explosivas) desde el cielo?",
    opciones: [
      "A) Rathian",
      "B) Bazelgeuse",
      "C) Legiana",
      "D) Paolumu"
    ],
    respuestaCorrectaIndex: 1 // B) Bazelgeuse
  }
];

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < quizMonsterHunter.length; i++) {
    console.log(quizMonsterHunter[i].pregunta);
    console.log(quizMonsterHunter[i].opciones);
    console.log(quizMonsterHunter[i].respuestaCorrectaIndex);
    
  }

  
}

function draw() {
  background(220);
}





/*// ========================================== //
seran 10 preguntas en dotal del tema del video juego monter huneter con sus repentibas respuestas en cada caso seran (4) una buena y las restantes malas

Principalmente la idea es aplicar varias img para facilitar la respuesta tambien por intuicion.

al finalizar el quiz se enseñáran cuales an sido las respuestas correctas y cuales an sido las incorrectas y tu puntucion correcta.

POR AHORA DEVO PENSAR EN ALGO SENCILLO Y TRATAR DE CONSEGIRLO SIN COMPLICARME MUCHO...  

// ========================================== //*/