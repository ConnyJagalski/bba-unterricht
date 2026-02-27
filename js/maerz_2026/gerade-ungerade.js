export function aufgabe (val) {
    const num = Number(val);

    if (!Number.isInteger(num)) {
        return "Eingabe ungültig! Ganzzahl eingeben!";
    } else {
        return num % 2 === 0 ? "gerade" : "ungerade";
    }
}