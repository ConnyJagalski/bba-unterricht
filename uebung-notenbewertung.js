const rl = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExNoteZahl = /^[1-6]$/;

function notenbewertung() {
    rl.question("Gib deine Note ein: ", (antwort) => {
        if (!regExNoteZahl.test(antwort)) {
            console.log("Ungültige Eingabe! Gib eine Zahl zwischen 1 und 6 ein.");
            notenbewertung();
        } else {
            const note = parseInt(antwort);
            switch (note) {
                case 1:
                    console.log("Sehr gut");
                    break;
                case 2:
                    console.log("Gut");
                    break;
                case 3:
                    console.log("Befriedigend");
                    break;
                case 4:
                    console.log("Ausreichend");
                    break;
                case 5:
                    console.log("Mangelhaft");
                    break;
                case 6:
                    console.log("Ungenügend");
                    break;
            }

            rl.close();
        }
    });
};

notenbewertung();