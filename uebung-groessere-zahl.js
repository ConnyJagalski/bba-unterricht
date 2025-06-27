const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numberRegex = /^[+-]?\d+(\.\d+)?$/;

function biggestDouble() {
    rl.question("Gib die erste Zahl ein: " , (ersteAntwort) => {
        rl.question("Gib die zweite Zahl ein: " , (zweiteAntwort) => {
            const ersteEingabe = ersteAntwort.replace("," , ".");
            const zweiteEingabe = zweiteAntwort.replace("," , ".");

            if (!numberRegex.test(ersteEingabe) || !numberRegex.test(zweiteEingabe)) {
                console.log("Ungültige Zeichen! Bitte gib ausschließlich Zahlen ein!");
                biggestDouble();
            } else {
                rl.close();
                const zahl1 = parseFloat(ersteEingabe);
                const zahl2 = parseFloat(zweiteEingabe);

                if (zahl1 > zahl2) {
                    console.log(`${zahl1} ist größer als ${zahl2}`);
                } else if (zahl1 < zahl2) {
                    console.log(`${zahl2} ist größer als ${zahl1}`);
                } else {
                    console.log(`${zahl1} ist gleich groß wie ${zahl2}`)
                }
            }
        })
    })
}

biggestDouble();