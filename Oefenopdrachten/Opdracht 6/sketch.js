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
}








/*// ========================================== //
o 6. (x: 120, y:100)
o 7. (x: 120, y:190)
o 8. (x: 120, y:280)
o 9. (x: 240, y: 15)

6: Letters tellen

. Maak een variabele voor het woord "Overheidsfina
ncieringstekort."

. Tel met behulp van een for loop op hoe vaak de
letter e voorkomt in
het bovenstaande woord en laat dat zien in de
canvas.

Hint:

Je kan over een stuk tekst itereren, tekst heef
took een .length !

7: Alfabetische volgorde

. Maak een nieuwe
array aan met daarin 5 stukken teksten: "red",
"green", "blue", "purple" en "yellow"
. Sorteer met .sort()
de bovenstaande array op alfabetische volgorde e
n laat het resultaat zien op de canvas.
// ========================================== //*/