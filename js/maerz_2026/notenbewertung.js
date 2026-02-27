export function aufgabe (val) {
    const num = Number(val.replace(",", "."));

    if (isNaN(num)) {
        return "Ungültige Eingabe! Bitte Zahl eingeben!"
    } else if (Math.round(num * 100) / 100 != num) {
        return "Maximal zwei Nachkommastellen erlaubt!"
    } else if (num > 100 || num < 0) {
        return "Zahl außerhalb des gültigen Bereichs!"
    } else {
        switch (true) {
            case (num > 89) : return "Sehr gut";
            break;
            case (num > 74) : return "Gut";
            break;
            case (num > 59) : return "Befriedigend";
            break;
            case (num > 49) : return "Ausreichend";
            break;
            case (num < 50) : return "Nicht bestanden";
            break;
        }
    }
}