// Monedero de jugador, se podra acumular monedas al jugar mini juegos.
let monedero = 100;
const monedasIniciales = 100;

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
let bolas = [];
let jugadorX = 500;
let jugadorY = 520;
let bolasEsquivadas = 0;
let circuloX = 500;
let circuloY = 350;
let clics = 0;
let tiempoInicioClics = 0;
let vidasExtra = 0;
let progresoKonami = 0;
let codigoKonami = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];

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
  botones.minijuegos = crearBoton("Minijuegos",20, 330, function () {
    cambiarPantalla("minijuegos");
  });
  botones.menu = crearBoton("Volver al menú",20, 170, function () {
    cambiarPantalla("menu");
  });
  botones.dormir = crearBoton("Dormir",20, 210, dormir);
  botones.esquivar = crearBoton("Esquivar bolas (-25 energía, -30 hambre)",20, 210, empezarEsquivar);
  botones.clicarCirculo = crearBoton("Clicar círculo (-15 energía, -5 hambre)",20, 250, empezarClicar);

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
  if (isSleeping) return;

  pantalla = nombre;
  actualizarBotones();
}

function actualizarBotones() {
  botones.cocina.hide();
  botones.medico.hide();
  botones.cariciar.hide();
  botones.habitacion.hide();
  botones.minijuegos.hide();
  botones.menu.hide();
  botones.dormir.hide();
  botones.esquivar.hide();
  botones.clicarCirculo.hide();
  botones.manzana.hide();
  botones.pan.hide();
  botones.pastel.hide();
  botones.tiritas.hide();
  botones.vendas.hide();
  botones.pocion.hide();
  botones.kitMedico.hide();

  if (isSleeping) return;

  if (pantalla === "menu") {
    botones.cocina.show();
    botones.medico.show();
    botones.cariciar.show();
    botones.habitacion.show();
    botones.minijuegos.show();
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
    } else if (pantalla === "minijuegos") {
      botones.esquivar.show();
      botones.clicarCirculo.show();
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
  } else if (pantalla === "minijuegos") {
    background("#d8e7d0");
    dibujarTitulo("Minijuegos");
  } else if (pantalla === "esquivar") {
    background("#d8e7d0");
    dibujarTitulo("Esquiva las bolas con WASD");
    dibujarEsquivar();
  } else if (pantalla === "clicar") {
    background("#d8e7d0");
    dibujarTitulo("Clica el círculo durante 30 segundos");
    dibujarJuegoClics();
  }

  // Vida
  fill("#4d4848");
  rect(20, 20, 400, 20);
  fill("#ff0000");
  rect(20, 20, max(0, bars.hpBar) * 4, 20);
  if (vidasExtra > 0) {
    fill(0);
    textSize(16);
    text("+1 vida", 435, 37);
  }

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

  if (pantalla !== "esquivar" && pantalla !== "clicar") {
    estadoBarras();
  }
  comprobarMuerte();
}

function dibujarTitulo(titulo) {
  push();
  fill(35);
  textAlign(CENTER);
  textSize(32);
  text(titulo, 500, 175);
  pop();
}

function empezarEsquivar() {
  if (isSleeping) return;

  if (bars.energyBar < 25 || bars.hungerBar < 30) {
    alert("Necesitas 25 de energía y 30 de hambre para jugar.");
    return;
  }

  bars.energyBar -= 25;
  bars.hungerBar -= 30;
  bolas = [];
  bolasEsquivadas = 0;
  jugadorX = 600;
  jugadorY = 520;
  cambiarPantalla("esquivar");
}

function dibujarEsquivar() {
  fill(40);
  textSize(18);
  text("Esquivadas: " + bolasEsquivadas, 700, 210);

  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) jugadorX -= 5;
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) jugadorX += 5;
  if (keyIsDown(87) || keyIsDown(UP_ARROW)) jugadorY -= 5;
  if (keyIsDown(83) || keyIsDown(DOWN_ARROW)) jugadorY += 5;

  jugadorX = constrain(jugadorX, 260, 960);
  jugadorY = constrain(jugadorY, 230, 565);

  if (frameCount % 4 === 0) {
    bolas.push({
      x: random(280, 950),
      y: 210,
      velocidad: random(3, 6)
    });
  }

  fill("#2457c5");
  ellipse(jugadorX, jugadorY, 15, 15);

  for (let i = bolas.length - 1; i >= 0; i--) {
    bolas[i].y += bolas[i].velocidad;
    fill("#e74c3c");
    ellipse(bolas[i].x, bolas[i].y, 15, 15);

    if (dist(jugadorX, jugadorY, bolas[i].x, bolas[i].y) < 10) {
      monedero += bolasEsquivadas;
      alert("Te golpeó una bola. Esquivaste " + bolasEsquivadas + " y ganaste esas monedas.");
      cambiarPantalla("minijuegos");
      return;
    }

    if (bolas[i].y > height) {
      bolas.splice(i, 1);
      bolasEsquivadas++;
    }
  }
}

function keyPressed() {
  if (isSleeping) return;

  if (keyCode === codigoKonami[progresoKonami]) {
    progresoKonami++;

    if (progresoKonami === codigoKonami.length) {
      vidasExtra = 1;
      progresoKonami = 0;
      alert("¡Código Konami! Has conseguido +1 vida.");
    }
  } else if (keyCode === codigoKonami[0]) {
    progresoKonami = 1;
  } else {
    progresoKonami = 0;
  }
}

function empezarClicar() {
  if (isSleeping) return;

  if (bars.energyBar < 15 || bars.hungerBar < 5) {
    alert("Necesitas 15 de energía y 5 de hambre para jugar.");
    return;
  }

  bars.energyBar -= 15;
  bars.hungerBar -= 5;
  clics = 0;
  tiempoInicioClics = millis();
  circuloX = random(450, 900);
  circuloY = random(250, 540);
  cambiarPantalla("clicar");
}

function dibujarJuegoClics() {
  let segundosRestantes = 30 - floor((millis() - tiempoInicioClics) / 1000);
  fill(30);
  textSize(22);
  text("Tiempo: " + max(0, segundosRestantes) + "   Clics: " + clics, 650, 220);

  fill("#f39c12");
  ellipse(circuloX, circuloY, 55, 55);

  if (segundosRestantes <= 0) {
    monedero += clics;
    alert("¡Tiempo! Hiciste " + clics + " clics y ganaste " + clics + " monedas.");
    cambiarPantalla("minijuegos");
  }
}

function mousePressed() {
  if (isSleeping) return;

  if (pantalla === "clicar") {
    if (dist(mouseX, mouseY, circuloX, circuloY) < 28) {
      clics++;
      circuloX = random(450, 900);
      circuloY = random(250, 540);
    }
  }
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

function comprobarMuerte() {
  if (bars.hpBar > 0) return;

  if (vidasExtra > 0) {
    vidasExtra--;
    bars.hpBar = 100;
    alert("Has usado tu vida extra. ¡Sigue jugando!");
    return;
  }

  alert("La mascota ha muerto. La partida se reiniciará.");
  monedero = monedasIniciales;
  bars.hpBar = 100;
  bars.hungerBar = 100;
  bars.energyBar = 100;
  bars.happyBar = 100;
  isSleeping = false;
  bolas = [];
  cambiarPantalla("menu");
}


/*// ========================================== //
  Funcion de alimentar:

  Suma los puntos del alimento y limita el hambre a un máximo de 100.
  Al presionar los botones con los nombres de los alimentos, suma los puntos que tiene cada uno.
// ========================================== //*/
function alimentar(alimento) {
  if (isSleeping) return;

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
  if (isSleeping) return;

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
  if (isSleeping) return;

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
  actualizarBotones();

  setTimeout(function () {
    bars.energyBar = 100;
    bars.hpBar = 100;
    isSleeping = false;
    lastTime = millis();
    actualizarBotones();
  }, 5000);
}

function desmayarse() {
  if (isSleeping) return;

  isSleeping = true;
  bars.hpBar = Math.max(0, bars.hpBar - 50);
  bars.energyBar = 0.1;
  actualizarBotones();
  alert("Se ha desmayado.");

  setTimeout(function () {
    bars.energyBar = 100;
    isSleeping = false;
    lastTime = millis();
    actualizarBotones();
  }, 5000);
}
