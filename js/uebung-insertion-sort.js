const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const sortedArray = [5, 8, 9, 10]; 

function startSort() {
    rl.question("Bitte gib eine Zahl ein: ", (eingabe) => {
        const zahl = parseInt(eingabe);

        if (isNaN(zahl)) {
            console.log("Ungültige Eingabe. Bitte eine ganze Zahl eingeben.");
            return startSort();
        }

        let isInserted = false;

        for (let i = 0; i < sortedArray.length; i++) {

            if (zahl === sortedArray[i]) {
                console.log("Die Zahl ist bereits vorhanden. Bitte gib eine andere Zahl ein!");
                return startSort(); 
            }

            if (zahl < sortedArray[i] && !isInserted) {
                sortedArray.splice(i, 0, zahl); 
                isInserted = true;
            }
        }
        if (!isInserted) {
            sortedArray.push(zahl);
        }

        console.log("Array nach Einfügen:", sortedArray);
        rl.close();
    });
}

startSort();