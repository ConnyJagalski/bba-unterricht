const randomNumber = Math.floor(Math.random() * 100) + 1;
let tries = 0;

export function aufgabe(val) {
    const tipp = parseInt(val);

    tries++;

    if (isNaN(tipp)) {
        output.innerText = "Bitte gib eine ganze Zahl ein.";
        return;
    }

    if (tipp < randomNumber) {
        output.innerText = `${tipp} ist zu klein. Versuch es noch einmal.`;
    } else if (tipp > randomNumber) {
        output.innerText = `${tipp} ist zu groß. Versuch es noch einmal.`;
    } else {
        output.innerText = `Glückwunsch! Erraten in ${tries} Versuchen!`
    }
};