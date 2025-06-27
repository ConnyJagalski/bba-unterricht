const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExZahl = /^[0-9]+$/;

function istSchaltjahr() {
    rl.question("Bitte gib das Jahr ein: ", (antwort) => {
        if (!regExZahl.test(antwort)) {
            console.log("Bitte gib ausschließlich Ganzzahlen ein!");
            istSchaltjahr();
        } else {
            const jahr = parseInt(antwort);
            if (jahr % 4 === 0 && jahr % 100 !== 0 || jahr % 400 === 0) {
                console.log("Das Jahr ist ein Schaltjahr!");
            } else {
                console.log("Das Jahr ist kein Schaltjahr!");
            }

            rl.close();
        }
    })
};

istSchaltjahr();