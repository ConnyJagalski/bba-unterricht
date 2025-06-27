const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExZahl = /^-?[0-9]+$/;

function positivNullNegativ() {
    rl.question("Gib eine Zahl ein: ", (antwort) => {
        if (!regExZahl.test(antwort)) {
            console.log("Gib ausschließlich Ganzzahlen ein!");
            positivNullNegativ();
        } else {
            const zahl = parseInt(antwort);


            if (zahl == 0) {
                console.log(`Die Zahl ${zahl} ist Null!`);
            } else if (zahl < 0) {
                console.log(`Die Zahl ${zahl} ist negativ!`);
            } else {
                console.log(`Die Zahl ${zahl} ist positiv!`);
            }

            rl.close();
        }
    });
};

positivNullNegativ();