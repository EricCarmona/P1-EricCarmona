let monedero = 1000000

let alimentos = [
  { nombre: "Manzana", puntos: 10, precio: 20 },
  { nombre: "Pan", puntos: 25, precio: 50 },
  { nombre: "Pastel", puntos: 100, precio: 150 }

];

let bars = {
  hpBar: 100,
  hungerBar: 100,
  energyBar: 100,
  happyBar: 100
};

// Para que las barras ballan mobiendose con el tiempo.
let lastTime = 0;

function setup() {
  createCanvas(1000, 600);

  // Al hacer clic, se llama a alimentar con el objeto de la manzana.
  let botonManzana = createButton("Manzana");
  botonManzana.position(20, 130);
  botonManzana.mousePressed(function() {
    alimentar(alimentos[0]);
  });

  let botonPan = createButton("Pan");
  botonPan.position(120, 130);
  botonPan.mousePressed(function() {
    alimentar(alimentos[1]);
  });

  let botonPastel = createButton("Pastel");
  botonPastel.position(220, 130);
  botonPastel.mousePressed(function() {
    alimentar(alimentos[2]);
  });
}

function draw() {
  background(220);

  // Vida
  fill("#4d4848");
  rect(20, 20, 400, 20);
  fill("#ff0000");
  rect(20, 20, max(0, bars.hpBar) * 4, 20);

  // Hambre
  fill("#4d4848");
  rect(20, 45, 400, 20);
  fill("#815903");
  rect(20, 45, max(0, bars.hungerBar) * 4, 20);

  // Energia
  fill("#4d4848");
  rect(20, 70, 400, 20);
  fill("#e5ff00");
  rect(20, 70, max(0, bars.energyBar) * 4, 20);

  // Felizidad
  fill("#4d4848");
  rect(20, 95, 400, 20);
  fill("#22ff05");
  rect(20, 95, max(0, bars.happyBar) * 4, 20);

  // Monedero
  fill(0);
  textSize(30);
  text(monedero, 800, 40);


  estadoBarras();
}


// Disminulle con el tiempo
function estadoBarras() {
  if (second() !== lastTime) {
    lastTime = second();

    if (bars.hungerBar > 0) {
      bars.hungerBar -= 0.5;
    }
    if (bars.energyBar > 0) {
      bars.energyBar -= 1.5;
    }
    if (bars.happyBar > 0) {
      bars.happyBar--;
    }
  }

  hambre();
}

// ========================================== //
// ALIMENTACION Y FUNCIONES DE HAMBRE //
// ========================================== //

/*// ========================================== //
  Funcion de hambre:

  - si la barra de hambre esta a cero se ira descartando vida se le agregara 5 de hambre para que tengas un vreve momento de solucionar el hambre.
// ========================================== //*/
function hambre() {
  if (bars.hungerBar <= 0) {
    bars.hpBar -= 35;
    bars.hungerBar += 5;
  }
}

function alimentar(alimento) {
  // Suma los puntos del alimento y limita el hambre a un máximo de 100.
  bars.hungerBar = Math.min(100, bars.hungerBar + alimento.puntos);
}
