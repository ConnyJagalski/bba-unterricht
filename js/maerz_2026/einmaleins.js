export function aufgabe (val) {
    const num = Number(val.replace("," , "."));

    if (isNaN(num) || (((Math.floor(num) * 100) / 100) != num)) {
        return "Eingabe ungültig! Nur Ganzzahlen erlaubt!"
    } else {
        let ergebnisArr = [];

        for (let i = 1; i < 11; i++) {
            const ergebnis = `${num} x ${i} = ${num*i}`
            ergebnisArr.push(ergebnis);
        }

        return ergebnisArr.join('\n');
    }
}