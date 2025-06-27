const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExZahl = /^[0-9]+$/;


function pruefeAlter() {
    rl.question('Bitte Alter eingeben: ', (antwort) => {
        if (!regExZahl.test(antwort)) {
            console.log("Bitte gib ausschließlich Ganzzahlen ein!")
            pruefeAlter();
        } else {
            const alter = parseInt(antwort);
            if (alter > 19) {
                console.log("Erwachsen")
            } else if (alter > 12) {
                console.log("Jugendlich")
            } else {
                console.log("Kind")
            };

            rl.close();
        }
    })
};

pruefeAlter();