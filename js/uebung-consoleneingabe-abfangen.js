const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

class ConsoleInput {
    druckeTitel() {
        rl.question("Gib deinen Buchtitel ein: " , (eingabe) => {
            const titelInGroßbuchstaben = eingabe.toUpperCase();
            console.log(`--- \n ${titelInGroßbuchstaben} \n ---`);
            rl.close();
        });
    };

    berechneQuadrat() {
        rl.question("Gib eine Zahl ein: " , (eingabe) => {
            const numberRegex = /^[+-]?\d+$/;
            if (!numberRegex.test(eingabe)) {
                console.log("Ungültige Zeichen! Bitte gib ausschließlich Ganzzahlen ein!");
                this.berechneQuadrat();
            } else {
                const zahl = parseInt(eingabe);
                const quadrat = zahl * zahl;
                console.log(`Das Quadrat von ${zahl} ist ${quadrat} !`)
                rl.close();
            }
        })
    };

    zeigeErgebnis() {
        rl.question("Gib einen Satz ein: " , (ersteEingabe) => {
            const letterRegex = /^[^\d]+$/;

            if (!letterRegex.test(ersteEingabe)) {
                console.log("Bitte gib ausschließlich Buchstaben und Satzzeichen ein!");
                this.zeigeErgebnis();
            } else {
                function zweiteAbfrage() {
                    rl.question("Gib eine Zahl ein: " , (zweiteEingabe) => {
                        const numberRegex = /^[+-]?\d+(\.\d+)?$/;

                        if (!numberRegex.test(zweiteEingabe)) {
                            console.log("Bitte gib ausschließlich Zahlen ein!");
                            zweiteAbfrage();
                        } else {
                            console.log(ersteEingabe + zweiteEingabe);
                            rl.close();
                        }
                    })
                };

                zweiteAbfrage();
            }

            
        })
    }
}

const konsolenEingabe = new ConsoleInput();
// konsolenEingabe.druckeTitel();
// konsolenEingabe.berechneQuadrat();
konsolenEingabe.zeigeErgebnis();