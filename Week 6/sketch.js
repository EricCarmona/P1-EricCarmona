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

let lastTime = 0;
let isSleeping = false;
let pantalla = "menu";
let botones = {};

function setup() {
  createCanvas(1000, 600);

  botones.cocina = crearBoton("Cocina",20, 170, function () {
    cambiarPantalla("cocina");
  });
  botones.medico = crearBoton("Médico",20, 210, function () {
    cambiarPantalla("medico");
  });
  botones.cariciar = crearBoton("Acariciar",20, 250, cariciar);
  botones.habitacion = crearBoton("Habitación",20, 290, function () {
    cambiarPantalla("habitacion");
  });
  botones.hit = crearBoton("Probar daño",20, 330, hit);
  botones.menu = crearBoton("Volver al menú",20, 170, function () {
    cambiarPantalla("menu");
  });
  botones.dormir = crearBoton("Dormir",20, 210, dormir);

  botones.manzana = crearBoton("Manzana - 20 monedas", 20, 210, function () {
    alimentar(alimentos[0]);
  });
  botones.pan = crearBoton("Pan - 50 monedas", 20, 250, function () {
    alimentar(alimentos[1]);
  });
  botones.pastel = crearBoton("Pastel - 150 monedas", 20, 290, function () {
    alimentar(alimentos[2]);
  });
  botones.tiritas = crearBoton("Tiritas - 20 monedas", 20, 210, function () {
    curacion(curaciones[0]);
  });
  botones.vendas = crearBoton("Vendas - 50 monedas", 20, 250, function () {
    curacion(curaciones[1]);
  });
  botones.pocion = crearBoton("Poción - 80 monedas", 20, 290, function () {
    curacion(curaciones[2]);
  });
  botones.kitMedico = crearBoton("Kit médico - 180 monedas", 20, 330, function () {
    curacion(curaciones[3]);
  });

  actualizarBotones();
}

function crearBoton(texto, x, y, accion) {
  let boton = createButton(texto);
  boton.position((windowWidth - width) / 2 + x, (windowHeight - height) / 2 + y);
  boton.mousePressed(accion);
  return boton;
}

function cambiarPantalla(nombre) {
  pantalla = nombre;
  actualizarBotones();
}

function actualizarBotones() {
  botones.cocina.hide();
  botones.medico.hide();
  botones.cariciar.hide();
  botones.habitacion.hide();
  botones.hit.hide();
  botones.menu.hide();
  botones.dormir.hide();
  botones.manzana.hide();
  botones.pan.hide();
  botones.pastel.hide();
  botones.tiritas.hide();
  botones.vendas.hide();
  botones.pocion.hide();
  botones.kitMedico.hide();

  if (pantalla === "menu") {
    botones.cocina.show();
    botones.medico.show();
    botones.cariciar.show();
    botones.habitacion.show();
    botones.hit.show();
  } else {
    botones.menu.show();

    if (pantalla === "cocina") {
      botones.manzana.show();
      botones.pan.show();
      botones.pastel.show();
    } else if (pantalla === "medico") {
      botones.tiritas.show();
      botones.vendas.show();
      botones.pocion.show();
      botones.kitMedico.show();
    } else if (pantalla === "habitacion") {
      botones.dormir.show();
    }
  }
}

function draw() {
  if (pantalla === "menu") {
    background("#c5d9ec");
    // IMG: imagen del menu o de la casa
    dibujarTitulo("Casa");
  } else if (pantalla === "cocina") {
    background("#ead6b8");
    // IMG: imagen de la cocina
    dibujarTitulo("Cocina");
  } else if (pantalla === "medico") {
    background("#d5ead9");
    // IMG: imagen del medico
    dibujarTitulo("Médico");
  } else if (pantalla === "habitacion") {
    background("#d7d2ec");
    // IMG: imagen de la habitacion
    dibujarTitulo("Habitación");
  }

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

  if (isSleeping) {
    fill(30, 70, 160);
    textSize(24);
    text("Zzz... está durmiendo", 400, 180);
  }

  estadoBarras();
}

function dibujarTitulo(titulo) {
  push();
  fill(35);
  textAlign(CENTER);
  textSize(32);
  text(titulo, 500, 175);
  pop();
}


// Las necesidades disminuyen una vez por segundo mientras el personaje esta despierto.
function estadoBarras() {
  if (isSleeping) {
    return;
  }

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
  if (bars.energyBar <= 0) {
    desmayarse();
  }
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
    bars.hpBar = Math.max(0, bars.hpBar - 35);
    bars.hungerBar += 5;
  }
}


/*// ========================================== //
  Funcion de alimentar:

  Suma los puntos del alimento y limita el hambre a un máximo de 100.
  Al presionar los botones con los nombres de los alimentos, suma los puntos que tiene cada uno.
// ========================================== //*/
function alimentar(alimento) {
  if (bars.happyBar < 25) {
    alert("Está demasiado triste y no quiere comer. Acarícialo para animarlo.");
    return;
  }

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

// ========================================== //
// Funcion de acariziar //
// ========================================== //

function cariciar() {
  bars.happyBar = Math.min(100, bars.happyBar + 5);
}

// ========================================== //
// Funciones de drmir //
// ========================================== //

function dormir() {
  if (isSleeping) return;

  if (bars.energyBar >= 20) {
    alert("No tiene suficiente sueño para dormir todavía.");
    return;
  }
  isSleeping = true;

  setTimeout(function () {
    bars.energyBar = 100;
    bars.hpBar = 100;
    isSleeping = false;
    lastTime = millis();
  }, 5000);
}

function desmayarse() {
  if (isSleeping) return;

  isSleeping = true;
  bars.hpBar = Math.max(0, bars.hpBar - 50);
  bars.energyBar = 0.1;
  alert("Se ha desmayado.");

  setTimeout(function () {
    bars.energyBar = 100;
    isSleeping = false;
    lastTime = millis();
  }, 5000);
}

// Funcion de prueba de daño
function hit() {
  if (isSleeping) return;
  bars.hpBar = Math.max(0, bars.hpBar - 24);
}