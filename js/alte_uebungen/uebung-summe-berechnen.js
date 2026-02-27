const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addition() {
    rl.question("Gib die erste Zahl ein: " , (ersteZahl) => {
        rl.question("Gib die zweite Zahl ein: " , (zweiteZahl) => {
            const zahl1 = parseInt(ersteZahl, 10);
            const zahl2 = parseInt(zweiteZahl, 10);

            if (isNaN(zahl1) || isNaN(zahl2)) {
                console.log("Ungültige Zeichen! Bitte geben Sie Ganzzahlen ein!");
                addition();
            } else {
                const summe = zahl1 + zahl2;
                console.log("Die Summe aus " + zahl1 + " und " + zahl2 + " ist " + summe + "!");
                rl.close();
            }
        })
    })
}

addition();