const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExZahl = /^[0-9]+$/;

function istZahl(eingabe) {
    if (!regExZahl.test(eingabe)) {
        console.log("Ungültige Eingabe! Bitte gib ausschließlich Ganzzahlen ein!");
        return false;
    } else {
        return true;
    }
};

function maxVonDrei() {
    rl.question("Gib die erste Zahl ein: ", (ersteEingabe) => {
        if (!istZahl(ersteEingabe)) {
            maxVonDrei();
        } else {
            const zahl1 = parseInt(ersteEingabe);

            function zweiteZahl() {
                rl.question("Gib die zweite Zahl ein: ", (zweiteEingabe) => {
                    if (!istZahl(zweiteEingabe)) {
                        zweiteZahl();
                    } else {
                        const zahl2 = parseInt(zweiteEingabe);

                        function dritteZahl() {
                            rl.question("Gib die dritte Zahl ein: ", (dritteEingabe) => {
                                if (!istZahl(dritteEingabe)) {
                                    dritteZahl();
                                } else {
                                    const zahl3 = parseInt(dritteEingabe);

                                    console.log(`Die größte Zahl ist ${Math.max(zahl1, zahl2, zahl3)}!`);
                                    rl.close();
                                }
                            })
                        }

                        dritteZahl();
                    }
                })
            }

            zweiteZahl();
        }
    })
};

maxVonDrei();