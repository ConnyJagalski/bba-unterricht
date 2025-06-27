const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExZahl = /^[0-9]+(?:[,.][0-9]{1,2})?$/;

function berechneRabatt() {
    rl.question("Gib den Betrag ein: ", (antwortBetrag) => {
        if (!regExZahl.test(antwortBetrag)) {
            console.log("Ungültiger Eingabe! Gib eine Zahl mit maximal 2 Nachkommastellen ein!");
            berechneRabatt();
        } else {
            const betrag = parseFloat(antwortBetrag.replace(',', '.'));

            function erfrageRabatt() {
                rl.question("Gib den Rabatt ein: ", (antwortRabatt) => {
                    if (!regExZahl.test(antwortRabatt)) {
                        console.log("Ungültiger Eingabe! Gib eine Zahl mit maximal 2 Nachkommastellen ein!");
                        erfrageRabatt();
                    } else {
                        const rabatt = parseFloat(antwortRabatt.replace(',', '.'));

                        const neueSumme = Math.round((betrag - (betrag * (rabatt / 100)))* 100) / 100;
                        console.log(`${betrag}€ mit ${rabatt}% Rabatt ergibt ${neueSumme}€ !`)

                        rl.close();
                    }
    
                })
            };
            erfrageRabatt();
        }
    });

};

berechneRabatt();