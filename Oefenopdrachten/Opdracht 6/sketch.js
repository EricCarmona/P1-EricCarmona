function setup() {
    createCanvas(380, 350);
}

function draw() {
    background(220);
    // ========================================== //
    // Arrays //
    // ========================================== //
    let colors = ["red", "green", "blue", "purple", "yellow"];
    let nummers = [400, 240, 10, 490, 30, 60, 244, 500, 301, 300];
    let sum1 = [3, 55, 93, 20, 102, 6];
    let sum2 = [14, 22, 80, 5];

    push();
    textSize(8);
    text(`X: ${mouseX} Y: ${mouseY}`, 320, 20)
    pop();

    // ========================================== //
    // Kleuren in een array //
    // ========================================== //
    push();
    fill(0);
    textSize(12);
    text(`1. `, 20, 15);

    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        textStyle(BOLD);
        textSize(10);
        text(colors[i], 35, 15 * i + 15);
    };
    pop();


    // ========================================== //
    // Pas de array aan met pop //
    // ========================================== //
    push();
    fill(0);
    textSize(12);
    text(`2. `, 20, 100);

    colors.shift();
    colors.push("red");

    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        textStyle(BOLD);
        textSize(10);
        text(colors[i], 35, 15 * i + 100);
    };
    pop();


    // ========================================== //
    // Twee kleuren weghalen //
    // ========================================== //
    push();
    fill(0);
    textSize(12);
    text(`3. `, 20, 190);

    colors.splice(1, 2);

    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        textStyle(BOLD);
        textSize(10);
        text(colors[i], 35, 15 * i + 190);
    };
    pop();


    // ========================================== //
    // Getallen filteren //
    // ========================================== //
    push();
    fill(0);
    textSize(12);
    text(`4. `, 20, 250);

    let nummerfilter = [];

    for (let i = 0; i < nummers.length; i++) {
        if (nummers[i] < 300) {
            nummerfilter.push(nummers[i])
        }
    }

    for (let i = 0; i < nummerfilter.length; i++) {
        textStyle(BOLD);
        textSize(10);
        text(nummerfilter[i], 35, 15 * i + 250);
    }
    pop();


    // ========================================== //
    // Meerdere arrays optellen bij elkaar //
    // ========================================== //
    push();
    fill(0);
    textSize(12);
    text(`5. `, 120, 15);

    let total = 0;

    for (let i = 0; i < sum1.length; i++) {
        total += sum1[i];
    }
    for (let i = 0; i < sum2.length; i++) {
        total += sum2[i];
    }

    textStyle(BOLD);
    textSize(40);
    text(total, 140, 65);
    pop();


    // ========================================== //
    // Meerdere arrays optellen bij elkaar //
    // ========================================== //
    push();
    fill(0);
    textSize(12);
    text(`6. `, 120, 100);

    let word = "Overheidsfinancieringstekort";
    let letterFilter = "e";
    let counter = 0;

    for (let i = 0; i < word.length; i++) {
        if (word[i] === letterFilter) {
            counter++;
        }
    }

    textStyle(BOLD);
    textSize(40);
    text(`${counter}x`, 150,150);
    pop();


        // ========================================== //
    // Meerdere arrays optellen bij elkaar //
    // ========================================== //
    push();
    fill(0);
    textSize(12);
    text(`7. `, 120, 190);

    colors.push("blue", "purple");
    colors.sort();

    for (let i = 0; i < colors.length; i++) {
        fill(colors[i]);
        textStyle(BOLD);
        textSize(10);
        text(colors[i], 135, 15 * i + 190);
    };
    pop();

}








/*// ========================================== //

o 8. (x: 120, y:280)
o 9. (x: 240, y: 15)

8: Random kleuren op een rij

· Maak een programma dat een for-
loop gebruikt om door een array van
random() gekozen kleuren te itereren en ze op
het canvas in een rij te tonen.

Hint:

· Vul de array van kleuren in de
setup() functie, anders gebeurd het ied
er frame.

· Met color() heb je maar
één array nodig. Je kan ook 3
arrays maken (1 voor Rood,
1 voor Groen en 1 voor Blauw waardes.

9: Random getallen en hun gemiddelde

. Vul een array met 12 random() getallen tussen de
0 en de 100. Gebruik hiervoor een for loop.
. Rond je getallen af met de round() functie.
· Laat de getallen onder elkaar zien op de canvas.
. Voeg een nieuwe regel er aan toe waarin je
het totaal van alle getallen laat zien.
. Voeg nog een regel toe waarmee je
het gemiddelde aantoont.

Afronden: Licht je code toe en breidt uit!

. Voeg commentaar toe aan je code om het
leesbaar te houden en anderen te helpen
begrijpen wat elke sectie doet.
· Gebruik enkele regel commentaar (//) of
// meerdere regels commentaar (/* ... */
// ========================================== //*/