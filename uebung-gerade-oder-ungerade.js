const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const numberRegex = /^[+-]?\d+$/;

function oddEven() {
    rl.question("Gib eine Zahl ein: " , (eingabe) => {
        if (!numberRegex.test(eingabe)) {
            console.log("Ungültige Zeichen! Bitte gib ausschließlich Ganzzahlen ein!");
            oddEven();
        } else {
            rl.close();
            const zahl = parseInt(eingabe);
            if (zahl % 2 === 0) {
                console.log("Die Zahl ist gerade.");
            } else {
                console.log("Die Zahl ist ungerade.");
            }
        }
    })
}

oddEven();