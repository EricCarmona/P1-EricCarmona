// Monedero de jugador, se podra acumular monedas al jugar mini juegos.
let monedero = 100;

let curaciones = [
  { nombre: "Tiritas", puntos: 15, precio: 20 },
  { nombre: "Vendas", puntos: 25, precio: 50 },
  { nombre: "Pocion", puntos: 50, precio: 80 },
  { nombre: "Kit medico", puntos: 100, precio: 180 },
];

let alimentos = [
  { nombre: "Manzana", puntos: 10, precio: 20 },
  { nombre: "Pan", puntos: 25, precio: 50 },
  { nombre: "Pastel", puntos: 100, precio: 150 },
  { nombre: "Bebida energética", vida: -5, energia: 30, precio: 50 }

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
let contenedorCanvas;
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

let imagenPerrito;
let imagenSala;
let imagenCocina;
let imagenDormitorioDia;
let imagenDormitorioNoche;
let imagenMedico;
let imagenFondoMinijuegos;
let imagenFondoTiro;
let imagenFondoEspacio;
let imagenPerritosAliens;
let imagenSniperPerro;
let imagenPerroCocinero;
let imagenDoctor;
let imagenEnojado;
let imagenAlimentame;
let imagenCansado;
let imagenTriste;
let imagenPerroAdios;
let imagenMimi;
let gifAcariciando;
let temporizadorAcariciar;

// ========================================== //
// CARGA DE IMAGENES
// ========================================== //

/*
  Funcion preload:

  - Carga las imagenes antes de que empiece el juego.
  - Guarda cada archivo en una variable para usarlo despues.
*/
function preload() {
  imagenPerrito = loadImage("assets/perrito.png");
  imagenSala = loadImage("assets/zonas/sala.png");
  imagenCocina = loadImage("assets/zonas/cocina.png");
  imagenDormitorioDia = loadImage("assets/zonas/dormitorioDia.jpg");
  imagenDormitorioNoche = loadImage("assets/zonas/dormitorioNoche.png");
  imagenMedico = loadImage("assets/zonas/medico.jpg");
  imagenFondoMinijuegos = loadImage("assets/zonas/minijuegos/minijuegos.jpg");
  imagenFondoTiro = loadImage("assets/zonas/minijuegos/tiroAlblanco.png");
  imagenFondoEspacio = loadImage("assets/zonas/minijuegos/espacio.jpg");
  imagenPerritosAliens = loadImage("assets/zonas/minijuegos/perritosAliens.png");
  imagenSniperPerro = loadImage("assets/zonas/minijuegos/sniperPerro.png");
  imagenPerroCocinero = loadImage("assets/perroCocinero.png");
  imagenDoctor = loadImage("assets/estados/doctor.png");
  imagenEnojado = loadImage("assets/estados/enojado.png");
  imagenAlimentame = loadImage("assets/estados/alimentame.jpg");
  imagenCansado = loadImage("assets/estados/cansado.png");
  imagenTriste = loadImage("assets/estados/trsite.png");
  imagenPerroAdios = loadImage("assets/estados/perritoAdios.png");
  imagenMimi = loadImage("assets/estados/aMimi.png");
}

// ========================================== //
// INICIO DEL JUEGO Y BOTONES
// ========================================== //

/*
  Funcion setup:

  - Crea el canvas y su contenedor.
  - Prepara el GIF y crea los botones de cada zona.
*/
function setup() {
  // ========================================== //
  // CONTENEDOR Y CANVAS
  // ========================================== //

  /*
    - createDiv crea un contenedor HTML para agrupar los elementos del juego.
    - class conecta el contenedor con sus estilos de style.css.
    - parent mete el canvas dentro del contenedor para mantenerlos juntos.
  */
  contenedorCanvas = createDiv();
  contenedorCanvas.class("contenedor-canvas");
  createCanvas(1000, 600).parent(contenedorCanvas);
  gifAcariciando = createImg("assets/acariziando.gif", "Perro siendo acariciado");
  gifAcariciando.parent(contenedorCanvas);
  gifAcariciando.position(390, 190);
  gifAcariciando.size(220, 220);
  gifAcariciando.hide();

  botones.cocina = crearBoton("Cocina", 20, 170, function () {
    cambiarPantalla("cocina");
  });
  botones.medico = crearBoton("Médico", 20, 210, function () {
    cambiarPantalla("medico");
  });
  botones.cariciar = crearBoton("Acariciar", 20, 250, cariciar);
  botones.habitacion = crearBoton("Habitación", 20, 290, function () {
    cambiarPantalla("habitacion");
  });
  botones.minijuegos = crearBoton("Minijuegos", 20, 330, function () {
    cambiarPantalla("minijuegos");
  });
  botones.menu = crearBoton("Volver al menú", 20, 170, function () {
    cambiarPantalla("menu");
  });
  botones.dormir = crearBoton("Dormir", 20, 210, dormir);
  botones.esquivar = crearBoton("Esquivar naves (-25 energía, -30 hambre)", 20, 210, empezarEsquivar);
  botones.clicarCirculo = crearBoton("Dispara a la diana (-15 energía, -5 hambre)", 20, 250, empezarClicar);

  botones.manzana = crearBoton("Manzana +10 hambre  -20 $", 20, 210, function () {
    alimentar(alimentos[0]);
  });
  botones.pan = crearBoton("Pan +25 hambre  -50 $", 20, 250, function () {
    alimentar(alimentos[1]);
  });
  botones.pastel = crearBoton("Pastel +100 hambre  -150 $", 20, 290, function () {
    alimentar(alimentos[2]);
  });
  botones.bebidaEnergetica = crearBoton("Bebida energética  -5 vida  +30 energía  -50 $", 20, 330, function () {
    alimentar(alimentos[3]);
  });
  botones.tiritas = crearBoton("Tiritas +15 vida  -20 $", 20, 210, function () {
    curacion(curaciones[0]);
  });
  botones.vendas = crearBoton("Vendas +25 vida  -50 $", 20, 250, function () {
    curacion(curaciones[1]);
  });
  botones.pocion = crearBoton("Poción +50 vida  -80 $", 20, 290, function () {
    curacion(curaciones[2]);
  });
  botones.kitMedico = crearBoton("Kit médico +100 vida  -180 $", 20, 330, function () {
    curacion(curaciones[3]);
  });

  actualizarBotones();
}

/*
  Funcion crearBoton:

  - Recibe el texto, la posicion y la accion del boton.
  - Lo coloca dentro del contenedor del canvas.
*/
function crearBoton(texto, x, y, accion) {
  let boton = createButton(texto);
  boton.parent(contenedorCanvas);
  boton.position(x, y);
  boton.mousePressed(accion);
  return boton;
}

/*
  Funcion cambiarPantalla:

  - Cambia la zona que se muestra.
  - Oculta el GIF y actualiza los botones.
*/
function cambiarPantalla(nombre) {
  if (isSleeping) return;
  if (pantalla === "muerte") return;

  clearTimeout(temporizadorAcariciar);
  gifAcariciando.hide();
  pantalla = nombre;
  actualizarBotones();
}

/*
  Funcion actualizarBotones:

  - Oculta primero todos los botones.
  - Despues muestra solo los que pertenecen a la zona actual.
*/
function actualizarBotones() {
  let listaBotones = [
    botones.cocina, botones.medico, botones.cariciar, botones.habitacion,
    botones.minijuegos, botones.menu, botones.dormir, botones.esquivar,
    botones.clicarCirculo, botones.manzana, botones.pan, botones.pastel,
    botones.bebidaEnergetica, botones.tiritas, botones.vendas, botones.pocion,
    botones.kitMedico
  ];

  for (let i = 0; i < listaBotones.length; i++) {
    listaBotones[i].hide();
  }

  if (pantalla === "muerte") return;
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
      botones.bebidaEnergetica.show();
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

// ========================================== //
// DIBUJO DE PANTALLAS Y BARRAS
// ========================================== //

/*
  Funcion draw:

  - Dibuja el fondo y los elementos de la pantalla activa.
  - Actualiza las barras, el monedero y la muerte.
*/
function draw() {
  if (pantalla === "muerte") {
    dibujarMuerte();
    return;
  }

  if (pantalla === "menu") {
    dibujarFondo(imagenSala);
    dibujarPerrito(imagenPerrito);
  } else if (pantalla === "cocina") {
    dibujarFondo(imagenCocina);
    dibujarPerrito(imagenPerroCocinero);
  } else if (pantalla === "medico") {
    dibujarFondo(imagenMedico);
    imageMode(CORNER);
    image(imagenDoctor, 180, 180, 190, 286);
    dibujarPerrito(imagenPerrito);
  } else if (pantalla === "habitacion") {
    dibujarFondo(isSleeping ? imagenDormitorioNoche : imagenDormitorioDia);
    dibujarPerrito(imagenPerrito);
  } else if (pantalla === "minijuegos") {
    dibujarFondo(imagenFondoMinijuegos);
  } else if (pantalla === "esquivar") {
    dibujarFondo(imagenFondoEspacio);
    dibujarEsquivar();
  } else if (pantalla === "clicar") {
    dibujarFondo(imagenFondoTiro);
    dibujarJuegoClics();
  }

  // Barras de necesidades
  dibujarBarra(20, "#ff0000", bars.hpBar, "Vida");
  if (vidasExtra > 0) {
    fill(0);
    textSize(16);
    text("+1 vida", 455, 27);
  }
  dibujarBarra(45, "#815903", bars.hungerBar, "Hambre");
  dibujarBarra(70, "#e5ff00", bars.energyBar, "Energía");
  dibujarBarra(95, "#22ff05", bars.happyBar, "Felicidad");

  // Monedero
  fill(0);
  textSize(30);
  text(monedero + "$", 800, 40);

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

/*
  Funcion dibujarBarra:

  - Dibuja el fondo de una barra y su cantidad actual.
  - Escribe una etiqueta para identificarla.
*/
function dibujarBarra(y, color, valor, etiqueta) {
  fill("#4d4848");
  rect(20, y, 400, 20);
  fill(color);
  rect(20, y, max(0, valor) * 4, 20);
  push();
  textAlign(CENTER, CENTER);
  textSize(12);
  stroke(35);
  strokeWeight(2);
  fill(255);
  text(etiqueta, 220, y + 10);
  pop();
}

/*
  Funcion dibujarPerrito:

  - Usa la imagen de dormir o la de una necesidad baja si corresponde.
  - Si no, muestra la imagen normal de la zona.
*/
function dibujarPerrito(imagenBase) {
  let imagenActual = imagenBase;

  if (isSleeping) {
    imagenActual = imagenMimi;
  } else if (bars.hpBar <= 50) {
    imagenActual = imagenEnojado;
  } else if (bars.hungerBar <= 50) {
    imagenActual = imagenAlimentame;
  } else if (bars.energyBar <= 50) {
    imagenActual = imagenCansado;
  } else if (bars.happyBar <= 50) {
    imagenActual = imagenTriste;
  }

  dibujarImagenAjustada(imagenActual, width / 2, height / 2, 220, 200);
}

/*
  Funcion dibujarMuerte:

  - Muestra la imagen de despedida y el mensaje final.
*/
function dibujarMuerte() {
  background("#171717");
  dibujarImagenAjustada(imagenPerroAdios, width / 2, height / 2 - 25, 360, 360);
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(36);
  text("Se marchó", width / 2, height - 45);
}

// Dibuja una imagen centrada y ajustada sin deformar sus proporciones.
function dibujarImagenAjustada(imagen, x, y, anchoMaximo, altoMaximo) {
  let escala = min(anchoMaximo / imagen.width, altoMaximo / imagen.height);
  imageMode(CENTER);
  image(imagen, x, y, imagen.width * escala, imagen.height * escala);
}

/*
  Funcion dibujarFondo:

  - Ajusta una imagen al canvas sin estirarla.
  - Recorta el sobrante para cubrir toda la pantalla.
*/
function dibujarFondo(imagenFondo) {
  let escala = max(width / imagenFondo.width, height / imagenFondo.height);
  let anchoVisible = width / escala;
  let altoVisible = height / escala;
  imageMode(CORNER);
  image(
    imagenFondo,
    0, 0, width, height,
    (imagenFondo.width - anchoVisible) / 2,
    (imagenFondo.height - altoVisible) / 2,
    anchoVisible,
    altoVisible
  );
}

// ========================================== //
// MINIJUEGO DE ESQUIVAR
// ========================================== //

/*
  Funcion empezarEsquivar:

  - Comprueba que haya energia y hambre suficientes.
  - Reinicia las bolas y coloca al jugador al empezar.
*/
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

/*
  Funcion dibujarEsquivar:

  - Mueve al jugador con WASD o las flechas.
  - Crea y mueve los proyectiles que caen.
  - Comprueba si un proyectil toca al jugador.
*/
function dibujarEsquivar() {
  fill(200);
  textSize(18);
  text("Esquivadas: " + bolasEsquivadas, 700, 210);

  if (keyIsDown(65) || keyIsDown(LEFT_ARROW)) jugadorX -= 5;
  if (keyIsDown(68) || keyIsDown(RIGHT_ARROW)) jugadorX += 5;

  jugadorX = constrain(jugadorX, 260, 960);
  jugadorY = constrain(jugadorY, 230, 565);

  if (frameCount % 5 === 0) {
    bolas.push({
      x: random(280, 950),
      y: 210,
      velocidad: random(3, 6)
    });
  }

  imageMode(CENTER);
  image(imagenPerrito, jugadorX, jugadorY, 60, 54);

  for (let i = bolas.length - 1; i >= 0; i--) {
    bolas[i].y += bolas[i].velocidad;
    image(imagenPerritosAliens, bolas[i].x, bolas[i].y, 60, 30);

    if (dist(jugadorX, jugadorY, bolas[i].x, bolas[i].y) < 32) {
      monedero += bolasEsquivadas;
      alert("Te golpeó una nave. Esquivaste " + bolasEsquivadas + " ganaste " + bolasEsquivadas + " $.");
      cambiarPantalla("minijuegos");
      return;
    }

    if (bolas[i].y > height) {
      bolas.splice(i, 1);
      bolasEsquivadas++;
    }
  }
}

// ========================================== //
// CODIGO SECRETO
// ========================================== //

/*
  Funcion keyPressed:

  - Revisa cada tecla contra el orden del codigo.
  - Si se completa, entrega una vida extra.
*/
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

// ========================================== //
// MINIJUEGO DE CLICAR
// ========================================== //

/*
  Funcion empezarClicar:

  - Comprueba que haya energia y hambre suficientes.
  - Reinicia el contador y prepara el primer objetivo.
*/
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

/*
  Funcion dibujarJuegoClics:

  - Muestra el tiempo, los aciertos y el objetivo.
  - Al terminar, suma los aciertos al monedero.
*/
function dibujarJuegoClics() {
  let segundosRestantes = 30 - floor((millis() - tiempoInicioClics) / 1000);
  fill(30);
  textSize(22);
  text("Tiempo: " + max(0, segundosRestantes) + "   Clics: " + clics, 750, 120);

  imageMode(CORNER);
  image(imagenSniperPerro, 24, 250, 130 * 2, 98 * 2);

  fill("#f31212");
  ellipse(circuloX, circuloY, 55, 55);

  if (segundosRestantes <= 0) {
    monedero += clics;
    alert("¡Tiempo! Hiciste " + clics + " dianas y ganaste " + clics + " $.");
    cambiarPantalla("minijuegos");
  }
}

/*
  Funcion mousePressed:

  - Comprueba si el clic cae dentro del objetivo.
  - Si acierta, suma un punto y mueve el objetivo.
*/
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


// ========================================== //
// NECESIDADES Y HAMBRE
// ========================================== //

/*
  Funcion estadoBarras:

  - Reduce hambre, energia y felicidad una vez por segundo.
  - Provoca un desmayo cuando la energia llega a cero.
*/
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

/*
  Funcion hambre:

  - Si el hambre llega a cero, quita vida.
  - Agrega 5 puntos de hambre para dar tiempo a recuperarla.
*/
function hambre() {
  if (bars.hungerBar <= 0) {
    bars.hpBar = Math.max(0, bars.hpBar - 35);
    bars.hungerBar += 5;
  }
}

// ========================================== //
// MUERTE Y REINICIO
// ========================================== //

/*
  Funcion comprobarMuerte:

  - Usa una vida extra si el jugador tiene una.
  - Si no, muestra la despedida y reinicia las barras.
*/
function comprobarMuerte() {
  if (bars.hpBar > 0 || pantalla === "muerte") return;

  if (vidasExtra > 0) {
    vidasExtra--;
    bars.hpBar = 100;
    alert("Has usado tu vida extra. ¡Sigue jugando!");
    return;
  }

  pantalla = "muerte";
  actualizarBotones();

  setTimeout(function () {
    monedero += 100;
    bars.hpBar = 100;
    bars.hungerBar = 100;
    bars.energyBar = 100;
    bars.happyBar = 100;
    isSleeping = false;
    bolas = [];
    pantalla = "menu";
    actualizarBotones();
  }, 3500);
}


// ========================================== //
// ALIMENTACION Y CUIDADOS
// ========================================== //

/*
  Funcion alimentar:

  - Comprueba la felicidad y el dinero antes de comprar.
  - Aplica los efectos del alimento y limita las barras a 100.
*/
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

  if (alimento.puntos) {
    bars.hungerBar = Math.min(100, bars.hungerBar + alimento.puntos);
  }
  if (alimento.vida) {
    bars.hpBar = Math.max(0, Math.min(100, bars.hpBar + alimento.vida));
  }
  if (alimento.energia) {
    bars.energyBar = Math.min(100, bars.energyBar + alimento.energia);
  }
  if (alimento.felicidad) {
    bars.happyBar = Math.min(100, bars.happyBar + alimento.felicidad);
  }
}


// ========================================== //
// Funciones de curacion //
// ========================================== //

/*
  Funcion curacion:

  - Comprueba si alcanza el dinero para la cura.
  - Resta el precio y recupera vida sin superar 100.
*/
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

/*
  Funcion cariciar:

  - Aumenta la felicidad del perro.
  - Muestra el GIF durante un momento.
*/
function cariciar() {
  if (isSleeping) return;

  bars.happyBar = Math.min(100, bars.happyBar + 5);
  clearTimeout(temporizadorAcariciar);
  gifAcariciando.show();
  temporizadorAcariciar = setTimeout(function () {
    gifAcariciando.hide();
  }, 500);
}

// ========================================== //
// DORMIR Y DESMAYARSE
// ========================================== //

/*
  Funcion dormir:

  - Solo permite dormir cuando la energia es baja.
  - Despues de unos segundos, recupera energia y vida.
*/
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

/*
  Funcion desmayarse:

  - Reduce la vida y deja la energia casi a cero.
  - Despues de unos segundos, restaura la energia.
*/
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
