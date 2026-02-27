const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const regExWochentagZahl = /^[1-7]$/;

function welcherWochentag() {
    rl.question("Gib eine Zahl zwischen 1 und 7 ein: ", (antwort) => {
        if (!regExWochentagZahl.test(antwort)) {
            console.log("Ungültige Eingabe. Bitte gib eine Zahl zwischen 1 und 7 ein.");
            welcherWochentag();
        } else {
            const zahl = parseInt(antwort);
            switch (zahl) {
                case 1:
                    console.log("Montag");
                    break
                case 2:
                    console.log("Dienstag");
                    break
                case 3:
                    console.log("Mittwoch");
                    break
                case 4:
                    console.log("Donnerstag");
                    break
                case 5:
                    console.log("Freitag");
                    break
                case 6:
                    console.log("Samstag");
                    break
                case 7:
                    console.log("Sonntag");
            }
            rl.close();
        }
    });
};

welcherWochentag();