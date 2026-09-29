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
    let sum1 = [];
    let sum2 = [];

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
        text(colors[i], 35, 20 * i + 15);
    };
    pop();


    



}








/*// ========================================== //
o 2. (x:20, y:100)
o 3. (x: 20, y:190)
o 4. (x: 20, y:250)
o 5. (x: 120, y:15)
o 6. (x: 120, y:100)
o 7. (x: 120, y:190)
o 8. (x: 120, y:280)
o 9. (x: 240, y: 15)

2: Pas de array aan met pop

. Gebruik de .shift() en .push() functies op de array om
de eerste kleur weg te halen en aan het einde weer toe te voegen.
. Schrijf een for loop die ieder woord uit de array op een losse regel op de
canvas tekent, met de bijpassende kleur.

3: Twee kleuren weghalen

. Gebruik de .splice() functie om
"blue" en "purple" weg te halen (2e en 3e kleur).
. Schrijf een for loop die ieder woord uit de array op een losse regel op de
canvas tekent, met de bijpassende kleur.

4: Getallen filteren

. Maak een array met deze getallen er in: 400, 240, 10, 490, 30, 60, 244, 500, 301,
300

· Maak een for loop die de getallen onder elkaar laat zien als ze kleiner dan
300 zijn.
· Zorg dat er geen "lege" regels ontstaan.

Hint:
Gebruik niet de teller van de for loop, maar een eigen variabele.
// ========================================== //*/