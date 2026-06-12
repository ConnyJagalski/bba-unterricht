export function aufgabe (val) {
    let ausgabe = "";

    while (ausgabe.length < val) {
    let char = Math.random().toString(36).substring(2, 3);
    Math.random() > 0.5 ? char = char.toUpperCase() : char;
    ausgabe += char;
    }
    
    return ausgabe;
}