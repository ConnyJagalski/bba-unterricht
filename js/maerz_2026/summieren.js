let sum = 0;

export function aufgabe(val) {
    const num = Number(val.replace("," , "."));

    if(isNaN(num)) {
        return "Bitte gültige Zahl eingeben!"
    } else if(num === 0) {
        return `Das Endergebnis ist ${sum}`;
    }

    sum = sum + num;
    return sum;
}