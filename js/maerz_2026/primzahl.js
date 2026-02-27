export function aufgabe(val) {
    const num = Number(val);

    if(!Number.isInteger(num)) {
        return "Bitte Ganzzahl eingeben!"
    } else if(num < 2) {
        return `${num} ist keine Primzahl.`
    } else {
        for (let i = 2; i<= Math.sqrt(num); i++) {
            if(num % i === 0) {
                return `${num} ist keine Primzahl, da sie durch ${i} teilbar ist.`
            }
        }
    }

    return `${num} ist eine Primzahl!`
}