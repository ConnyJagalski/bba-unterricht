export function aufgabe(val) {
    const eingabe = val.split(" ").join("");
    let summe = 0;
    
    for (let i = 0; i < eingabe.length; i++) {
        summe = summe + eingabe.charCodeAt(i);
    }
    
    const hash = summe % 999;
    return hash;
}