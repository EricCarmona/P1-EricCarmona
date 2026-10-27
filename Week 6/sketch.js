// Monedero de jugador, se podra acumular monedas al jugar mini juegos.
let monedero = 1000;

// Inventario par guardar todo lo comprado en la tienda
let inventario = [];

let curaciones = [
  { nombre: "Tiritas", puntos: 15, precio: 20 },
  { nombre: "Vendas", puntos: 25, precio: 50 },
  { nombre: "Pocion", puntos: 50, precio: 80 },
  { nombre: "Kit medico", puntos: 100, precio: 180 },
  { nombre: "Pocion Misteriosa", puntos: 1, estado: false } // la idea de una oportundad al usarlo no se podra reclamar mas.
];

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

  // test kit
  let botonHit = createButton("hit");
  botonHit.position(190, 100);
  botonHit.mousePressed(hit)


  for (let i = 0; i < 4; i++) {
    let cura = curaciones[i];
    let botonCura = createButton(
      `${cura.nombre} precio: ${cura.precio} La curación es de ${cura.puntos} puntos`
    );
    botonCura.position(250, 50 + i * 30);
    botonCura.mousePressed(function () {
      curacion(cura);
    });
  }

  for (let i = 0; i < alimentos.length; i++) {
    let alimento = alimentos[i];
    let botonAlimento = createButton(
      `${alimento.nombre} precio: ${alimento.precio}`
    );
    botonAlimento.position(20, 50 + i * 50);
    botonAlimento.mousePressed(function () {
      alimentar(alimento);
    });
  }
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
  } else if (bars.hungerBar  < 30) {
    // el consumo de energia aumenta un 30 %
  } else if (bars.hungerBar < 10 ) {
    alimentos.puntos/2
  }
}


/*// ========================================== //
  Funcion de alimentar:

  Suma los puntos del alimento y limita el hambre a un máximo de 100.
  Al presionar los botones con los nombres de los alimentos, suma los puntos que tiene cada uno.
// ========================================== //*/
function alimentar(alimento) {
  if (monedero < alimento.precio) {
    alert(`No tienes suficiente dinero para comprar ${alimento.nombre}.`);
    return;
  }

  monedero -= alimento.precio;
  bars.hungerBar = Math.min(100, bars.hungerBar + alimento.puntos);
}


// ========================================== //
// Funciones de curacion //
// ========================================== //

function curacion(cura) {
  if (monedero < cura.precio) {
    alert(`No tienes suficiente dinero para comprar ${cura.nombre}.`);
    return;
  }

  monedero -= cura.precio;
  bars.hpBar = Math.min(100, bars.hpBar + cura.puntos);
}


// Funcion de prueba de daño
function hit() {
  bars.hpBar -= 24;
}